import React from 'react'
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return <section id = "skills" className={styles.container}>
    <h1>Skills</h1>
    <br />
    <br />
    <div className={styles.skillList}>
        <SkillList src = {checkMarkIcon} skill = "HTML"/>
        <SkillList src = {checkMarkIcon} skill = "CSS"/>
        <SkillList src = {checkMarkIcon} skill = "Tailwind"/>
        <SkillList src = {checkMarkIcon} skill = "Node"/>
        <SkillList src = {checkMarkIcon} skill = "Express"/>
        <SkillList src = {checkMarkIcon} skill = "SQL"/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src = {checkMarkIcon} skill = "Data Structures Algorithms"/>
        <SkillList src = {checkMarkIcon} skill = "Competitive Programming"/>
        <SkillList src = {checkMarkIcon} skill = "Machine Learning*"/>
    </div>
  </section>
}

export default Skills