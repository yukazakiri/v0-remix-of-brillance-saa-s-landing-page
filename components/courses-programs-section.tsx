"use client"

import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-card shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-border shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-foreground text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function CoursesAndProgramsSection() {
  const programs = [
    {
      title: "Bachelor of Science in Information Technology",
      duration: "4 Years",
      level: "Undergraduate",
      description:
        "Master cutting-edge technologies including web development, cloud computing, cybersecurity, and software engineering.",
      highlights: ["Web Development", "Cloud Computing", "Cybersecurity", "Database Management"],
      color: "from-blue-50 to-blue-100",
      icon: "💻",
    },
    {
      title: "Bachelor of Science in Business Administration",
      duration: "4 Years",
      level: "Undergraduate",
      description:
        "Develop comprehensive business skills in management, finance, marketing, and strategic planning for modern enterprises.",
      highlights: ["Financial Management", "Strategic Planning", "Digital Marketing", "Entrepreneurship"],
      color: "from-amber-50 to-amber-100",
      icon: "📊",
    },
    {
      title: "Associate Degree in Data Analytics",
      duration: "2 Years",
      level: "Associate",
      description:
        "Specialize in data analysis, visualization, and business intelligence to drive data-informed decision making.",
      highlights: ["Data Visualization", "Statistical Analysis", "Business Intelligence", "Python & R"],
      color: "from-purple-50 to-purple-100",
      icon: "📈",
    },
    {
      title: "Bachelor of Science in Computer Science",
      duration: "4 Years",
      level: "Undergraduate",
      description:
        "Deep dive into algorithms, artificial intelligence, machine learning, and advanced software engineering principles.",
      highlights: ["Machine Learning", "AI Development", "Software Engineering", "Data Structures"],
      color: "from-green-50 to-green-100",
      icon: "🤖",
    },
    {
      title: "Diploma in Professional Accounting",
      duration: "3 Years",
      level: "Diploma",
      description:
        "Comprehensive accounting training covering financial reporting, tax accounting, auditing, and compliance standards.",
      highlights: ["Financial Reporting", "Tax Accounting", "Auditing", "Compliance"],
      color: "from-red-50 to-red-100",
      icon: "📋",
    },
    {
      title: "Certificate in Digital Marketing",
      duration: "6 Months",
      level: "Certificate",
      description:
        "Fast-track program in social media marketing, SEO, content strategy, and digital advertising for modern marketers.",
      highlights: ["Social Media Marketing", "SEO Optimization", "Content Strategy", "Analytics"],
      color: "from-pink-50 to-pink-100",
      icon: "📱",
    },
  ]

  return (
    <div className="w-full border-b border-border flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-border flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L6 2L11 11" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M3 7H9" stroke="currentColor" strokeWidth="1" />
              </svg>
            }
            text="Academic Programs"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-foreground text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Our Academic Programs
          </div>
          <div className="self-stretch text-center text-muted-foreground text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Choose from our diverse range of undergraduate, associate, diploma, and certificate programs
            <br className="hidden sm:block" />
            designed to prepare you for success in your chosen field.
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-border hover:shadow-[0px_8px_24px_rgba(55,50,47,0.12)] transition-all duration-300 hover:border-border flex flex-col group"
            >
              <div className={`h-24 bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                <div className="text-5xl">{program.icon}</div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
                {/* Level Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-1 bg-muted text-foreground text-xs font-semibold rounded-full">
                      {program.level}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full whitespace-nowrap border border-border">
                    {program.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-foreground text-lg sm:text-xl font-semibold font-sans leading-tight group-hover:text-foreground/80 transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed font-sans">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {program.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border hover:bg-secondary/80 transition-colors"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 mt-auto">
                  <button className="text-foreground text-sm font-semibold hover:text-muted-foreground transition-colors duration-200 flex items-center gap-2 group/link">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Categories Info */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-t border-border flex justify-center items-center">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Flexible Learning Options",
              description:
                "Choose from full-time, part-time, and online learning formats to fit your schedule and lifestyle.",
            },
            {
              title: "Industry-Relevant Curriculum",
              description:
                "Our programs are designed with input from industry experts to ensure you learn in-demand skills.",
            },
            {
              title: "Career Support Services",
              description:
                "Access internship opportunities, job placement assistance, and career counseling throughout your studies.",
            },
            {
              title: "Scholarship Opportunities",
              description:
                "We offer various scholarships and financial aid options to make quality education accessible to all.",
            },
          ].map((info, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-6 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <h4 className="text-foreground text-lg font-semibold font-sans">{info.title}</h4>
              <p className="text-muted-foreground text-sm sm:text-base font-normal font-sans leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
