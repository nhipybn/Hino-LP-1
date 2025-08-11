import React from 'react';

const SystemDiagramSection = () => {
  return (
    <section id="system-diagram" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Sơ đồ cấu hình hệ thống
        </h2>

        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
Cấu hình của bộ xử lý Hino Gateway 378 được thiết kế tích hợp đầy đủ thiết bị đo lường, truyền dữ liệu và kết nối EVN, đảm bảo tính chính xác, an toàn và giám sát từ xa theo tiêu chuẩn điện lực.        
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg border bg-gray-50 p-4">
<img
  src={`${import.meta.env.BASE_URL}img/Sodohethongtong.png`}
  alt="Sơ đồ cấu hình hệ thống điện mặt trời"
  className="w-full h-auto object-contain"
/>

          <p className="text-sm text-gray-500 mt-2 text-center italic">
            Sơ đồ kết nối Inverter, Gateway, Logger, Router và hệ thống EVN SCADA
          </p>
        </div>

       

      </div>
    </section>
  );
};

export default SystemDiagramSection;
