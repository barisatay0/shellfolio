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
    "table.latency": "latency",
    "table.status": "status",
    "mobile.techStack": "Tech Stack",
    "mobile.latency": "Latency:",

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
    "table.latency": "gecikme_suresi",
    "table.status": "durum",
    "mobile.techStack": "Teknolojiler",
    "mobile.latency": "Gecikme:",

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
  },
} as const;
