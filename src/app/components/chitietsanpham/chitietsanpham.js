"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./chitietsanpham.module.css";

export default function ChiTietSanPham({ productId }) {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (!productId) {
      console.error("Product ID is missing");
      return;
    }

    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const result = await response.json();

        console.log("API result:", result);

        if (response.ok) {
          setProduct(result);
          setMainImage(result.producthinhanhgoc); // ảnh chính
        } else {
          console.error("Fetch error:", result.error || result);
        }
      } catch (err) {
        console.error("Network error:", err);
      }
    }

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Đang tải sản phẩm...</p>;

  const prod = product.product;
  const discountedPrice =
  prod.productgiaca - (prod.productgiaca * prod.percentkhuyenmai) / 100;

  return (
    <div className={styles.chitietsanpham}>
      <h1 className={styles.title}>{product.productten}</h1>

      {/* Ảnh chính */}
      <div className={styles.mainImage}>
        <Image
          src={`/${prod.producthinhanhgoc}`}
          alt={prod.productten}
          width={500}
          height={500}
        />
      </div>

      {/* Thư viện ảnh */}
      <div className={styles.gallery}>
        {product.producthinhanh?.map((img, index) => (
          <Image
            key={index}
            src={`/${img}`}
            alt={`${product.productten} ${index + 1}`}
            width={100}
            height={100}
            className={styles.galleryItem}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Giá */}
      <div className={styles.price}>
        {product.percentkhuyenmai > 0 ? (
          <>
            <p className={styles.oldPrice}>{prod.productgiaca.toLocaleString()}₫</p>
            <p className={styles.discountedPrice}>{discountedPrice?.toLocaleString()}₫</p>
          </>
        ) : (
          <p className={styles.normalPrice}>{prod.productgiaca.toLocaleString()}₫</p>
        )}
      </div>

      {/* Giới thiệu */}
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: prod.productgioithieu }}
      />

      {/* Số lượng tồn kho */}
      <p className={styles.stock}>Còn lại: {prod.productStock.remain} sản phẩm</p>

      {/* Nút mua */}
      <button className={styles.buyButton}>Mua ngay</button>
    </div>
  );
}
