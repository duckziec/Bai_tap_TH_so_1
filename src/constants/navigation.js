import { ROUTE_PATHS } from './routes';

export const MAIN_NAV_ITEMS = Object.freeze([
  { to: ROUTE_PATHS.WELCOME, label: 'Mở đầu', end: true },
  { to: ROUTE_PATHS.HOME, label: 'Trang chủ' },
  { to: ROUTE_PATHS.ABOUT_US, label: 'Giới thiệu' },
  { to: ROUTE_PATHS.CATEGORIES, label: 'Danh mục' },
  { to: ROUTE_PATHS.COURSES, label: 'Khóa học' },
  { to: ROUTE_PATHS.STATS, label: 'Thống kê' },
  { to: ROUTE_PATHS.TESTIMONIALS, label: 'Đánh giá' },
  { to: ROUTE_PATHS.CONTACT, label: 'Liên hệ' },
]);

export const FOOTER_LINK_GROUPS = Object.freeze([
  {
    title: 'Sản phẩm',
    links: [
      { to: ROUTE_PATHS.HOME, label: 'Trang chủ' },
      { to: ROUTE_PATHS.CATEGORIES, label: 'Danh mục' },
      { to: ROUTE_PATHS.COURSES, label: 'Khóa học' },
      { to: ROUTE_PATHS.STATS, label: 'Thống kê' },
    ],
  },
  {
    title: 'Giải pháp',
    links: [
      { to: ROUTE_PATHS.ABOUT_US, label: 'Cho giảng viên' },
      { to: ROUTE_PATHS.ABOUT_US, label: 'Cho trung tâm' },
      { to: ROUTE_PATHS.ABOUT_US, label: 'Cho doanh nghiệp' },
      { to: ROUTE_PATHS.CONTACT, label: 'Hợp tác' },
    ],
  },
  {
    title: 'Tài nguyên',
    links: [
      { to: ROUTE_PATHS.TESTIMONIALS, label: 'Câu chuyện học viên' },
      { to: ROUTE_PATHS.COURSES, label: 'Blog chia sẻ' },
      { to: ROUTE_PATHS.CONTACT, label: 'Hỗ trợ kỹ thuật' },
      { to: ROUTE_PATHS.CONTACT, label: 'Liên hệ' },
    ],
  },
]);
