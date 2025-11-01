"use client"
import { useEffect, useRef, useState } from "react"

export default function AcademicsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const mountedRef = useRef(true)
  const navContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!mountedRef.current) return
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const programs = [
    {
      id: "cs",
      name: "Computer Science",
      category: "technology",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Master software development, AI, machine learning, and cybersecurity",
      icon: "▲",
      featured: true,
    },
    {
      id: "ba",
      name: "Business Analytics",
      category: "business",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Combine business expertise with data science for strategic decision-making",
      icon: "₱",
      featured: true,
    },
    {
      id: "it",
      name: "Information Technology",
      category: "technology",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Network management, cybersecurity, and IT infrastructure",
      icon: "◆",
      featured: false,
    },
    {
      id: "da",
      name: "Data Analytics",
      category: "technology",
      duration: "3 Years",
      degree: "Associate's Degree",
      description: "Statistical analysis, machine learning, and business intelligence",
      icon: "◇",
      featured: false,
    },
    {
      id: "dm",
      name: "Digital Marketing",
      category: "business",
      duration: "2 Years",
      degree: "Certificate",
      description: "SEO, social media, content strategy, and digital analytics",
      icon: "◎",
      featured: false,
    },
    {
      id: "hm",
      name: "Hospitality Management",
      category: "business",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Hotel operations, tourism, and event management",
      icon: "◉",
      featured: false,
    },
    {
      id: "et",
      name: "Engineering Technology",
      category: "technology",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Electrical, mechanical, and civil engineering principles",
      icon: "⚡",
      featured: false,
    },
    {
      id: "ac",
      name: "Accounting",
      category: "business",
      duration: "4 Years",
      degree: "Bachelor's Degree",
      description: "Financial accounting, auditing, and taxation",
      icon: "◈",
      featured: false,
    },
  ]

  const filteredPrograms = activeFilter === "all" ? programs : programs.filter((p) => p.category === activeFilter)
  const featuredPrograms = programs.filter((p) => p.featured)

  return (
    <div className="w-full min-h-screen relative bg-background overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[900px] lg:w-[900px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Vertical border lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>

          {/* Navigation */}
          <div className="self-stretch pt-[9px] overflow-visible border-b border-border flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            <div
              ref={navContainerRef}
              className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0"
            >
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-card backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-visible rounded-[50px] flex justify-between items-center relative z-30 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image.png"
                      alt="Data Center College Logo"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                    />
                    <div className="flex flex-col justify-center leading-none gap-[2px]">
                      <div className="text-foreground text-[10px] sm:text-xs md:text-sm lg:text-base font-bold font-sans whitespace-nowrap">
                        Data Center College
                      </div>
                      <div className="flex items-baseline gap-1 whitespace-nowrap">
                        <span className="text-foreground text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-medium font-sans">
                          Of The Philippines
                        </span>
                        <span className="text-foreground text-[5px] sm:text-[6px] md:text-[7px] lg:text-[7px] font-light font-sans opacity-80">
                          of Baguio City Inc
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 hidden lg:flex items-center gap-3 sm:gap-3 md:gap-4 lg:gap-4">
                    <a
                      href="/academics"
                      className="text-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans"
                    >
                      Academics
                    </a>
                    <a
                      href="/about"
                      className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="hidden sm:flex px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full items-center text-foreground text-xs md:text-[13px] font-medium leading-5 font-sans"
                  >
                    Home
                  </a>

                  <button
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="sm:hidden h-8 w-8 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary/60 active:scale-95 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`sm:hidden fixed inset-0 z-30 transition-opacity duration-300 ease-out ${
                mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              style={{ background: "rgba(0,0,0,0.12)" }}
            />

            <div
              className={`sm:hidden absolute top-12 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-48px)] max-w-[380px] transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="rounded-xl border border-border bg-card shadow-[0px_12px_32px_rgba(0,0,0,0.18)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/80 bg-card">
                  <div className="text-foreground text-sm font-semibold">Menu</div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <nav role="menu" className="py-1">
                  <a
                    role="menuitem"
                    href="/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Academics
                    </span>
                  </a>
                  <a
                    role="menuitem"
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      About Us
                    </span>
                  </a>
                  <a
                    role="menuitem"
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Contact
                    </span>
                  </a>

                  <div className="my-1 h-px bg-border" />

                  <a
                    role="menuitem"
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mx-4 my-3 inline-flex items-center justify-center h-9 rounded-full border border-border px-4 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    Back Home
                  </a>
                </nav>
              </div>
            </div>

            {/* Page Content */}
            <div className="pt-12 sm:pt-16 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full">
              <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full max-w-[937px] lg:w-[937px]">
                  {/* Hero Section */}
                  <div className="w-full flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
                    <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6">
                      <div className="text-center">
                        <h1 className="text-foreground text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-serif mb-3 sm:mb-4">
                          Academic Excellence
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed font-sans max-w-[600px] mx-auto">
                          Explore our comprehensive range of programs designed to prepare you for a successful career in
                          the modern world.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Filter Section */}
                  <div className="w-full mt-12 sm:mt-16 md:mt-20">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      <button
                        onClick={() => setActiveFilter("all")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "all"
                            ? "bg-foreground text-white shadow-md"
                            : "bg-card border border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        All Programs
                      </button>
                      <button
                        onClick={() => setActiveFilter("technology")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "technology"
                            ? "bg-foreground text-white shadow-md"
                            : "bg-card border border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        Technology
                      </button>
                      <button
                        onClick={() => setActiveFilter("business")}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "business"
                            ? "bg-foreground text-white shadow-md"
                            : "bg-card border border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        Business
                      </button>
                    </div>
                  </div>

                  {/* Featured Programs */}
                  <div className="w-full mt-16 sm:mt-20 md:mt-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-foreground mb-8 sm:mb-10">
                      Featured Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {featuredPrograms.map((program) => (
                        <div
                          key={program.id}
                          className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-start justify-between mb-4 sm:mb-6">
                            <div className="text-2xl sm:text-3xl text-muted-foreground opacity-60">{program.icon}</div>
                            <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                              Featured
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-normal font-serif text-foreground mb-3 sm:mb-4">
                            {program.name}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-6 sm:mb-8">
                            {program.description}
                          </p>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-4 sm:pt-6 border-t border-border">
                            <div>
                              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                                Duration
                              </p>
                              <p className="text-sm font-medium text-foreground">{program.duration}</p>
                            </div>
                            <button className="w-full sm:w-auto px-6 py-2 bg-foreground text-white rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
                              Learn More
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All Programs Grid */}
                  <div className="w-full mt-16 sm:mt-20 md:mt-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-foreground mb-8 sm:mb-10">
                      All Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                      {filteredPrograms.map((program) => (
                        <div
                          key={program.id}
                          className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-2xl text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
                              {program.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg sm:text-xl font-medium font-sans text-foreground mb-2 group-hover:text-primary transition-colors">
                                {program.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground font-normal">
                                {program.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                              {program.duration}
                            </span>
                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                              Learn More →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Support Services */}
                  <div className="w-full mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20 md:mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-foreground mb-12 sm:mb-14 text-center">
                      Academic Support
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                      {[
                        {
                          title: "Mentorship",
                          description: "Connect with faculty mentors and experienced professionals in your field",
                        },
                        {
                          title: "Career Services",
                          description: "Resume reviews, interview coaching, and job placement assistance",
                        },
                        {
                          title: "Resources",
                          description: "Access to research databases, libraries, and online learning platforms",
                        },
                      ].map((service, idx) => (
                        <div
                          key={idx}
                          className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-lg sm:text-xl font-normal font-serif text-foreground mb-3 sm:mb-4">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
