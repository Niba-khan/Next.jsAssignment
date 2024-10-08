import styles from './services.module.css';

export default function Services() {
  return (
    <div className={styles.background}>
    <div className={styles.pageContainer}>
        <h1 className={styles.h1}>Our Services</h1>
     <main className={styles.content}>
       
          <div className={styles.service}>
            <h2>Web Development</h2>
            <p>
              We offer professional web development services, building stunning websites using the latest technologies.
            </p>
          </div>
          <div className={styles.service}>
          <h2>MS Office Training</h2>
          <p>Our MS Office training includes everything from basic Word, Excel, and PowerPoint skills to advanced document and data management techniques.</p>
          </div>
          <div className={styles.service}>
          <h2>CIT (Certificate in Information Technology)</h2>
      <p>Learn essential IT skills with our CIT course, covering topics like computer hardware, software applications, and networking fundamentals.</p>
          </div>
          <div className={styles.service}>
          <h2>Art & Design</h2>
         <p>Our Art & Design services cover digital and traditional art creation, from graphic design to personal creative projects, tailored to your needs.</p>
        </div>

      </main>
    </div>
    </div>
  );
}

