import Image from 'next/image'
import styles from './page.module.css'
import { MyBar } from './MyBar'
import { MyLine } from './MyLine'
export default function Home() {
  return (
     <div>
      <MyBar />
      <MyLine />
     </div>
  )
}
