interface FlatTerminalData {
    developer: {
        name: string;
        alias: string;
        role: string;
        system: string;
        bio: string;
    };
    socials: Record<string, string>;
    projects: any[];
}

export class Terminal extends HTMLElement {
    config: FlatTerminalData;
    i18n: any;
    commandHistory: string[];
    historyIndex: number;

    readonly MAX_HISTORY = 50;
    readonly MAX_LINES = 100;

    constructor() {
        super();
        const form = this.querySelector("#terminal-form") as HTMLFormElement;
        const input = this.querySelector("#terminal-input") as HTMLInputElement;
        const scrollArea = this.querySelector("#terminal-scroll") as HTMLElement;

        this.config = JSON.parse(this.dataset.config || "{}");
        this.i18n = JSON.parse(this.dataset.i18n || "{}");
        this.commandHistory = [];
        this.historyIndex = -1;

        scrollArea.addEventListener("click", () => input.focus());

        input.addEventListener("input", (e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.toLowerCase();
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    input.value =
                        this.commandHistory[
                        this.commandHistory.length - 1 - this.historyIndex
                        ];
                }
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    input.value =
                        this.commandHistory[
                        this.commandHistory.length - 1 - this.historyIndex
                        ];
                } else if (this.historyIndex === 0) {
                    this.historyIndex = -1;
                    input.value = "";
                }
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const rawCmd = input.value;
            const cmd = rawCmd.trim();

            if (!cmd) return;

            this.commandHistory.push(cmd);
            if (this.commandHistory.length > this.MAX_HISTORY) {
                this.commandHistory.shift();
            }
            this.historyIndex = -1;

            this.printLine(`➜ ~ ${cmd}`, "user");

            this.processCommand(cmd);

            input.value = "";

            setTimeout(() => {
                scrollArea.scrollTop = scrollArea.scrollHeight;
            }, 10);
        });
    }

    printLine(
        text: string,
        type: "user" | "system" | "error" | "warning" = "system",
    ) {
        const output = this.querySelector("#terminal-output") as HTMLDivElement;
        const p = document.createElement("p");

        p.className =
            type === "user"
                ? "text-slate-300 font-bold mt-2"
                : type === "error"
                    ? "text-red-400"
                    : type === "warning"
                        ? "text-yellow-400"
                        : "text-green-300 whitespace-pre-wrap";

        p.textContent = text;
        output.appendChild(p);
        while (output.childElementCount > this.MAX_LINES) {
            output.removeChild(output.firstElementChild!);
        }
    }

    processCommand(cmd: string) {
        if (cmd.startsWith("select ") && cmd.includes("from public.projects")) {
            this.printLine(this.i18n.querying, "warning");

            setTimeout(() => {
                const pad = (str: string, len: number) =>
                    (str || "").toString().padEnd(len, " ");

                let table = `${(this.i18n.colId || 'ID').toUpperCase().padEnd(6, " ")} | ${(this.i18n.colName || 'NAME').toUpperCase().padEnd(18, " ")} | ${(this.i18n.colVersion || 'VERSION').toUpperCase().padEnd(8, " ")} | ${(this.i18n.colStatus || 'STATUS').toUpperCase().padEnd(10, " ")} | ${(this.i18n.colYear || 'YEAR').toUpperCase()}`;
                table += `\n-------+--------------------+----------+------------+------\n`;

                this.config.projects.forEach((p: any) => {
                    table += ` ${pad(p.id, 6)} | ${pad(p.name, 18)} | ${pad(p.version || '-', 8)} | ${pad(p.status, 10)} | ${p.year} \n`;
                });

                table += `\n${this.i18n.rowsAffected.replace("{count}", this.config.projects.length.toString())}`;
                this.printLine(table, "system");
            }, 400);
            return;
        }

        const [baseCmd, ...args] = cmd.split(" ");

        switch (baseCmd) {
            case "help":
                this.printLine(this.i18n.help);
                break;

            case "whoami":
                this.printLine(
                    `${this.config.developer.name} - ${this.config.developer.role}\n${this.config.developer.bio}`,
                );
                break;

            case "neofetch":
            case "fastfetch":
                const ascii = `
       .-------.       user: root@${this.config.developer.alias}
      _|~~ ~~  |_      os: AmogOS v1.5.0
    =(_|_______|_)=    kernel: ${this.config.developer.system}
      |:::::::::|      uptime: 42 days, 8 hours
      |:::::::[]|      shell: bash 5.1.16
      |o=======.|      cpu: Quantum Processor x86_64
      \`"""""""""\`      ram: 64GB DDR5
          `;
                this.printLine(ascii);
                break;

            case "ls":
            case "ll":
            case "la":
                const lsArgs = args.join(" ");
                if (lsArgs.includes("-l")) {
                    this.printLine("drwxr-xr-x 2 root root 4096 Jan  1 00:00 .\ndrwxr-xr-x 3 root root 4096 Jan  1 00:00 ..\n-rw-r--r-- 1 root root  245 Jan  1 00:00 .env\n-rwxr-xr-x 1 root root 8492 Jan  1 00:00 projects.db\n-rw------- 1 root root   42 Jan  1 00:00 secrets.txt", "system");
                } else {
                    this.printLine("projects.db    secrets.txt   .env", "system");
                }
                break;

            case "pwd":
                this.printLine((this.i18n.pwd || "/home/{user}/projects").replace("{user}", this.config.developer.alias), "system");
                break;

            case "cd":
                const targetDir = args[0];
                if (!targetDir || targetDir === "~" || targetDir === "/") {
                    this.printLine("", "system");
                } else {
                    this.printLine((this.i18n.cdError || `cd: ${targetDir}: Permission denied`).replace("{dir}", targetDir), "error");
                }
                break;

            case "echo":
                this.printLine(args.join(" "), "system");
                break;

            case "mkdir":
                const newDir = args[0];
                if (!newDir) {
                    this.printLine("mkdir: missing operand", "error");
                } else {
                    this.printLine((this.i18n.mkdirError || `mkdir: cannot create directory '${newDir}': Read-only file system`).replace("{dir}", newDir), "error");
                }
                break;

            case "rm":
                const fileToRemove = args[0];
                if (!fileToRemove) {
                    this.printLine("rm: missing operand", "error");
                } else if (fileToRemove === "-rf" && args[1] === "/") {
                    this.printLine("rm: it is dangerous to operate recursively on '/'\nrm: use --no-preserve-root to override this failsafe", "error");
                } else {
                    this.printLine((this.i18n.rmError || `rm: cannot remove '${fileToRemove}': Permission denied`).replace("{file}", fileToRemove), "error");
                }
                break;

            case "history":
                let historyOutput = "";
                this.commandHistory.forEach((h, i) => {
                    historyOutput += `  ${i + 1}  ${h}\n`;
                });
                this.printLine(historyOutput, "system");
                break;

            case "date":
                this.printLine(new Date().toString(), "system");
                break;

            case "cat":
                const file = args[0];
                if (!file) {
                    this.printLine(this.i18n.catMissing, "error");
                } else if (file === "secrets.txt" || file === ".env") {
                    this.printLine(this.i18n.catDenied.replace("{file}", file), "error");
                } else if (file === "projects.db") {
                    this.printLine(this.i18n.catBinary, "warning");
                } else {
                    this.printLine(this.i18n.catNoFile.replace("{file}", file), "error");
                }
                break;

            case "ping":
                const target = args[0] || "127.0.0.1";
                this.printLine(this.i18n.ping.replace(/\{target\}/g, target), "system");
                break;

            case "coffee":
                this.printLine(this.i18n.coffee, "error");
                break;

            case "clear":
                (this.querySelector("#terminal-output") as HTMLDivElement).innerHTML = "";
                break;

            case "sudo":
                const excuses = this.i18n.sudo;
                const randomExcuse =
                    excuses[Math.floor(Math.random() * excuses.length)];
                this.printLine(randomExcuse, "error");
                break;

            default:
                this.printLine(this.i18n.notFound.replace("{cmd}", baseCmd), "error");
        }
    }
}

if (!customElements.get("sys-terminal")) {
    customElements.define("sys-terminal", Terminal);
}
