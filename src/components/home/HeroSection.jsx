import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-4 items-center">
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
Giải pháp Từ Hino Systech với hơn 50 năm kinh nghiệm từ Nhật Bản</h2>
            <p className="text-lg text-gray-600 mb-8">
Cung cấp thiết bị và phần mềm tích hợp đáp ứng theo Quyết định 378/QĐ-EVN        </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-xl font-bold text-primary mb-2">Đáp ứng yêu cầu  <br /> Điện lực toàn quốc</div>
                
              </div>
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-xl font-bold text-primary mb-1">Quy trình xử lý<br/> trong 3 tuần</div>
                
              </div>
            </div>
            <a href="#contact" className="btn-primary">Trao đổi với chuyên gia</a>
          </motion.div>
          
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
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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