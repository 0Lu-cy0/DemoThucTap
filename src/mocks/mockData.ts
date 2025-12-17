/**
 * Mock Data cho Portfolio - Nguyễn Xuân Hoàng Cường
 * AI Engineer & Machine Learning Researcher
 */

import type { ProfileDTO, OrganizationDTO } from '../types/profile'
import type { SkillCategory } from '../types/skills'
import type { ProjectDTO } from '../types/project'
import type { PublicationDTO } from '../types/publication'
import type { EventDTO } from '../types/event'
import type { HobbyDTO } from '../types/hobby'

// ============================================
// Profile Data
// ============================================
export const mockProfile: ProfileDTO = {
  id: '1',
  name: 'Nguyễn Xuân Hoàng Cường',
  headline: 'AI Engineer | Machine Learning Researcher | ĐH Bách Khoa TP.HCM',
  avatar: '/images/avatar-cuong.png',
  summary: `Kỹ sư AI với 5+ năm kinh nghiệm trong Computer Vision và NLP. 
Đam mê xây dựng các hệ thống thông minh, đặc biệt là các giải pháp sử dụng Large Language Models (LLM) và tối ưu hóa mô hình cho thiết bị biên (Edge AI). 
Hiện đang là Nghiên cứu sinh tại ĐH Bách Khoa TP.HCM.`,
  email: 'cuong.nx.hoang@hcmut.edu.vn',
  phone: '+84 905 123 456',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/cuong-nxhoang',
    github: 'https://github.com/cuong-nx-ai',
    website: 'https://ai.hoangcuong.dev',
  },
}

// ============================================
// Organizations
// ============================================
export const mockOrganizations: OrganizationDTO[] = [
  {
    id: '1',
    name: 'Trường Đại học Bách Khoa - ĐHQG TP.HCM',
    role: 'Nghiên cứu sinh / Trợ giảng',
    logo: '/images/org/hcmut.png',
    startDate: '2020',
    endDate: undefined,
    description:
      'Nghiên cứu chuyên sâu về Efficient Transformer Architectures và LLM Việt Nam. Trợ giảng môn Deep Learning, hướng dẫn nhóm đồ án tốt nghiệp ứng dụng AI.',
  },
  {
    id: '2',
    name: 'VinAI Research',
    role: 'AI Research Intern (Computer Vision)',
    logo: '/images/org/vinai.png',
    startDate: '2019-06',
    endDate: '2020-05',
    description:
      'Tham gia dự án nghiên cứu về Object Detection trong môi trường thiếu sáng và tối ưu hóa mô hình cho hệ thống xe tự hành (AD).',
  },
  {
    id: '3',
    name: 'FPT Software AI Center',
    role: 'Machine Learning Engineer',
    logo: '/images/org/fpt.png',
    startDate: '2018-01',
    endDate: '2019-05',
    description:
      'Phát triển và triển khai các mô hình NLP cho hệ thống chăm sóc khách hàng tự động.',
  },
]

// ============================================
// Skills
// ============================================
export const mockSkills: SkillCategory[] = [
  {
    id: '1',
    name: 'AI & Deep Learning',
    skills: [
      { id: '1', name: 'PyTorch', level: 'expert' },
      { id: '2', name: 'Hugging Face Transformers', level: 'expert' },
      { id: '3', name: 'Computer Vision (YOLOv8, SegFormer)', level: 'expert' },
      { id: '4', name: 'NLP (BERT, LLM Fine-tuning)', level: 'advanced' },
      { id: '5', name: 'Reinforcement Learning', level: 'intermediate' },
    ],
  },
  {
    id: '2',
    name: 'Programming & MLOps',
    skills: [
      { id: '6', name: 'Python (FastAPI, Django)', level: 'expert' },
      { id: '7', name: 'TypeScript/JavaScript (React, Next.js)', level: 'advanced' },
      { id: '8', name: 'Docker & Kubernetes', level: 'advanced' },
      { id: '9', name: 'AWS/GCP (SageMaker, Vertex AI)', level: 'intermediate' },
      { id: '10', name: 'Git & CI/CD', level: 'advanced' },
    ],
  },
  {
    id: '3',
    name: 'Database & Backend',
    skills: [
      { id: '11', name: 'PostgreSQL/MySQL', level: 'intermediate' },
      { id: '12', name: 'Vector Database (Pinecone, ChromaDB)', level: 'advanced' },
      { id: '13', name: 'Java (Spring Boot)', level: 'intermediate' },
    ],
  },
]

// ============================================
// Projects
// ============================================
export const mockProjects: ProjectDTO[] = [
  {
    id: '1',
    title: 'V-Chat: LLM Agent Hỗ Trợ Tư Vấn Luật (RAG)',
    description: `Xây dựng mô hình Chatbot sử dụng kiến trúc Retrieval-Augmented Generation (RAG) và LLM mã nguồn mở (Llama 3) để trả lời các câu hỏi chuyên sâu về Luật pháp Việt Nam với độ chính xác > 95% và giảm thiểu tối đa hiện tượng 'hallucination'.`,
    tags: ['Llama 3', 'RAG', 'LangChain', 'Pinecone', 'Next.js'],
    thumbnail: '/images/projects/llm-law-agent.gif',
    link: 'https://demo.v-chat-law.ai',
    github: 'https://github.com/cuong-nx-ai/v-chat-law-rag',
  },
  {
    id: '2',
    title: 'Real-time Vehicle Density Estimation cho Giao thông thông minh',
    description:
      'Phát triển và tối ưu hóa mô hình Computer Vision (YOLOv8) để đếm và phân loại phương tiện trên các nút giao thông trong thời gian thực. Tối ưu hóa với TensorRT trên Jetson Orin đạt 45 FPS.',
    tags: ['YOLOv8', 'TensorRT', 'Computer Vision', 'Jetson Orin', 'Python'],
    thumbnail: '/images/projects/traffic-ai-vision.png',
    link: 'https://demo.smart-traffic.hcmut.edu.vn',
    github: 'https://github.com/cuong-nx-ai/realtime-traffic-vision',
  },
  {
    id: '3',
    title: 'Phân Tích Sắc Thái Cảm Xúc Tiếng Việt (Vietnamese Sentiment Analysis)',
    description:
      'Xây dựng và fine-tune mô hình BERT chuyên biệt (PhoBERT) cho tác vụ phân loại sắc thái cảm xúc trên dữ liệu đánh giá sản phẩm và tin tức tiếng Việt, đạt F1-score 0.91.',
    tags: ['PhoBERT', 'NLP', 'Fine-tuning', 'PyTorch', 'Hugging Face'],
    thumbnail: '/images/projects/vietnamese-sentiment.png',
    github: 'https://github.com/cuong-nx-ai/vietnamese-sentiment-analysis',
  },
]

// ============================================
// Publications
// ============================================
export const mockPublications: PublicationDTO[] = [
  {
    id: '1',
    title: 'Efficient Transformer Architectures for Vietnamese NLP Tasks on Edge Devices',
    journal: 'Journal of Artificial Intelligence Research (JAIR)',
    year: 2024,
    authors: ['Nguyễn Xuân Hoàng Cường', 'Trần Thị B', 'Prof. Lê Văn C'],
    doi: '10.1613/jair.1.58721',
    abstract:
      'This paper proposes a novel lightweight transformer architecture optimized for Vietnamese language understanding tasks, achieving a 30% reduction in model size with minimal accuracy loss, ideal for deployment on constrained edge devices.',
  },
  {
    id: '2',
    title:
      'A Comprehensive Survey on Deployment Strategies for Object Detection Models in Low-Light Conditions',
    conference: 'IEEE/CVF International Conference on Computer Vision (ICCV)',
    year: 2023,
    authors: ['Nguyễn Xuân Hoàng Cường', 'Dr. Nguyễn Thị D'],
    link: 'https://openaccess.thecvf.com/content/ICCV2023/pages/cuong-lowlight-detection',
    abstract:
      'A detailed review and comparative analysis of techniques for maintaining high performance of Object Detection models when operating in low-light environments, with emphasis on automotive applications.',
  },
]

// ============================================
// Events
// ============================================
export const mockEvents: EventDTO[] = [
  {
    id: '1',
    title: 'Vietnam AI Summit 2024',
    type: 'conference',
    date: '2024-09',
    location: 'Hà Nội, Việt Nam',
    role: 'Speaker',
    description:
      "Trình bày chủ đề: 'Ứng dụng Large Language Models (LLM) và các vấn đề về đạo đức AI trong lĩnh vực giáo dục đại học'.",
    image: '/images/events/ai-summit-2024-cuong.jpg',
  },
  {
    id: '2',
    title: 'Google Developer Student Club (GDSC) ML Workshop',
    type: 'workshop',
    date: '2024-05',
    location: 'ĐH Bách Khoa TP.HCM',
    role: 'Instructor',
    description:
      'Hướng dẫn thực hành hơn 50 sinh viên về quy trình huấn luyện, tối ưu hóa và triển khai các mô hình ML lên thiết bị di động (TensorFlow Lite).',
  },
  {
    id: '3',
    title: 'VietAI Hackathon 2023',
    type: 'hackathon',
    date: '2023-11',
    location: 'Online',
    role: 'Mentor',
    description:
      'Mentoring 3 team xây dựng giải pháp AI for Social Good, tập trung vào lĩnh vực y tế và môi trường.',
  },
]

// ============================================
// Hobbies
// ============================================
export const mockHobbies: HobbyDTO[] = [
  {
    id: '1',
    name: 'Đọc Sách Khoa học & Triết học',
    description: `Đọc sách về AI ethics, cognitive science, và các tác phẩm khoa học viễn tưởng kinh điển (ví dụ: '2001: A Space Odyssey'). 
Sách yêu thích: 'Thinking, Fast and Slow' - Daniel Kahneman.`,
    icon: '📚',
    image: '/images/hobbies/reading-ai.jpg',
  },
  {
    id: '2',
    name: 'Chạy Bộ Đường Dài (Marathon)',
    description: `Duy trì thói quen chạy bộ 5km mỗi sáng và đã hoàn thành 3 lần cự ly Half-Marathon (21km) tại VnExpress Marathon 2023 & 2024. 
Giúp rèn luyện tính kỷ luật và sự kiên trì.`,
    icon: '🏃',
    image: '/images/hobbies/running-marathon.jpg',
  },
  {
    id: '3',
    name: 'Nhiếp Ảnh (Street Photography)',
    description: `Yêu thích chụp ảnh đời thường và phong cảnh. Hoạt động như một 'phòng lab' cá nhân để thực hành xử lý ảnh (Computer Vision) với Lightroom.`,
    icon: '📷',
    image: '/images/hobbies/street-photo-cuong.jpg',
  },
]

// ============================================
// Export All Mock Data
// ============================================
export const mockData = {
  profile: mockProfile,
  organizations: mockOrganizations,
  skills: mockSkills,
  projects: mockProjects,
  publications: mockPublications,
  events: mockEvents,
  hobbies: mockHobbies,
}

export default mockData
