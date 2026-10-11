# Saburi Katkar — Developer Portfolio

Modern, minimal, and responsive developer portfolio built with **React** and **Vite**, featuring project highlights, internship experience, and academic background.

[![GitHub Pages Deployment](https://github.com/saburikatkar/My-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/saburikatkar/My-portfolio/actions/workflows/deploy.yml)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://react.dev/)

---

## 👩‍💻 About Saburi

- **Name:** Saburi Katkar
- **Role:** Computer Science Engineering Student
- **College:** Dhole Patil College of Engineering (DPCOE), Pune
- **GitHub:** [https://github.com/saburikatkar](https://github.com/saburikatkar)
- **LinkedIn:** [https://www.linkedin.com/in/saburi-katkar-b83b32384](https://www.linkedin.com/in/saburi-katkar-b83b32384)
- **Email:** `saburikatkar031@gmail.com` *(Editable in `src/data/portfolioData.js`)*

---

## 🚀 Featured Projects & Experience

### 1. Sonnet — SIH26057 *(Ongoing Project)*
- **Title:** AI-Powered Automated Underwater Marine Debris and Anomaly Detection using Side-Scan Sonar Imagery
- **Team:** Team Synora (Smart India Hackathon 2026)
- **Contribution:** Developing the basic Electron + React + Vite application shell, desktop window controls, and interface foundation.
- **Technologies:** Electron, React, Vite, JavaScript
- **Repository:** [https://github.com/saburikatkar/Sonnet](https://github.com/saburikatkar/Sonnet)
- *Note:* Active ongoing project. Focuses on the desktop frontend container; AI inference pipeline and backend integration are in continuous development across specialized sub-teams.

### 2. Virtual Gurukul
- **Title:** Virtual Gurukul
- **Description:** An educational platform presenting traditional Indian learning topics such as Vedic mathematics, yoga, astronomy, and Sanskrit through an interactive digital learning experience.
- **Technologies:** JavaScript, HTML5, CSS3, Web Audio API
- **Repository:** [https://github.com/saburikatkar/Virtual-Gurukul](https://github.com/saburikatkar/Virtual-Gurukul)

### 3. ZPPS Robotics Teaching Internship *(Experience)*
- **Role:** Robotics Teaching Intern
- **Organization:** ZPPS
- **Focus:** Practical STEM instruction, hands-on robotics kit assemblies, clear technical communication, and collaborative classroom mentorship.

---

## 📁 Project Architecture

```
My-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── About.jsx            # About Me section
│   │   ├── Contact.jsx          # Working contact form & copy-to-clipboard email
│   │   ├── EducationAndAchievements.jsx # Education & extracurricular achievements
│   │   ├── Experience.jsx       # ZPPS Robotics Teaching Internship card
│   │   ├── Footer.jsx           # Clean footer with GitHub & LinkedIn links
│   │   ├── Hero.jsx             # Hero section with intro & action CTAs
│   │   ├── Icons.jsx            # Lightweight, crisp SVG icons
│   │   ├── Navbar.jsx           # Sticky, responsive navigation with mobile menu
│   │   ├── Projects.jsx         # Sonnet & Virtual Gurukul project showcases
│   │   └── Skills.jsx           # Categorized technical competencies
│   ├── data/
│   │   └── portfolioData.js     # Centralized, editable portfolio data file
│   ├── App.jsx                  # Root component
│   ├── index.css                # Clean white theme, navy typography & blue accents
│   └── main.jsx                 # React DOM mount point
├── .gitignore
├── index.html                   # HTML template with SEO tags & Google Fonts
├── package.json
├── README.md
└── vite.config.js               # Configured for GitHub Pages deployment
```

---

## ⚙️ How to Run Locally in VS Code

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or newer recommended)
- Git

### 1. Open in VS Code
Open the repository folder in VS Code or run:
```bash
code "C:\Users\HP\MY PORTFOLIO"
```

### 2. Install Dependencies
Open the VS Code Terminal (`Ctrl + ~` or Terminal > New Terminal) and run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open the local URL displayed in the terminal (usually `http://localhost:5173`) in your browser to view the portfolio with instant Hot Module Replacement (HMR).

### 4. Build for Production
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 🌐 How to Deploy to GitHub Pages

This project is fully configured for automated GitHub Pages deployment using **GitHub Actions**.

### Automated Deployment (Recommended):
1. Push your commits to the `main` branch of `https://github.com/saburikatkar/My-portfolio`.
2. On GitHub, navigate to **Settings** > **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push changes.
5. Your live portfolio will be available at:
   ```
   https://saburikatkar.github.io/My-portfolio/
   ```

---

## ✏️ How to Edit Details & Placeholders

All personal information, social links, internship dates, and project descriptions are cleanly organized in **`src/data/portfolioData.js`**:

- **Email Address:** Edit the `email` field in `personalDetails` (e.g. `saburikatkar.work@gmail.com`).
- **LinkedIn Profile:** URL is set to `https://www.linkedin.com/in/saburi-katkar-b83b32384`.
- **Internship Duration:** Update `duration` in `experienceData` (e.g., `June 2024 – July 2024`).
- **Education Dates:** Update `duration` in `educationData` (e.g., `2022 – 2026`).
- **Achievements:** Add or customize entries in `achievementsData`.

---

## 📜 License
Personal portfolio of Saburi Katkar. Built with React and Vite.
