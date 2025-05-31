import styles from './footer.module.css';
export  function Footer() {
    return (
        <footer className={styles.footer}>
        <section className={styles.footerSection}>
          <div className={styles.thongtinA}><strong>
            <h5>Tổng Đài Hỗ Trợ</h5>
            <ul>
              <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
              <li>Khiếu nại: 1800.1063 (8:00 - 21:30)</li>
              <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
            </ul>
            </strong></div>
          <div className={styles.thongtinB}><strong>
            <h5>Về Công Ty</h5>
            <ul>
              <li>Giới thiệu công ty (MWG.vn)</li>
              <li>Tuyển dụng</li>
              <li>Gửi góp ý, khiếu nại</li>
              <li>Tìm siêu thị (2961 shop)</li>
            </ul>
            </strong></div>
          <div className={styles.thongtinC}>
          <strong><h5>Thông Tin Khác</h5>
            <ul>
              <li>Tích điểm Quà tặng</li>
              <li>Lịch sử mua hàng</li>
              <li>Đăng ký bán hàng CTV chiết khấu cao</li>
              <li>Tìm hiểu về mua trả chậm</li>
              <li>Xem thêm v</li>
            </ul>
            </strong></div>
        </section>
        <div className={styles.copyright}>
        © 2018. Tiệm nhà Lang&Vương. GPDKKD: [Số GPKD] do sở KH & ĐT [Tỉnh/Thành phố] cấp ngày [Ngày cấp]. GPMXH: [Số GPMXH] do Bộ Thông Tin và Truyền Thông cấp ngày [Ngày cấp].

Điện thoại: [Số điện thoại]. Email: cskh@[tên miền].com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: hotro@[tên miền].com. Xem chính sách sử dụng. 
        </div>
       </footer>
    );
  }