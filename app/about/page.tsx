"use client"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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

  return (
    <div className="w-full min-h-screen relative bg-background overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[900px] lg:w-[900px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-visible border-b border-border flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation - Same as landing page */}
            <div
              ref={navContainerRef}
              className={`w-full h-auto absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0 transition-all duration-300 ease-out ${
                isScrolled ? "fixed bg-background/95 backdrop-blur-md py-3" : "py-0"
              }`}
            >
              <div
                className={`w-full h-0 absolute left-0 border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] transition-all duration-300 ${
                  isScrolled ? "top-12 sm:top-14 md:top-16 lg:top-[60px]" : "top-6 sm:top-7 md:top-8 lg:top-[42px]"
                }`}
              ></div>

              <div
                className={`max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-card backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-visible rounded-[50px] flex justify-between items-center relative z-30 border border-border transition-all duration-300 ${
                  isScrolled ? "h-10 sm:h-11 md:h-12" : "h-10 sm:h-11 md:h-12"
                }`}
              >
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
                      className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors"
                    >
                      Academics
                    </a>
                    <a
                      href="/about"
                      className="text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="hidden sm:flex px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full items-center text-foreground text-xs md:text-[13px] font-medium leading-5 font-sans transition-all hover:shadow-md"
                  >
                    Back to Home
                  </a>

                  <button
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="sm:hidden h-8 w-8 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary/60 active:scale-95 transition z-50"
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

            {/* Mobile Menu Backdrop */}
            <div
              className={`sm:hidden fixed inset-0 z-30 transition-opacity duration-300 ease-out ${
                mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
              style={{ background: "rgba(0,0,0,0.12)" }}
            />

            {/* Mobile Menu */}
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
                    className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-secondary/60 transition"
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
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Academics
                  </a>
                  <a
                    role="menuitem"
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    About Us
                  </a>
                  <a
                    role="menuitem"
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Contact
                  </a>

                  <div className="my-1 h-px bg-border" />

                  <a
                    role="menuitem"
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mx-4 my-3 inline-flex items-center justify-center h-9 rounded-full border border-border px-4 text-sm font-medium text-foreground hover:bg-secondary/60 transition"
                  >
                    Back to Home
                  </a>
                </nav>
              </div>
            </div>

            <div className="pt-12 sm:pt-16 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-0 sm:px-0 md:px-0 lg:px-0 w-full">
              {/* Hero Section */}
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4 md:px-8 lg:px-0">
                <div className="flex flex-col justify-center items-center gap-6 sm:gap-7 md:gap-8 lg:gap-10 w-full">
                  <h1 className="text-[32px] xs:text-[40px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-serif font-normal text-foreground leading-[1.1] text-balance text-center px-2">
                    About <span className="font-bold">Data Center College</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-muted-foreground text-balance text-center leading-relaxed max-w-[700px]">
                    A premier educational institution committed to excellence, innovation, and holistic student
                    development since our founding.
                  </p>
                </div>
              </div>

              {/* Two-Column Content Section */}
              <div className="w-full max-w-[937px] lg:w-[937px] space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 px-2 sm:px-4 md:px-8 lg:px-0">
                {/* Mission Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                      Our Mission
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 md:pt-2">
                    <p>
                      Data Center College of the Philippines is dedicated to providing quality education that fosters
                      academic excellence, critical thinking, and moral integrity.
                    </p>
                    <p>
                      We aim to develop competent professionals who contribute positively to society and the global
                      community through innovative teaching methods and industry-relevant programs.
                    </p>
                  </div>
                </section>

                {/* Vision Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                  <div className="flex flex-col gap-4 md:order-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                      Our Vision
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 md:pt-2 md:order-1">
                    <p>
                      To be a leading educational institution recognized for producing graduates who excel in their
                      chosen fields, demonstrate leadership, and uphold ethical values.
                    </p>
                    <p>
                      We strive to create an inclusive learning environment that embraces diversity, promotes research,
                      and adapts to the evolving demands of the modern workforce.
                    </p>
                  </div>
                </section>

                {/* Core Values Section */}
                <section className="space-y-8 sm:space-y-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                      Core Values
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {[
                      {
                        title: "Excellence",
                        description:
                          "We pursue the highest standards in education, research, and service with unwavering commitment.",
                      },
                      {
                        title: "Integrity",
                        description: "We uphold honesty, ethics, and transparency in all our actions and decisions.",
                      },
                      {
                        title: "Innovation",
                        description:
                          "We embrace creativity and adapt to changing educational landscapes and societal needs.",
                      },
                      {
                        title: "Community",
                        description: "We foster collaboration and social responsibility among all stakeholders.",
                      },
                    ].map((value, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground font-sans">{value.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Statistics Section */}
                <section className="space-y-8 sm:space-y-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                      By the Numbers
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {[
                      {
                        stat: "5000+",
                        label: "Students",
                        description: "A diverse community of learners from around the region",
                      },
                      {
                        stat: "50+",
                        label: "Programs",
                        description: "Comprehensive academic offerings across disciplines",
                      },
                      { stat: "95%", label: "Employment", description: "Graduates successfully placed in their field" },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="text-4xl sm:text-5xl md:text-5xl font-serif font-bold text-primary">
                            {item.stat}
                          </div>
                          <p className="text-base sm:text-lg font-semibold text-foreground font-sans">{item.label}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary text-primary-foreground rounded-lg sm:rounded-xl md:rounded-2xl p-8 sm:p-10 md:p-12 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight">
                      Interested in Joining Us?
                    </h2>
                    <p className="text-base sm:text-lg font-sans opacity-90 leading-relaxed">
                      Discover how Data Center College can help you achieve your academic and professional goals.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/academics"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-semibold rounded-lg hover:bg-primary-foreground transition-colors"
                    >
                      Explore Programs
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
                    >
                      Get in Touch
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
