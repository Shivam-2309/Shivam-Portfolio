import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import RESUME_SHIVAM from '../../assets/RESUME_SHIVAM.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 
    return (
        <section id = "hero" className = {styles.container}>
            <div className = "styles.colorModeContainer">
                <img 
                className = { styles.hero } 
                src = { heroImg } 
                alt = "Profile Picture of the developer" 
                />
                <img 
                className = { styles.colorMode }
                src = { themeIcon }
                alt = "Color mode icon" 
                onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>Shivam Kapoor
                </h1>

                <h2>Full Stack Developer</h2>
                <span>
                    <a href="https://twitter.com/">
                        <img src={twitterIcon} alt="Twitter_icon" />
                    </a>
                    <a href="https://Github.com/">
                        <img src={githubIcon} alt="Github_icon" />
                    </a>
                    <a href="https://LinkedIn.com/">
                        <img src={linkedinIcon} alt="Linked_icon" />
                    </a>
                </span>
                <p>
                    With a passion for developing modern React web apps for commercial businesses.
                    <br />
                    <a href={RESUME_SHIVAM}>
                        <button className='hover' download>
                            Download
                        </button>
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Hero