export interface PortfolioItem {
id: number
theme: string
summary: string
overview: string
strategy: string
thumbnail: string
detailImage: string
}

export const portfolioData: PortfolioItem[] = [
{
id: 1,
theme: '관제시스템/로보틱스/대시보드',
summary: '로봇 관제시스템 대시보드 구축',
overview:
'로봇 운영 데이터를 실시간으로 시각화해 현장 상태를 한눈에 파악하고\n이상 징후를 빠르게 감지할 수 있는 관제 대시보드',
strategy:
'사용자가 로봇의 상태를 직관적으로 모니터링할 수 있도록 핵심 데이터를 시각적으로 우선 배치하고\n반응형 UI로 다양한 환경에서 동일한 사용 경험을 제공함\n실시간 알림과 상태 변화를 명확히 인지할 수 있도록 UX 중심으로 설계함',
thumbnail: '/thumbnail/thumbnail-3.png',
detailImage: '/images/portfolio/detail3.jpg',
},
{
id: 2,
theme: '테크 / 서비스',
summary: 'MVP 중심 개발 · 기술 브랜드 웹사이트',
overview:
'기술 중심 브랜드 사이트로 제품과 기술 철학을 시각적으로 전달했습니다.',
strategy:
'MVP 중심의 개발 접근 방식으로 빠른 피드백과 반복 개선을 가능하게 했습니다.',
thumbnail: '/thumbnail/thumbnail-10.png',
detailImage: '/images/portfolio/detail10.jpg',
},

{
id: 3,
theme: '기업 홈페이지',
summary: '업무 효율 극대화 · 관리자 페이지 연동',
overview:
'관리자 페이지와 프론트 시스템을 통합한 업무 효율 중심 사이트입니다.',
strategy:
'기업 내 다양한 부서별 접근 권한을 통합하고, 워크플로우를 디지털화했습니다.',
thumbnail: '/thumbnail/thumbnail-6.png',
detailImage: '/images/portfolio/detail6.jpg',
},
{
id: 4,
theme: '문화 / 예술',
summary: '감각적 인터페이스 · 애니메이션 활용',
overview:
'감각적인 인터페이스와 인터랙티브 애니메이션을 중심으로 구성된 문화 플랫폼.',
strategy:
'전시 정보, 예약 기능을 통합하고, 시각적 몰입도를 높였습니다.',
thumbnail: '/thumbnail/thumbnail-8.png',
detailImage: '/images/portfolio/detail8.jpg',
},
{
id: 5,
theme: '기관 / 교육',
summary: '정보 구조화 · 접근성 중심 공공사이트',
overview:
'정보 구조화와 접근성을 중심으로 한 공공기관형 교육 플랫폼입니다.',
strategy:
'행정 문서, 교육 자료를 시각적으로 구조화하여 접근성을 높였습니다.',
thumbnail: '/thumbnail/thumbnail-5.png',
detailImage: '/images/portfolio/detail5.jpg',
},


{
id: 6,
theme: '기업 홈페이지',
summary: '기업의 비전과 정체성을 시각적으로 표현',
overview:
'인간의 감각과 인공지능의 경계를 탐구하는 기술기업의 아이덴티티를 시각적으로 표현한 원페이지 반응형 랜딩 사이트\nAI 기반 기술력과 브랜드 철학을 직관적 인터랙션으로 전달함',
strategy:
'어두운 컬러톤과 유동적인 그래픽을 활용해 기술적 깊이와 미래지향적 이미지를 강조함\n스크롤 중심의 인터랙션과 섹션 전환 효과로 브랜드의 비전을 감각적으로 경험할 수 있도록 설계함',
thumbnail: '/thumbnail/thumbnail-1.png',
detailImage: '/images/portfolio/detail1.jpg',
},
{
id: 8,
theme: '헬스케어',
summary: '신뢰감 중심 UI · 사용자 참여 유도형 구조',
overview:
'신뢰감 중심의 UI와 환자 참여형 서비스 구조를 기반으로 한 플랫폼입니다.',
strategy:
'의료 데이터 보안과 접근성을 모두 고려한 UX 설계를 적용했습니다.',
thumbnail: '/thumbnail/thumbnail-11.png',
detailImage: '/images/portfolio/detail11.jpg',
},
{
id: 7,
theme: 'AI/견적/자동화',
summary: 'AI 기반 자동견적 시스템 구축',
overview:
'특수 장비 시장의 복잡한 견적 산정을 AI와 빅데이터로 자동화해\n실시간 맞춤형 견적을 제공하는 자동화 플랫폼',
strategy:
'사용자 입력 데이터를 기반으로 제품 사양에 맞는 견적을 자동 산출하도록 설계함\n데이터 구조를 최적화해 견적 프로세스 속도를 향상시키고\n관리자가 실시간으로 결과를 확인하고 수정할 수 있는 UI를 구현함',
thumbnail: '/thumbnail/thumbnail-4.png',
detailImage: '/images/portfolio/detail4.jpg',
},
{
id: 9,
theme: '공공기관',
summary: '데이터 기반 UX · 정책 서비스 플랫폼',
overview:
'정책 서비스 플랫폼으로 사용자 중심 정보 설계 구조를 채택했습니다.',
strategy:
'데이터 기반 UX 설계로 정책 참여 경험을 향상시켰습니다.',
thumbnail: '/thumbnail/thumbnail-12.png',
detailImage: '/images/portfolio/detail12.jpg',
},
{
id: 10,
theme: '브랜드 사이트',
summary: '콘셉트 기획 · 아이덴티티 중심 디자인',
overview:
'브랜드 아이덴티티를 감각적으로 표현한 컨셉 중심 디자인.',
strategy:
'컬러 모션과 인터랙션을 활용해 브랜드 콘셉트를 직관적으로 표현했습니다.',
thumbnail: '/thumbnail/thumbnail-7.png',
detailImage: '/images/portfolio/detail7.jpg',
},
{
id: 11,
theme: '공공기관',
summary: '데이터 기반 UX · 정책 서비스 플랫폼',
overview:
'정책 서비스 플랫폼으로 사용자 중심 정보 설계 구조를 채택했습니다.',
strategy:
'데이터 기반 UX 설계로 정책 참여 경험을 향상시켰습니다.',
thumbnail: '/thumbnail/thumbnail-9.png',
detailImage: '/images/portfolio/detail9.jpg',
},
{
id: 12,
theme: '글로벌 이커머스',
summary: '인테리어 커머스 브랜드를 설계한 프로젝트',
overview:
'사용자 데이터를 기반으로 인테리어 옵션을 추천하고\n브랜드별 쇼룸과 3D 뷰를 제공하는 큐레이션 커머스 플랫폼',
strategy:
'대규모 이미지 데이터를 효율적으로 로딩하기 위해 최적화된 필터링과 캐싱 구조를 적용함\n사용자 행동 기반 추천 알고리즘과 실시간 검색 기능을 결합해 탐색 경험을 강화함\n3D 뷰를 통해 브랜드별 쇼룸을 직관적으로 비교할 수 있도록 UX를 구성함',
thumbnail: '/thumbnail/thumbnail-2.png',
detailImage: '/images/portfolio/detail2.jpg',
},
]