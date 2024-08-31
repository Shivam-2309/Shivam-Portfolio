import styles from './ProjectsStyles.module.css';
import ML from '../../assets/ML.png';
import pathImg from '../../assets/pathImg.png';
import Dictionary from '../../assets/Dictionary.png';
import ProjectCard from '../../common/ProjectCard';
import Live from '../../assets/Live.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectItem}>
          <ProjectCard
            src={ML}
            link="https://github.com/Shivam-2309/Transcribing-App"
            h3="Transcribing App"
            p="Speech conversion"
            live="https://transcribing-app.vercel.app/"
          />
          <a href="https://transcribing-app.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.liveIcon} src={Live} alt="Live" />
          </a>
        </div>

        <div className={styles.projectItem}>
          <ProjectCard
            src={pathImg}
            link="https://github.com/Shivam-2309/pathfinder"
            h3="Path Visualiser"
            p="Visualise your Algorithms"
            live="https://path-visualiser.vercel.app/"
          />
          <a href="https://path-visualiser.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.liveIcon} src={Live} alt="Live" />
          </a>
        </div>

        <div className={styles.projectItem}>
          <ProjectCard
            src={Dictionary}
            link="https://github.com/Shivam-2309/Dictionary-App"
            h3="Find-Your-Word"
            p="Dictionary App"
            live="https://dictionary-app.vercel.app/"
          />
          <a href="https://dictionary-app.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className={styles.liveIcon} src={Live} alt="Live" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

