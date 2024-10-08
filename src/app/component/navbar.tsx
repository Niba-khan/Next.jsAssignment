import React from 'react'
import Link from 'next/link'
import style from './component.module.css'


export default function Navbar(){
  return (
    <div>
  
  <div  className={style.container}>
  <Link href="http://localhost:3000/" target="__blank">Home</Link>
  <Link href="http://localhost:3000/about" target="__blank">About</Link>
  <Link href="http://localhost:3000/services" target="__blank">Services</Link>
  <Link href="http://localhost:3000/contact" target="__blank">Contact</Link>
  </div>
  </div>
  )
}
