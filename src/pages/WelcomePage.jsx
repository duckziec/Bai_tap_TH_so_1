import { Link } from 'react-router-dom';
import { trustedBrands } from '../data/siteContent';

const quickLinks = [
  {
    title: 'Bắt đầu với trang chủ',
    description: 'Khám phá tổng quan nền tảng, CTA và các chỉ số nổi bật.',
    to: '/home',
  },
  {
    title: 'Tìm hiểu về PVHub',
    description: 'Đọc sứ mệnh, cách vận hành và điểm khác biệt của nền tảng.',
    to: '/about-us',
  },
  {
    title: 'Xem danh mục và khóa học',
    description: 'Đi thẳng vào các nhóm chủ đề và khóa học đang mở đăng ký.',
    to: '/courses',
  },
];

function WelcomePage() {
  return (
    <>
      <section className="hero welcome-hero">
        <div className="container welcome-grid">
          <div className="hero-text">
            <p className="eyebrow">Chào mừng đến với PVHub</p>
            <h1>Trang mở đầu cho nền tảng học trực tuyến đa năng</h1>
            <p className="hero-lead">
              Đây là trang mặc định khi bạn truy cập website lần đầu. Từ đây bạn có thể vào nhanh
              trang chủ, trang giới thiệu hoặc các trang chức năng chính đã được tách route riêng.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" to="/home">
                Vào trang chủ
              </Link>
              <Link className="btn btn-outline btn-lg" to="/about-us">
                Xem trang giới thiệu
              </Link>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <strong>8 routes</strong>
                <span>Điều hướng bằng URL trực tiếp</span>
              </div>
              <div className="metric">
                <strong>React Router</strong>
                <span>Menu chuyển trang tức thời</span>
              </div>
              <div className="metric">
                <strong>Responsive</strong>
                <span>Tối ưu desktop và mobile</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="media-card">
              <div className="media-screen">
                <img src="/images/hero.jpg" alt="Trang mở đầu PVHub" />
              </div>
              <div className="media-row">
                <span className="media-chip">Welcome</span>
                <span className="media-chip ghost">Routing</span>
                <span className="media-chip ghost">Multi-page</span>
              </div>
              <div className="media-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted">
        <div className="container trusted-inner">
          <p>Được tin dùng bởi</p>
          <div className="trusted-logos">
            {trustedBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section welcome-links">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Đi nhanh đến nội dung bạn cần</h2>
              <p>Chọn một lối đi phù hợp, website sẽ chuyển trang đúng theo URL ngay lập tức.</p>
            </div>
          </div>

          <div className="welcome-link-grid">
            {quickLinks.map((item) => (
              <article className="welcome-link-card" key={item.to}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="btn btn-ghost btn-sm" to={item.to}>
                  Khám phá
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
