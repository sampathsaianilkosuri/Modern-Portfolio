import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Award, Briefcase, GraduationCap, User, Code, Wrench, Database, Notebook as Robot, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#F1EFEC]">
      {/* Hero Section with integrated About Me */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-[#123458] to-[#030303] text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">SAMPATH SAI ANIL KOSURI</h1>
          <p className="text-2xl mb-8 text-[#D4C9BE]">Software Engineer | Robotics Enthusiast | AI Developer</p>
          
          {/* About Me Integration */}
          <div className="bg-[#123458]/30 backdrop-blur-sm p-8 rounded-2xl mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
              <User className="text-[#D4C9BE]" /> About Me
            </h2>
            <p className="text-lg leading-relaxed text-[#F1EFEC]">
              Smart, confident Software Engineer with expertise in Robotics and AI. Seeking opportunities to utilize my knowledge
              and experience to help organizations reach their goals through innovative solutions and technical excellence.
            </p>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/sampathsaianilkosuri" className="hover:text-[#D4C9BE] transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sampath-sai-anil-kosuri-43aba224a" className="hover:text-[#D4C9BE] transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sampathsaianilkosuri@gmail.com" className="hover:text-[#D4C9BE] transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-[#D4C9BE]" />
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-[#F1EFEC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#123458] flex items-center gap-2">
            <Code /> Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard icon={<Code />} title="Programming" skills={["Python (Automation)", "NumPy", "pandas", "Java"]} />
            <SkillCard icon={<Database />} title="AI & Data" skills={["Artificial Neural Networks", "OpenCV", "Media-Pipe", "SQL"]} />
            <SkillCard icon={<Robot />} title="Robotics" skills={["ROS2", "Gazebo Simulation", "SLAM", "Motor Torque Calculations", "Robotics Design"]} />
            <SkillCard icon={<Monitor />} title="Tools & Hardware" skills={["STM32", "Arduino", "ESP32", "Jetson Orin Nano", "Raspberry Pi"]} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-[#D4C9BE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#123458] flex items-center gap-2">
            <Briefcase /> Experience
          </h2>
          <div className="border-l-2 border-[#123458] pl-8">
            <div className="relative mb-12">
              <div className="absolute -left-10 bg-[#123458] rounded-full w-4 h-4"></div>
              <h3 className="text-xl font-bold mb-2 text-[#030303]">Robotics Electronics Engineer</h3>
              <h4 className="text-lg mb-2 text-[#123458]">Kakinada Institute of Engineering and Technology</h4>
              <ul className="list-disc list-inside text-[#030303]">
                <li>Guided students in implementing real-world projects</li>
                <li>Designed and developed embedded systems for robotic applications</li>
                <li>Expertise in PCB design and assembly</li>
                <li>Proficient in mechanical assembly and fabrication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-[#F1EFEC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#123458] flex items-center gap-2">
            <GraduationCap /> Education
          </h2>
          <div className="space-y-8">
            <EducationCard 
              degree="B.Tech in Artificial Intelligence"
              institution="KIET College, Korangi, AP"
              year="2024"
              score="70%"
            />
            <EducationCard 
              degree="Diploma in Mechanical Engineering"
              institution="KITS College, Divili, AP"
              year="2021"
              score="86%"
            />
            <EducationCard 
              degree="Secondary School"
              institution="Bhashyam School, Samalkot, AP"
              year="2018"
              score="95%"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-[#D4C9BE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#123458] flex items-center gap-2">
            <Award /> Achievements
          </h2>
          <div className="bg-[#F1EFEC] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-[#030303]">Certificate of merit for being among the top 5/10 performers in the National Chess Competition</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#123458] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">Contact: +91 6300550177 | sampathsaianilkosuri@gmail.com</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/sampathsaianilkosuri" className="hover:text-[#D4C9BE] transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sampath-sai-anil-kosuri-43aba224a" className="hover:text-[#D4C9BE] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sampathsaianilkosuri@gmail.com" className="hover:text-[#D4C9BE] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-[#D4C9BE] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#123458]">{icon}</span>
        <h3 className="text-xl font-bold text-[#030303]">{title}</h3>
      </div>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-[#030303]">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function EducationCard({ degree, institution, year, score }: { 
  degree: string, 
  institution: string, 
  year: string, 
  score: string 
}) {
  return (
    <div className="bg-[#D4C9BE] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-[#030303]">{degree}</h3>
      <p className="text-[#123458] mb-2">{institution}</p>
      <div className="flex justify-between text-[#030303]">
        <span>Year: {year}</span>
        <span>Score: {score}</span>
      </div>
    </div>
  );
}

export default App;