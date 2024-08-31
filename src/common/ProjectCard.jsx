import React from 'react';
function ProjectCard({ src, link, h3, p, live}) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;
