import { Link } from 'react-router-dom';
import { testimonials } from '../data/siteContent';

function TestimonialsPage() {
  return (
    <>
      <section className="section testimonials-page">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Học viên và giảng viên nói gì</h2>
              <p>Trải nghiệm thực tế từ những người đã đang dạy và học trên PVHub.</p>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-head">
                  <img className="avatar" src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <p>{testimonial.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Bạn muốn trải nghiệm thật?</h2>
            <p>Đăng ký tư vấn để nhận lộ trình học thử theo mục tiêu cá nhân hoặc đội nhóm.</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-lg" to="/contact">
              Liên hệ ngay
            </Link>
            <Link className="btn btn-outline btn-lg" to="/courses">
              Xem khóa học
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsPage;
