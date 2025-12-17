# 📋 Nội Dung Cần Bổ Sung Để Website Sinh Động & Chân Thực

> **Mục tiêu**: Biến CV-Profile từ "template" thành "portfolio cá nhân có hồn"

---

## ✅ Đánh Giá Hiện Trạng So Với Yêu Cầu

### Giao Diện (UI/UX)

| Yêu cầu | Trạng thái | Ghi chú |
|---------|------------|---------|
| Canva Tone (pastel + gradient + whitespace) | ✅ Đạt | Custom theme với 6 màu pastel |
| Zig-zag Layout | ✅ Đạt | ZigZagSection reusable, áp dụng đúng section |
| Hero gây ấn tượng 5 giây | ⚠️ Cần cải thiện | Thiếu ảnh thật, tagline chưa cá nhân hóa |
| Parallax background | ✅ Đạt | Framer Motion với useScroll |
| Scroll Animation | ✅ Đạt | ScrollReveal component |
| Responsive | ✅ Đạt | Tailwind responsive utilities |

### Chức Năng (Functional)

| Yêu cầu | Trạng thái | Ghi chú |
|---------|------------|---------|
| Fetch data từ API | ✅ Đạt | profileApi + useProfile hook |
| Chat Realtime UI | ✅ Đạt | ChatWidget với WebSocket + demo mode |
| Video Call UI | ✅ Đạt | VideoWidget với getUserMedia |
| Export PDF trigger | ✅ Đạt | Button + API call |
| Hover/expand chi tiết | ✅ Đạt | Publications collapsible |

### Zig-zag Compliance

| Section | Yêu cầu | Hiện trạng |
|---------|---------|------------|
| Hero | ✅ Zig-zag | ✅ Grid 2 cột |
| About | ✅ Zig-zag | ✅ ZigZagSection |
| Organization | ✅ Zig-zag | ✅ ZigZagSection reverse |
| Skills | ❌ Không zig-zag | ✅ Grid list (đúng) |
| Projects | ✅ Zig-zag | ✅ ZigZagSection + cards |
| Publications | ❌ Không zig-zag | ✅ List format (đúng) |
| Events | ✅ Zig-zag | ✅ ZigZagSection reverse |
| Hobbies | ✅ Zig-zag | ✅ ZigZagSection |

---

## 🎯 NỘI DUNG CẦN THÊM VÀO

### 1. Thông Tin Cá Nhân (ProfileDTO)

```typescript
// Cần cung cấp từ Backend hoặc file mock
{
  name: "Nguyễn Văn A",  // Tên thật
  headline: "AI Engineer | Machine Learning Researcher | ĐH Bách Khoa",
  avatar: "/images/avatar.jpg",  // ⚠️ CẦN ẢNH THẬT
  summary: "Kỹ sư AI với 5+ năm kinh nghiệm trong Computer Vision và NLP. 
            Đam mê xây dựng các hệ thống thông minh giải quyết vấn đề thực tế.
            Hiện đang nghiên cứu về Large Language Models tại...",
  email: "your.real.email@university.edu.vn",
  phone: "+84 xxx xxx xxx",
  location: "TP. Hồ Chí Minh, Việt Nam",
  socialLinks: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    website: "https://your-blog.dev"
  }
}
```

### 2. Hình Ảnh Cần Chuẩn Bị

| Loại | Kích thước đề xuất | Ghi chú |
|------|-------------------|---------|
| **Avatar** | 400x400px | Ảnh chân dung chuyên nghiệp, nền đơn sắc |
| **Hero Background** | 1920x1080px | Optional - gradient hiện tại cũng đẹp |
| **Project Thumbnails** | 800x450px (16:9) | Screenshot hoặc demo GIF |
| **Organization Logos** | 200x200px | Logo công ty/trường |
| **Event Photos** | 800x450px | Ảnh tham gia sự kiện |
| **Hobby Images** | 600x600px | Ảnh cá nhân liên quan sở thích |

> 💡 **Tip**: Đặt ảnh trong `frontend/public/images/`

### 3. Tổ Chức / Đơn Vị Công Tác (Organizations)

```typescript
[
  {
    id: "1",
    name: "Trường Đại học Bách Khoa - ĐHQG TP.HCM",
    role: "Nghiên cứu sinh / Giảng viên",
    logo: "/images/org/hcmut.png",
    startDate: "2020",
    endDate: null,  // null = "Present"
    description: "Giảng dạy môn Machine Learning, hướng dẫn đồ án tốt nghiệp..."
  },
  {
    id: "2", 
    name: "VinAI Research",
    role: "AI Research Intern",
    logo: "/images/org/vinai.png",
    startDate: "2019",
    endDate: "2020",
    description: "Nghiên cứu về Object Detection và Medical Imaging"
  }
]
```

### 4. Kỹ Năng (Skills)

```typescript
[
  {
    id: "1",
    name: "AI & Deep Learning",
    skills: [
      { id: "1", name: "PyTorch", level: "expert" },
      { id: "2", name: "TensorFlow", level: "advanced" },
      { id: "3", name: "Hugging Face Transformers", level: "advanced" },
      { id: "4", name: "Computer Vision (OpenCV, YOLO)", level: "expert" },
      { id: "5", name: "NLP (BERT, GPT)", level: "intermediate" }
    ]
  },
  {
    id: "2",
    name: "Programming",
    skills: [
      { id: "6", name: "Python", level: "expert" },
      { id: "7", name: "TypeScript/JavaScript", level: "advanced" },
      { id: "8", name: "Java (Spring Boot)", level: "intermediate" },
      { id: "9", name: "C++", level: "intermediate" }
    ]
  },
  {
    id: "3",
    name: "Tools & Platforms",
    skills: [
      { id: "10", name: "Docker & Kubernetes", level: "intermediate" },
      { id: "11", name: "AWS/GCP/Azure", level: "intermediate" },
      { id: "12", name: "Git & CI/CD", level: "advanced" },
      { id: "13", name: "MLflow, Weights & Biases", level: "intermediate" }
    ]
  }
]
```

### 5. Dự Án Nổi Bật (Projects)

> ⭐ **Quan trọng**: Dự án thể hiện năng lực thực tế

```typescript
[
  {
    id: "1",
    title: "Hệ Thống Nhận Dạng Khuôn Mặt Real-time",
    description: "Xây dựng pipeline nhận dạng khuôn mặt với độ chính xác 98.5% 
                  trên tập dữ liệu LFW, tối ưu cho edge devices (Jetson Nano).",
    tags: ["PyTorch", "FaceNet", "TensorRT", "FastAPI", "React"],
    thumbnail: "/images/projects/face-recognition.png",
    link: "https://demo.yourproject.com",
    github: "https://github.com/your-username/face-recognition"
  },
  {
    id: "2",
    title: "Chatbot Hỗ Trợ Sinh Viên (RAG + LLM)",
    description: "Chatbot sử dụng Retrieval-Augmented Generation để trả lời 
                  câu hỏi về quy chế, học phí, lịch học... với độ chính xác 92%.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    thumbnail: "/images/projects/chatbot.gif",
    link: "https://chatbot.university.edu.vn",
    github: "https://github.com/your-username/student-chatbot"
  },
  {
    id: "3",
    title: "Medical Image Segmentation",
    description: "Mô hình U-Net++ phân đoạn ảnh CT phổi, đạt Dice Score 0.89, 
                  hỗ trợ bác sĩ chẩn đoán COVID-19.",
    tags: ["TensorFlow", "U-Net", "Medical Imaging", "DICOM"],
    thumbnail: "/images/projects/medical-ai.png",
    github: "https://github.com/your-username/lung-segmentation"
  }
]
```

### 6. Bài Báo Khoa Học (Publications)

```typescript
[
  {
    id: "1",
    title: "Efficient Transformer Architectures for Vietnamese NLP Tasks",
    journal: "Journal of Artificial Intelligence Research (JAIR)",
    year: 2024,
    authors: ["Nguyễn Văn A", "Trần Thị B", "Prof. C"],
    doi: "10.1613/jair.1.XXXXX",
    abstract: "This paper proposes a novel lightweight transformer architecture 
               optimized for Vietnamese language understanding tasks..."
  },
  {
    id: "2",
    title: "Real-time Object Detection on Edge Devices: A Survey",
    conference: "IEEE/CVF Conference on Computer Vision (CVPR)",
    year: 2023,
    authors: ["Nguyễn Văn A", "Dr. D"],
    link: "https://openaccess.thecvf.com/content/CVPR2023/...",
    abstract: "A comprehensive survey on deploying object detection models 
               on resource-constrained edge devices..."
  }
]
```

### 7. Sự Kiện / Hội Thảo (Events)

```typescript
[
  {
    id: "1",
    title: "Vietnam AI Summit 2024",
    type: "conference",
    date: "2024-09",
    location: "Hà Nội, Việt Nam",
    role: "Speaker",
    description: "Trình bày về 'Ứng dụng LLM trong giáo dục đại học'",
    image: "/images/events/ai-summit-2024.jpg"
  },
  {
    id: "2",
    title: "Google Developer Student Club Workshop",
    type: "workshop",
    date: "2024-05",
    location: "ĐH Bách Khoa TP.HCM",
    role: "Instructor",
    description: "Hướng dẫn 50+ sinh viên về TensorFlow Lite và Mobile ML"
  },
  {
    id: "3",
    title: "VietAI Hackathon 2023",
    type: "hackathon",
    date: "2023-11",
    location: "Online",
    role: "Mentor",
    description: "Mentor cho các team xây dựng giải pháp AI for Social Good"
  }
]
```

### 8. Sở Thích Cá Nhân (Hobbies)

> 💡 **Tip**: Sở thích giúp tạo kết nối cảm xúc với người xem

```typescript
[
  {
    id: "1",
    name: "Nhiếp Ảnh",
    description: "Yêu thích chụp ảnh phong cảnh và street photography. 
                  Sử dụng Lightroom và Photoshop để hậu kỳ.",
    icon: "📷",
    image: "/images/hobbies/photography.jpg"
  },
  {
    id: "2",
    name: "Đọc Sách",
    description: "Đọc về AI ethics, cognitive science, và science fiction. 
                  Cuốn yêu thích: 'Thinking, Fast and Slow' - Daniel Kahneman.",
    icon: "📚"
  },
  {
    id: "3",
    name: "Chạy Bộ",
    description: "Chạy bộ 5km mỗi sáng để duy trì sức khỏe và tư duy minh mẫn. 
                  Đã hoàn thành VnExpress Marathon 2023.",
    icon: "🏃"
  },
  {
    id: "4",
    name: "Cờ Vua",
    description: "Rating ~1600 trên Chess.com. Cờ vua giúp rèn luyện 
                  tư duy chiến lược và kiên nhẫn.",
    icon: "♟️"
  }
]
```

---

## 🖼️ Hình Ảnh Placeholder Cần Thay Thế

Các emoji/icon placeholder cần thay bằng ảnh thật:

| Section | Placeholder hiện tại | Cần thay bằng |
|---------|---------------------|---------------|
| Hero | Avatar placeholder | Ảnh chân dung |
| About | 🎯 emoji | Ảnh cá nhân hoặc illustration |
| Organization | 🏢 🏛️ emoji | Logo công ty/trường |
| Projects | 🚀 emoji | Screenshot/GIF demo |
| Events | 🎤 🛠️ emoji | Ảnh sự kiện |
| Hobbies | 📷 📚 emoji | Ảnh minh họa sở thích |

---

## 📝 Tagline / Quote Gợi Ý

Thay thế các placeholder text:

**Hero Section:**
```
"Transforming data into intelligence, one model at a time."
"Building AI that understands, learns, and adapts."
"From research papers to production systems."
```

**About Section:**
```
"Tôi tin rằng AI không chỉ là công nghệ, mà là công cụ 
 để giải quyết những thách thức thực sự của xã hội."
```

**Footer:**
```
"Let's build something amazing together."
"Open to collaboration and new opportunities."
```

---

## 🚀 Checklist Hoàn Thiện

### Nội dung bắt buộc:
- [ ] Ảnh avatar chuyên nghiệp
- [ ] Tên + headline thật
- [ ] Email liên hệ thật
- [ ] Ít nhất 2 tổ chức/đơn vị công tác
- [ ] Ít nhất 3 dự án với mô tả chi tiết
- [ ] Ít nhất 1-2 bài báo/publication (nếu có)
- [ ] Ít nhất 2 sự kiện đã tham gia
- [ ] 3-4 sở thích cá nhân

### Nội dung nâng cao (tăng điểm ấn tượng):
- [ ] Logo tổ chức
- [ ] Ảnh/GIF demo dự án
- [ ] Ảnh sự kiện thực tế
- [ ] Link GitHub repositories
- [ ] Link demo live (nếu có)
- [ ] DOI bài báo (nếu có)

### Kiểm tra cuối cùng:
- [ ] Tất cả link hoạt động
- [ ] Ảnh hiển thị đúng
- [ ] Không còn placeholder text
- [ ] Responsive trên mobile
- [ ] PDF export đúng layout

---

## 🎨 Gợi Ý Cải Thiện UX

1. **Hero Section**: Thêm ảnh avatar thật với background blur nhẹ
2. **Projects**: Thêm GIF demo thay vì ảnh tĩnh
3. **Skills**: Có thể thêm progress bar cho mỗi skill
4. **Timeline**: Events có thể thêm vertical timeline
5. **Footer**: Thêm quote cá nhân signature

---

> 📌 **Lưu ý**: Tất cả data trên cần được cung cấp qua Backend API hoặc tạo file mock trong `frontend/src/mocks/` để test trước khi tích hợp.
