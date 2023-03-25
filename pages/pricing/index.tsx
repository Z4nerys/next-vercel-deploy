import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from '../../components/layouts/MainLayout.module.css'

export default function Pricing() {
  return (
    <MainLayout>
            <h1>Pricing page</h1>
            <div className={styles.description}>
                <p>
                Get about by editing&nbsp;
                <code className={styles.code}>pages/pricing.js</code>
                </p>
            </div>
    </MainLayout>
  )
}

/* About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
} */
