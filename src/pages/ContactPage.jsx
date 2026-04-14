import { Link } from 'react-router-dom';
import { contactChannels } from '../data/siteContent';

function ContactPage() {
  return (
    <>
      <section className="section contact-page">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Liên hệ PVHub</h2>
              <p>
                Chọn kênh phù hợp để được hỗ trợ nhanh về lộ trình học, kỹ thuật hệ thống và hợp
                tác triển khai.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            {contactChannels.map((channel) => (
              <article className="contact-card" key={channel.title}>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <a className="btn btn-outline btn-sm contact-action" href={channel.href}>
                  {channel.actionLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Đặt lịch demo trong 15 phút</h2>
            <p>Chúng tôi sẽ tư vấn gói phù hợp theo mục tiêu học tập hoặc vận hành đào tạo.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href="mailto:hello@pvhub.vn">
              Đặt lịch ngay
            </a>
            <Link className="btn btn-outline btn-lg" to="/home">
              Quay về trang chủ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
