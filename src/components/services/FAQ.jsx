import { useState } from "react";

const faqs = [
  {
    question: "Giải pháp Hino Gateway 378 tuân thủ những quy định pháp luật cụ thể nào của Việt Nam?",
    answer:
      "Giải pháp Hino Gateway 378 được phát triển để đáp ứng đầy đủ các yêu cầu pháp lý và kỹ thuật mới nhất của Việt Nam dành cho điện mặt trời mái nhà. Cụ thể, giải pháp này tuân thủ các quy định chính được nêu trong hai văn bản pháp lý quan trọng: Nghị định số 58/2025/NĐ-CP của Chính phủ và Quyết định số 378/QĐ-EVN của Tập đoàn Điện lực Việt Nam. Nghị định 58/2025/NĐ-CP cung cấp cơ sở pháp lý cho các dự án điện mặt trời mái nhà tự sản xuất, tự tiêu thụ. Trong khi đó, Quyết định 378/QĐ-EVN là văn bản có tính kỹ thuật chuyên sâu, quy định các yêu cầu cụ thể về việc kết nối, thu thập dữ liệu, giám sát và điều khiển công suất của các nguồn điện này. Việc tuân thủ Quyết định 378/QĐ-EVN là một điều kiện bắt buộc để các chủ đầu tư có thể đấu nối hệ thống vào lưới điện quốc gia một cách hợp pháp.", },
  {
    question: "Những loại hình dự án điện mặt trời nào bắt buộc phải lắp đặt giải pháp này?",
    answer:
      "Giải pháp Hino Gateway 378 được thiết kế và tối ưu hóa cho các dự án điện mặt trời mái nhà có công suất lắp đặt trên 100kWp thuộc diện tự sản xuất, tự tiêu thụ. Các dự án này phải tuân thủ các yêu cầu kỹ thuật và pháp lý của Quyết định 378/QĐ-EVN và Nghị định 58/2025/NĐ-CP để đảm bảo kết nối và vận hành an toàn, ổn định với hệ thống lưới điện của EVN.",
  },
  {
    question: "Quy trình triển khai Hino Gateway 378 bao gồm những bước chính nào, từ khảo sát đến vận hành?",
    answer:
      "Quy trình triển khai có thể được tóm tắt trong ba giai đoạn chính: Khảo sát: Đội ngũ chuyên gia tiến hành khảo sát thực địa tại nhà máy hoặc cơ sở của khách hàng để đánh giá điều kiện hiện tại, cấu hình hệ thống điện mặt trời và các Inverter hiện có. Thiết kế và lắp đặt: Dựa trên kết quả khảo sát, các kỹ sư sẽ thiết kế và tùy chỉnh thiết bị Gateway Box để phù hợp với từng dự án. Sau đó, thiết bị sẽ được lắp đặt tại hiện trường để sẵn sàng kết nối.Vận hành và kết nối: Sau khi lắp đặt, hệ thống được cấu hình để thu thập dữ liệu và kết nối với hệ thống của EVN, đảm bảo khả năng vận hành ổn định và tuân thủ các quy định truyền dữ liệu.",
  },
  {
    question: "Thời gian trung bình để hoàn thành việc lắp đặt và kết nối với hệ thống của EVN là bao lâu?",
    answer:
      "Theo thông tin từ nhà cung cấp, giải pháp Hino Gateway 378 có thể được triển khai nhanh chóng trong khoảng thời gian 7 ngày. Khoảng thời gian này bao gồm toàn bộ quá trình từ khảo sát ban đầu, tùy chỉnh thiết bị cho từng nhà máy, đến việc lắp đặt và cấu hình để đảm bảo khả năng vận hành ổn định trước khi chính thức kết nối với hệ thống của EVN.",
  },
  {
    question: "Hệ thống thu thập và truyền tải những loại dữ liệu nào đến EVN và máy chủ của doanh nghiệp?",
    answer:
      "Hệ thống Hino Gateway 378 được thiết kế để thu thập và truyền tải hai nhóm dữ liệu chính đến EVNICT: Dữ liệu từ Inverter: Bao gồm các thông tin kỹ thuật quan trọng như model, trạng thái vận hành, tín hiệu tức thời và khả năng điều khiển công suất (P, Set-point). Dữ liệu từ công tơ: Hệ thống kết nối với công tơ điện tử hai chiều để thu thập dữ liệu đo đếm, với tần suất thu thập là 48 chu kỳ mỗi ngày. Điều này đảm bảo tính chính xác và đầy đủ của thông tin về sản lượng điện và mức độ tiêu thụ.",
  },
  {
    question: "Hệ thống đảm bảo việc truyền dữ liệu liên tục và xử lý sự cố gián đoạn kết nối như thế nào?",
    answer:
      "Một trong những ưu điểm quan trọng của giải pháp là khả năng đảm bảo tính liên tục của dữ liệu. Hệ thống được thiết kế để hoạt động ổn định và đáng tin cậy. Trong trường hợp đường truyền bị gián đoạn, Hino Gateway 378 có khả năng lưu trữ dữ liệu cục bộ tại thiết bị. Khi kết nối được khôi phục, hệ thống sẽ tự động truyền lại toàn bộ dữ liệu đã lưu trữ về máy chủ của EVN. Tính năng này giúp chủ đầu tư tuân thủ nghiêm ngặt các quy định về truyền dữ liệu, tránh bị gián đoạn hoạt động và các hình phạt liên quan đến việc không cung cấp thông tin kịp thời.",
  },
  {
    question: "Có thể sử dụng giao diện Hino Gateway 378 để theo dõi hiệu suất và tạo báo cáo không?",
    answer:
      "Hiện tại các giải pháp tổng thể khác của Hino Systech sẽ có thể đáp ứng được nhu cầu giao diện trực quan và có thể tùy chỉnh. Các giải pháp này cung cấp khả năng giám sát thời gian thực và tích hợp công nghệ điều khiển thông minh. Người dùng có thể dễ dàng theo dõi hiệu suất của hệ thống, phát hiện các sự cố và tạo các báo cáo cần thiết để phân tích và quản lý hoạt động.",
  },
  
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary/10 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-primary">HỎI ĐÁP?</h1>
          <p className="text-lg text-gray-700">
            Mọi thắc mắc thường gặp đều có câu trả lời tại đây. Nếu vẫn chưa giải đáp được vấn đề của bạn, hãy liên hệ với chúng tôi bằng các điền form bên trên
            
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-medium mb-6 text-primary">Các câu hỏi thường gặp</h2>
          <div className="divide-y divide-gray-400">
            {faqs.map((faq, index) => (
              <div key={index} className="py-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left text-base font-medium"
                >
                  {faq.question}
                  <span className="ml-4 text-xl text-primary">
                    {openIndex === index ? "×" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-700 text-base">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
