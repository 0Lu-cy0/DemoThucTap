# Hướng dẫn code Frontend (ReactJS) — Website CV–Profile (Canva tone)

Tài liệu này tổng hợp yêu cầu từ đề bài PDF và phân tích [README/PhanTich.md](PhanTich.md), nhằm hướng dẫn triển khai Frontend **đúng tiêu chí chấm**, rõ ràng từng bước và từng component.

---

## 1) Frontend phải làm gì (scope chuẩn)

Frontend chịu trách nhiệm tạo ra **một sản phẩm kể chuyện bằng scroll** (không phải web thông tin đơn thuần):
- UI/UX theo Figma, đúng **Canva tone** (pastel + gradient nhẹ + whitespace).
- **Zig-zag layout có chủ đích** cho các section yêu cầu.
- **Scroll animation + parallax nhẹ** (hero + chuyển tiếp section).
- Render dữ liệu từ **REST API**.
- Chat realtime UI qua **WebSocket/STOMP**.
- Video call UI mức **demo**.
- Nút **Export PDF** (FE trigger → backend trả file → FE download).

Out-of-scope (FE không làm): database, logic nghiệp vụ backend, signaling WebRTC phức tạp.

---

## 2) Quy tắc thiết kế bắt buộc (Design DNA)

### 2.1 Canva tone
- Pastel colors, gradient nhẹ, không gắt.
- Typography hiện đại, dễ đọc (ưu tiên system font sạch).
- Whitespace rộng, nhịp thở rõ.
- Motion tinh tế, không “màu mè”.

### 2.2 Zig-zag rules (bắt buộc)
Zig-zag áp dụng cho:
- Hero section
- Thông tin cá nhân (About / Personal Information)
- Tổ chức / Đơn vị công tác (Organization)
- Dự án tiêu biểu (Featured Projects)
- Sự kiện / Hội thảo (Events / Conferences)
- Sở thích cá nhân (Hobbies)

Không zig-zag cho:
- Skills list chi tiết
- Publications list dài

### 2.3 Motion rules
- Scroll-triggered: fade/slide/scale nhẹ.
- Parallax nhẹ: hero background + transition giữa section.
- Ưu tiên mượt trên mobile; tôn trọng `prefers-reduced-motion`.

---

## 3) Section-level UX Design (bắt buộc)

| Section | Zig-zag | UX Goal | Animation |
|---|---:|---|---|
| Hero | Yes | Ấn tượng trong 5 giây: chuyên nghiệp, hiện đại, calm | Parallax nền nhẹ + fade/slide vào |
| About / Personal Info | Yes | Kể câu chuyện “tôi là ai” rõ ràng, dễ đọc | Scroll fade + image zoom nhẹ khi hover |
| Organization | Yes | Tạo credibility học thuật/công việc | Scroll slide-in, icon/image hover |
| Skills | No | Tra cứu nhanh kỹ năng, không làm người xem mệt | Stagger list nhẹ (không zig-zag) |
| Featured Projects | Yes | Thể hiện product thinking + kỹ thuật | Card hover + scroll reveal |
| Publications (danh sách dài) | No | Dễ scan, tránh rối | Collapse/expand nhẹ (nếu Figma có) hoặc list gọn |
| Events / Conferences | Yes | Tăng độ “active” nghề nghiệp | Timeline fade/slide |
| Hobbies | Yes | Tạo cảm xúc, cá nhân hoá | Scroll fade + ảnh/illustration hover |
| Chat Widget | Floating (không tính zig-zag) | Tương tác trực tiếp, gọn không phá storytelling | Open/close slide + message appear |
| Video Widget/Section | Demo (không tính zig-zag) | “Có video trực tiếp” đúng đề, UI sạch | Open/close + button states |
| Footer | No | Dấu ấn cá nhân cuối trang | Subtle fade |

---

## 4) Kiến trúc React (component rõ ràng, không over-engineer)

Nguyên tắc:
- **1 main component / 1 section**.
- Tách bạch: **Layout** (bố cục) / **Content** (dữ liệu) / **Motion** (animation).
- Tránh abstraction thừa; dùng reusable component đúng chỗ: `ZigZagSection`, `SectionHeader`, `Card`.

### Component bắt buộc (từ yêu cầu)
- `Hero`
- `About`
- `Organization`
- `Skills`
- `Projects`
- `Publications`
- `Events`
- `Hobbies`
- `ChatWidget`
- `VideoWidget` (demo)
- `Footer`

### Reusable bắt buộc để “ăn điểm senior FE”
- `ZigZagSection` (nhận props: `reverse`, `title`, `subtitle`, `media`, `children`)
- `MainLayout` (wrap toàn trang, max-width, spacing, background/gradient nhẹ)
- `ScrollReveal` (bọc animation khi vào viewport)

---

## 5) Cấu trúc thư mục FE đề xuất (Vite + React)

Tạo/chuẩn hoá theo cấu trúc sau trong [frontend/src](../frontend/src):

- [frontend/src/app/App.tsx](../frontend/src/App.tsx)
- [frontend/src/pages/CvProfilePage.tsx](../frontend/src/pages/CvProfilePage.tsx)
- [frontend/src/pages/CvProfilePage.css](../frontend/src/pages/CvProfilePage.css)

### Thư mục components
- [frontend/src/components/layout/MainLayout.tsx](../frontend/src/components/layout/MainLayout.tsx)
- [frontend/src/components/layout/MainLayout.css](../frontend/src/components/layout/MainLayout.css)
- [frontend/src/components/layout/ZigZagSection.tsx](../frontend/src/components/layout/ZigZagSection.tsx)
- [frontend/src/components/layout/ZigZagSection.css](../frontend/src/components/layout/ZigZagSection.css)

### Section components (1 file/section)
- [frontend/src/components/sections/HeroSection.tsx](../frontend/src/components/sections/HeroSection.tsx)
- [frontend/src/components/sections/AboutSection.tsx](../frontend/src/components/sections/AboutSection.tsx)
- [frontend/src/components/sections/OrganizationSection.tsx](../frontend/src/components/sections/OrganizationSection.tsx)
- [frontend/src/components/sections/SkillsSection.tsx](../frontend/src/components/sections/SkillsSection.tsx)
- [frontend/src/components/sections/ProjectsSection.tsx](../frontend/src/components/sections/ProjectsSection.tsx)
- [frontend/src/components/sections/PublicationsSection.tsx](../frontend/src/components/sections/PublicationsSection.tsx)
- [frontend/src/components/sections/EventsSection.tsx](../frontend/src/components/sections/EventsSection.tsx)
- [frontend/src/components/sections/HobbiesSection.tsx](../frontend/src/components/sections/HobbiesSection.tsx)
- [frontend/src/components/sections/FooterSection.tsx](../frontend/src/components/sections/FooterSection.tsx)

### Widgets
- [frontend/src/components/widgets/ChatWidget.tsx](../frontend/src/components/widgets/ChatWidget.tsx)
- [frontend/src/components/widgets/VideoWidget.tsx](../frontend/src/components/widgets/VideoWidget.tsx)

### Data layer
- [frontend/src/api/http.ts](../frontend/src/api/http.ts)
- [frontend/src/api/profileApi.ts](../frontend/src/api/profileApi.ts)
- [frontend/src/api/chatApi.ts](../frontend/src/api/chatApi.ts)
- [frontend/src/hooks/useProfile.ts](../frontend/src/hooks/useProfile.ts)
- [frontend/src/hooks/useChat.ts](../frontend/src/hooks/useChat.ts)

### Types
- [frontend/src/types/profile.ts](../frontend/src/types/profile.ts)
- [frontend/src/types/skills.ts](../frontend/src/types/skills.ts)
- [frontend/src/types/project.ts](../frontend/src/types/project.ts)
- [frontend/src/types/publication.ts](../frontend/src/types/publication.ts)
- [frontend/src/types/event.ts](../frontend/src/types/event.ts)
- [frontend/src/types/chat.ts](../frontend/src/types/chat.ts)

### Styling base
- [frontend/src/index.css](../frontend/src/index.css)

---

## 6) Lộ trình code FE (tách bước rõ ràng)

### Bước 1 — Setup UI nền (Canva tone)
Mục tiêu: có nền sạch, whitespace chuẩn, typography rõ.
- `index.css`: set body scroll bình thường, font, base spacing.
- `MainLayout`: đặt max-width, padding responsive, background/gradient nhẹ (theo Figma).

Kết quả kiểm tra:
- Mở trang thấy “calm + professional”, không bị center như template Vite.

### Bước 2 — Skeleton trang CvProfilePage
Mục tiêu: dựng flow kể chuyện theo thứ tự section.
- `CvProfilePage`: render lần lượt các section: Hero → About → Organization → Skills → Projects → Publications → Events → Hobbies → Footer.
- `ChatWidget` và `VideoWidget`: nằm “floating”, không phá flow.

Kết quả kiểm tra:
- Scroll mượt từ đầu đến cuối, không rối.

### Bước 3 — ZigZagSection reusable
Mục tiêu: đảm bảo zig-zag đúng yêu cầu và nhất quán.
- Props:
  - `reverse: boolean` để đổi trái/phải
  - `media`: ảnh/illustration/video thumbnail
  - `children`: nội dung text
- Áp dụng zig-zag cho đúng các section quy định; skills/publications dài thì dùng layout list.

Kết quả kiểm tra:
- Reviewer nhìn là thấy zig-zag “có chủ đích”, không ngẫu hứng.

### Bước 4 — Scroll animation + Parallax (Framer Motion)
Mục tiêu: motion nhẹ, sang.
- `ScrollReveal`: dùng `whileInView` + `viewport={{ once: true, amount: 0.25 }}`.
- Hero parallax: translateY nhẹ theo scroll (giới hạn biên độ, có guard `prefers-reduced-motion`).

Kết quả kiểm tra:
- Mobile không lag; animation không “phô”.

### Bước 5 — Data rendering từ REST API (không hardcode)
Mục tiêu: đúng yêu cầu “FE fetch data”.
- `http.ts`: wrapper fetch (baseURL, json, error).
- `profileApi.ts`: các hàm:
  - `getProfile()`
  - `getSkills()`
  - `getProjects()`
  - `getPublications()`
  - `getEvents()`
- Hooks:
  - `useProfile()` trả `status/data/error`.

Kết quả kiểm tra:
- Khi backend chưa sẵn: UI có trạng thái loading/error rõ ràng (không thêm feature).

### Bước 6 — Chat realtime UI (WebSocket/STOMP)
Mục tiêu: demo-level nhưng UX mượt.
- `ChatWidget`:
  - Floating button mở/đóng.
  - List tin nhắn (gửi/nhận) + timestamp.
  - Input + send.
- `useChat()`:
  - Connect WebSocket
  - Subscribe stream
  - Append message

Kết quả kiểm tra:
- Chat hiển thị realtime; đóng mở không ảnh hưởng scroll.

### Bước 7 — Video call UI (demo)
Mục tiêu: đúng đề “có khu vực video trực tiếp”.
- `VideoWidget`:
  - Local + remote video element
  - Buttons: Start / End / Mute
- Demo-level: ưu tiên UI state rõ, không cần call production ổn định.

Kết quả kiểm tra:
- UI thể hiện đầy đủ controls và video frames.

### Bước 8 — Export PDF
Mục tiêu: click là tải PDF.
- Button “Export PDF” đặt ở cuối trang hoặc header (theo Figma).
- FE gọi endpoint backend (ví dụ `GET /api/pdf` hoặc `POST /api/pdf`) → nhận `blob` → download.
- PDF phải **exclude Chat/Video** (đề yêu cầu CV sạch, chat/video chỉ demo tương tác).

Kết quả kiểm tra:
- Tải được file PDF, layout A4 gọn gàng.

---

## 7) Hợp đồng API tối thiểu (FE cần backend cung cấp)

REST (gợi ý tên endpoint; backend có thể khác, FE map lại):
- `GET /api/profile`
- `GET /api/skills`
- `GET /api/projects`
- `GET /api/publications`
- `GET /api/events`
- `GET /api/pdf` (trả PDF) hoặc `POST /api/pdf` (nhận payload lựa chọn layout)

WebSocket:
- WS endpoint (ví dụ): `/ws`
- STOMP topics (ví dụ): `/topic/chat`

---

## 8) Checklist trước khi nộp (PASS)
- Canva tone đúng (pastel + gradient nhẹ + whitespace)
- Zig-zag đúng section; skills/publications dài không zig-zag
- Parallax + scroll animation nhẹ, không lag mobile
- Responsive Desktop/Tablet/Mobile
- Fetch REST API (không hardcode nội dung)
- Chat widget hoạt động realtime
- Video widget có local/remote + Start/End/Mute
- Export PDF tải được, layout sạch, exclude chat/video
- Footer có email + sở trường + tính cách/phong cách làm việc

---

## 9) Cổng xác nhận (để mình triển khai code)
Nếu bạn muốn, mình sẽ implement theo đúng hướng dẫn trên (tạo đầy đủ file/structure + Tailwind/MUI + Framer Motion + widgets + export PDF UI) trong thư mục [frontend/src](../frontend/src).

Bạn muốn mình triển khai theo hướng **Tailwind CSS** hay **MUI**?
