import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './about.module.css';

export default function Aboutpage() {
  return (
    <div className={style.background}>
    <div className={style.imageContainer}>
      <Link href="/">
        <Image
          src="https://i0.wp.com/aestheticdp.com/wp-content/uploads/2024/03/Girl-dp.jpg"
          alt="picture"
          height={300}
          width={300}
          className={style.image}
        />
      </Link>

      <h1>About Me</h1>
      <p className={style.description}>
        Hello Everyone! Welcome to my Portfolio. This is me, Niba Khan, an AI Engineering student with a strong foundation in TypeScript, HTML, CSS, Next.js, and a Certified Information Technology (CIT) professional. I am dedicated to advancing the field of artificial intelligence with my coding expertise. I am always ready to tackle cutting-edge challenges and contribute to innovative projects.
      </p>
      
    </div>
    </div>
  );
}
