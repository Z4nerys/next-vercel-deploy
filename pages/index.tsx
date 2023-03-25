import styles from '../components/layouts/MainLayout.module.css'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {

  return (
    <MainLayout>
      <h1>Home</h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.js</code>
        </p>
      </div>
    </MainLayout>
  )
}
