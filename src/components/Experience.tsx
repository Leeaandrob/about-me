import { motion } from 'framer-motion';

// Define the experience data structure
interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "FanHero",
    position: "Lead Software Engineer",
    period: "Outubro de 2020 - Present (4 anos 6 meses)",
    location: "Florida, United States",
    description: [
      "Leading software development team and architecture design",
      "Implementing best practices and modern development workflows",
      "Overseeing project delivery and technical quality"
    ]
  },
  {
    company: "Voodfy",
    position: "Fundador",
    period: "Outubro de 2020 - Junho de 2021 (9 meses)",
    location: "Estados Unidos",
    description: [
      "First developer to insert Video streaming protocols like Dash HLS and Smooth Streaming into Filecoin",
      "Built a powerful and private decentralized video hosting platform",
      "Developed secure streaming solutions giving users control of their content"
    ]
  },
  {
    company: "Globo",
    position: "Senior Software Engineer",
    period: "Setembro de 2018 - Outubro de 2020 (2 anos 2 meses)",
    location: "Rio de Janeiro, Brazil",
    description: [
      "Built and improved the biggest Video CDN in South America",
      "Worked on projects to improve video streaming delivery and expansion",
      "Received awards for projects that improved video streaming delivery",
      "Worked with HLS, Dash, SmoothStreaming, Widevine, PlayReady, FairPlay"
    ]
  },
  {
    company: "Roy",
    position: "Principal Engineer / Partner",
    period: "Abril de 2018 - Setembro de 2018 (6 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Responsible for software and product development for OTT video distribution",
      "Backend development using Python, Django and Django Rest Framework",
      "Frontend development using Javascript, Vuejs, Scss",
      "DevOps and cloud infrastructure on AWS"
    ]
  },
  {
    company: "Paratii",
    position: "DevOps Engineer",
    period: "Março de 2018 - Julho de 2018 (5 meses)",
    location: "São Paulo e Região, Brasil",
    description: [
      "Built fair, free and disintermediated world for videos using blockchain",
      "Worked with Ethereum blockchain technologies",
      "Managed CI/CD, AWS infrastructure, and video transcoding services"
    ]
  },
  {
    company: "Maestrus.com",
    position: "Consultor de software sênior",
    period: "Outubro de 2017 - Fevereiro de 2018 (5 meses)",
    location: "São Paulo e Região, Brasil",
    description: [
      "Building system for hosting, player and analytics video system",
      "Creation of new infrastructure architecture and software for stability and performance",
      "Technologies: Python, Django, AWS Transcoding, AWS EC2, AWS RDS, AWS SQS"
    ]
  },
  {
    company: "Eugosto.de",
    position: "Head Of Software Development",
    period: "Março de 2017 - Setembro de 2017 (7 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Software development with Python and Django of platform of news",
      "Architecture of software and infrastructure of the application",
      "Machine learning algorithms for classifications and recommendations",
      "Technologies: Python, Django, AWS EC2, AWS S3, AWS RDS, AWS SQS, JavaScript, HTML5, CSS3"
    ]
  },
  {
    company: "Triplin",
    position: "Lead Software System Engineer",
    period: "Março de 2017 - Setembro de 2017 (7 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Building a tourism product to help travelers choose better destinations",
      "Data science and machine learning techniques for core concept and algorithm",
      "Technologies: Python, Django, SQS, AWS EC2, AWS ELB, AWS RDS"
    ]
  },
  {
    company: "FLAGCX",
    position: "Product Developer",
    period: "Junho de 2016 - Março de 2017 (10 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Software development with Python and Django of social networking tools",
      "API consumption for business intelligence",
      "Data extraction for analysis and machine learning algorithms"
    ]
  },
  {
    company: "Storm Security & Safety Systems",
    position: "Python Software Developer",
    period: "Março de 2016 - Junho de 2016 (4 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Software development with Python and Django of streaming platform",
      "Queue servers with Redis-Server integrated with Celery",
      "CDN integrations and continuous improvements using TDD and BDD"
    ]
  },
  {
    company: "Linkzter",
    position: "Leading Software Engineer",
    period: "Julho de 2015 - Fevereiro de 2016 (8 meses)",
    location: "Rio de Janeiro e Região, Brasil",
    description: [
      "Development of mobile applications and social networks",
      "Technologies: Python, Django, Django-rest-framework, Ionic, Cordova, AngularJS 1x"
    ]
  },
  {
    company: "Hadrons",
    position: "Software Developer",
    period: "Junho de 2015 - Novembro de 2015 (6 meses)",
    location: "Rio de Janeiro, Brasil",
    description: [
      "Deploy automation with Fabric and Capistrano",
      "Software development with Python and Django",
      "Test driven development and acceptance testing with Selenium"
    ]
  },
  {
    company: "Tree Software",
    position: "Software Developer Python/Django",
    period: "Novembro de 2014 - Junho de 2015 (8 meses)",
    location: "Rio de Janeiro, Brasil",
    description: [
      "Deploy automation with Fabric and Capistrano",
      "Software development with Python and Django",
      "Test driven development and acceptance testing with Selenium"
    ]
  },
  {
    company: "Sky Reach Telecom",
    position: "Telecommunications Technician",
    period: "Janeiro de 2012 - Novembro de 2014 (2 anos 11 meses)",
    location: "Rio de Janeiro, Brasil",
    description: [
      "Installation, configuration and activation of internet systems and satellite television",
      "Support and maintenance of RF systems in C and Ku band",
      "Technical documentation and procurement with suppliers"
    ]
  },
  {
    company: "C.Foster Serviços e Equipamentos de Petroleo Ltda.",
    position: "Internship of Telecommunication Engineering",
    period: "Março de 2011 - Agosto de 2011 (6 meses)",
    location: "Rio de Janeiro, Brasil",
    description: [
      "Support local and remote",
      "VSAT System Monitoring iDirect",
      "Preparation of technical reports and study of new technology hardware and software"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through various roles and companies in the software industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } border-blue-500`}>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.position}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{experience.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{experience.period} | {experience.location}</p>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
