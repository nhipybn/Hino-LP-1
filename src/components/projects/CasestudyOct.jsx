import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    name: "Điện mặt trời nhà máy Finetek",
    location: "Duy Tiên, Hà Nam",
    capacity: "1.6 MWp",
    status: "Đã kết nối thành công lên RMCS",
    images: [
      "/img/duan1(hino1).jpg",
      "/img/duan2(Hino).jpg",
      "/img/hino3(duan).jpg",
    ],
  },
  {
    name: "Điện mặt trời nhà máy Nhựa Y tế Việt Nam",
    location: "Tam Điệp, Ninh Bình",
    capacity: "0.9 MWp",
    status: "Đã kết nối thành công lên RMCS",
    images: [
       "/img/duancuoi.jpg",
      "/img/hino3(2).jpg",
      "/img/duan1(hino).jpg",
    ],
  },
  {
    name: "Điện mặt trời nhà máy may PT Daehan Global",
    location: "Yên Dũng, Bắc Ninh",
    capacity: "450 kWp",
    status: "Đang kết nối RMCS",
    images: [
      "/img/tudien3.jpg",
      "/img/ketnoitudien3.jpg",
      "/img/duan3.jpg",
    ],
  },
];

export default function CaseStudySection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
          Dự án tiêu biểu
        </h2>
        <p className="text-blue-600">
          Các hệ thống điện mặt trời doanh nghiệp đã triển khai và kết nối thành công RMCS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-100"
          >
            {/* Carousel hình ảnh */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="h-80 w-full"
            >
              {p.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${p.name} ${idx + 1}`}
                    className="h-70 w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nội dung thông tin dự án */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {p.name}
              </h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>
                  <strong>Địa điểm:</strong> {p.location}
                </li>
                <li>
                  <strong>Công suất lắp đặt:</strong> {p.capacity}
                </li>
                <li>
                  <strong>Tình trạng:</strong>{" "}
                  <span
                    className={`${
                      p.status.includes("Đã")
                        ? "text-green-600 font-medium"
                        : "text-yellow-600 font-medium"
                    }`}
                  >
                    {p.status}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
