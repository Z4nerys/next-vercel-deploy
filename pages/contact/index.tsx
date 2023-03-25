import styles from '../../components/layouts/MainLayout.module.css'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <h1>Contact</h1>
        <div className={styles.description}>
          <p>
            Get about by editing&nbsp;
            <code className={styles.code}>pages/contact.js</code>
          </p>
        </div>
    </MainLayout>
  )
}