import ChiTietSanPham from "../components/chitietsanpham/chitietsanpham.js";

export default function ProductPage({ params }) {
  const { productId } = params;

  return <ChiTietSanPham productId={productId} />;
}

