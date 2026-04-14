import { Link } from 'react-router-dom';
import { trustedBrands } from '../data/siteContent';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Nền tảng học tập thông minh</p>
            <h1>Học tập, thi thử và quản lý lớp học trong một nơi</h1>
            <p className="hero-lead">
              Kết hợp thư viện khóa học phong cách Udemy với hệ thống đề thi, bài tập, báo cáo
              tiến độ giống Azota để dạy và học hiệu quả hơn.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" to="/courses">
                Bắt đầu miễn phí
              </Link>
              <Link className="btn btn-outline btn-lg" to="/about-us">
                Xem demo lớp học
              </Link>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <strong>12.000+</strong>
                <span>Khóa học cập nhật</span>
              </div>
              <div className="metric">
                <strong>1,8M</strong>
                <span>Học viên tích cực</span>
              </div>
              <div className="metric">
                <strong>96%</strong>
                <span>Hài lòng về chất lượng</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="media-card">
              <div className="media-screen">
                <img src="/images/hero.jpg" alt="Lớp học trực tuyến" />
              </div>
              <div className="media-row">
                <span className="media-chip">Live Quiz</span>
                <span className="media-chip ghost">Code Judge</span>
                <span className="media-chip ghost">Bài tập</span>
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

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Tạo lớp học trong 5 phút</h2>
            <p>Tự tạo giáo trình, đề thi và bài tập, mời học viên tham gia bằng mã lớp.</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-lg" to="/contact">
              Tạo lớp học miễn phí
            </Link>
            <Link className="btn btn-outline btn-lg" to="/courses">
              Xem bảng giá
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
