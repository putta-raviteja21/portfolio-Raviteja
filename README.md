# Putta Raviteja Portfolio

A premium responsive portfolio website built with React + Vite for Putta Raviteja, featuring:

- Responsive hero section with profile image and animated headline
- About, skills, projects, education, and contact sections
- Real WhatsApp and email call-to-action links
- Resume download integration
- Premium dark glassmorphism style with subtle motion

## Project structure

- `src/App.jsx` – page layout and section content
- `src/App.css` – styling, responsiveness, and motion design
- `public/profile.jpg` – imported profile image
- `public/resume.pdf` – download resume asset
- `index.html` – metadata and favicon setup

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm run dev -- --host 0.0.0.0
   ```
3. Open the local URL shown in the terminal, usually:
   ```text
   http://localhost:5173/
   ```

## Production build

```bash
npm run build
```

The optimized static output will be produced in the `dist` folder.

## Deploying online

This portfolio is static and works well on Netlify or Vercel.

### Netlify

1. Push the project to GitHub.
2. In Netlify, choose "Add new site" → "Import an existing project".
3. Select the repository.
4. Build command:
   ```bash
   npm run build
   ```
5. Publish directory:
   ```bash
   dist
   ```

### Vercel

1. Import the GitHub repository.
2. Framework preset: Vite
3. Build command:
   ```bash
   npm run build
   ```
4. Output directory:
   ```bash
   dist
   ```

## Notes

- Update the GitHub link in `src/App.jsx` if needed.
- Replace the profile image and resume by editing the files in `public/`.
- The WhatsApp link is already configured to the correct number and prefilled message.
