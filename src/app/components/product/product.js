import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";

export function Product(props) {
  const { product } = props;
  return (
    <div className={styles.container2}>
      <div className={styles.itemA}>
        <div className={styles.product}>
          <div className={styles.mainproduct}>
            <div className={styles.producthinhanhgoc}>
              <Image
               src={`/${product.producthinhanhgoc}`}
                alt={product.productten}
                width={165}
                height={200}
                style={{ borderRadius: "25px" }}
              />
            </div>
            <div className={styles.productten}>
              <strong>{product.productten}</strong>
            </div>
            <strong className={styles.productgiaca}>{product.productgiaca}</strong>
          </div>

          <div className={styles.productconlai}>
            <div className={styles.remain}>Còn lại {product.productStock.remain}/{product.productStock.total}</div>
          </div>

          <div className={styles.subproduct}>
            <button className={styles.nutmua}>
              <Link href={`/${product._id}`}>MUA ĐI!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
