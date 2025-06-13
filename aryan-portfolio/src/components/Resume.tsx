import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-4">Resume</h2>
          <p className="text-gray-300">My academic and professional journey</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-6">Education</h3>
            <div className="bg-gray-900 p-6 rounded-lg h-full">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/penn-state-logo.png"
                  alt="Penn State Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-white text-center">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-400 mt-2 text-center">The Pennsylvania State University</p>
              <p className="text-red-500 mt-1 text-center">Expected Graduation: Spring 2027</p>
              <p className="text-red-500 text-center">GPA: 3.8/4.0</p>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-6">Projects</h3>
            <div className="bg-gray-900 p-6 rounded-lg h-full">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">Machine Learning Project</h4>
                  <p className="text-sm text-red-500">March 2025</p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>Google's ML Crash Course completion</li>
                    <li>House price prediction model</li>
                    <li>Python and TensorFlow implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Freelancer Management System</h4>
                  <p className="text-sm text-red-500">December 2024</p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>Java desktop application with Swing</li>
                    <li>SQL database integration</li>
                    <li>Skills mapping feature</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Twitter-like Social Media App</h4>
                  <p className="text-sm text-red-500">May 2023</p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>Full-stack web application</li>
                    <li>Python backend with AWS</li>
                    <li>Dynamic content updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-6">Experiences</h3>
            <div className="bg-gray-900 p-6 rounded-lg h-full">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">CodePath ICP Program</h4>
                  <p className="text-sm text-red-500">June 2024 - August 2024</p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>Technical interview preparation</li>
                    <li>Career development workshops</li>
                    <li>ICP Career Fair participation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Leo Soft IT</h4>
                  <p className="text-gray-400">Python Developer Intern</p>
                  <p className="text-sm text-red-500">April 2023 - June 2023</p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>AI-powered real estate project</li>
                    <li>Python, NumPy, Pandas development</li>
                    <li>Mentorship program completion</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-400"
        >
          <br></br><p>For a detailed resume and work history, please contact me below.</p>
        </motion.div>
      </div>
    </section>
  );
}