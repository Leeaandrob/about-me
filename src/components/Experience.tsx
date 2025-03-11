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
    period: "October 2020 - Present",
    location: "Florida, United States",
    description: [
      "Leading software development team and architecture design",
      "Implementing best practices and modern development workflows",
      "Overseeing project delivery and technical quality"
    ]
  },
  {
    company: "Voodfy",
    position: "Founder",
    period: "October 2020 - June 2021",
    location: "United States",
    description: [
      "First developer to insert Video streaming protocols like Dash HLS and Smooth Streaming into Filecoin",
      "Built a powerful and private decentralized video hosting platform",
      "Developed secure streaming solutions giving users control of their content"
    ]
  },
  {
    company: "Globo",
    position: "Senior Software Engineer",
    period: "September 2018 - October 2020",
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
    period: "April 2018 - September 2018",
    location: "Rio de Janeiro, Brazil",
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
    period: "March 2018 - July 2018",
    location: "São Paulo, Brazil",
    description: [
      "Built fair, free and disintermediated world for videos using blockchain",
      "Worked with Ethereum blockchain technologies",
      "Managed CI/CD, AWS infrastructure, and video transcoding services"
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
