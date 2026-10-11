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
- **Degree Period:** 2025–2029 (Currently Pursuing)
- **GitHub:** [https://github.com/saburikatkar](https://github.com/saburikatkar)
- **LinkedIn:** [https://www.linkedin.com/in/saburi-katkar-b83b32384](https://www.linkedin.com/in/saburi-katkar-b83b32384)
- **Email:** `saburikatkar031@gmail.com`

---

## 🚀 Featured Projects & Experience

### 1. Sonnet — SIH26057 *(Smart India Hackathon 2026)*
- **Title:** AI-Powered Automated Underwater Marine Debris and Anomaly Detection
- **Team:** Team Sonnet
- **Project Description:** An AI-powered system designed to identify underwater marine debris and anomalies using Side-Scan Sonar (SSS) imagery for the Smart India Hackathon 2026.
- **Technologies Used:** Python, YOLOv11, Computer Vision, Side-Scan Sonar Imagery
- **My Contribution — UI Developer (U1):**
  - Developing the application's user interface and layout for the Sonnet project.
  - Organizing the interface into modular sections to support future sonar imagery visualization and detection-result presentation.
  - Designing a clear, user-friendly workflow for interacting with the system.
  - Collaborating with Team Synora to align the UI with the Python and YOLOv11-based detection pipeline.
  - Preparing the interface for future integration with the project's AI detection and backend components.
- **Repository:** [https://github.com/saburikatkar/Sonnet](https://github.com/saburikatkar/Sonnet)

### 2. Virtual Gurukul
- **Title:** Virtual Gurukul
- **Description:** An educational platform presenting traditional Indian learning topics such as Vedic mathematics, yoga, astronomy, and Sanskrit through an interactive digital learning experience.
- **Technologies:** JavaScript, HTML5, CSS3, Web Audio API
- **Repository:** [https://github.com/saburikatkar/Virtual-Gurukul](https://github.com/saburikatkar/Virtual-Gurukul)

### 3. ZPPS Robotics Teaching Internship *(Experience)*
- **Role:** Robotics Teaching Intern
- **Organization:** ZPPS (Maharashtra, India)
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
│   │   ├── EducationAndAchievements.jsx # Education (2025–2029) & verified achievements
│   │   ├── Experience.jsx       # ZPPS Robotics Teaching Internship card
│   │   ├── Footer.jsx           # Clean footer with GitHub & LinkedIn links
│   │   ├── Hero.jsx             # Hero section with intro & action CTAs
│   │   ├── Icons.jsx            # Lightweight, crisp SVG icons
│   │   ├── Navbar.jsx           # Responsive navigation with single clean CTA
│   │   ├── Projects.jsx         # Sonnet & Virtual Gurukul project showcases
│   │   └── Skills.jsx           # Categorized technical competencies
│   ├── data/
│   │   └── portfolioData.js     # Centralized, clean portfolio data file
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
Open the repository folder in VS Code:
```bash
code "C:\Users\HP\MY PORTFOLIO"
```

### 2. Install Dependencies
Open the VS Code Terminal (`Ctrl + ~`) and run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the portfolio with instant Hot Module Replacement (HMR).

### 4. Build for Production
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 🌐 GitHub Pages Deployment

This project is configured for automated GitHub Pages deployment using **GitHub Actions**.

- **Workflow:** `.github/workflows/deploy.yml` runs on every push to `main`.
- **Live Website URL:** [https://saburikatkar.github.io/My-portfolio/](https://saburikatkar.github.io/My-portfolio/)

---

## 📜 License
Personal portfolio of Saburi Katkar. Built with React and Vite.
