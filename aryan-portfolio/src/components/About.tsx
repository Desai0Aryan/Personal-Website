import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">About Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
            I'm a passionate and detail-oriented software developer skilled in Python, Java, JavaScript, C++, SQL, and more. 
            I enjoy solving complex problems and building scalable, user-friendly applications using frameworks like React and Node.js. 
            With hands-on experience in cloud platforms like AWS and GCP, I thrive in full-stack environments and enjoy continuous learning and collaboration. 
            I'm also passionate about artificial intelligence and have foundational skills in machine learning, which I apply to build intelligent, data-driven solutions.
          </p>
        </motion.div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-red-500">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-300 text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}