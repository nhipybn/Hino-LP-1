import { motion } from 'framer-motion';

const services = [
  {
    title: 'Solar Panel Installation',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60',
    description: 'Professional installation of high-efficiency solar panels',
    features: ['Expert Installation', 'Quality Materials', '25-Year Warranty'],
  },
  {
    title: 'Energy Monitoring',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=60',
    description: 'Advanced monitoring systems for optimal performance',
    features: ['Real-time Tracking', 'Performance Analytics', 'Mobile App'],
  },
  {
    title: 'System Maintenance',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60',
    description: 'Regular maintenance to ensure peak efficiency',
    features: ['Scheduled Checks', 'Cleaning Service', 'Repair Support'],
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Đã xoá phần heading & mô tả */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
