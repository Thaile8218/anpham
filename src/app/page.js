'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Product } from "./components/product/product";




export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        if (response.ok) {
          console.log("Products:", result.data);
          setProducts(result.data);
        } else {
          console.error("Error fetching products:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchProducts();
  },[]);
  return (
   
<div className={styles.mainContent}>
  {products.map((product) => (
    <div className={styles.productItem} key={product._id}>
      <Product product={product} />
    </div>
  ))}
</div>
  );
}
