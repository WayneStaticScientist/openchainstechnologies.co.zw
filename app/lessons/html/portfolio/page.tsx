import React from "react";
import CodeReviewPager from "@/components/tutorials/tutorial-slider";
import PageNavigationButtons from "@/components/navigations-button";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { baseUrl } from "@/utils/globals";
export const metadata = {
  title: "Building a Portfolio Website: Showcase Your Skills! 🌟",
  description:
    "Learn how to create a stunning portfolio website to showcase your skills and projects. This tutorial covers HTML structure, CSS styling, and responsive design.",
  keywords: [
    "portfolio website",
    "HTML tutorial",
    "CSS styling",
    "responsive design",
    "web development",
  ],
  openGraph: {
    title: "Building a Portfolio Website: Showcase Your Skills! 🌟",
    description:
      "Learn how to create a stunning portfolio website to showcase your skills and projects.",
    url: `${baseUrl}/lessons/html/portfolio`,
  },
  alternates: {
    canonical: `${baseUrl}/lessons/html/portfolio`,
  },
  metadataBase: new URL(baseUrl),
};
// Code Example: Full Portfolio Website Structure
const section1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        /* CSS Variables for easy theming */
        :root {
            --primary-color: #3498db; /* Blue */
            --secondary-color: #2ecc71; /* Green */
            --background-color: #f4f7f6;
            --text-color: #333;
            --heading-color: #2c3e50;
            --card-bg: #ffffff;
            --border-color: #e0e0e0;
            --link-color: var(--primary-color);
            --link-hover-color: #2980b9;
            --button-bg: var(--primary-color);
            --button-text: white;
            --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.08);
            --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        /* Basic Resets & Typography */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            scroll-behavior: smooth; /* Smooth scrolling for anchor links */
        }

        h1, h2, h3, h4, h5, h6 {
            color: var(--heading-color);
            line-height: 1.2;
            margin-bottom: 0.8em;
        }

        p {
            margin-bottom: 1em;
        }

        a {
            color: var(--link-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: var(--link-hover-color);
            text-decoration: underline;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block; /* Removes extra space below images */
        }

        /* Reusable Components & Utilities */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .section-padding {
            padding: 80px 0; /* Vertical padding for sections */
        }

        .text-center {
            text-align: center;
        }

        .btn {
            display: inline-block;
            background-color: var(--button-bg);
            color: var(--button-text);
            padding: 12px 25px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: var(--link-hover-color);
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
            text-decoration: none;
        }

        .card {
            background-color: var(--card-bg);
            border-radius: 8px;
            box-shadow: var(--shadow-light);
            padding: 25px;
            border: 1px solid var(--border-color);
        }

        /* --- Header / Hero Section --- */
        .hero {
            background-color: var(--primary-color);
            color: white;
            padding: 100px 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 80vh; /* Make hero section tall */
            position: relative;
            overflow: hidden; /* For any background effects */
        }

        .hero::before { /* Subtle overlay or pattern */
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero__avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid rgba(255, 255, 255, 0.5);
            margin-bottom: 25px;
            object-fit: cover;
            animation: fadeIn 1s ease-out;
        }

        .hero h1 {
            font-size: 3.5em;
            margin-bottom: 10px;
            color: white;
            animation: slideInFromLeft 0.8s ease-out;
        }

        .hero h2 {
            font-size: 1.8em;
            font-weight: 400;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.9);
            animation: slideInFromRight 0.8s ease-out;
        }

        .hero p {
            font-size: 1.1em;
            margin-bottom: 40px;
            color: rgba(255, 255, 255, 0.8);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeIn 1.2s ease-out;
        }

        .hero .btn {
            background-color: var(--secondary-color);
            border: 2px solid var(--secondary-color);
            color: white;
            animation: fadeInUp 1s ease-out;
        }

        .hero .btn:hover {
            background-color: #27ae60;
            border-color: #27ae60;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* --- About Section --- */
        .about .container {
            display: flex;
            flex-wrap: wrap; /* Allow wrapping on smaller screens */
            gap: 40px;
            align-items: center;
        }

        .about__image {
            flex: 1;
            min-width: 250px; /* Ensure image isn't too small */
            border-radius: 8px;
            box-shadow: var(--shadow-light);
        }

        .about__content {
            flex: 2;
            min-width: 300px; /* Ensure text isn't too squished */
        }

        .about h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        /* --- Skills Section --- */
        .skills .container {
            padding: 60px 20px;
        }

        .skills h2 {
            font-size: 2.5em;
            margin-bottom: 40px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
        }

        .skill-item {
            background-color: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-light);
            text-align: center;
            border: 1px solid var(--border-color);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
        }

        .skill-item i { /* For FontAwesome icons */
            font-size: 3em;
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        .skill-item h3 {
            font-size: 1.2em;
            margin-bottom: 0;
            color: var(--heading-color);
        }

        /* --- Projects Section --- */
        .projects .container {
            padding: 60px 20px;
        }

        .projects h2 {
            font-size: 2.5em;
            margin-bottom: 40px;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .project-card {
            @extend .card; /* Inherit styles from .card */
            padding: 0; /* Remove padding from card as content has its own */
            overflow: hidden; /* For image border-radius */
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-card__image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid var(--border-color);
        }

        .project-card__content {
            padding: 20px;
            flex-grow: 1; /* Allow content to push buttons down */
            display: flex;
            flex-direction: column;
        }

        .project-card__title {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: var(--heading-color);
        }

        .project-card__description {
            font-size: 0.95em;
            color: #555;
            margin-bottom: 15px;
            flex-grow: 1;
        }

        .project-card__tech {
            font-size: 0.85em;
            color: #777;
            margin-bottom: 20px;
            font-family: 'Roboto Mono', monospace;
        }

        .project-card__actions {
            display: flex;
            gap: 10px;
            margin-top: 15px; /* Space above buttons */
            justify-content: flex-start; /* Align buttons to start */
            flex-wrap: wrap; /* Allow buttons to wrap */
        }

        .project-card__actions .btn {
            font-size: 0.9em;
            padding: 8px 15px;
            box-shadow: none; /* Remove card shadow from buttons */
        }
        .project-card__actions .btn:hover {
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .project-card__actions .btn--secondary {
            background-color: #6c757d;
            border-color: #6c757d;
            color: white;
        }
        .project-card__actions .btn--secondary:hover {
            background-color: #5a6268;
            border-color: #545b62;
        }


        /* --- Contact Section --- */
        .contact {
            background-color: var(--primary-color);
            color: white;
            padding: 80px 0;
            text-align: center;
        }

        .contact h2 {
            font-size: 2.5em;
            margin-bottom: 30px;
            color: white;
        }

        .contact p {
            font-size: 1.1em;
            max-width: 700px;
            margin: 0 auto 40px auto;
            color: rgba(255, 255, 255, 0.9);
        }

        .contact-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-top: 30px;
        }

        .contact-links a {
            color: white;
            font-size: 1.1em;
            font-weight: 600;
            display: flex;
            align-items: center;
            transition: color 0.3s ease, transform 0.2s ease;
        }

        .contact-links a:hover {
            color: var(--secondary-color);
            transform: translateY(-3px);
        }

        .contact-links i { /* FontAwesome icons */
            font-size: 1.8em;
            margin-right: 10px;
        }

        /* --- Footer --- */
        footer {
            background-color: var(--heading-color);
            color: rgba(255, 255, 255, 0.7);
            padding: 30px 20px;
            text-align: center;
            font-size: 0.9em;
        }

        footer p {
            margin: 0;
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 3em;
            }
            .hero h2 {
                font-size: 1.6em;
            }
            .section-padding {
                padding: 60px 0;
            }
        }

        @media (max-width: 768px) {
            .hero {
                padding: 80px 0;
            }
            .hero h1 {
                font-size: 2.5em;
            }
            .hero h2 {
                font-size: 1.4em;
            }
            .hero p {
                font-size: 1em;
            }
            .about .container {
                flex-direction: column; /* Stack image and text */
            }
            .about__image {
                margin-bottom: 20px;
            }
            h2 {
                font-size: 2em !important; /* Ensure headings scale down */
            }
            .skills-grid, .project-grid {
                grid-template-columns: 1fr; /* Single column on small screens */
            }
            .contact-links {
                flex-direction: column;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2em;
            }
            .hero h2 {
                font-size: 1.2em;
            }
            .btn {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
            .project-card__actions {
                flex-direction: column;
            }
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideInFromLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <section id="home" class="hero">
        <div class="hero-content">
            <img src="https://placehold.co/150x150/3498db/ffffff?text=JP" alt="Your Avatar" class="hero__avatar">
            <h1>Hi, I'm [Your Name]</h1>
            <h2>A Passionate [Your Profession, e.g., Web Developer, UI/UX Designer]</h2>
            <p>I build beautiful, responsive, and user-friendly websites and applications. Let's create something amazing together!</p>
            <a href="#projects" class="btn">View My Work</a>
        </div>
    </section>

    <section id="about" class="about section-padding">
        <div class="container">
            <img src="https://placehold.co/400x400/2ecc71/ffffff?text=About+Me+Image" alt="About Me" class="about__image">
            <div class="about__content">
                <h2>About Me</h2>
                <p>
                    Hello! I'm [Your Name], a dedicated [Your Profession] with a strong foundation in HTML, CSS, and JavaScript. My journey into web development began [mention how you started, e.g., during my computer science degree, through online courses, etc.] and since then, I've been captivated by the art of crafting engaging user experiences.
                </p>
                <p>
                    I specialize in building responsive front-end applications, focusing on clean code, performance, and accessibility. I'm always eager to learn new technologies and improve my craft. When I'm not coding, you can find me [mention a hobby, e.g., hiking, reading sci-fi, playing guitar].
                </p>
                <p>
                    Feel free to explore my projects below or connect with me!
                </p>
            </div>
        </div>
    </section>

    <section id="skills" class="skills section-padding text-center">
        <div class="container">
            <h2>My Skills</h2>
            <div class="skills-grid">
                <div class="skill-item card">
                    <i class="fab fa-html5"></i>
                    <h3>HTML5</h3>
                </div>
                <div class="skill-item card">
                    <i class="fab fa-css3-alt"></i>
                    <h3>CSS3</h3>
                </div>
                <div class="skill-item card">
                    <i class="fab fa-js"></i>
                    <h3>JavaScript</h3>
                </div>
                <div class="skill-item card">
                    <i class="fab fa-react"></i>
                    <h3>React</h3>
                </div>
                <div class="skill-item card">
                    <i class="fab fa-node-js"></i>
                    <h3>Node.js</h3>
                </div>
                <div class="skill-item card">
                    <i class="fas fa-database"></i>
                    <h3>Databases</h3>
                </div>
                <div class="skill-item card">
                    <i class="fab fa-git-alt"></i>
                    <h3>Git & GitHub</h3>
                </div>
                <div class="skill-item card">
                    <i class="fas fa-brush"></i>
                    <h3>Responsive Design</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects section-padding text-center">
        <div class="container">
            <h2>Featured Projects</h2>
            <div class="project-grid">
                <div class="project-card card">
                    <img src="https://placehold.co/600x400/3498db/ffffff?text=Project+1" alt="Project 1 Screenshot" class="project-card__image">
                    <div class="project-card__content">
                        <h3 class="project-card__title">E-commerce Store</h3>
                        <p class="project-card__description">
                            A fully functional e-commerce platform built with user authentication, product listings, and a shopping cart.
                        </p>
                        <p class="project-card__tech">Technologies: React, Node.js, Express, MongoDB, Redux</p>
                        <div class="project-card__actions">
                            <a href="#" class="btn" target="_blank">Live Demo</a>
                            <a href="#" class="btn btn--secondary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div class="project-card card">
                    <img src="https://placehold.co/600x400/2ecc71/ffffff?text=Project+2" alt="Project 2 Screenshot" class="project-card__image">
                    <div class="project-card__content">
                        <h3 class="project-card__title">Task Management App</h3>
                        <p class="project-card__description">
                            A responsive task management application to help users organize their daily tasks with drag-and-drop functionality.
                        </p>
                        <p class="project-card__tech">Technologies: Vue.js, Firebase, CSS Grid</p>
                        <div class="project-card__actions">
                            <a href="#" class="btn" target="_blank">Live Demo</a>
                            <a href="#" class="btn btn--secondary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                <div class="project-card card">
                    <img src="https://placehold.co/600x400/e74c3c/ffffff?text=Project+3" alt="Project 3 Screenshot" class="project-card__image">
                    <div class="project-card__content">
                        <h3 class="project-card__title">Personal Blog</h3>
                        <p class="project-card__description">
                            A minimalist personal blog platform featuring markdown support and comment sections.
                        </p>
                        <p class="project-card__tech">Technologies: Next.js, Markdown, Tailwind CSS</p>
                        <div class="project-card__actions">
                            <a href="#" class="btn" target="_blank">Live Demo</a>
                            <a href="#" class="btn btn--secondary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact section-padding">
        <div class="container">
            <h2>Get In Touch</h2>
            <p>
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
            <div class="contact-links">
                <a href="mailto:your.email@example.com" target="_blank">
                    <i class="fas fa-envelope"></i> your.email@example.com
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/yourusername" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 [Your Name]. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

export default function BuildingPortfolioWebsiteTutorial() {
  const page = 43; // Placeholder page number for chapter navigation
  return (
    <>
      <div className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="main-box">
          <figure className="image1 mb-3">
            <img
              src="https://placehold.co/1200x600/3498db/ffffff?text=Build+Your+Portfolio"
              alt="Building a Portfolio Website"
              className="img-fluid tw:rounded-lg tw:shadow-lg"
              loading="lazy"
            />
          </figure>
          <div className="inner">
            {/* Header Section */}
            <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight! tw:tracking-tight!">
              Building a Portfolio Website: Showcase Your Skills! 🌟
            </h1>
            <p className="tw:text-lg! tw:text-gray-600! tw:text-center! tw:mb-8! tw:max-w-3xl! tw:mx-auto! tw:px-4!">
              A portfolio website is your personal online resume – the ultimate
              project to demonstrate your HTML, CSS, and web development
              prowess. This tutorial will guide you through creating a
              compelling and responsive portfolio.
            </p>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Why Build a Portfolio Website? */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Why Build a Portfolio Website?
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                It's more than just a project; it's a strategic asset for your
                career:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Demonstrate Skills:
                  </strong>{" "}
                  Prove your abilities beyond just listing them on a resume.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Showcase Projects:
                  </strong>{" "}
                  Provide direct links and visuals of your work.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Tell Your Story:
                  </strong>{" "}
                  Let your personality and passion shine through.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Networking Tool:
                  </strong>{" "}
                  An easy way for recruiters and collaborators to find and
                  contact you.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Learning Opportunity:
                  </strong>{" "}
                  A hands-on project that ties many concepts together.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Key Sections */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Essential Portfolio Sections
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4!">
                A well-structured portfolio guides visitors through your
                professional journey:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Hero Section:
                  </strong>{" "}
                  Your introduction, name, title, and a strong call-to-action.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    About Me:
                  </strong>{" "}
                  Your background, passions, and unique professional story.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Skills:
                  </strong>{" "}
                  A clear display of your technical proficiencies.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Projects:
                  </strong>{" "}
                  The core of your portfolio, showcasing your best work with
                  descriptions and links.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Contact:
                  </strong>{" "}
                  How people can reach you (email, social media).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-green-600!">
                    Footer:
                  </strong>{" "}
                  Copyright and any additional quick links.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Design Considerations */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Key Design Considerations
              </h2>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Clean & Modern:
                  </strong>{" "}
                  Simplicity often wins. Focus on readability and ease of
                  navigation.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Responsiveness:
                  </strong>{" "}
                  Absolutely essential. Your site *must* look great on all
                  devices.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Readability:
                  </strong>{" "}
                  Choose appropriate font sizes, line heights, and ensure strong
                  color contrast.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Branding:
                  </strong>{" "}
                  Use colors and typography that reflect your personality or
                  professional style.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Call-to-Actions:
                  </strong>{" "}
                  Guide visitors on what to do next (e.g., "View Project",
                  "Download Resume", "Contact Me").
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-purple-600!">
                    Performance:
                  </strong>{" "}
                  Optimize images and minimize CSS/JS for fast loading times.
                </li>
              </ul>
            </section>

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* HTML & CSS Implementation */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                HTML & CSS Implementation Example
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Below is a comprehensive single-page HTML structure with
                corresponding CSS. This example uses modern HTML5 semantic tags,
                CSS variables for easy customization, Flexbox and Grid for
                layouts, and includes basic responsiveness. Remember to replace
                placeholder text and images with your own content!
              </p>
            </section>

            <CodeReviewPager code={section1} />

            <hr className="tw:my-8! tw:border-gray-300!" />

            {/* Conclusion */}
            <section className="tw:mb-10! tw:p-4!">
              <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-indigo-400! tw:pb-2!">
                Your Turn to Build!
              </h2>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                This template provides a strong starting point. Now, it's time
                to make it your own:
              </p>
              <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2! tw:pl-4!">
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Personalize Content:
                  </strong>{" "}
                  Replace all bracketed text (`[Your Name]`, etc.) with your
                  actual information.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Add Your Images:
                  </strong>{" "}
                  Swap `placehold.co` images with your own professional photos
                  and project screenshots.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Customize Styles:
                  </strong>{" "}
                  Experiment with the CSS variables to change the color scheme.
                  Adjust fonts, spacing, and component styles to match your
                  personal brand.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Add More Projects:
                  </strong>{" "}
                  Duplicate `project-card` elements to showcase all your best
                  work.
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Enhance Interactivity:
                  </strong>{" "}
                  Consider adding smooth scroll effects (already included for
                  anchor links), subtle animations, or a more dynamic contact
                  form (which would require JavaScript and potentially a backend
                  service).
                </li>
                <li className="tw:leading-relaxed!">
                  <strong className="tw:font-semibold! tw:text-blue-600!">
                    Deploy It:
                  </strong>{" "}
                  Once complete, deploy your portfolio to a hosting service like
                  Vercel, Netlify, or GitHub Pages.
                </li>
              </ul>
              <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-4! tw:font-semibold!">
                Building your portfolio is an ongoing project. As you learn new
                skills and complete more projects, continuously update it to
                reflect your growth!
              </p>
              <PageNavigationButtons
                next={{
                  title: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].title
                    : "Next Chapter",
                  path: HtmlChapterFootMap[page + 1]
                    ? HtmlChapterFootMap[page + 1].path
                    : "#",
                }}
                prev={{
                  title: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].title
                    : "Previous Chapter",
                  path: HtmlChapterFootMap[page - 1]
                    ? HtmlChapterFootMap[page - 1].path
                    : "#",
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
