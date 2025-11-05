import { useEffect, useState } from 'react'
import './Hero.css'
import profileImg from '../assets/mukeshkumarmahato.jpg'
import resumePdf from '../assets/Mukesh_Resume_english.pdf'
import { FaJsSquare, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa'
import { SiDotnet } from 'react-icons/si'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const titles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver']
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Mukesh Kumar Mahato
          </h1>
          <div className="hero-title-container">
            <h2 className="hero-title">{titles[currentTitle]}</h2>
          </div>
          <p className="hero-description">
            Passionate about building scalable web applications with modern technologies. 
            Experienced in C#, .NET Core, JavaScript, and database design.
          </p>
          
          <div className="hero-skills">
            <div className="hero-skill-icon" style={{ color: '#512bd4' }}>
              <SiDotnet />
            </div>
            <div className="hero-skill-icon" style={{ color: '#f0db4f' }}>
              <FaJsSquare />
            </div>
            <div className="hero-skill-icon" style={{ color: '#3776ab' }}>
              <FaPython />
            </div>
            <div className="hero-skill-icon" style={{ color: '#00758f' }}>
              <FaDatabase />
            </div>
            <div className="hero-skill-icon" style={{ color: '#e34c26' }}>
              <FaHtml5 />
            </div>
            <div className="hero-skill-icon" style={{ color: '#264de4' }}>
              <FaCss3Alt />
            </div>
            <div className="hero-skill-icon" style={{ color: '#61dafb' }}>
              <FaReact />
            </div>
          </div>

          <div className="hero-buttons">
            <a 
              href={resumePdf}
              download="Mukesh_Resume_english.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
          </div>

          <div className="hero-links">
            <a href="https://www.linkedin.com/in/ermukeshmahato/" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/er-mukeshmahato" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-github">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:er.mukeshmahatomm@gmail.com" className="hero-link hero-link-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="tel:07026314169" className="hero-link hero-link-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <img src={profileImg} alt="Mukesh Kumar Mahato" className="profile-img" />
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Hero
