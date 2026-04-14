import { Link } from 'react-router-dom';
import { categories } from '../data/siteContent';

function CategoriesPage() {
  return (
    <section className="section categories-page">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Danh mục nổi bật</h2>
            <p>Từ kỹ năng nghề nghiệp đến đề thi chuẩn hóa, bắt đầu nhanh theo mục tiêu.</p>
          </div>
          <Link className="btn btn-outline" to="/courses">
            Xem khóa học
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.code}>
              <div className="category-media">
                <img src={category.image} alt={category.alt} loading="lazy" />
                <span className="category-chip">{category.code}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage;
