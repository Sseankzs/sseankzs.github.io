export default function Portfolio() {
  const projects = [
    {
      slug: "palm-biometric-payment",
      title: "Palm Biometric Payment System",
      description:
        "Real-time palm detection system for biometric payment prototyping with ONNX/YOLO-based computer vision pipeline, optimized for Raspberry Pi 5 deployment.",
      year: "2024",
      tech: "Python, YOLOv8, ONNX, Flask, OpenCV, Raspberry Pi",
      link: "https://github.com/Sseankzs/PayPalm",
      isLive: true,
    },
    {
      slug: "anpr-vehicle-classification",
      title: "ANPR and Vehicle Classification",
      description: "Automated toll system for Malaysian highways with real-time license plate detection using YOLOv8 and PaddleOCR multi-stage pipeline.",
      year: "2024",
      tech: "Python, YOLOv8, PaddleOCR, Firebase, Google Drive",
      link: "https://github.com/Sseankzs/Number-Plate-Detection",
      isLive: true,
    },
    {
      slug: "rna-cancer-detection",
      title: "RNA-Seq Gene Expression Based Cancer Detection",
      description:
        "Research-grade cancer detection achieving ≥99% accuracy with full-stack deployment using ML models (SVM, Random Forest, MLP) on TCGA datasets.",
      year: "2024",
      tech: "Python, Next.js, FastAPI, Supabase, Machine Learning",
      link: "https://github.com/Sseankzs/rna-cancer-classification",
      isLive: true,
    },
    {
      slug: "sme-funding-matchmaker",
      title: "SME Funding Matchmaker",
      description:
        "Full-stack AI-powered grant matching platform for SMEs with automated guidance and personalized recommendations using AWS Bedrock.",
      year: "2024",
      tech: "Next.js 14, TypeScript, AWS Lambda, AWS Bedrock",
      link: "https://github.com/Sseankzs/keystone",
      isLive: true,
    },
  ]

  const experience = [
    {
      company: "Bank Negara Malaysia",
      role: "Intern",
      period: "May 2024–Dec 2024",
      description: "Automated compliance workflows using Power Automate, reducing manual processing time by 20%. Optimized the Data Compliance Report portal to handle 10,000+ annual logins and 9,000 submissions.",
    },
    {
      company: "Missouri University of Science and Technology",
      role: "Course Grader – Database Systems",
      period: "Jan 2024–May 2024",
      description: "Graded assignments and provided detailed feedback for 100+ students. Reduced grading turnaround time by 33%, demonstrating strong attention to detail and time management.",
    },
  ]

  const education = [
    {
      institution: "Universiti Teknologi PETRONAS",
      degree: "B.S. Computer Science (Hons) | Minor in Financial Management",
      period: "Sept 2021–Dec 2025",
      details: "CGPA: 3.74/4.0 | Coursework: Algorithm and Data Structures, Object Oriented Programming, Distributed & Parallel Computing",
    },
    {
      institution: "Missouri University of Science and Technology",
      degree: "Student Exchange Programme",
      period: "Aug 2023–May 2024",
      details: "CGPA: 3.778/4.0 | Coursework: Computer Security, Business Analytics & Data Science, Intro to Artificial Intelligence",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-6 md:px-12 md:py-8">
          <div className="col-span-6 md:col-span-6">
            <h1 className="text-base md:text-lg font-medium tracking-tight">Kong Zhi Syuen</h1>
          </div>
          <div className="col-span-6 md:col-span-6 flex items-center justify-end gap-2">
            <a href="/KongZhiSyuen_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <span className="w-2 h-2 bg-[#FF4F00] pulse-dot"></span>
              <span className="text-sm md:text-base">Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-16 md:px-12 md:py-24">
          <div className="col-span-12 md:col-span-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-balance">
              Computer Science student specializing in Full-Stack Development, AI and Computer Vision
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 mt-8">
            <p className="text-base md:text-lg leading-relaxed">
              Building innovative solutions with machine learning and computer vision. Experienced in deploying end-to-end applications with modern cloud technologies and embedded systems.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-12">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Selected Works</h3>
          </div>

          {projects.map((project, index) => (
            <div key={index} className="col-span-12 border-t border-black group">
              <a
                href={`/projects/${project.slug}`}
                className="grid grid-cols-12 gap-0 py-8 md:py-12 transition-colors hover:bg-black hover:text-white"
              >
                <div className="col-span-12 md:col-span-8 px-0 md:px-6">
                  <div className="flex items-start gap-3 mb-3">
                    <h4 className="text-2xl md:text-4xl font-bold tracking-tight">{project.title}</h4>
                    {project.isLive && (
                      <span className="w-2 h-2 bg-[#FF4F00] mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></span>
                    )}
                  </div>
                  <p className="text-base md:text-lg leading-relaxed mb-4">{project.description}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#666666] group-hover:text-white/70 transition-colors">
                    {project.tech}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 px-0 md:px-6 mt-4 md:mt-0 flex md:justify-end items-start">
                  <span className="text-sm font-mono text-[#666666] group-hover:text-white/70 transition-colors">
                    {project.year}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-12">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Experience</h3>
          </div>

          {experience.map((job, index) => (
            <div key={index} className="col-span-12 border-t border-black">
              <div className="grid grid-cols-12 gap-0 py-8 md:py-12">
                <div className="col-span-12 md:col-span-8 px-0 md:px-6">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{job.role}</h4>
                  <p className="text-base md:text-lg mb-4">{job.company}</p>
                  <p className="text-base leading-relaxed text-[#333333]">{job.description}</p>
                </div>
                <div className="col-span-12 md:col-span-4 px-0 md:px-6 mt-4 md:mt-0 flex md:justify-end items-start">
                  <span className="text-sm font-mono text-[#666666]">{job.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-12">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Education</h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="col-span-12 border-t border-black">
              <div className="grid grid-cols-12 gap-0 py-8 md:py-12">
                <div className="col-span-12 md:col-span-8 px-0 md:px-6">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{edu.degree}</h4>
                  <p className="text-base md:text-lg mb-4">{edu.institution}</p>
                  <p className="text-sm font-mono text-[#666666]">{edu.details}</p>
                </div>
                <div className="col-span-12 md:col-span-4 px-0 md:px-6 mt-4 md:mt-0 flex md:justify-end items-start">
                  <span className="text-sm font-mono text-[#666666]">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer>
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666] mb-6">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:sseankong52@gmail.com" className="block text-base md:text-lg hover:underline">
                sseankong52@gmail.com
              </a>
              <a
                href="https://github.com/Sseankzs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base md:text-lg hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kongzs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base md:text-lg hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-8 md:mt-0 flex items-end justify-start md:justify-end">
            <p className="text-xs font-mono text-[#666666]">© 2026 Kong Zhi Syuen</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
