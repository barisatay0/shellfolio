<p align="center">
  <img src="public/logo.png" alt="Shellfolio Logo" width="200" />
</p>

<h1 align="center">Shellfolio</h1>

<p align="center">
  <strong>A high-performance, terminal-styled portfolio website built with Astro, TypeScript, and Tailwind CSS. Designed for developers who live in the command line.</strong>
</p>

### Lighthouse Scores
| Performance | Accessibility | Best Practices | SEO |
| :---: | :---: | :---: | :---: |
| 🟢 100 | 🟢 100 | 🟢 100 | 🟢 100 |

## Features

* **Ultra Fast:** Built with Astro for zero-runtime JavaScript by default.
* **Built-in i18n:** Native multi-language support (English & Turkish out of the box).
* **Terminal UI:** Authentic shell experience powered by Vanilla JS Web Components (`<sys-terminal>`). Fully navigable command history using arrow keys.
* **Type-Safe:** Entirely written in TypeScript with a strict configuration layer.
* **SEO Optimized:** Fully compliant with search engine standards and meta tags.
* **Lightweight:** Minimal bundle size ensuring instant load times on any device.
* **CI/CD Ready:** Optimized for seamless deployment with local build support.

---

## Quick Start

Follow these steps to get your terminal portfolio running locally.

### 1. Clone the repository
Clone the project from GitHub and navigate into the directory:

```bash
git clone [https://github.com/barisatay0/shellfolio.git](https://github.com/barisatay0/shellfolio.git)
cd shellfolio
```

````md
## 2. Install Dependencies

Install the necessary packages using your preferred package manager (Bun is recommended for speed):

```bash
bun install
# or
npm install
````

---

## 3. Configure Your Portfolio

Shellfolio separates configuration and content into specific, strictly-typed files. Thanks to the i18n architecture, you can define your content in multiple languages.

Update the following files with your personal information:

* `src/config/site.ts`: Update your developer profile, alias, system info, bio, and social links.
* `src/content/projects.ts`: Add your skills and projects. Projects include advanced metadata like status, version, year, and license.

### Example of Localized Content

```ts
description: {
  en: "A production-ready backend foundation...",
  tr: "Üretime hazır backend altyapısı..."
}
```

---

## 4. Start the Development Server

Fire up the local server to see your terminal come to life:

```bash
bun run dev
# or
npm run dev
```

The application will be live at:
[http://localhost:4321](http://localhost:4321)

---

## Available Terminal Commands

Once running, you can interact with the terminal component using the following commands:

* `help` — Display available commands
* `whoami` — Display current user profile & bio
* `neofetch / fastfetch` — Display stylized system information
* `ls` — List mock directory contents
* `cat <file>` — Concatenate and print files (try `cat resume.md`)
* `ping <host>` — Send ICMP ECHO_REQUEST to network hosts
* `clear` — Clear terminal output
* `sudo` — Execute a command as superuser (try it!)

### SQL Queries

Try typing:

```sql
SELECT * FROM public.projects;
```

---

## License

This project is open-source and available under the MIT License.
