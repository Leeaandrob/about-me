import { motion } from 'framer-motion';

// Define the education data
const educationData = [
  {
    institution: "Universidade Veiga de Almeida",
    degree: "Ciência da Computação, Engenharia de Software",
    period: "2014 - 2019"
  },
  {
    institution: "Universidade Estacio de Sá",
    degree: "Bachelor of Engineering (B.E.), Industrial Production Technologies/Technicians",
    period: "2011 - 2015"
  },
  {
    institution: "Faculdade Flama",
    degree: "Técnico de Informatica, Information Technology",
    period: "2009 - 2011"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{education.institution}</h3>
              <p className="text-blue-600 dark:text-blue-400">{education.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">{education.period}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Dedicated to lifelong learning and academic excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
