import { motion } from 'framer-motion';

// Define skill categories and items
interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "Ruby", "Nodejs", "Golang", "Elixir"]
  },
  {
    name: "Frameworks",
    skills: ["Django", "Flask", "Nestjs", "Gin", "Vuejs", "Phoenix", "React"]
  },
  {
    name: "Methodologies",
    skills: ["DDD", "Solid", "TDD", "BDD", "Agile", "Scrum", "Micro Service"]
  },
  {
    name: "Infrastructure",
    skills: [
      "Ansible", "Terraform", "Nginx", "Gunicorn", "Uwsgi",
      "Memcached", "Redis", "Rabbitmq", "Docker", "Kubernetes", 
      "Vagrant", "IPFS", "Filecoin", "Grafana", "Prometheus", 
      "Puppet", "Capistrano"
    ]
  },
  {
    name: "Database",
    skills: ["MariaDB", "Postgres", "MongoDB"]
  },
  {
    name: "Cloud",
    skills: ["Google", "AWS", "Azure"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 dark:bg-blue-800 py-4 px-6">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                      viewport={{ once: true }}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
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
            Continuously expanding my skill set to stay at the forefront of technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
