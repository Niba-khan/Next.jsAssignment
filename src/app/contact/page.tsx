import React from 'react';
import styles from './contact.module.css'; // Import the CSS module

export default function Contact() {
  return (
    <div className={styles.background}>
    <div className={styles.container}>

      <div className={styles.contactDetails}>
        <ul>
          <li>
            <img src='https://cdn.pixabay.com/animation/2023/04/14/09/45/09-45-44-954_512.gif' alt="phone" />
            <p>+093 989 877</p>
          </li>
          <li>
            <img src='https://cdn.dribbble.com/users/85665/screenshots/1637442/check-your-email.gif' alt="mail" />
            <p>khan@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className={styles.connect}>
        <h2>Let's Connect</h2>
        <p>Send ME A Message and Let's Schedule A Call!</p>
      </div>

      <div className={styles.formContainer}>
        <form>
          <div>
            <input placeholder='First Name' />
            <input placeholder='Last Name' />
            <input placeholder='E-mail' />
            <input placeholder='Phone Number' />
          </div>
          <textarea placeholder='Your Message' />
          <button type='submit'>Send Message</button>
        </form>
      </div>

    </div>
    </div>
  );
}


