import React from 'react';

import { motion } from 'framer-motion';
import CompanyInfo from './CompanyInfo';
import Leadership from './Leadership';

const AboutHero = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-sky-50 to-white pt-20 pb-4 md:pt-16 md:pb-12">

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
HINO SYSTECH VIỆT NAM là một phần của Hino Systech Corporation, được thành lập vào năm 1950, là nhà tích hợp hệ thống hàng đầu các giải pháp tự động hóa quy trình (PA) và tự động hóa nhà máy (FA).

Với đội ngũ kỹ sư được đào tạo bài bản tại Nhật Bản và mạnh về kỹ thuật, chúng tôi cung cấp các dịch vụ chất lượng cao từ đề xuất đến thiết kế, phát triển hệ thống, kiểm tra và bảo trì. 
          </p>
         
        </motion.div>

       
      </div>
    </section>
  );
};

export default AboutHero;