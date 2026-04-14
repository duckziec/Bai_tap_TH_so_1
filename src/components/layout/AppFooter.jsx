import { Link } from 'react-router-dom';
import { FOOTER_LINK_GROUPS } from '../../constants/navigation';

function AppFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-block logo-footer">
            <img className="logo-img" src="/image.png" alt="PVHub logo" />
            <span className="logo-name">PVHub</span>
          </div>
          <p>Nền tảng học tập kết hợp khóa học, đề thi và quản lý lớp học thông minh.</p>
          <div className="footer-social" aria-label="Mạng xã hội">
            <span>Fb</span>
            <span>In</span>
            <span>Yt</span>
            <span>Tk</span>
          </div>
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <div className="footer-col" key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => (
              <Link key={`${group.title}-${link.label}`} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>© 2026 PVHub. All rights reserved.</span>
        <span>Điều khoản - Bảo mật - Liên hệ</span>
      </div>
    </footer>
  );
}

export default AppFooter;
