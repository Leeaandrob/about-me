import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Leandro Barbosa. All rights reserved.</p>
          <p>
            Built with <span className="text-blue-500">React</span> and <span className="text-blue-500">Tailwind CSS</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
