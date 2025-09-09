import React from 'react';

const EVNComplianceTable = () => {
  const data = [
    {
      requirement: "Thu thập dữ liệu Inverter & Công tơ",
      response:
        "Thu thập chính xác model, trạng thái vận hành, tín hiệu tức thời, và khả năng điều khiển công suất (P, Set-point) từ Inverter. Kết nối với cổng đo điện tử hai chiều để thu thập dữ liệu 48 chu kỳ/ngày.",
    },
    {
      requirement: "Giao thức truyền thông EVN",
      response:
        "Hỗ trợ đầy đủ các giao thức bắt buộc như Modbus TCP/IP và IEC 60870-5-104.",
    },
    {
      requirement: "Truyền dữ liệu thời gian thực",
      response:
        "Thiết kế để truyền dữ liệu liên tục, chính xác và tin cậy qua Ethernet, Wi-Fi, 4G/5G.",
    },
    {
      requirement: "Điều khiển công suất từ xa",
      response:
        "Khả năng nhận lệnh điều khiển công suất từ hệ thống của EVN và điều khiển các Inverter tương ứng.",
    },
    {
      requirement: "Lưu trữ dữ liệu an toàn",
      response:
        "Có khả năng lưu trữ dữ liệu vận hành và đo đếm cục bộ và tự động gửi về EVN khi kết nối được khôi phục.",
    },
    {
      requirement: "Bảo mật thông tin",
      response:
        "Hỗ trợ các giao thức bảo mật tiên tiến như SSL/TLS, Ipsec VPN, OpenVPN để mã hóa dữ liệu trong quá trình truyền tải.",
    },
    {
      requirement: "Tương thích đa dạng thiết bị",
      response:
        "Khả năng tương thích rộng rãi với nhiều loại Inverter (Central hoặc String Inverters) và các nhà cung cấp khác nhau.",
    },
    {
      requirement: "Giao diện trực quan & tuỳ chỉnh",
      response:
        "Cung cấp giao diện tuỳ chỉnh, giám sát thời gian thực và công nghệ điều khiển thông minh tích hợp.",
    },
  ];

  return (
    <section id="nghidinh" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Căn cứ pháp lý theo Quyết định 378/QĐ-EVN
        </h2>
        <div className="overflow-x-auto">
         <table className="min-w-full text-left border border-gray-300 shadow-md rounded-lg overflow-hidden">
  <thead className="bg-blue-700 text-white">
    <tr>
      <th className="px-4 py-3 text-xl font-semibold w-1/3">
        Yêu cầu
      </th>
      <th className="px-4 py-3 text-xl font-semibold">
        Hino Gateway 378 đáp ứng
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {data.map((item, index) => (
      <tr key={index} className="hover:bg-gray-50 transition-colors">
        {/* Cột 1 - nền xanh nhạt */}
        <td className="bg-blue-50 text-primary px-4 py-3 font-bold align-top">
          {item.requirement}
        </td>
        {/* Cột 2 - nền trắng mặc định */}
        <td className="px-4 py-3 text-primary align-top">
          {item.response}
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </section>
  );
};

export default EVNComplianceTable;
