export const trustedBrands = ['PTIT', 'FPT', 'Viettel', 'VTC', 'VNU', 'MOET'];

export const categories = [
  {
    code: 'WEB',
    title: 'Lập trình Web',
    description: 'Frontend, backend, full-stack theo lộ trình.',
    image: '/images/cat-web.jpg',
    alt: 'Lập trình web',
  },
  {
    code: 'AI',
    title: 'Data & AI',
    description: 'Phân tích dữ liệu, machine learning ứng dụng.',
    image: '/images/cat-ai.jpg',
    alt: 'Phân tích dữ liệu và AI',
  },
  {
    code: 'EXAM',
    title: 'Thi thử THPT',
    description: 'Đề bám sát cấu trúc, chấm điểm nhanh.',
    image: '/images/cat-exam.jpg',
    alt: 'Thi thử THPT',
  },
  {
    code: 'ENG',
    title: 'Ngoại ngữ',
    description: 'Lộ trình IELTS, TOEIC, tiếng Anh giao tiếp.',
    image: '/images/cat-eng.jpg',
    alt: 'Ngoại ngữ',
  },
  {
    code: 'UX',
    title: 'Thiết kế UI/UX',
    description: 'Figma, design system, nghiên cứu người dùng.',
    image: '/images/cat-ux.jpg',
    alt: 'Thiết kế UI/UX',
  },
  {
    code: 'MKT',
    title: 'Marketing số',
    description: 'Performance, content, thương mại điện tử.',
    image: '/images/cat-mkt.jpg',
    alt: 'Marketing số',
  },
  {
    code: 'SOFT',
    title: 'Kỹ năng mềm',
    description: 'Thuyết trình, quản lý thời gian, tư duy.',
    image: '/images/cat-soft.jpg',
    alt: 'Kỹ năng mềm',
  },
  {
    code: 'CS',
    title: 'Khoa học máy tính',
    description: 'Cấu trúc dữ liệu, thuật toán, nền tảng.',
    image: '/images/cat-cs.jpg',
    alt: 'Khoa học máy tính',
  },
];

export const courses = [
  {
    title: 'React + Vite cho người mới bắt đầu',
    author: 'Nguyễn Minh Khôi',
    rating: '4,9/5',
    duration: '18 giờ',
    price: '299.000đ',
    image: '/images/course-react.jpg',
    alt: 'React + Vite cho người mới bắt đầu',
    tags: [
      { label: 'Mới' },
      { label: 'Cơ bản', variant: 'ghost' },
    ],
  },
  {
    title: 'Python cho phân tích dữ liệu thực chiến',
    author: 'Lê Ngọc Anh',
    rating: '4,8/5',
    duration: '24 giờ',
    price: '359.000đ',
    image: '/images/course-python.jpg',
    alt: 'Python cho phân tích dữ liệu thực chiến',
    tags: [
      { label: 'Bán chạy' },
      { label: 'Trung bình', variant: 'ghost' },
    ],
  },
  {
    title: 'Java Spring Boot Microservices',
    author: 'Trần Quốc Huy',
    rating: '4,7/5',
    duration: '26 giờ',
    price: '449.000đ',
    image: '/images/course-java.jpg',
    alt: 'Java Spring Boot Microservices',
    tags: [{ label: 'Chuyên sâu' }],
  },
  {
    title: 'SQL & Data Modeling cho doanh nghiệp',
    author: 'Phạm Hải Yến',
    rating: '4,8/5',
    duration: '14 giờ',
    price: '199.000đ',
    image: '/images/course-sql.jpg',
    alt: 'SQL và Data Modeling cho doanh nghiệp',
    tags: [
      { label: 'Nền tảng' },
      { label: 'Doanh nghiệp', variant: 'ghost' },
    ],
  },
  {
    title: 'Giải đề Toán THPT theo chuyên đề',
    author: 'Ngô Thảo Vy',
    rating: '4,9/5',
    duration: '12 giờ',
    price: 'Miễn phí',
    image: '/images/course-math.jpg',
    alt: 'Giải đề Toán THPT theo chuyên đề',
    tags: [
      { label: 'Miễn phí' },
      { label: 'Luyện thi', variant: 'ghost' },
    ],
  },
  {
    title: 'UI/UX Foundation: từ nghiên cứu đến prototype',
    author: 'Đỗ Nhật Nam',
    rating: '4,8/5',
    duration: '20 giờ',
    price: '279.000đ',
    image: '/images/course-uiux.jpg',
    alt: 'UI/UX Foundation từ nghiên cứu đến prototype',
    tags: [
      { label: 'Mới' },
      { label: 'Portfolio', variant: 'ghost' },
    ],
  },
];

export const stats = [
  {
    value: '32.000+',
    description: 'Đề thi chuẩn hóa, cập nhật theo từng môn.',
  },
  {
    value: '6.500+',
    description: 'Lớp học đang hoạt động trên toàn quốc.',
  },
  {
    value: '4.200+',
    description: 'Giảng viên và chuyên gia đóng góp nội dung.',
  },
  {
    value: '98%',
    description: 'Báo cáo tiến độ được nộp đúng hạn.',
  },
];

export const testimonials = [
  {
    name: 'Lê Thu Hà',
    role: 'Trưởng bộ môn Toán',
    avatar: '/images/avatar-1.jpg',
    quote:
      'Hệ thống đề thi và chấm tự động giúp giáo viên tiết kiệm thời gian, học viên nhận phản hồi ngay sau mỗi bài làm.',
  },
  {
    name: 'Nguyễn Văn Thành',
    role: 'Giảng viên Lập trình',
    avatar: '/images/avatar-2.jpg',
    quote:
      'Giao diện khóa học rõ ràng, ban giảng viên có thể tạo lộ trình và quản lý lớp học dễ dàng như một marketplace chuyên nghiệp.',
  },
  {
    name: 'Trần Minh Đức',
    role: 'Sinh viên PTIT',
    avatar: '/images/avatar-3.jpg',
    quote:
      'Hỗ trợ cả học video và luyện bài tập, có thống kê tiến độ nên mình học đều và theo kịp lộ trình.',
  },
];

export const aboutValues = [
  {
    title: 'Lộ trình học rõ ràng',
    description: 'Mỗi khóa học đều có mục tiêu, timeline và checklist theo tuần.',
  },
  {
    title: 'Đánh giá minh bạch',
    description: 'Bài tập, quiz, đề thi và phản hồi được đồng bộ trong một dashboard.',
  },
  {
    title: 'Tối ưu cho giảng viên',
    description: 'Giảng viên quản lý nhiều lớp học với báo cáo tiến độ tự động.',
  },
  {
    title: 'Học ở mọi thiết bị',
    description: 'Nội dung hiển thị tốt trên desktop, tablet và điện thoại.',
  },
];

export const contactChannels = [
  {
    title: 'Tư vấn khóa học',
    description: 'Đội ngũ học vụ hỗ trợ chọn lộ trình phù hợp với mục tiêu nghề nghiệp.',
    actionLabel: 'Gửi email',
    href: 'mailto:hello@pvhub.vn',
  },
  {
    title: 'Hỗ trợ kỹ thuật',
    description: 'Giải đáp lỗi tài khoản, lớp học, nộp bài và chấm điểm trực tuyến.',
    actionLabel: 'Gọi hotline',
    href: 'tel:+84901234567',
  },
  {
    title: 'Hợp tác doanh nghiệp',
    description: 'Triển khai chương trình đào tạo nội bộ và nền tảng thi đánh giá năng lực.',
    actionLabel: 'Liên hệ ngay',
    href: 'mailto:partnership@pvhub.vn',
  },
];
