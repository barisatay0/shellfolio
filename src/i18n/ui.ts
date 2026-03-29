export const languages = {
  en: "English",
  tr: "Türkçe",
};

export const defaultLang = "en";

export const ui = {
  en: {
    // Projects DB
    "page.projects.title": "Projects DB",
    "page.projects.query": "SELECT * FROM public.projects;",
    "page.projects.subtitle": "Connected to primary database instance.",
    "page.projects.rows": "Query returned {count} rows",
    "table.id": "id",
    "table.details": "project_details",
    "table.stack": "tech_stack",
    "table.status": "status",
    "table.version": "version",
    "table.year": "year",
    "mobile.techStack": "Tech Stack",

    // Navbar
    "nav.dashboard": "~/dashboard",
    "nav.projects": "~/projects_db",
    "nav.terminal": "~/bin/bash",
    "nav.kernelAccess": "Kernel Access",

    // Layout
    "layout.user": "USER: root",
    "layout.sys": "SYS: {system}",
    "layout.status": "STATUS:",
    "layout.online": "ONLINE",

    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.developer": "const developer = ",
    "dashboard.capabilities": "system_capabilities.json",

    // Terminal Component
    "terminal.title": "Terminal",
    "terminal.welcome": "AmogOS v1.5.0 (tty1)",
    "terminal.hint": "Type 'help' for a list of available commands.",
    "terminal.sr_only": "Terminal Command",

    // Terminal Commands (JS)
    "term.querying": "Executing query on primary database node...",
    "term.rowsAffected": "({count} rows affected)",
    "term.help":
      "Available commands:  whoami      - Display current user profile neofetch    - Display system information ls          - List directory contents cat         - Concatenate and print files ping        - Send ICMP ECHO_REQUEST to network hosts coffee      - Initiate brewing sequence clear       - Clear terminal output sudo        - Execute a command as superuser Supported SQL: SELECT * FROM public.projects;",
    "term.catMissing": "cat: missing file operand",
    "term.catDenied": "cat: {file}: Permission denied. Nice try, FBI.",
    "term.catBinary":
      "Error: Binary file projects.db matches. Use SQL to query.",
    "term.catNoFile": "cat: {file}: No such file or directory",
    "term.ping":
      "PING {target} (56 data bytes) 64 bytes from {target}: icmp_seq=1 ttl=64 time=0.042 ms 64 bytes from {target}: icmp_seq=2 ttl=64 time=0.039 ms ... ping terminated.",
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
    // Projeler DB
    "page.projects.title": "Projeler DB",
    "page.projects.query": "SELECT * FROM public.projects;",
    "page.projects.subtitle": "Birincil veritabanı örneğine bağlanıldı.",
    "page.projects.rows": "Sorgu {count} satır döndürdü",
    "table.id": "id",
    "table.details": "proje_detaylari",
    "table.stack": "teknoloji_yigini",
    "table.status": "durum",
    "table.version": "versiyon",
    "table.year": "yil",
    "mobile.techStack": "Teknolojiler",

    // Navigasyon (Navbar)
    "nav.dashboard": "~/kontrol_paneli",
    "nav.projects": "~/projeler_db",
    "nav.terminal": "~/bin/bash",
    "nav.kernelAccess": "Çekirdek Erişimi",

    // Düzen (Layout)
    "layout.user": "KULLANICI: root",
    "layout.sys": "SİSTEM: {system}",
    "layout.status": "DURUM:",
    "layout.online": "ÇEVRİMİÇİ",

    // Kontrol Paneli (Dashboard)
    "dashboard.title": "Kontrol Paneli",
    "dashboard.developer": "const gelistirici = ",
    "dashboard.capabilities": "sistem_yetenekleri.json",

    // Terminal Bileşeni
    "terminal.title": "Uçbirim",
    "terminal.welcome": "AmogOS v1.5.0 (tty1)",
    "terminal.hint": "Geçerli komutların listesi için 'help' yazın.",
    "terminal.sr_only": "Uçbirim Komutu",

    // Terminal Komutları (JS)
    "term.querying": "Birincil veritabanı düğümünde sorgu çalıştırılıyor...",
    "term.rowsAffected": "({count} satır etkilendi)",
    "term.help":
      "Geçerli komutlar: whoami      - Geçerli kullanıcı profilini göster neofetch    - Sistem bilgisini göster  ls          - Dizin içeriklerini listele cat         - Dosyaları birleştir ve yazdır ping        - Ağ sunucularına ICMP ECHO_REQUEST gönder coffee      - Kahve demleme sekansını başlat clear       - Terminal çıktısını temizle sudo        - Komutu superuser olarak çalıştır Desteklenen SQL: SELECT * FROM public.projects;",
    "term.catMissing": "cat: dosya parametresi eksik",
    "term.catDenied": "cat: {file}: Erişim reddedildi. İyi deneme, FBI.",
    "term.catBinary":
      "Hata: İkili dosya projects.db ile eşleşiyor. Sorgulamak için SQL kullanın.",
    "term.catNoFile": "cat: {file}: Böyle bir dosya ya da dizin yok",
    "term.ping":
      "PING {target} (56 data bytes) 64 bytes from {target}: icmp_seq=1 ttl=64 time=0.042 ms 64 bytes from {target}: icmp_seq=2 ttl=64 time=0.039 ms... ping sonlandırıldı.",
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
