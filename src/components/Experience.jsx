import './Experience.css'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'SOFTWARE DEVELOPER',
      company: 'TECHNABLES IT SOLUTION',
      period: 'Aug 2021 – 2023',
      location: 'Koteshwor, Kathmandu',
      icon: FaBriefcase,
      responsibilities: [
        'Architect and designing projects by collaborating colleague daily',
        'Designed service layer, Business layer in C# and database (MSSQL Server)',
        'Prepare and presented a weekly progress report to the Reporter',
        'Provided project status to management during weekly development scrum meetings'
      ]
    },
    {
      title: 'JR. SOFTWARE DEVELOPER',
      company: 'TECHNABLES IT SOLUTION',
      period: 'Jan 2021 – Aug 2021',
      location: 'Koteshwor, Kathmandu',
      icon: FaLaptopCode,
      responsibilities: [
        'Gained experience working with various software tools such as debuggers, IDEs, and Compiler',
        'Resolve complex IT issues on daily basis',
        'Modify HTML and JavaScript to improve loading and browsing process'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-icon-wrapper">
                  <IconComponent className="timeline-icon" />
                </div>
                <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
