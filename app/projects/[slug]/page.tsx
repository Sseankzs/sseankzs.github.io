import Link from "next/link"

const projectData: Record<
  string,
  {
    title: string
    description: string
    year: string
    tech: string
    link: string
    isLive: boolean
    overview: string
    challenge: string
    solution: string
    impact: string[]
    images: { url: string; caption: string }[]
    responsibilities: string[]
  }
> = {
  "palm-biometric-payment": {
    title: "Palm Biometric Payment System",
    description:
      "Real-time palm detection system for biometric payment prototyping with ONNX/YOLO-based computer vision pipeline, optimized for Raspberry Pi 5 deployment.",
    year: "2025",
    tech: "Python, YOLOv8, ONNX, Flask, OpenCV, Raspberry Pi",
    link: "https://github.com/Sseankzs/PayPalm",
    isLive: true,
    overview:
      "A real-time palm detection system designed for biometric payment prototyping. The system uses an ONNX/YOLO-based computer vision pipeline optimized for embedded deployment on Raspberry Pi 5, validated through integration with a Flask backend.",
    challenge:
      "Traditional biometric payment systems require expensive hardware and complex infrastructure. The challenge was to create an affordable, portable solution that could perform real-time palm detection on resource-constrained embedded devices while maintaining accuracy.",
    solution:
      "Built an ONNX/YOLO-based computer vision pipeline that leverages optimized models for embedded deployment. Integrated the detection system with a Flask backend for payment processing. Identified and resolved performance bottlenecks through real-time inference experiments and hardware-specific optimizations on Raspberry Pi 5.",
    impact: [
      "Delivered a working prototype for biometric payment authentication",
      "Achieved real-time inference on resource-constrained Raspberry Pi 5",
      "Demonstrated feasibility of affordable biometric payment solutions",
      "Successfully integrated computer vision with payment backend systems",
    ],
    images: [
      {
        url: "/modern-ecommerce-dashboard.png",
        caption: "Palm Detection Interface",
      },
      {
        url: "/product-recommendation-interface.png",
        caption: "Real-time Processing",
      },
      {
        url: "/real-time-inventory-management-system.jpg",
        caption: "Raspberry Pi Integration",
      },
    ],
    responsibilities: [
      "Led the project as Team Lead, coordinating development efforts",
      "Designed and implemented ONNX/YOLO-based computer vision pipeline",
      "Optimized model performance for Raspberry Pi 5 embedded deployment",
      "Integrated palm detection system with Flask backend",
      "Conducted real-time inference experiments and performance tuning",
    ],
  },
  "anpr-vehicle-classification": {
    title: "ANPR and Vehicle Classification",
    description: "Automated toll system for Malaysian highways with real-time license plate detection using YOLOv8 and PaddleOCR multi-stage pipeline.",
    year: "2025",
    tech: "Python, YOLOv8, PaddleOCR, Firebase, Google Drive",
    link: "https://github.com/Sseankzs/Number-Plate-Detection",
    isLive: true,
    overview:
      "An automated toll system specifically designed for Malaysian highways, featuring real-time license plate detection and vehicle classification. The system uses a multi-stage YOLOv8 and PaddleOCR pipeline integrated with cloud storage for comprehensive vehicle tracking and toll management.",
    challenge:
      "Malaysian license plates have unique formats and challenges including diverse fonts, varying lighting conditions, and different plate designs. Existing OCR solutions had poor accuracy for Malaysian plates, and there was a need for an end-to-end system that could handle detection, recognition, and data management.",
    solution:
      "Engineered custom YOLO models trained on 3 curated Malaysian datasets through 29 iterative training runs. Built a full asynchronous workflow covering vehicle detection, ROI selection, OCR with PaddleOCR, and cloud integration with Firebase and Google Drive for data persistence and retrieval.",
    impact: [
      "Achieved production-ready license plate recognition accuracy for Malaysian plates",
      "Processed real-time vehicle detection and classification on highways",
      "Completed 29 iterative training runs to optimize model performance",
      "Integrated seamless cloud storage with Firebase and Google Drive",
    ],
    images: [
      {
        url: "/distributed-system-architecture-diagram.jpg",
        caption: "System Architecture",
      },
      {
        url: "/real-time-task-processing-dashboard.jpg",
        caption: "License Plate Detection",
      },
      {
        url: "/kubernetes-cluster-monitoring.jpg",
        caption: "OCR Processing Pipeline",
      },
    ],
    responsibilities: [
      "Led the project as Team Lead, managing development timeline",
      "Curated 3 Malaysian license plate datasets for model training",
      "Designed and implemented YOLOv8 and PaddleOCR multi-stage pipeline",
      "Conducted 29 iterative training runs for model optimization",
      "Integrated cloud storage with Firebase and Google Drive",
    ],
  },
  "rna-cancer-detection": {
    title: "RNA-Seq Gene Expression Based Cancer Detection",
    description:
      "Research-grade cancer detection achieving ≥99% accuracy with full-stack deployment using ML models (SVM, Random Forest, MLP) on TCGA datasets.",
    year: "2025",
    tech: "Python, Next.js, FastAPI, Supabase, Machine Learning",
    link: "https://github.com/Sseankzs/rna-cancer-classification",
    isLive: true,
    overview:
      "A research-grade cancer detection system that analyzes RNA-Seq gene expression data to classify cancer types with high accuracy. The project combines multiple machine learning models (SVM, Random Forest, MLP) trained on comprehensive datasets (TCGA, GTEx, TARGET) with a full-stack web application for accessible model inference.",
    challenge:
      "Cancer detection from gene expression data requires processing high-dimensional datasets with thousands of features while maintaining accuracy and interpretability. The challenge was to build a robust ML pipeline and make it accessible through a user-friendly web interface with secure authentication.",
    solution:
      "Trained and deployed multiple ML models (SVM, Random Forest, MLP) on TCGA, GTEx, and TARGET gene expression datasets with strategic 500-gene feature selection. Built a scalable, end-to-end full-stack application using Next.js frontend and FastAPI backend for model inference, integrated with Supabase for authentication and AI-generated insights.",
    impact: [
      "Achieved ≥99% classification accuracy for cancer detection",
      "Successfully processed and analyzed large-scale gene expression datasets",
      "Deployed accessible web application with secure authentication",
      "Integrated AI-generated insights for result interpretation",
    ],
    images: [
      {
        url: "/component-library-showcase-interface.jpg",
        caption: "Cancer Classification Dashboard",
      },
      {
        url: "/interactive-documentation-storybook.jpg",
        caption: "Model Inference Interface",
      },
      {
        url: "/design-system-theming-interface.jpg",
        caption: "Gene Expression Analysis",
      },
    ],
    responsibilities: [
      "Designed and implemented ML pipeline with feature selection strategy",
      "Trained multiple models (SVM, Random Forest, MLP) on TCGA datasets",
      "Developed full-stack application with Next.js and FastAPI",
      "Integrated Supabase for authentication and data management",
      "Implemented AI-generated insights for medical interpretation",
    ],
  },
  "sme-funding-matchmaker": {
    title: "SME Funding Matchmaker",
    description:
      "Full-stack AI-powered grant matching platform for SMEs with automated guidance and personalized recommendations using AWS Bedrock.",
    year: "2025",
    tech: "Next.js 14, TypeScript, AWS Lambda, AWS Bedrock",
    link: "https://github.com/Sseankzs/keystone",
    isLive: true,
    overview:
      "An AI-powered grant matching platform designed to help Small and Medium Enterprises (SMEs) discover and apply for funding opportunities. The platform features dual portals for SMEs and grant providers, with automated eligibility screening and personalized recommendations powered by AWS Bedrock's NLP capabilities.",
    challenge:
      "SMEs often struggle to find relevant funding opportunities due to fragmented information and complex eligibility criteria. The challenge was to create an intelligent system that could match SMEs with appropriate grants, provide automated guidance through the application process, and maintain engagement for both SMEs and grant providers.",
    solution:
      "Architected a full-stack serverless application using Next.js 14, TypeScript, and AWS Lambda functions. Integrated AWS Bedrock for NLP-driven matchmaking and application assistance, enabling automated grant guidance, eligibility screening, and task tracking. Built dual portals for real-time engagement between SMEs and funding providers.",
    impact: [
      "Delivered real-time dual-portal engagement for SMEs and grant providers",
      "Automated eligibility screening and grant matching process",
      "Enabled personalized recommendations through AI-powered NLP",
      "Streamlined application process with task tracking and guidance",
    ],
    images: [
      {
        url: "/component-library-showcase-interface.jpg",
        caption: "Grant Matching Dashboard",
      },
      {
        url: "/interactive-documentation-storybook.jpg",
        caption: "SME Portal Interface",
      },
      {
        url: "/design-system-theming-interface.jpg",
        caption: "AI Recommendation Engine",
      },
    ],
    responsibilities: [
      "Led the project as Team Lead, coordinating full-stack development",
      "Architected serverless infrastructure with AWS Lambda",
      "Integrated AWS Bedrock for NLP-driven matchmaking and guidance",
      "Developed dual portals with Next.js 14 and TypeScript",
      "Implemented eligibility screening and task tracking systems",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectData[slug]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-6 md:px-12 md:py-8">
          <div className="col-span-6 md:col-span-6">
            <Link href="/" className="text-base md:text-lg font-medium tracking-tight hover:underline">
              ← Kong Zhi Syuen
            </Link>
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-balance mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">{project.description}</p>
          </div>
          <div className="col-span-12 md:col-span-8 mt-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666] mb-2">Year</h3>
              <p className="text-base">{project.year}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-[#666666] mb-2">Tech Stack</h3>
              <p className="text-base">{project.tech}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Overview</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-lg leading-relaxed">{project.overview}</p>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0">
          {project.images.map((image, index) => (
            <div key={index} className="col-span-12 border-t border-black">
              <div className="px-6 py-12 md:px-12 md:py-16">
                <img src={image.url || "/placeholder.svg"} alt={image.caption} className="w-full mb-4" />
                <p className="text-sm font-mono text-[#666666]">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Challenge</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-lg leading-relaxed">{project.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Solution</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-lg leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Impact</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-4">
              {project.impact.map((item, index) => (
                <li key={index} className="text-lg leading-relaxed flex">
                  <span className="mr-4 text-[#666666]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12 mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#666666]">Responsibilities</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-4">
              {project.responsibilities.map((item, index) => (
                <li key={index} className="text-lg leading-relaxed flex">
                  <span className="mr-4 text-[#666666]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* External Link */}
      <section className="border-b border-black">
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg hover:underline"
            >
              Visit Project →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="grid grid-cols-12 gap-0 px-6 py-12 md:px-12 md:py-16">
          <div className="col-span-12">
            <Link href="/" className="text-base md:text-lg hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
