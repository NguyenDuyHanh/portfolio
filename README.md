# 🚀 Modern Personal Portfolio

Website Portfolio cá nhân hiện đại, responsive và hiệu năng cao được xây dựng bằng **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **MobX**, hỗ trợ **Đa ngôn ngữ (i18n)** và tích hợp **CI/CD quy trình triển khai tự động qua GitHub Actions**.

🌐 **Live Demo**: [https://portfolio.duyhanh.site](https://portfolio.duyhanh.site)

![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![MobX](https://img.shields.io/badge/MobX-6-FF9955?style=for-the-badge&logo=mobx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

---

## 📌 Tổng Quan Dự Án

Dự án này là trang Portfolio cá nhân được thiết kế nhằm giới thiệu bản thân, kỹ năng chuyên môn, lịch sử kinh nghiệm làm việc, các dự án tiêu biểu và kênh thông tin liên hệ. 

Giao diện được tối ưu hóa cho trải nghiệm người dùng (UX/UI) mượt mà với hiệu ứng hoạt họa chuyển cảnh, khả năng tự động ghi nhớ chế độ Sáng/Tối (Light/Dark Mode), hỗ trợ chuyển đổi ngôn ngữ Việt - Anh linh hoạt, được đóng gói Docker và tích hợp quy trình **CI/CD tự động triển khai lên VPS**.

🌐 **Trải nghiệm Live Demo tại**: [https://portfolio.duyhanh.site](https://portfolio.duyhanh.site)

---

## ✨ Tính Năng Nổi Bật

- 🌐 **Live Demo Trực Tuyến**: Xem thử sản phẩm trực tiếp tại [https://portfolio.duyhanh.site](https://portfolio.duyhanh.site).
- 🎬 **Welcome Overlay**: Màn hình chào mừng tương tác ấn tượng khi truy cập lần đầu.
- 🌐 **Hỗ Trợ Đa Ngôn Ngữ (i18n)**: Chuyển đổi ngôn ngữ tức thì giữa **Tiếng Việt 🇻🇳** và **Tiếng Anh 🇬🇧** sử dụng `i18next`.
- 🌙 **Giao Diện Dark / Light Mode**: Quản lý trạng thái giao diện bằng **MobX**, tự động đồng bộ và lưu trữ trong `localStorage`.
- 📱 **Floating Navbar & Smooth Navigation**: Thanh điều hướng dạng viên thuốc (Pill Navigation) linh hoạt, hỗ trợ cuộn mượt đến từng phần trên trang.
- 💫 **Hiệu Ứng Animation Hấp Dẫn**: Tích hợp `framer-motion` cho các hiệu ứng Scroll Reveal, Stagger Grid khi hiển thị danh sách dự án và kỹ năng.
- 🧩 **Tổ Chức Component Mô-đun Hóa**: Các phần nội dung (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`, `Footer`) được tách biệt rõ ràng, dễ bảo trì và mở rộng.
- 🐳 **Đóng Gói Docker Sẵn Sàng**: Cấu hình Docker multi-stage build kết hợp Nginx Alpine tối ưu dung lượng và tốc độ tải ứng dụng SPA.
- 🔄 **CI/CD Triển Khai Tự Động**: Tích hợp GitHub Actions tự động build và deploy lên VPS mỗi khi có commit mới push lên nhánh `develop`.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

### **Frontend & Core**
| Công nghệ | Mô tả / Vai trò |
| :--- | :--- |
| **React 19** | Thư viện UI chính xây dựng giao diện |
| **Vite 7** | Build tool & Dev server tốc độ cao |
| **React Router v7** | Điều hướng và định tuyến SPA |
| **JavaScript (ESNext)** | Ngôn ngữ lập trình chính |

### **Styling & UI Components**
| Công nghệ | Mô tả / Vai trò |
| :--- | :--- |
| **Tailwind CSS v4** | Framework CSS utility-first mới nhất |
| **clsx & tailwind-merge** | Xử lý nối class CSS linh hoạt và tối ưu |
| **class-variance-authority (cva)** | Quản lý biến thể UI component |
| **Lucide React & React Icons** | Bộ icon phong phú và sắc nét |
| **Flag Icons** | Cung cấp biểu tượng cờ quốc gia cho bộ chuyển đổi ngôn ngữ |

### **State Management & Animations**
| Công nghệ | Mô tả / Vai trò |
| :--- | :--- |
| **MobX 6 & mobx-react-lite** | Quản lý state toàn cục cho Theme Store |
| **Framer Motion 12** | Thư viện tạo hiệu ứng chuyển động và hoạt họa mượt mà |

### **DevOps, CI/CD & Deployment**
| Công nghệ | Mô tả / Vai trò |
| :--- | :--- |
| **GitHub Actions** | Tự động hóa quy trình CI/CD deployment |
| **Appleboy SSH Action** | Kết nối SSH an toàn tới máy chủ VPS |
| **Docker & Docker Compose** | Container hóa và triển khai ứng dụng bằng Nginx |
| **i18next & react-i18next** | Hệ thống quản lý và xử lý đa ngôn ngữ |

---

## 📂 Cấu Trúc Thư Mục (Project Structure)

```text
portfolio/
├── .github/                 # Cấu hình GitHub Actions CI/CD
│   └── workflows/
│       └── deploy.yml       # Workflow tự động deploy lên VPS
├── public/                  # Các tài nguyên tĩnh công khai
│   ├── favicon.svg          # Favicon dự án
│   ├── logos/               # Logo công nghệ / đối tác
│   └── locales/             # File dịch ngôn ngữ JSON
│       ├── en/              # Bản dịch Tiếng Anh
│       │   └── translation.json
│       └── vi/              # Bản dịch Tiếng Việt
│           └── translation.json
├── src/                     # Mã nguồn chính của ứng dụng
│   ├── animations/          # Component & helper tạo hiệu ứng (ScrollReveal, StaggerGrid)
│   ├── assets/              # Hình ảnh, font chữ tĩnh trong src
│   ├── components/          # Component giao diện dùng chung
│   │   ├── Social/          # Component liên kết mạng xã hội
│   │   ├── icons/           # Component biểu tượng tùy chỉnh
│   │   └── ui/              # Reusable UI elements (button, dropdown, tooltip...)
│   ├── lib/                 # Utility functions (utils.js)
│   ├── pages/               # Trang chính ứng dụng
│   │   ├── Home/            # Trang chủ Portfolio
│   │   │   ├── index.jsx    # Layout tổng hợp trang chủ
│   │   │   └── sections/    # Các phần giao diện chính của trang chủ
│   │   │       ├── HeaderNav.jsx         # Thanh điều hướng nổi
│   │   │       ├── HeroSection.jsx       # Section giới thiệu đầu trang
│   │   │       ├── AboutSection.jsx      # Section giới thiệu bản thân
│   │   │       ├── ExperienceSection.jsx # Section kinh nghiệm làm việc
│   │   │       ├── ProjectsSection.jsx   # Section dự án đã thực hiện
│   │   │       ├── SkillsSection.jsx     # Section kỹ năng chuyên môn
│   │   │       ├── ContactSection.jsx    # Section liên hệ
│   │   │       └── FooterSection.jsx     # Chân trang
│   │   ├── Welcome.jsx      # Overlay màn hình chào mừng
│   │   └── NotFound.jsx     # Trang lỗi 404
│   ├── stores/              # Quản lý state với MobX (themeStore.js)
│   ├── App.jsx              # Main Component chứa router & overlay
│   ├── i18n.js              # Cấu hình khởi tạo i18next
│   ├── index.css            # Style toàn cục & cài đặt Tailwind CSS v4
│   └── main.jsx             # Entry point của ứng dụng React
├── .dockerignore            # Loại bỏ file thừa khi build Docker
├── Dockerfile               # Cấu hình Docker Multi-stage build
├── docker-compose.yml       # Cấu hình Docker Compose để khởi chạy dịch vụ
├── eslint.config.js         # Cấu hình kiểm tra mã nguồn ESLint
├── index.html               # File HTML chính
├── package.json             # Danh sách dependencies & scripts
└── vite.config.js           # Cấu hình Vite bundler
```

---

## 🔄 Quy Trình CI/CD & Triển Khai Tự Động (Automated Deployment)

Dự án được thiết lập quy trình **Continuous Integration / Continuous Deployment (CI/CD)** hoàn toàn tự động thông qua GitHub Actions ([deploy.yml](file:///d:/personal_workspace/portfolio/.github/workflows/deploy.yml)).

### **Cách Thức Hoạt Động:**
1. **Trigger Event**: Quy trình tự động kích hoạt khi có sự kiện `push` mã nguồn mới lên nhánh `develop`.
2. **SSH Connection**: Giám sát công việc (job) trên runner `ubuntu-latest`, sử dụng `appleboy/ssh-action` để truy cập an toàn vào máy chủ VPS thông qua SSH Key.
3. **Automated Commands**:
   - Truy cập vào thư mục ứng dụng trên máy chủ: `cd /opt/apps/portfolio`
   - Kéo mã nguồn mới nhất: `git pull origin develop`
   - Tự động build và tái khởi chạy container: `docker compose up -d --build --remove-orphans`

### **Cấu Hình GitHub Secrets Cần Thiết:**
Để quy trình CI/CD hoạt động, cần thiết lập các giá trị biến trong phần **Settings -> Secrets and variables -> Actions** trên GitHub Repository:
- `HOST`: Địa chỉ IP / Domain của máy chủ VPS.
- `USERNAME`: Tên người dùng truy cập VPS (ví dụ: `root` hoặc `ubuntu`).
- `VPS_SSH_KEY`: Private Key của SSH Key dùng để xác thực không cần mật khẩu.

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy Local

### **1. Yêu Cầu Môi Trường**
Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các công cụ sau trên máy tính:
- **Node.js**: Phiên bản 18 trở lên (Khuyến nghị Node 20 hoặc Node 22)
- **npm** (đi kèm Node.js) hoặc **yarn** / **pnpm**

### **2. Cài Đặt Ứng Dụng Tại Local**

1. **Clone dự án về máy:**
   ```bash
   git clone https://github.com/NguyenDuyHanh/portfolio.git
   cd portfolio
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Khởi chạy môi trường phát triển (Development mode):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt và truy cập: `http://localhost:5173`

---

## 📜 Danh Sách Lệnh (Available Scripts)

Trong thư mục dự án, bạn có thể thực thi các lệnh npm sau:

| Lệnh | Mô tả |
| :--- | :--- |
| `npm run dev` | Chạy ứng dụng ở môi trường phát triển với Hot Module Replacement (HMR). |
| `npm run build` | Đóng gói ứng dụng tối ưu cho môi trường Production vào thư mục `dist/`. |
| `npm run preview` | Khởi chạy máy chủ cục bộ để xem trước bản build từ thư mục `dist/`. |
| `npm run lint` | Kiểm tra cú pháp và quy chuẩn mã nguồn với ESLint. |

---

## 🐳 Triển Khai Thủ Công Với Docker (Docker Deployment)

Nếu muốn khởi chạy thử nghiệm Docker tại máy cá nhân hoặc máy chủ độc lập:

### **Khởi Chạy Bằng Docker Compose:**

Chạy lệnh sau tại thư mục gốc của dự án:
```bash
docker-compose up -d --build
```

Sau khi container khởi chạy thành công, truy cập ứng dụng tại:
👉 `http://localhost:4000`

Để dừng dịch vụ Docker:
```bash
docker-compose down
```

---

## 🌐 Hướng Dẫn Tùy Chỉnh Nội Dung (Customization)

### **1. Chỉnh Sửa Bản Dịch Ngôn Ngữ (i18n)**
Nội dung hiển thị đa ngôn ngữ nằm trong thư mục `public/locales/`:
- Tiếng Việt: [public/locales/vi/translation.json](file:///d:/personal_workspace/portfolio/public/locales/vi/translation.json)
- Tiếng Anh: [public/locales/en/translation.json](file:///d:/personal_workspace/portfolio/public/locales/en/translation.json)

### **2. Cập Nhật Thông Tin Cá Nhân**
Các section nội dung nằm trong thư mục [src/pages/Home/sections](file:///d:/personal_workspace/portfolio/src/pages/Home/sections):
- **HeroSection.jsx**: Thay đổi tên, tiêu đề cá nhân, câu chào mừng và ảnh đại diện.
- **AboutSection.jsx**: Chỉnh sửa tiểu sử, định hướng nghề nghiệp và thông tin cá nhân.
- **ExperienceSection.jsx**: Cập nhật lịch sử làm việc và thành tựu tại các công ty.
- **ProjectsSection.jsx**: Thêm/sửa danh sách dự án, đường dẫn GitHub, Demo link và công nghệ sử dụng.
- **SkillsSection.jsx**: Cập nhật danh sách các kỹ năng Frontend, Backend, Tools...
- **ContactSection.jsx**: Cập nhật Email, Số điện thoại, địa chỉ và form liên hệ.

---

## 📄 Giấy Phép (License)

Dự án này được bảo hộ dưới giấy phép **MIT License**. Bạn có thể tự do tham khảo, tùy chỉnh và sử dụng cho mục đích cá nhân.

---

<p center align="center">
  Crafted with ❤️ using React 19 & Tailwind CSS v4 | Live Demo: <a href="https://portfolio.duyhanh.site" target="_blank">portfolio.duyhanh.site</a>
</p>
