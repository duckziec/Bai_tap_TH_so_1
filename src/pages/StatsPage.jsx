import { Link } from 'react-router-dom';
import { stats } from '../data/siteContent';

function StatsPage() {
  return (
    <>
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <article className="stat-card" key={item.value}>
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stats-note">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Ý nghĩa của các chỉ số</h2>
              <p>
                Các số liệu được cập nhật định kỳ từ hệ thống lớp học, bài tập và hoạt động tương
                tác trên toàn nền tảng.
              </p>
            </div>
            <Link className="btn btn-outline" to="/about-us">
              Tìm hiểu nền tảng
            </Link>
          </div>
          <div className="stats-explain-grid">
            <article className="stats-explain-card">
              <h3>Dữ liệu theo thời gian thực</h3>
              <p>
                Dashboard tổng hợp từ lớp học và đề thi giúp giảng viên theo dõi chất lượng đào tạo
                theo tuần.
              </p>
            </article>
            <article className="stats-explain-card">
              <h3>Quản trị có thể hành động</h3>
              <p>
                Không chỉ hiển thị số liệu, PVHub còn đề xuất hành động để tăng tỉ lệ hoàn thành và
                mức độ tham gia.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsPage;
