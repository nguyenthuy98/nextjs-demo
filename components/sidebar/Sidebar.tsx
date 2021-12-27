 import Link from 'next/link'
import styles from './sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

export default function Sidebar() {
  return (
    <div className={styles.nav}> 
      <Link href="/">
        <a><HomeIcon></HomeIcon><span className={styles.menuItem}>Home</span></a>
      </Link>
      <Link href="/users">
        <a><PersonIcon></PersonIcon><span className={styles.menuItem}>User</span></a>
      </Link>
      <Link href="/blog">
        <a><AlignHorizontalLeftIcon></AlignHorizontalLeftIcon><span className={styles.menuItem}>Blog</span></a>
      </Link>
      <Link href="/about">
        <a><InfoIcon></InfoIcon><span className={styles.menuItem}>About</span></a>
      </Link>
    </div>
  )
}
