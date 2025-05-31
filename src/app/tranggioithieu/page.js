import Link from "next/link";
import styles from './page.module.css';

export default function Gioithieu() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h2 className={styles.heading}>Chúng tôi là ai?</h2>
        <p className={styles.text}>
          Chúng tôi là công ty chuyên cung cấp giải pháp công nghệ hàng đầu, với mục tiêu đem lại giá trị đích thực cho khách hàng. Chúng tôi không chỉ tạo ra sản phẩm, mà còn xây dựng những mối quan hệ bền vững.
        </p>
      </section>

      <section className={styles.coreValues}>
        <h2 className={styles.heading}>Giá trị cốt lõi</h2>
        <ul className={styles.list}>
          <li className={styles.text}>Đổi mới sáng tạo</li>
          <li className={styles.text}>Chất lượng hàng đầu</li>
          <li className={styles.text}>Khách hàng là trọng tâm</li>
          <li className={styles.text}>Đảm bảo bền vững</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.heading}>Liên hệ với chúng tôi</h2>
        <p className={styles.text}>Email: info@company.com</p>
        <p className={styles.text}>Điện thoại: (012) 345-6789</p>
      </section>
    </div>
  );
}
