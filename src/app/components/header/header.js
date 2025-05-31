import Link from "next/link";
import styles from './header.module.css';

export  function Header() {
  return (
       <div className={styles.header}>
          <nav className={styles.nav}>
            <ul>
            <li>
            <div className={styles.Trangchu}>
            <Link href="/">Trang chủ</Link> 
            </div>
            </li>
            <li>
              <div className={styles.tiemkiem}>
              <Link href="/tranggioithieu">Giới thiệu</Link>
              </div>
            </li>
            <li>
            <div className={styles.CSKH}>
              <Link href="/">Hỗ trợ</Link>
              </div>
            </li>
            <li>
            <div className={styles.Hoptac}>
            <Link href="/lienhe">Liên hệ</Link>
              </div>
            </li>
            </ul>
          </nav>
          <div className={styles.logo}>
            <div className={styles.tentiem}>Tiệm Nhà Lang&Vương</div>
          </div>
    </div>
  );
}
