import './Education.css'
import { FaGraduationCap, FaBook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'M.S. IN IT',
      institution: 'THE KYOTO COLLEGE OF GRADUATE STUDIES FOR INFORMATICS',
      period: '2021 - 2025',
      location: 'Kyoto, Japan',
      status: 'COMPLETED',
      description: 'Pursuing Master\'s degree in Information Technology with focus on advanced software development, AI, and data science.',
      icon: FaGraduationCap
    },
    {
      degree: "BACHELOR'S IN COMPUTER ENGINEERING",
      institution: 'POKHARA UNIVERSITY',
      period: '2018 - 2020',
      location: 'Nepal College of Information Technology, Balkumari, Lalitpur',
      status: 'COMPLETED',
      description: 'Completed Bachelor\'s degree in Computer Engineering with focus on software development, algorithms, data structures, and software engineering principles.',
      icon: FaGraduationCap
    },
    {
      degree: 'H.S.E.B',
      institution: 'NEPAL EDUCATION BOARD',
      period: '2008 - 2018',
      location: 'Lord Buddha College, Biratnagar, Nepal',
      status: 'COMPLETED',
      description: 'Completed high school education with focus on science and mathematics. Developed strong foundation in analytical thinking and problem-solving skills.',
      icon: FaBook
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and qualifications</p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <div key={index} className="education-item" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="education-icon-wrapper">
                  <IconComponent className="education-icon" />
                </div>
                <div className="education-card">
                  <div className="education-header">
                    <div className="education-period-badge">
                      <FaCalendarAlt />
                      {edu.period}
                    </div>
                    <span className={`education-status ${edu.status === 'COMPLETED' ? 'completed' : 'in-progress'}`}>
                      {edu.status}
                    </span>
                  </div>
                  <div className="education-content">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">
                      <FaGraduationCap className="institution-icon" />
                      {edu.institution}
                    </p>
                    <p className="education-location">
                      <FaMapMarkerAlt />
                      {edu.location}
                    </p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
