import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const hotline = "0387419012";

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Cột trái */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-primary block mb-2">HINO GATEWAY 378</span>
              Giải pháp kết nối điện năng lượng với EVN
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Giải pháp Từ Hino Systech với hơn 50 năm kinh nghiệm từ Nhật Bản
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cung cấp thiết bị và phần mềm tích hợp đáp ứng theo Quyết định 378/QĐ-EVN
            </p>

            {/* 2 Khối thông tin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-xl font-bold text-primary mb-2">
                  Đáp ứng yêu cầu <br /> Điện lực toàn quốc
                </div>
              </div>
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-xl font-bold text-primary mb-1">
                  Quy trình xử lý <br /> trong 3 tuần
                </div>
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">
                Trao đổi với chuyên gia
              </a>

              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
              >
                📞 Hotline liên hệ
              </button>
            </div>

            {/* Popup */}
            {showPopup && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                  <h3 className="text-lg font-bold mb-4">Liên hệ Hotline</h3>
                  <p className="mb-4 text-xl font-semibold text-red-600">{hotline}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={`tel:${hotline}`}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      📞 Gọi ngay
                    </a>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Cột phải */}
          <motion.div
            className="md:w-full h-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/img/Untitled design.jpg"
                alt="Solar Panels Installation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Eco-Friendly</div>
                  <div className="text-sm text-gray-500">100% Clean Energy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
