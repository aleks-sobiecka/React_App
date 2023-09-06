import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.header}>
                <PageTitle>about</PageTitle>
            </div>
            <div>
                Lorem ipsum
            </div>
        </section>)
}

export default About;