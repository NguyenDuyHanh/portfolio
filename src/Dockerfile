# ----------- Build stage -----------
FROM node:22-alpine AS builder

WORKDIR /app

# Nhận biến từ docker-compose
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Copy package trước để tận dụng cache
COPY package*.json ./

RUN npm ci

# Copy toàn bộ source
COPY . .

# Build Vite app (tạo thư mục dist)
RUN npm run build


# ----------- Production stage -----------
FROM nginx:alpine

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist từ stage build
COPY --from=builder /app/dist /usr/share/nginx/html

# Cấu hình cho SPA (quan trọng nếu dùng React Router)
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { try_files $uri $uri/ /index.html; } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
