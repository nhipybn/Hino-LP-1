import React, { useState } from 'react';

const NghiDinh58Section = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="nghi-dinh-58"
      className="bg-gradient-to-br from-white via-gray-50 to-slate-100 py-20 px-6 md:px-16 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Phần giữ nguyên */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            <span className="text-blue-700">Giới thiệu giải pháp HINO GATEWAY 378</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-5xl mx-auto">
            Hino Gateway 378 được thiết kế để đáp ứng đầy đủ các yêu cầu kỹ thuật theo Nghị định 58/NĐ-CP và Quyết định 378/QĐ-EVN của EVN, đảm bảo kết nối hệ thống điện mặt trời mái nhà tự sản xuất, tự tiêu thụ với hệ thống thu thập, giám sát và điều khiển của EVN một cách chính xác và ổn định.
          </p>
        </div>

        {/* Card Section giữ nguyên */}
        <section className="bg-[#0047b9] py-16 border border-white rounded-xl" id="legal">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">Căn cứ pháp lý</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                      <li>
                        <strong>Nghị định 58/2025/NĐ-CP:</strong> Cơ sở pháp lý cho phát triển và giám sát điện mặt trời mái nhà.
                      </li>
                      <li>
                        <strong>QĐ 378/QĐ-EVN (12/3/2025):</strong> Yêu cầu kỹ thuật kết nối hệ thống tự tiêu thụ vào EVN.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-2 whitespace-nowrap">Triển khai nhanh trong 7 ngày</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Quy trình khảo sát và triển khai nhanh chóng, phối hợp chuyên nghiệp với cơ quan điện lực địa phương (EVN miền Bắc, EVN miền Trung, EVN miền Nam)
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">Tuỳ chỉnh Gateway Box theo từng nhà máy</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Khảo sát - Thiết kế - Lắp đặt thiết bị đáp ứng theo từng hệ thống nhà máy, bảo đảm khả năng vận hành ổn định
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nút + Popup */}
        <div className="mt-12 text-center flex gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-[#00c472] hover:bg-[#00a75e] text-white text-sm font-semibold py-3 px-6 rounded-lg transition"
          >
            Tải Checklist hạng mục triển khai
          </a>

          {/* Nút Hotline */}
          <button
            onClick={() => setShowPopup(true)}
            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.52 4.56a1 1 0 01-.27 1.06l-1.7 1.7a16.001 16.001 0 006.364 6.364l1.7-1.7a1 1 0 011.06-.27l4.56 1.52a1 1 0 01.684.95V19a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
              />
            </svg>
            Hotline liên hệ
          </button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4">📞 Số điện thoại liên hệ</h3>
              <p className="text-xl font-semibold text-red-600">0387 419 012</p>
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="tel:0387419012"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Gọi ngay
                </a>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NghiDinh58Section;
