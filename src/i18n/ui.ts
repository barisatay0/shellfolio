export const languages = {
    en: "English",
    tr: "Türkçe",
};

export const defaultLang = "en";

export const ui = {
    en: {
        "page.projects.title": "Projects DB",
        "page.projects.query": "SELECT * FROM public.projects;",
        "page.projects.subtitle": "Connected to primary database instance.",
        "page.projects.rows": "Query returned {count} rows",
        "page.experience.title": "Experience Log",
        "page.experience.query": "cat /var/log/career_history.log",
        "page.experience.subtitle": "Reading professional timeline...",
        "page.experience.entries": "Found {count} entries",

        "table.id": "id",
        "table.details": "project_details",
        "table.stack": "tech_stack",
        "table.status": "status",
        "table.visibility": "visibility",
        "table.year": "year",
        "mobile.techStack": "Tech Stack",

        "nav.dashboard": "~/dashboard",
        "nav.projects": "~/projects",
        "nav.terminal": "~/bin/bash",
        "nav.kernelAccess": "Kernel Access",
        "nav.experience": "~/experience",

        "layout.user": "USER: root",
        "layout.sys": "SYS: {system}",
        "layout.status": "STATUS:",
        "layout.online": "ONLINE",

        "dashboard.title": "Dashboard",
        "dashboard.developer": "const developer = ",
        "dashboard.capabilities": "system_capabilities.json",
        "dashboard.resume": "Download Resume",
        "dashboard.contact": "Get in Touch",

        "terminal.title": "Terminal",
        "terminal.welcome": "AmogOS v1.5.0 (tty1)",
        "terminal.hint": "Type 'help' for a list of available commands.",
        "terminal.sr_only": "Terminal Command",

        "term.querying": "Executing query on primary database node...",
        "term.rowsAffected": "({count} rows affected)",
        "term.help":
            "\nAvailable commands:\n  whoami      - Display current user profile\n  neofetch    - Display system information\n  ls          - List directory contents\n  pwd         - Print name of current/working directory\n  cd          - Change the shell working directory\n  cat         - Concatenate and print files\n  echo        - Write arguments to the standard output\n  mkdir       - Make directories\n  rm          - Remove files or directories\n  history     - Display the command history list\n  ping        - Send ICMP ECHO_REQUEST to network hosts\n  date        - Display the current time and date\n  coffee      - Initiate brewing sequence\n  clear       - Clear terminal output\n  sudo        - Execute a command as superuser\n\nSupported SQL:\n  SELECT * FROM public.projects;\n",
        "term.cdError": "cd: {dir}: Permission denied",
        "term.pwd": "/home/{user}/projects",
        "term.mkdirError": "mkdir: cannot create directory '{dir}': Read-only file system",
        "term.rmError": "rm: cannot remove '{file}': Permission denied",
        "term.date": new Date().toString(), "term.catMissing": "cat: missing file operand",
        "term.catDenied": "cat: {file}: Permission denied. Nice try, FBI.",
        "term.catBinary":
            "Error: Binary file projects.db matches. Use SQL to query.",
        "term.catNoFile": "cat: {file}: No such file or directory",
        "term.ping":
            "PING {target} (56 data bytes)\n64 bytes from {target}: icmp_seq=1 ttl=64 time=0.042 ms\n64 bytes from {target}: icmp_seq=2 ttl=64 time=0.039 ms\n... ping terminated.",
        "term.coffee": "HTTP Error 418: I'm a teapot. Refusing to brew coffee.",
        "term.sudo0": "Nice try. This incident will be reported.",
        "term.sudo1": "User 'guest' is not in the sudoers file.",
        "term.sudo2": "Are you crazy? I'm not running that as root!",
        "term.sudo3":
            "Access Denied. Initiating self-destruct sequence... Just kidding.",
        "term.sudo4":
            "Error: Permission denied (publickey,password,keyboard-interactive).",
        "term.notFound":
            "bash: {cmd}: command not found. Type 'help' to see valid commands.",

    },
    tr: {
        "page.projects.title": "Projeler DB",
        "page.projects.query": "SELECT * FROM public.projects;",
        "page.projects.subtitle": "Birincil veritabanı örneğine bağlanıldı.",
        "page.projects.rows": "Sorgu {count} satır döndürdü",
        "page.experience.title": "Deneyim Kayıtları",
        "page.experience.query": "cat /var/log/kariyer_gecmisi.log",
        "page.experience.subtitle": "Profesyonel zaman çizelgesi okunuyor...",
        "page.experience.entries": "{count} kayıt bulundu",

        "table.id": "id",
        "table.details": "proje_detaylari",
        "table.stack": "teknoloji_yigini",
        "table.status": "durum",
        "table.visibility": "görünürlük",
        "table.year": "yil",
        "mobile.techStack": "Teknolojiler",

        "nav.dashboard": "~/kontrol_paneli",
        "nav.experience": "~/deneyim",
        "nav.projects": "~/projeler",
        "nav.terminal": "~/bin/bash",
        "nav.kernelAccess": "Çekirdek Erişimi",

        "layout.user": "KULLANICI: root",
        "layout.sys": "SİSTEM: {system}",
        "layout.status": "DURUM:",
        "layout.online": "ÇEVRİMİÇİ",

        "dashboard.title": "Kontrol Paneli",
        "dashboard.developer": "const gelistirici = ",
        "dashboard.capabilities": "sistem_yetenekleri.json",
        "dashboard.resume": "Özgeçmişi İndir",
        "dashboard.contact": "İletişime Geç",

        "terminal.title": "Uçbirim",
        "terminal.welcome": "AmogOS v1.5.0 (tty1)",
        "terminal.hint": "Geçerli komutların listesi için 'help' yazın.",
        "terminal.sr_only": "Uçbirim Komutu",

        "term.querying": "Birincil veritabanı düğümünde sorgu çalıştırılıyor...",
        "term.rowsAffected": "({count} satır etkilendi)",
        "term.help":
            "\nGeçerli komutlar:\n  whoami      - Geçerli kullanıcı profilini göster\n  neofetch    - Sistem bilgisini göster\n  ls          - Dizin içeriklerini listele\n  pwd         - Geçerli/çalışma dizininin adını yazdır\n  cd          - Kabuk çalışma dizinini değiştir\n  cat         - Dosyaları birleştir ve yazdır\n  echo        - Argümanları standart çıktıya yazdır\n  mkdir       - Dizinler oluştur\n  rm          - Dosyaları veya dizinleri kaldır\n  history     - Komut geçmişi listesini göster\n  ping        - Ağ sunucularına ICMP ECHO_REQUEST gönder\n  date        - Geçerli saati ve tarihi göster\n  coffee      - Kahve demleme sekansını başlat\n  clear       - Terminal çıktısını temizle\n  sudo        - Komutu superuser olarak çalıştır\n\nDesteklenen SQL:\n  SELECT * FROM public.projects;\n",
        "term.cdError": "cd: {dir}: Erişim reddedildi",
        "term.pwd": "/home/{user}/projeler",
        "term.mkdirError": "mkdir: '{dir}' dizini oluşturulamıyor: Salt okunur dosya sistemi",
        "term.rmError": "rm: '{file}' silinemiyor: Erişim reddedildi",
        "term.date": new Date().toLocaleString("tr-TR"),
        "term.catMissing": "cat: dosya parametresi eksik",
        "term.catDenied": "cat: {file}: Erişim reddedildi. İyi deneme, FBI.",
        "term.catBinary":
            "Hata: İkili dosya projects.db ile eşleşiyor. Sorgulamak için SQL kullanın.",
        "term.catNoFile": "cat: {file}: Böyle bir dosya ya da dizin yok",
        "term.ping":
            "PING {target} (56 data bytes)\n64 bytes from {target}: icmp_seq=1 ttl=64 time=0.042 ms\n64 bytes from {target}: icmp_seq=2 ttl=64 time=0.039 ms\n... ping sonlandırıldı.",
        "term.coffee":
            "HTTP Hatası 418: Ben bir çaydanlığım. Kahve yapmayı reddediyorum.",
        "term.sudo0": "İyi deneme. Bu olay rapor edilecek.",
        "term.sudo1": "'guest' kullanıcısı sudoers dosyasında değil.",
        "term.sudo2": "Çıldırdın mı? Bunu root olarak çalıştırmam!",
        "term.sudo3":
            "Erişim Reddedildi. Kendini imha sekansı başlatılıyor... Şaka şaka.",
        "term.sudo4":
            "Hata: Erişim reddedildi (publickey,password,keyboard-interactive).",
        "term.notFound":
            "bash: {cmd}: komut bulunamadı. Geçerli komutları görmek için 'help' yazın.",
    },
} as const;
