import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from '../../components/layouts/MainLayout.module.css'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className={styles.description}>
        <p>
          Get about by editing&nbsp;
          <code className={styles.code}>pages/about.js</code>
        </p>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page : JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
