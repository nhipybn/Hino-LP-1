import { motion } from 'framer-motion';

const ImpressiveStats = () => {
  const stats = [
    {
      number: "15+",
      label: "Dự án hoàn thành",
    },
    {
      number: "50+",
      label: "MWp tổng công suất",
    },
    {
      number: "10+",
      label: "Tỉnh thành",
    },
    {
      number: "100%",
      label: "Khách hàng hài lòng",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-center h-40"
            >
              <div>
                <div className="text-5xl font-extrabold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpressiveStats;
