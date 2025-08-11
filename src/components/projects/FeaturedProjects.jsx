import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Best Pacific Hải Dương',
    capacity: '6MWp',
    description: 'Hino Systech Việt Nam hoàn thành lắp đặt hệ thống giám sát và điều khiển điện mặt trời áp mái tại nhà máy Best Pacific Hải Dương.',
        tags: [ 'C&I', '2024'],
        status: 'Vận hành',
    image: '/img/haiduong.jpg'
  },
  {
    title: 'Sapporo - Long An',
    capacity: '0.706MWp',
    description: 'Dự án được triển khai và thực hiện tại nhà máy bia Sapporo Long An với công suất là 706.32kWp.',
    tags: ['Scada', 'Tủ điều khiển', '2024'],
    status: 'Vận hành',
    image: '/img/saporo.jpg'
  },
  {
    title: 'LuxShare ICT ',
    capacity: '20.048MWp',
    description: 'Dự án LuxShare ICT với công suất lắp đặt lên tới 20.048 MWp là dự án điện mặt trời áp mái lớn nhất tính đến năm 2023.',
    tags: ['Bắc Giang', 'C&I', '2023'],
    status: 'Vận hành',
    image: 'img/luxshare.jpg'
  },
  {
    title: 'THK',
    capacity: '2485kWp',
    description: 'Phần mềm giám sát bao gồm app điều khiển được cài đặt tại phòng điều khiển của hệ thống và giao diện webform cho phép người dùng theo dõi và điều khiển hệ thống từ xa.',
    tags: ['Bắc Ninh', 'C&I', '2023'],
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Long Đức',
    capacity: '2400kWp',
    description: 'Hệ thống bao gồm phần mềm giám sát, điều khiển được cài đặt ở phòng điều khiển trung tâm và giao diện webform cho phép người dùng có thể giám sát toàn bộ hệ thống từ xa ở bất kỳ nơi nào.',
    tags: ['Đồng Nai', 'C&I', '2023'],
    status: 'Vận hành',
    image: 'img/longduc.jpg'
  },
  {
    title: 'Enkei',
    capacity: '0.437MWp',
    description: 'Dự án điện mặt trời áp mái tại nhà máy Enkei nằm ở khu công nghiệp Thăng Long 1 với công suất 437 kWp.',
    tags: ['2023'],
    status: 'Vận hành',
    image: 'img/ENKAU.png'
  }
];


const FeaturedProjects = () => {
  return (
    <section id="du-an" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-primary">
            Các dự ăn năng lượng mặt trời khác
          </h2>
         <div className="text-lg text-gray-600 max-w-8xl mx-auto leading-relaxed text-center">
  <p>
    Với hơn <strong>12 năm kinh nghiệm</strong> tại thị trường Việt Nam, Hino Systech đã thực hiện nhiều dự án lớn trên toàn quốc trong lĩnh vực năng lượng mặt trời.
  </p>
  <p className="mt-2 font-semibold">Các giải pháp nổi bật:</p>
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1 mt-6 text-left list-disc list-inside">
    <li>Giám sát hệ thống điện mặt trời áp mái</li>
    <li>Zero Export</li>
    <li>Vận hành song song với máy phát</li>
    <li>Điều khiển tập trung điện mặt trời</li>
    <li>Đảm bảo hệ số công suất nhà máy</li>
    <li>Ổn định điện áp và tần số lưới</li>
  </ul>
</div>


        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
             <div className="relative h-64">
  {/* Logo Hino ở góc trên bên trái */}
  <img
    src="/logo1.png"
    alt="Hino Logo"
    className="absolute top-0 left-0 w-30 h-16 z-10 rounded shadow-md"
  />

  {/* Hình ảnh dự án */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 z-10">
  {project.tags.map((tag, i) => (
    <span
      key={i}
      className="bg-white/80 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm backdrop-blur"
    >
      {tag}
    </span>
  ))}
</div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
  <div className="absolute bottom-4 left-4 text-white">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      
      <span className="text-sm font-medium">{project.status}</span>
    </div>
    <div className="text-2xl font-bold">{project.capacity}</div>
  </div>
</div>


              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;