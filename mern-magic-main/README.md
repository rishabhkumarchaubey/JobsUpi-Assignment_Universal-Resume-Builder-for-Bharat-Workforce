# Universal Resume Builder

A lightweight React + Vite app to create clean, professional resumes for the Bharat workforce.

## 🚀 Quick start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

### Local setup
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```
Open http://localhost:8080/ in your browser.

## How can I edit this code?

There are several ways of editing your application.

**Run locally**

Use the steps in **Quick start** above to run the project locally. Changes are committed via the usual Git workflow.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will be reflected in the repository.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🧰 Tech stack
This project uses:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

## 📦 Scripts & build
- `npm run dev` — start the Vite dev server
- `npm run build` — create a production build in `dist/`
- `npm run build:dev` — build in development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

---

## 📦 Deployment
Deploy to any static host such as Vercel, Netlify, or GitHub Pages.
Example (Vercel):
- Import the repository into Vercel
- Set the build command to `npm run build`
- Build output directory: `dist/`

---

## 🧹 Cleanup
If you removed Lovable tooling, run:
```bash
npm uninstall lovable-tagger
npm install
```
Optionally update Browserslist data:
```bash
npx update-browserslist-db@latest
```
If you see dependency issues, remove `node_modules` and `package-lock.json` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## ✍️ Metadata & assets
- Update `index.html` to customize title, description, and OG/Twitter meta tags.
- Add `public/og-image.png` for social previews and point meta tags to `/og-image.png`.

---

## 🤝 Contributing
- Fork the repo, make your changes, and open a Pull Request.
- Use clear commit messages, e.g., `git commit -m "docs: update README"`.

---

## ❓ Troubleshooting
If the dev server fails after dependency changes, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

If you'd like, I can add a `CONTRIBUTING.md` or open a PR for these README changes.
