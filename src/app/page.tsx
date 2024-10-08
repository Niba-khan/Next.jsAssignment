import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css"; 


export default function Home() {
  return (
    <div className={style.background}>
    <div className={style.imageContainer}>
      <Link href="/">
        <Image
          src="https://w0.peakpx.com/wallpaper/688/556/HD-wallpaper-hijabi-girl-love-preety-muslimah-cute-pie-anime-nice-flower.jpg"
          alt="picture"
          height={300}
          width={300}
          className={style.image} // Add the class to apply styles
        />
      </Link>
    <h1 className={style.heading}>Hello it's Me Niba khan</h1>
      <p className={style.description}>
      "AI Student proficient in TypeScript &HTML ,CSS and Certified Information Technology | Dedicated to advancing AI with coding expertise | Ready to tackle cutting-edge challenge.</p>
    <br/>
    <br/>
      <div>
          <Link href="https://cv-in-html-css.vercel.app/" className={style.downloadButton}>
            Download CV
          </Link>          
        </div>

    </div>
    </div>

   
  );
}
