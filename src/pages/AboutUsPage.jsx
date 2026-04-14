import { Link } from 'react-router-dom';
import { aboutValues, stats } from '../data/siteContent';

function AboutUsPage() {
  return (
    <>
      <section className="section about-page">
        <div className="container about-grid">
          <div className="about-intro">
            <p className="eyebrow">Giới thiệu PVHub</p>
            <h1>Nền tảng học tập kết hợp marketplace khóa học và lớp học số</h1>
            <p className="hero-lead">
              PVHub được xây dựng để giảng viên, trung tâm và học viên có thể tạo lớp, học trực
              tuyến, luyện đề và theo dõi tiến độ trong một hệ thống thống nhất.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" to="/home">
                Quay về trang chủ
              </Link>
              <Link className="btn btn-outline btn-lg" to="/contact">
                Liên hệ tư vấn
              </Link>
            </div>
          </div>

          <div className="about-stats-card">
            <h2>PVHub qua các con số</h2>
            <div className="about-stats-grid">
              {stats.map((item) => (
                <article className="about-mini-stat" key={item.value}>
                  <strong>{item.value}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Giá trị cốt lõi</h2>
              <p>Những nguyên tắc định hướng cách PVHub thiết kế trải nghiệm dạy và học.</p>
            </div>
          </div>
          <div className="about-values-grid">
            {aboutValues.map((value) => (
              <article className="about-value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
