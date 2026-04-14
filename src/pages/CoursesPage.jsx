import { Link } from 'react-router-dom';
import { courses } from '../data/siteContent';

function CoursesPage() {
  return (
    <section className="section courses-page">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Khóa học nổi bật</h2>
            <p>Chọn từ những khóa học được đánh giá cao và cập nhật liên tục.</p>
          </div>
          <Link className="btn btn-outline" to="/contact">
            Đăng ký tư vấn
          </Link>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-thumb">
                <img src={course.image} alt={course.alt} loading="lazy" />
              </div>
              <div className="course-body">
                <div className="course-tags">
                  {course.tags.map((tag) => (
                    <span
                      className={`tag${tag.variant === 'ghost' ? ' ghost' : ''}`}
                      key={`${course.title}-${tag.label}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3>{course.title}</h3>
                <p className="course-author">{course.author}</p>
                <div className="course-meta">
                  <span>{course.rating}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="course-footer">
                  <strong>{course.price}</strong>
                  <Link className="btn btn-ghost btn-sm" to="/contact">
                    Chi tiết
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesPage;
