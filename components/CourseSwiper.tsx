"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const courses = [
  { id: 1, title: '국가자격증', desc: '단기 합격 꿀팁 전수', icon: '📝', image: '/images/con1.webp' },
  { id: 2, title: '현장실무', desc: '샵에서 바로 쓰는 실전 테크닉', icon: '💅', image: '/images/con2.webp' },
  { id: 3, title: '일렉트릭드릴머신', desc: '기초부터 고급 스킬까지', icon: '⚡', image: '/images/con3.webp' },
  { id: 4, title: '젤아트', desc: '트렌디한 인기 아트 기법', icon: '🎨', image: '/images/con4.webp' },
];

export default function CourseSwiper() {
  return (
    <div className="w-full mt-5 overflow-hidden">
      <p className="text-sm text-stone-500 font-bold mb-3 pl-1">이런 과정도 1:1 상담 가능합니다 👇</p>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          }
        }}
        className="w-full pb-10 pt-2 px-1"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-grab active:cursor-grabbing">
              {course.image ? (
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-stone-100 flex items-center justify-center text-5xl">
                  {course.icon}
                </div>
              )}
              <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-4 text-center">
                <h3 className="text-sm font-bold text-white mb-1">{course.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{course.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* 스와이퍼 하단 페이지네이션 닷 색상 커스텀 */
        .swiper-pagination-bullet-active {
          background-color: #57534e !important;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </div>
  );
}
