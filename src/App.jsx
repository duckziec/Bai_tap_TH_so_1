import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = ['home', 'categories', 'courses', 'stats', 'testimonials', 'contact'];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);
    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleLogoClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  const handleLogoTextClick = () => {
    window.location.reload();
  };

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const themeLabel = `Chuyển sang chế độ ${nextTheme === 'dark' ? 'tối' : 'sáng'}`;

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <div className="nav-left">
            <div className="logo-block logo-compact">
              <button
                className="logo-button logo-icon-btn"
                type="button"
                onClick={handleLogoClick}
                aria-label="Về trang chủ"
              >
                <img className="logo-img" src="/image.png" alt="PVHub logo" />
              </button>
              <button
                className="logo-button logo-name"
                type="button"
                onClick={handleLogoTextClick}
                aria-label="Tải lại trang"
              >
                PVHub
              </button>
            </div>
          </div>
          <nav className="nav-center">
            <a
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              href="#home"
              onClick={() => handleNavClick('home')}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Trang chủ
            </a>
            <a
              className={`nav-link ${activeSection === 'categories' ? 'active' : ''}`}
              href="#categories"
              onClick={() => handleNavClick('categories')}
              aria-current={activeSection === 'categories' ? 'page' : undefined}
            >
              Danh mục
            </a>
            <a
              className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
              href="#courses"
              onClick={() => handleNavClick('courses')}
              aria-current={activeSection === 'courses' ? 'page' : undefined}
            >
              Khóa học
            </a>
            <a
              className={`nav-link ${activeSection === 'stats' ? 'active' : ''}`}
              href="#stats"
              onClick={() => handleNavClick('stats')}
              aria-current={activeSection === 'stats' ? 'page' : undefined}
            >
              Thống kê
            </a>
            <a
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              href="#testimonials"
              onClick={() => handleNavClick('testimonials')}
              aria-current={activeSection === 'testimonials' ? 'page' : undefined}
            >
              Đánh giá
            </a>
            <a
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleNavClick('contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Liên hệ
            </a>
          </nav>
          <div className="nav-right">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === 'dark' ? (
                <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span className="sr-only">{themeLabel}</span>
            </button>
            <button className="btn btn-outline btn-sm" type="button">
              Đăng nhập
            </button>
            <button className="btn btn-primary btn-sm" type="button">
              Đăng ký
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Nền tảng học tập thông minh</p>
              <h1>Học tập, thi thử và quản lý lớp học trong một nơi</h1>
              <p className="hero-lead">
                Kết hợp thư viện khóa học phong cách Udemy với hệ thống đề thi, bài tập, báo cáo
                tiến độ giống Azota để dạy và học hiệu quả hơn.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary btn-lg" type="button">
                  Bắt đầu miễn phí
                </button>
                <button className="btn btn-outline btn-lg" type="button">
                  Xem demo lớp học
                </button>
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
                  <img
                    src="/images/hero.jpg"
                    alt="Lớp học trực tuyến"
                  />
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
              <span>PTIT</span>
              <span>FPT</span>
              <span>Viettel</span>
              <span>VTC</span>
              <span>VNU</span>
              <span>MOET</span>
            </div>
          </div>
        </section>

        <section className="section categories" id="categories">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Danh mục nổi bật</h2>
                <p>Từ kỹ năng nghề nghiệp đến đề thi chuẩn hóa, bắt đầu nhanh theo mục tiêu.</p>
              </div>
              <button className="btn btn-outline" type="button">
                Tất cả chủ đề
              </button>
            </div>
            <div className="category-grid">
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-web.jpg"
                    alt="Lập trình web"
                    loading="lazy"
                  />
                  <span className="category-chip">WEB</span>
                </div>
                <h3>Lập trình Web</h3>
                <p>Frontend, backend, full-stack theo lộ trình.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-ai.jpg"
                    alt="Phân tích dữ liệu và AI"
                    loading="lazy"
                  />
                  <span className="category-chip">AI</span>
                </div>
                <h3>Data & AI</h3>
                <p>Phân tích dữ liệu, machine learning ứng dụng.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-exam.jpg"
                    alt="Thi thử THPT"
                    loading="lazy"
                  />
                  <span className="category-chip">EXAM</span>
                </div>
                <h3>Thi thử THPT</h3>
                <p>Đề bám sát cấu trúc, chấm điểm nhanh.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-eng.jpg"
                    alt="Ngoại ngữ"
                    loading="lazy"
                  />
                  <span className="category-chip">ENG</span>
                </div>
                <h3>Ngoại ngữ</h3>
                <p>Lộ trình IELTS, TOEIC, tiếng Anh giao tiếp.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-ux.jpg"
                    alt="Thiết kế UI/UX"
                    loading="lazy"
                  />
                  <span className="category-chip">UX</span>
                </div>
                <h3>Thiết kế UI/UX</h3>
                <p>Figma, design system, nghiên cứu người dùng.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-mkt.jpg"
                    alt="Marketing số"
                    loading="lazy"
                  />
                  <span className="category-chip">MKT</span>
                </div>
                <h3>Marketing số</h3>
                <p>Performance, content, thương mại điện tử.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-soft.jpg"
                    alt="Kỹ năng mềm"
                    loading="lazy"
                  />
                  <span className="category-chip">SOFT</span>
                </div>
                <h3>Kỹ năng mềm</h3>
                <p>Thuyết trình, quản lý thời gian, tư duy.</p>
              </article>
              <article className="category-card">
                <div className="category-media">
                  <img
                    src="/images/cat-cs.jpg"
                    alt="Khoa học máy tính"
                    loading="lazy"
                  />
                  <span className="category-chip">CS</span>
                </div>
                <h3>Khoa học máy tính</h3>
                <p>Cấu trúc dữ liệu, thuật toán, nền tảng.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section courses" id="courses">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Khóa học nổi bật</h2>
                <p>Chọn từ những khóa học được đánh giá cao và cập nhật liên tục.</p>
              </div>
              <button className="btn btn-outline" type="button">
                Xem tất cả
              </button>
            </div>
            <div className="course-grid">
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-react.jpg"
                    alt="React + Vite cho người mới bắt đầu"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Mới</span>
                    <span className="tag ghost">Cơ bản</span>
                  </div>
                  <h3>React + Vite cho người mới bắt đầu</h3>
                  <p className="course-author">Nguyễn Minh Khôi</p>
                  <div className="course-meta">
                    <span>4,9/5</span>
                    <span>18 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>299.000đ</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-python.jpg"
                    alt="Python cho phân tích dữ liệu thực chiến"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Bán chạy</span>
                    <span className="tag ghost">Trung bình</span>
                  </div>
                  <h3>Python cho phân tích dữ liệu thực chiến</h3>
                  <p className="course-author">Lê Ngọc Anh</p>
                  <div className="course-meta">
                    <span>4,8/5</span>
                    <span>24 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>359.000đ</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-java.jpg"
                    alt="Java Spring Boot Microservices"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Chuyên sâu</span>
                  </div>
                  <h3>Java Spring Boot Microservices</h3>
                  <p className="course-author">Trần Quốc Huy</p>
                  <div className="course-meta">
                    <span>4,7/5</span>
                    <span>26 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>449.000đ</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-sql.jpg"
                    alt="SQL và Data Modeling cho doanh nghiệp"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Nền tảng</span>
                    <span className="tag ghost">Doanh nghiệp</span>
                  </div>
                  <h3>SQL & Data Modeling cho doanh nghiệp</h3>
                  <p className="course-author">Phạm Hải Yến</p>
                  <div className="course-meta">
                    <span>4,8/5</span>
                    <span>14 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>199.000đ</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-math.jpg"
                    alt="Giải đề Toán THPT theo chuyên đề"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Miễn phí</span>
                    <span className="tag ghost">Luyện thi</span>
                  </div>
                  <h3>Giải đề Toán THPT theo chuyên đề</h3>
                  <p className="course-author">Ngô Thảo Vy</p>
                  <div className="course-meta">
                    <span>4,9/5</span>
                    <span>12 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>Miễn phí</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
              <article className="course-card">
                <div className="course-thumb">
                  <img
                    src="/images/course-uiux.jpg"
                    alt="UI/UX Foundation từ nghiên cứu đến prototype"
                    loading="lazy"
                  />
                </div>
                <div className="course-body">
                  <div className="course-tags">
                    <span className="tag">Mới</span>
                    <span className="tag ghost">Portfolio</span>
                  </div>
                  <h3>UI/UX Foundation: từ nghiên cứu đến prototype</h3>
                  <p className="course-author">Đỗ Nhật Nam</p>
                  <div className="course-meta">
                    <span>4,8/5</span>
                    <span>20 giờ</span>
                  </div>
                  <div className="course-footer">
                    <strong>279.000đ</strong>
                    <button className="btn btn-ghost btn-sm" type="button">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="stats" id="stats">
          <div className="container stats-grid">
            <div className="stat-card">
              <h3>32.000+</h3>
              <p>Đề thi chuẩn hóa, cập nhật theo từng môn.</p>
            </div>
            <div className="stat-card">
              <h3>6.500+</h3>
              <p>Lớp học đang hoạt động trên toàn quốc.</p>
            </div>
            <div className="stat-card">
              <h3>4.200+</h3>
              <p>Giảng viên và chuyên gia đóng góp nội dung.</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Báo cáo tiến độ được nộp đúng hạn.</p>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Học viên và giảng viên nói gì</h2>
                <p>Trải nghiệm thực tế từ những người đã đang dạy và học trên PVHub.</p>
              </div>
            </div>
            <div className="testimonial-grid">
              <article className="testimonial-card">
                <div className="testimonial-head">
                  <img
                    className="avatar"
                    src="/images/avatar-1.jpg"
                    alt="Lê Thu Hà"
                    loading="lazy"
                  />
                  <div>
                    <strong>Lê Thu Hà</strong>
                    <span>Trưởng bộ môn Toán</span>
                  </div>
                </div>
                <p>
                  Hệ thống đề thi và chấm tự động giúp giáo viên tiết kiệm thời gian, học viên
                  nhận phản hồi ngay sau mỗi bài làm.
                </p>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-head">
                  <img
                    className="avatar"
                    src="/images/avatar-2.jpg"
                    alt="Nguyễn Văn Thành"
                    loading="lazy"
                  />
                  <div>
                    <strong>Nguyễn Văn Thành</strong>
                    <span>Giảng viên Lập trình</span>
                  </div>
                </div>
                <p>
                  Giao diện khóa học rõ ràng, ban giảng viên có thể tạo lộ trình và quản lý lớp
                  học dễ dàng như một marketplace chuyên nghiệp.
                </p>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-head">
                  <img
                    className="avatar"
                    src="/images/avatar-3.jpg"
                    alt="Trần Minh Đức"
                    loading="lazy"
                  />
                  <div>
                    <strong>Trần Minh Đức</strong>
                    <span>Sinh viên PTIT</span>
                  </div>
                </div>
                <p>
                  Hỗ trợ cả học video và luyện bài tập, có thống kê tiến độ nên mình học đều và
                  theo kịp lộ trình.
                </p>
              </article>
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
              <button className="btn btn-primary btn-lg" type="button">
                Tạo lớp học miễn phí
              </button>
              <button className="btn btn-outline btn-lg" type="button">
                Xem bảng giá
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo-block logo-footer">
              <img className="logo-img" src="/image.png" alt="PVHub logo" />
              <span className="logo-name">PVHub</span>
            </div>
            <p>Nền tảng học tập kết hợp khóa học, đề thi và quản lý lớp học thông minh.</p>
            <div className="footer-social">
              <span>Fb</span>
              <span>In</span>
              <span>Yt</span>
              <span>Tk</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Sản phẩm</h4>
            <a href="#lo-trinh">Lộ trình học</a>
            <a href="#giang-vien">Kho tài liệu</a>
            <a href="#doanh-nghiep">Code Judge</a>
            <a href="#doanh-nghiep">Kiểm tra trực tuyến</a>
          </div>
          <div className="footer-col">
            <h4>Giải pháp</h4>
            <a href="#doanh-nghiep">Trường học</a>
            <a href="#doanh-nghiep">Trung tâm</a>
            <a href="#doanh-nghiep">Doanh nghiệp</a>
            <a href="#doanh-nghiep">Nhóm học</a>
          </div>
          <div className="footer-col">
            <h4>Tài nguyên</h4>
            <a href="#">Hướng dẫn sử dụng</a>
            <a href="#">Blog chia sẻ</a>
            <a href="#">Câu hỏi thường gặp</a>
            <a href="#">Hỗ trợ kỹ thuật</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 PVHub. All rights reserved.</span>
          <span>Điều khoản - Bảo mật - Liên hệ</span>
        </div>
      </footer>
    </div>
  );
}

export default App;