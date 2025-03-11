import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            {/* Profile image placeholder - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
              LB
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Leandro Barbosa
          </motion.h1>
          <motion.h2 
            className="text-2xl text-blue-600 dark:text-blue-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lead Software Engineer
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Software engineer with extensive experience in diverse projects and fields.
            Specialized in Python, JavaScript, Ruby, Nodejs, Golang, and Elixir.
            Proficient with frameworks like Django, Flask, Nestjs, Gin, Vuejs, Phoenix, and React.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://github.com/Leeaandrob" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
