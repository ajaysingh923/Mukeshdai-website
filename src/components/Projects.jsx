import './Projects.css'
import { FaBookReader, FaBuilding, FaProjectDiagram, FaClipboardCheck } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Blog Management System',
      tech: 'C#',
      year: '2022',
      description: 'This project help to manage the blog for individual where they can add different seo tags for increase viewer in their site.',
      features: [
        'Build dynamic web component which can be customize on run time',
        'Technologies: .NET Core, jQuery and Store Procedure'
      ],
      icon: FaBookReader
    },
    {
      title: 'Mall Management System',
      tech: 'C#',
      year: '2021',
      description: 'This website is used to manage the floor, room, user, lounge of the Eyeplex mall.',
      features: [
        'Build dynamic web component which can be customize on run time',
        'Technologies: .NET Core, jQuery and Store Procedure'
      ],
      icon: FaBuilding
    },
    {
      title: 'Project Management System',
      tech: 'C#',
      year: '2020-2021',
      description: 'Build a full-stack web app to allow user to simulate and visualize the overall project management system.',
      features: [
        'Build dynamic web component which can be customize on run time',
        'Technologies: .NET Core, jQuery and Store Procedure'
      ],
      icon: FaProjectDiagram
    },
    {
      title: 'Attendance Management System',
      tech: 'C#',
      year: '2018-2019',
      description: 'This project is used to maintain attendance of teacher, student and courses of respective college.',
      features: [
        'Built API for the IoT device (NodeMcu)',
        'Technologies: .NET Core, C-Programming for NodeMcu, jQuery, HTML, CSS, MSSQL'
      ],
      icon: FaClipboardCheck
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Featured work and contributions</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-icon">
                  <IconComponent />
                </div>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-tech">{project.tech}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
