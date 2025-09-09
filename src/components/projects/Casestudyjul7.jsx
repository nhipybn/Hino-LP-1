import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectOverviewSection() {
  return (
    <>
      {/* TIÊU ĐỀ XANH Ở GIỮA */}
      <h2 className="text-center text-[#0066CC] text-3xl font-bold mb-8">
        Dự án tiêu biểu của Hino Gateway 378
      </h2>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[#0066CC] mb-6 border-l-4 border-[#66B2FF] pl-4">
              Tổng quan dự án
            </h2>

            <div className="space-y-3 text-gray-800 text-base">
              <p><span className="font-semibold text-[#0066CC]">Tên Nhà máy:</span> CÔNG TY TNHH SẢN XUẤT TMVN</p>
              <p><span className="font-semibold text-[#0066CC]">Lĩnh vực:</span> Sản xuất đồ may mặc, da giày, thảm và các sản phẩm từ vải sợi</p>
              <p><span className="font-semibold text-[#0066CC]">Quy mô điện mặt trời mái nhà:</span> 1375kW</p>
              <p><span className="font-semibold text-[#0066CC]">Điện lực quản lý:</span> Điện lực Ninh Bình</p>
              <p><span className="font-semibold text-[#0066CC]">Thời gian triển khai:</span> Tháng 7/2025</p>
            </div>

            <div className="mt-6 bg-[#F0F8FF] border-l-4 border-[#3399FF] p-5 rounded-xl shadow-sm">
              <p className="text-sm italic text-[#005599]">Mr.Chuyên - Quản lý dự án</p>
              <p className="mt-2 text-gray-700 font-medium leading-relaxed">
                "Hino Gateway 378 là giải pháp triển khai khá nhanh chóng, giúp hệ thống của chúng tôi
                đáp ứng hoàn toàn các yêu cầu kỹ thuật chỉ trong 7 ngày, từ bước kiểm tra nhà máy cho
                đến khi truyền tải được dữ liệu chính xác đến EVNICT...
                Các kỹ sư ở đây chuyên nghiệp và chủ động trong suốt thời gian triển khai đã mang lại
                sự an tâm tuyệt đối cho chúng tôi."
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="w-full max-w-sm">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 4000 }}
              spaceBetween={20}
              slidesPerView={1}
              loop
              className="rounded-xl shadow-md border border-gray-200"
            >
              {["./img/Team378.jpg", "./img/tu1.png", "./img/tu2.png", "./img/tu4.png", "./img/manhinh.jpg"].map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/${src}`}
                    alt={`Ảnh ${index + 1}`}
                    className="w-full h-[420px] object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
