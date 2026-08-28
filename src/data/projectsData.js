export const projectsData = [
  {
    id: "hrm",
    title: "HRM Enterprise System",
    subtitle: "Hệ thống Quản trị Nhân sự Doanh nghiệp toàn diện",
    category: "fullstack",
    categoryLabel: "Fullstack",
    shortDescription:
      "Hệ thống Quản trị Nhân sự doanh nghiệp toàn diện với phân quyền RBAC 3 cấp. Tự động hóa tính lương, chấm công, nghỉ phép, tuyển dụng và xuất báo cáo Excel.",
    fullDescription:
      "HRM Enterprise System là nền tảng quản trị nhân sự nội bộ dành cho doanh nghiệp, đáp ứng đầy đủ nhu cầu vận hành của Super Admin, HR Manager và Employee. Hệ thống được thiết kế theo kiến trúc layered trên nền Spring Boot 3 và React 18, giúp tự động hóa toàn bộ quy trình nhân sự phức tạp từ tính lương Gross/Net, quản lý chấm công, nghỉ phép đến theo dõi dự án và công việc.",
    image:
      "https://res.cloudinary.com/djtqud6z0/image/upload/v1787906532/Screenshot_2026-08-28_154140_yo64kb.png",
    role: "Fullstack Developer / Software Architect",
    timeline: "03/2026 - Present",
    technologies: [
      "Spring Boot",
      "Java",
      "React",
      "PostgreSQL",
      "Docker",
      "MUI",
      "Tailwind CSS",
    ],
    demoUrl: "https://hrm.duyhanh.site",
    githubUrl: "https://github.com/NguyenDuyHanh/HRM",
    features: [
      {
        title: "Phân quyền RBAC 3 Cấp",
        description: "Phân quyền chặt chẽ cho Super Admin, HR Manager và Employee với Spring Security & JWT stateless auth.",
      },
      {
        title: "Tự động hóa Tính lương (Payroll)",
        description: "Tự động tính lương Gross/Net, bảo hiểm (BHXH 8%, BHYT 1.5%), thuế TNCN (PIT) từ timesheet đã duyệt.",
      },
      {
        title: "Chấm công & Quản lý Nghỉ phép",
        description: "Quản lý timesheet theo ngày/tuần, duyệt đơn nghỉ phép 5 loại hình với quy trình phê duyệt linh hoạt.",
      },
      {
        title: "Tuyển dụng & Hồ sơ Nhân sự",
        description: "Quản lý chiến dịch tuyển dụng, pipeline ứng viên, hợp đồng lao động và lịch sử vị trí công tác.",
      },
      {
        title: "Quản lý Dự án & Task",
        description: "Quản lý dự án, phân công công việc cho nhân viên và theo dõi tiến độ theo quy trình trạng thái tùy chỉnh.",
      },
      {
        title: "Xuất báo cáo Excel chuẩn xác",
        description: "Xuất dữ liệu lương, chấm công, biến động nhân sự ra file Excel (.xlsx) chuẩn định dạng với Apache POI.",
      },
    ],
    techStackDetails: {
      backend: ["Java 21", "Spring Boot 4.0.5", "Spring Security + JWT", "Spring Data JPA", "Hibernate", "Apache POI"],
      frontend: ["React 18", "Vite", "Material UI", "Tailwind CSS", "Zustand", "Axios"],
      database: ["PostgreSQL 16"],
      devops: ["Docker", "Docker Compose Multi-container", "Cloudinary Storage"],
    },
  },
  {
    id: "portfolio",
    title: "Modern Personal Portfolio",
    subtitle: "Website Portfolio cá nhân hiện đại & Tự động hóa CI/CD",
    category: "frontend",
    categoryLabel: "Frontend & UI/UX",
    shortDescription:
      "Website Portfolio cá nhân chuẩn SPA hiện đại, tối ưu UX/UI với chế độ Dark/Light mode, đa ngôn ngữ i18n, hiệu ứng Framer Motion mượt mà và CI/CD tự động deploy VPS.",
    fullDescription:
      "Modern Personal Portfolio là trang giới thiệu bản thân, kỹ năng chuyên môn, kinh nghiệm và các dự án cá nhân được xây dựng trên nền tảng React 19 và Vite 7. Ứng dụng tập trung vào trải nghiệm người dùng với tốc độ tải trang vượt trội, giao diện mượt mà, hỗ trợ chuyển đổi đa ngôn ngữ Việt - Anh thời gian thực và được thiết lập quy trình CI/CD triển khai tự động lên VPS thông qua GitHub Actions và Docker.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    role: "Frontend Developer / DevOps",
    timeline: "2026",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "MobX",
      "Docker",
      "GitHub Actions",
    ],
    demoUrl: "https://portfolio.duyhanh.site",
    githubUrl: "https://github.com/NguyenDuyHanh/portfolio",
    features: [
      {
        title: "Đa ngôn ngữ (i18n)",
        description: "Hỗ trợ chuyển đổi tức thì giữa Tiếng Việt 🇻🇳 và Tiếng Anh 🇬🇧 sử dụng i18next.",
      },
      {
        title: "Dark / Light Mode",
        description: "Quản lý trạng thái giao diện toàn cục với MobX Store, tự động đồng bộ theo hệ thống và lưu localStorage.",
      },
      {
        title: "Welcome Overlay & Animations",
        description: "Màn hình chào mừng ấn tượng, hiệu ứng cuộn mượt và Framer Motion 12 Stagger Grid.",
      },
      {
        title: "Tối ưu hóa SPA & UX/UI",
        description: "Floating Pill Navigation, tổ chức component mô-đun hóa sạch sẽ và khả năng phản hồi responsive hoàn hảo.",
      },
      {
        title: "Đóng gói Docker Multi-stage",
        description: "Dockerfile multi-stage kết hợp Nginx Alpine tối ưu dung lượng container và tốc độ tải trang tĩnh.",
      },
      {
        title: "CI/CD Tự động triển khai",
        description: "GitHub Actions tự động SSH, pull code mới và tái khởi chạy Docker container trên VPS khi push code.",
      },
    ],
    techStackDetails: {
      frontend: ["React 19", "Vite 7", "React Router v7", "Tailwind CSS v4", "clsx & tailwind-merge"],
      animationsAndState: ["Framer Motion 12", "MobX 6 & mobx-react-lite", "Lucide React Icons"],
      i18n: ["i18next", "react-i18next", "Flag Icons"],
      devops: ["Docker Multi-stage", "Nginx Alpine", "GitHub Actions CI/CD", "VPS Deployment"],
    },
  },
];
