1. Scope Frontend (FE Scope Definition)
In-scope (FE chịu trách nhiệm)

Frontend KHÔNG chỉ là UI, mà là:

Trình bày toàn bộ CV–Profile dưới dạng sản phẩm số

Tạo trải nghiệm kể chuyện (storytelling) qua zig-zag layout

Giao tiếp với Backend qua REST API + WebSocket

Thể hiện gu thẩm mỹ + tư duy sản phẩm cá nhân

FE Scope gồm:

UI/UX theo Figma (Canva tone)

ReactJS App (SPA hoặc SSR)

Responsive (Desktop / Tablet / Mobile)

Animation, Parallax, Scroll effect

Chat realtime UI

Video call UI (demo level)

Export CV ra PDF (trigger + preview)

Out-of-scope (FE không xử lý)

Logic nghiệp vụ backend

Lưu trữ lâu dài

Xử lý WebRTC signaling sâu

Tối ưu server performance

2. Stakeholders (FE nhìn từ góc BA)
Stakeholder	FE cần quan tâm điều gì
Giảng viên / Người chấm	FE phải đập vào mắt, đúng yêu cầu, đúng tone
Nhà tuyển dụng	FE thể hiện tư duy sản phẩm & thẩm mỹ
Người xem CV	Dễ đọc – dễ hiểu – mạch truyện rõ
Bản thân ứng viên	Dễ mở rộng, dễ chỉnh sửa nội dung

➡️ FE không phải web thông tin, mà là portfolio có cảm xúc.

3. User Journey (FE-Centric)
Journey chính (Happy Path)

User mở website

Hero Section gây ấn tượng trong 5 giây

Scroll xuống:

Giới thiệu cá nhân

Đơn vị công tác

Dự án

Bài báo

Sự kiện

Tương tác:

Hover xem chi tiết

Click mở project / paper

Chat trực tiếp

Xem video demo

Cuối:

Footer cá nhân hóa mạnh

Click Export PDF

➡️ FE phải dẫn dắt cảm xúc, không phải chỉ hiển thị dữ liệu.

4. Functional Requirements – Frontend Only
4.1 Layout & Presentation
FR-FE-01: Zig-zag Layout

Section xen kẽ:

Text trái – hình phải

Text phải – hình trái

Áp dụng cho:

Hero

About

Organization

Projects

Events

Hobbies

🚫 Không zig-zag:

Skills list

Publications list dài

FR-FE-02: Canva Tone UI

Pastel colors

Gradient nhẹ

Typography hiện đại

Nhiều khoảng trắng (white space)

➡️ FE phải match 90% Figma, không sáng tạo linh tinh.

4.2 Animation & Interaction
FR-FE-03: Scroll Animation

Section xuất hiện khi scroll vào viewport

Animation nhẹ:

Fade

Slide

Scale

FR-FE-04: Parallax

Hero background

Section transition

Không gây lag trên mobile

4.3 Data Rendering
FR-FE-05: Render data từ API

FE fetch data:

Profile

Skills

Projects

Publications

Events

📌 BA Note:
FE không hardcode, dù backend có thể fake.

4.4 Chat Realtime UI
FR-FE-06: Chat UI

Khung chat cố định / modal

Hiển thị:

Tin nhắn gửi

Tin nhắn nhận

Timestamp

➡️ FE xử lý:

Kết nối WebSocket

Render message stream

UX chat mượt

4.5 Video Call UI (Demo)
FR-FE-07: Video Section

Video local + remote

Button:

Start

End

Mute

📌 Chỉ cần demo, không yêu cầu call ổn định production.

4.6 Export PDF
FR-FE-08: Export CV

Button “Export PDF”

FE:

Chọn layout in

Gửi request backend

Download file

5. Non-Functional Requirements (FE)
Category	Requirement
Performance	Load < 3s
Responsive	Mobile-first
Accessibility	Font rõ, contrast ổn
Maintainability	Component rõ ràng
UX	Không rối, không lạm animation
6. Frontend Architecture (BA View)
Component Breakdown (gợi ý)
/components
 ├─ Hero
 ├─ About
 ├─ Organization
 ├─ Skills
 ├─ Projects
 ├─ Publications
 ├─ Events
 ├─ Hobbies
 ├─ ChatWidget
 ├─ VideoWidget
 ├─ Footer

Layout

MainLayout

ZigZagSection (reusable)

📌 BA Insight:
Có component zig-zag reusable → thể hiện tư duy FE senior.

7. State & Data Flow (FE)

Global:

Profile data

Chat state

Local:

Animation state

Hover / expand

➡️ Không cần Redux nếu không phức tạp.

8. Acceptance Criteria (FE Checklist)

FE được coi là PASS khi:

 Đúng Canva tone

 Zig-zag đúng section

 Responsive chuẩn

 Animation mượt

 Chat hoạt động

 Video demo được

 Export PDF thành công

 Nhìn vào biết đây là profile AI engineer, không phải blog

9. FE Risks & BA Warnings
Risk	Giải pháp
Quá nhiều animation	Giữ animation nhẹ
Sai zig-zag	Dùng component chuẩn
UI đẹp nhưng rối	Ưu tiên storytelling
Chat/video làm nặng FE	Demo level thôi