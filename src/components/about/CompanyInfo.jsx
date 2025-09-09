import { motion } from 'framer-motion';

const CompanyInfo = () => {
  const companyDetails = [
    { label: 'Công ty', value: 'CÔNG TY TNHH HINO SYSTECH VIỆT NAM' },
    { label: 'Đại diện', value: 'Mai Văn Tuyền (Mr.) - Tổng Giám Đốc' },
   { 
  label: 'Dịch vụ', 
  value: 'Tư vấn thiết kế / Phát triển hệ thống / Sản xuất chế tạo / Kiểm tra vận hành / Bảo trì các hệ thống tự động hóa quá trình (PA) và hệ thống tự động hóa nhà máy (FA)' 
},
    { label: 'Vốn đầu tư', value: '1.000.000 USD' },
    { label: 'Thành lập', value: '30/06/2015' },
    { label: 'Nhân viên', value: '22' },
    { label: 'Trụ sở chính', value: 'Ô số 1 và ô số 2, tầng 13, 148 Tower, số 148 đường Hoàng Quốc Việt, Phường Nghĩa Tân, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <table className="w-full">
          <tbody>
            {companyDetails.map((detail, index) => (
              <motion.tr 
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b last:border-0"
              >
                <td className="py-4 pr-4 font-semibold text-gray-700 w-1/4">{detail.label}</td>
                <td className="py-4 text-gray-600">{detail.value}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-full"
      >
        <img
          src="/img/aboutus.jpg"
          alt="Corporate Building"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default CompanyInfo;