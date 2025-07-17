const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo1.png" alt="Logo" className="h-14 w-auto" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Nhà tích hợp hệ thống hàng đầu các giải pháp tự động hóa quy trình (PA) và tự động hóa nhà máy (FA).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3 text-white text-sm">
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">Giới thiệu</a></li>
               <li><a href="#nghi-dinh-58" className="hover:text-yellow-300 transition-colors">HINO GATEWAY 378</a></li>
              <li><a href="#nghi-dinh-58" className="hover:text-yellow-300 transition-colors">Nghị định 378</a></li>
              <li><a href="#system-diagram" className="hover:text-yellow-300 transition-colors">Hệ thống</a></li>
             
              <li><a href="#du-an" className="hover:text-yellow-300 transition-colors">Case Study</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-3 text-white text-sm leading-relaxed">
              <li><strong>Kỹ sư tư vấn:</strong> Nguyễn Văn Hưng</li>
              <li><strong>Mobile:</strong> +84 38 741 9012</li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:nguyen-hung@hino-systech.com" className="underline hover:text-yellow-300">
                  nguyen-hung@hino-systech.com
                </a>
              </li>
              <li>
                <strong>Địa chỉ:</strong><br />
                Ô số 1 và ô số 2, tầng 13, 148 Tower<br />
                Số 148 đường Hoàng Quốc Việt, Phường Nghĩa Tân,<br />
                Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
              </li>
              <li>
                <strong>Giờ làm việc:</strong><br />
                Thứ 2 - Thứ 6: 8:00 - 17:30<br />
                Thứ 7: 8:00 - 12:00
              </li>
              <li>
  <strong>Hino Systech</strong>{' '}
  <a
    href="https://hino-systechvn.com/"
    className="underline text-yellow-300 hover:text-yellow-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    Hino Systech Việt Nam
  </a>
</li>
            </ul>
          </div>
          

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ khác</h3>
            <ul className="space-y-3 text-white text-sm">
              <li>• Hệ thống SCADA</li>
              <li>• Điện mặt trời</li>
              <li>• Tự động hóa nhà máy</li>
              <li>• Tư vấn kỹ thuật</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
