import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronUp,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const rotatingHeadlines = [
  'Aspiring Software Developer',
  'Python Developer',
  'Data Science Graduate',
  'RAG & AI Application Developer',
]

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'Object-Oriented Programming (OOP)'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript fundamentals through my E-commerce project'],
  },
  {
    title: 'AI and Document Retrieval',
    items: ['Retrieval-Augmented Generation (RAG)', 'Semantic search', 'Text embeddings', 'PDF processing'],
  },
  {
    title: 'Frameworks and Tools',
    items: ['Streamlit', 'PyMuPDF', 'ChromaDB', 'Ollama', 'Visual Studio Code'],
  },
  {
    title: 'Databases',
    items: ['MySQL'],
  },
]

const educationItems = [
  {
    title: 'B.Tech in Data Science',
    subtitle: 'CBIT (Autonomous), Proddatur, Andhra Pradesh, India',
    period: '2023–2026',
  },
  {
    title: 'Diploma in Mechanical Engineering',
    subtitle: 'Sri Vidyanikethan Engineering College, Tirupati, Andhra Pradesh, India',
    period: '2020–2023',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    subtitle: 'Sri Chaitanya English Medium High School, Vempalli, Andhra Pradesh, India',
    period: '2019–2020',
  },
]

const projectDetails = [
  {
    name: 'Multi-Document Company Knowledge Assistant',
    badge: 'Python | RAG | AI Applications',
    description:
      'Developed a document-based question-answering application that enables users to upload PDF documents and ask questions about their contents. The application processes documents, retrieves relevant information through semantic search, and generates answers grounded in the available document context.',
    features: [
      'Multi-document PDF upload and processing',
      'PDF text extraction using PyMuPDF',
      'Text chunking and embeddings using Sentence Transformers',
      'Semantic retrieval using ChromaDB',
      'Answers supported by document context and PDF/page references',
      'SHA-256-based duplicate document detection',
      'Persistent chat history',
    ],
    stack: ['Python', 'Streamlit', 'PyMuPDF', 'Sentence Transformers', 'ChromaDB', 'Gemini'],
    repo: 'https://github.com/putta-raviteja21/rag',
    previewClass: 'preview-rag',
  },
  {
    name: 'E-commerce Website',
    badge: 'Frontend Development',
    description:
      'Built a responsive E-commerce website using HTML, CSS, and JavaScript, featuring product images, product names, prices, and a clean, beginner-friendly layout.',
    features: [
      'Product cards with images and prices',
      'Responsive layout',
      'Clean navigation and product presentation',
      'User-friendly interface',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: null,
    previewClass: 'preview-store',
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [headlineIndex, setHeadlineIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % rotatingHeadlines.length)
    }, 2200)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { threshold: [0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const { name, email, subject, message } = event.target.elements
    const safeSubject = encodeURIComponent(subject.value || 'Portfolio inquiry')
    const safeBody = encodeURIComponent(
      `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`,
    )
    window.location.href = `mailto:puttaraviteja21@gmail.com?subject=${safeSubject}&body=${safeBody}`
  }

  return (
    <>
      <header className="topbar">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Go to home section">
            <span className="brand-mark">PR</span>
            <span className="brand-name">Putta Raviteja</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
              Let&apos;s Connect
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="availability-badge">
                <Sparkles size={15} /> Open to Entry-Level Opportunities
              </span>

              <h1>
                Hi, I&apos;m Putta Raviteja.
              </h1>

              <div className="rotating-headline" aria-live="polite">
                <motion.span
                  key={rotatingHeadlines[headlineIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  {rotatingHeadlines[headlineIndex]}
                </motion.span>
              </div>

              <p className="intro">
                I&apos;m a passionate developer who enjoys building practical applications,
                solving problems, and exploring intelligent systems. I work with Python,
                web technologies, databases, and AI-powered document retrieval to create
                useful, user-friendly solutions.
              </p>

              <div className="cta-row">
                <a href="#projects" className="primary-btn">
                  Explore My Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
                <a href="/resume.pdf" className="download-btn" download>
                  <Download size={18} /> Download Resume
                </a>
              </div>

              <div className="social-row" aria-label="Social links">
                <a href="https://github.com/putta-raviteja21" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <GitBranch size={18} /> GitHub
                </a>
                <a href="mailto:puttaraviteja21@gmail.com" aria-label="Email Putta Raviteja">
                  <Mail size={18} /> Email
                </a>
                <a href="https://wa.me/916304048207?text=Hello%20Raviteja%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity." target="_blank" rel="noreferrer" aria-label="Contact Raviteja on WhatsApp">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="visual-glow" aria-hidden="true" />
              <div className="orb orb-one" aria-hidden="true" />
              <div className="orb orb-two" aria-hidden="true" />
              <div className="wireframe" aria-hidden="true" />

              <div className="mini-visual-card">
                <div className="mini-surface">
                  <div className="mini-label">Python</div>
                  <div className="mini-label">SQL</div>
                  <div className="mini-label">RAG</div>
                  <div className="mini-label">Web</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">About Me</p>
              <h2>Developer with a data science foundation and a strong interest in AI.</h2>
            </div>

            <div className="about-layout">
              <div className="about-copy">
                <p>
                  My name is Putta Raviteja. I have a background in Data Science and an interest
                  in software development, Python programming, databases, and AI-powered applications.
                  Through personal projects, I have gained practical experience in developing responsive
                  web pages and building a document-based question-answering application. I enjoy
                  learning new technologies, improving my problem-solving skills, and developing
                  applications that solve practical problems.
                </p>
              </div>

              <div className="info-grid">
                <div className="info-card">
                  <span>Background</span>
                  <strong>Data Science</strong>
                </div>
                <div className="info-card">
                  <span>Primary Language</span>
                  <strong>Python</strong>
                </div>
                <div className="info-card">
                  <span>Areas of Interest</span>
                  <strong>Software Development, RAG, and AI Applications</strong>
                </div>
                <div className="info-card">
                  <span>Languages</span>
                  <strong>English and Telugu</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Technical Skills</p>
              <h2>Focused on practical development and AI-driven problem solving.</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  className="skill-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="skill-icon">
                    {group.title.includes('Programming') ? <Code2 size={18} /> : null}
                    {group.title.includes('Web') ? <BriefcaseBusiness size={18} /> : null}
                    {group.title.includes('AI') ? <Sparkles size={18} /> : null}
                    {group.title.includes('Frameworks') ? <Database size={18} /> : null}
                    {group.title.includes('Databases') ? <Database size={18} /> : null}
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Featured Projects</p>
              <h2>Applications built to solve real-user document and product needs.</h2>
            </div>

            <div className="project-grid">
              {projectDetails.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="project-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className={`project-visual ${project.previewClass}`} aria-label={`${project.name} preview`}>
                    {project.previewClass === 'preview-rag' ? (
                      <div className="mock-window">
                        <div className="window-bar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="document-panel">
                          <div className="upload-box">Upload PDFs</div>
                          <div className="answer-box">
                            <p>Question:</p>
                            <strong>Summarize the policy changes</strong>
                            <p>Answer:</p>
                            <span>Based on the uploaded documents, the policy changes emphasize...</span>
                          </div>
                          <div className="source-pill">PDF reference • Page 4</div>
                        </div>
                      </div>
                    ) : (
                      <div className="store-window">
                        <div className="store-header" />
                        <div className="store-grid">
                          <span className="product-card product-card-one" />
                          <span className="product-card product-card-two" />
                          <span className="product-card product-card-three" />
                          <span className="product-card product-card-four" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <span className="project-badge">{project.badge}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <ul className="features-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="tech-stack">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noreferrer">
                          View Project <ExternalLink size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Academic background and learning path.</h2>
            </div>

            <div className="timeline">
              {educationItems.map((item, index) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  {index !== educationItems.length - 1 ? <div className="timeline-line" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>

            <div className="certificate-card">
              <p className="eyebrow">Certification</p>
              <h3>Python Fundamentals — September 2024</h3>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-shell">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Have an Opportunity or Project in Mind?</h2>
              <p className="contact-text">
                I&apos;m interested in entry-level developer opportunities, technical collaborations,
                and projects where I can learn, contribute, and grow. Feel free to reach out.
              </p>

              <div className="contact-list">
                <div>
                  <strong>Name</strong>
                  <span>Putta Raviteja</span>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:puttaraviteja21@gmail.com">puttaraviteja21@gmail.com</a>
                </div>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+916304048207">+91 6304048207</a>
                </div>
                <div>
                  <strong>Location</strong>
                  <span>Hyderabad, India</span>
                </div>
              </div>

              <div className="contact-actions">
                <a href="mailto:puttaraviteja21@gmail.com" className="primary-btn">
                  <Mail size={18} /> Email Me
                </a>
                <a
                  href="https://wa.me/916304048207?text=Hello%20Raviteja%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity."
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="field-row">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Your email" required />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Project or opportunity" />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" rows="6" placeholder="Tell me about your idea..." required />
              </label>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-identity">
            <div className="footer-portrait">
              <img src="/profile.jpg" alt="Putta Raviteja portrait" />
            </div>
            <div>
              <p className="footer-name">Putta Raviteja</p>
              <p className="footer-tagline">Designed and built with curiosity.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://github.com/putta-raviteja21" target="_blank" rel="noreferrer">
              <GitBranch size={16} /> GitHub
            </a>
            <a href="mailto:puttaraviteja21@gmail.com">
              <Mail size={16} /> Email
            </a>
            <a href="https://wa.me/916304048207?text=Hello%20Raviteja%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity." target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="scroll-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronUp size={18} />
          </button>
        </div>

        <div className="container footer-meta">
          <span>© {new Date().getFullYear()} Putta Raviteja</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/916304048207?text=Hello%20Raviteja%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity."
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Raviteja on WhatsApp"
        title="Contact Raviteja on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  )
}

export default App
