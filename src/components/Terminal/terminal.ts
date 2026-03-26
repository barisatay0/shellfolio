import type { IConfig } from "../../interfaces/IConfig";

export class terminal extends HTMLElement {
  config: IConfig;
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
    this.commandHistory = [];
    this.historyIndex = -1;

    scrollArea.addEventListener("click", () => input.focus());

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

  processCommand(rawCmd: string) {
    const cmd = rawCmd.toLowerCase().trim();

    if (cmd.startsWith("select ") && cmd.includes("from public.projects")) {
      this.printLine("Executing query on primary database node...", "warning");

      setTimeout(() => {
        const pad = (str: string, len: number) =>
          (str || "").toString().padEnd(len, " ");

        let table = `ID     | PROJECT NAME         | STATUS | LATENCY`;
        table += ` -------+----------------------+--------+--------`;

        this.config.projects.forEach((p: any) => {
          table += ` ${pad(p.id, 6)} | ${pad(p.name, 20)} | ${pad(p.status, 6)} | ${p.latency} `;
        });

        table += ` (${this.config.projects.length} rows affected)`;
        this.printLine(table, "system");
      }, 400);
      return;
    }

    const [baseCmd, ...args] = cmd.split(" ");

    switch (baseCmd) {
      case "help":
        this.printLine(`
Available commands:
  whoami      - Display current user profile
  neofetch    - Display system information
  ls          - List directory contents
  cat         - Concatenate and print files
  ping        - Send ICMP ECHO_REQUEST to network hosts
  coffee      - Initiate brewing sequence
  clear       - Clear terminal output
  sudo        - Execute a command as superuser

Supported SQL:
  SELECT * FROM public.projects;
          `);
        break;

      case "whoami":
        this.printLine(
          `${this.config.developer.name} - ${this.config.developer.role} ${this.config.developer.bio}`,
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
        this.printLine(
          "projects.db   resume.md   secrets.txt   .env",
          "system",
        );
        break;

      case "cat":
        const file = args[0];
        if (!file) {
          this.printLine("cat: missing file operand", "error");
        } else if (file === "secrets.txt" || file === ".env") {
          this.printLine(
            `cat: ${file}: Permission denied. Nice try, FBI.`,
            "error",
          );
        } else if (file === "resume.md") {
          this.printLine(
            `# ${this.config.developer.name} ${this.config.developer.role}  Reach me at: ${this.config.socials.email}`,
          );
        } else if (file === "projects.db") {
          this.printLine(
            "Error: Binary file projects.db matches. Use SQL to query.",
            "warning",
          );
        } else {
          this.printLine(`cat: ${file}: No such file or directory`, "error");
        }
        break;

      case "ping":
        const target = args[0] || "127.0.0.1";
        this.printLine(
          `PING ${target} (56 data bytes) 64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.042 ms\n64 bytes from ${target}: icmp_seq=2 ttl=64 time=0.039 ms\n... ping terminated.`,
          "system",
        );
        break;

      case "coffee":
        this.printLine(
          "HTTP Error 418: I'm a teapot. Refusing to brew coffee.",
          "error",
        );
        break;

      case "clear":
        (this.querySelector("#terminal-output") as HTMLDivElement).innerHTML =
          "";
        break;

      case "sudo":
        const excuses = [
          "Nice try. This incident will be reported.",
          "User 'guest' is not in the sudoers file.",
          "Are you crazy? I'm not running that as root!",
          "Access Denied. Initiating self-destruct sequence... Just kidding.",
          "Error: Permission denied (publickey,password,keyboard-interactive).",
        ];
        const randomExcuse =
          excuses[Math.floor(Math.random() * excuses.length)];
        this.printLine(randomExcuse, "error");
        break;

      default:
        this.printLine(
          `bash: ${baseCmd}: command not found. Type 'help' to see valid commands.`,
          "error",
        );
    }
  }
}

if (!customElements.get("sys-terminal")) {
  customElements.define("sys-terminal", terminal);
}
