"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import FooterSection from "../components/footer-section"
import AboutUsSection from "../components/about-us-section"
import CoursesAndProgramsSection from "../components/courses-programs-section"
import CampusFacilitiesSection from "../components/campus-facilities-section"
import FacultyStaffSection from "../components/faculty-staff-section"
import AdmissionsContactSection from "../components/admissions-contact-section"

// Reusable Badge Component
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

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
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
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-muted-foreground text-sm">Campus Life - Student Activities & Community</div>
      case 1:
        return <div className="text-muted-foreground text-sm">Academic Excellence - Learning Outcomes</div>
      case 2:
        return <div className="text-muted-foreground text-sm">Career Success - Graduate Achievements</div>
      default:
        return <div className="text-muted-foreground text-sm">Campus Life - Student Activities & Community</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-background overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[900px] lg:w-[900px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>

          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-border shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-visible border-b border-border flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            <div
              ref={navContainerRef}
              className={`w-full flex flex-col justify-center items-center z-40 px-4 sm:px-6 md:px-8 lg:px-0 transition-all duration-300 ease-out ${
                isScrolled
                  ? "fixed top-0 left-0 right-0 py-3 sm:py-4 md:py-3 bg-background/95 backdrop-blur-md border-b border-border shadow-md"
                  : "relative py-3 sm:py-4 md:py-0"
              }`}
            >
              <div
                className={`w-full transition-all duration-300 ease-out ${
                  isScrolled
                    ? "max-w-full px-4 sm:px-6 md:px-8"
                    : "max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px]"
                }`}
              >
                <div
                  className={`py-2 sm:py-3 md:py-3 px-4 sm:px-5 md:px-5 bg-card backdrop-blur-md shadow-[0px_2px_8px_rgba(55,50,47,0.08)] overflow-visible transition-all duration-300 ease-out border border-border flex flex-col justify-between items-center relative z-30 ${
                    isScrolled ? "rounded-lg" : "rounded-full"
                  }`}
                >
                  {/* Navigation Content */}
                  <div className="w-full flex justify-between items-center">
                    {/* Logo Section with hover animation */}
                    <div className="flex justify-center items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white text-xs sm:text-sm md:text-base font-bold">DC</span>
                      </div>
                      <div className="hidden sm:flex flex-col justify-center transition-opacity duration-300">
                        <div className="text-foreground text-xs sm:text-sm md:text-base font-bold leading-4 font-sans">
                          DCCPH
                        </div>
                        <div className="text-muted-foreground text-[10px] sm:text-[11px] md:text-xs leading-2 font-sans">
                          Baguio City
                        </div>
                      </div>
                    </div>

                    {/* Desktop Navigation with enhanced transitions */}
                    <div className="hidden md:flex justify-start items-center gap-6 lg:gap-8 flex-1 ml-6 lg:ml-8">
                      <a
                        href="#programs"
                        className="text-muted-foreground text-sm font-medium hover:text-foreground transition-all duration-300 ease-out relative group"
                      >
                        Programs
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                      <a
                        href="#about"
                        className="text-muted-foreground text-sm font-medium hover:text-foreground transition-all duration-300 ease-out relative group"
                      >
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                      <a
                        href="#campuses"
                        className="text-muted-foreground text-sm font-medium hover:text-foreground transition-all duration-300 ease-out relative group"
                      >
                        Campuses
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                      <a
                        href="#contact"
                        className="text-muted-foreground text-sm font-medium hover:text-foreground transition-all duration-300 ease-out relative group"
                      >
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                    </div>

                    {/* Mobile Menu Button with smooth animation */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="md:hidden flex flex-col justify-center items-center gap-1.5 ml-auto p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 ease-out relative z-50"
                      aria-label="Toggle menu"
                      aria-expanded={mobileMenuOpen}
                    >
                      <div
                        className={`w-5 h-0.5 bg-foreground transition-all duration-300 ease-out origin-center ${
                          mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                      ></div>
                      <div
                        className={`w-5 h-0.5 bg-foreground transition-all duration-300 ease-out ${
                          mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                        }`}
                      ></div>
                      <div
                        className={`w-5 h-0.5 bg-foreground transition-all duration-300 ease-out origin-center ${
                          mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                      ></div>
                    </button>

                    {/* Apply Now Button with enhanced styling */}
                    <div className="hidden md:flex h-8 md:h-9 ml-4 md:ml-6">
                      <div className="px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-primary to-primary/90 text-white shadow-[0px_2px_8px_rgba(37,99,235,0.3)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:shadow-[0px_4px_12px_rgba(37,99,235,0.4)] hover:scale-105 transition-all duration-300 ease-out">
                        <div className="flex flex-col justify-center text-white text-xs md:text-sm font-semibold leading-5 font-sans">
                          Apply Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {mobileMenuOpen && (
                  <div className="w-full mt-0 bg-card border border-t-0 border-border rounded-b-lg overflow-hidden transition-all duration-300 ease-out origin-top md:hidden">
                    <div className="flex flex-col divide-y divide-border">
                      {/* Dropdown Navigation Links */}
                      <a
                        href="#programs"
                        className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out flex items-center gap-3 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                        Programs
                      </a>
                      <a
                        href="#about"
                        className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out flex items-center gap-3 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                        About
                      </a>
                      <a
                        href="#campuses"
                        className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out flex items-center gap-3 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                        Campuses
                      </a>
                      <a
                        href="#contact"
                        className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-all duration-200 ease-out flex items-center gap-3 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                        Contact
                      </a>

                      {/* Dropdown CTA Button */}
                      <div className="px-4 py-3 bg-secondary/30">
                        <div className="w-full px-4 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-white text-sm font-semibold rounded-full text-center cursor-pointer hover:shadow-[0px_4px_12px_rgba(37,99,235,0.3)] active:scale-95 transition-all duration-300 ease-out">
                          Apply Now
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={isScrolled ? "h-16 sm:h-20 md:h-16" : ""}></div>

            {/* Hero Section */}
            <div className="pt-12 sm:pt-16 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-foreground text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
                    Excellence in Education
                    <br />
                    at Data Center College
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-muted-foreground sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Prepare for the future with innovative programs
                    <br className="hidden sm:block" />
                    in technology, business, and professional development.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-foreground shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Explore Programs
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  {/* Dashboard Content */}
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    {/* Main Content */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Campus Life Image */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/college-campus-students-studying-together-in-moder.jpg"
                            alt="Campus Life - Students collaborating in modern facilities"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Academic Excellence Image */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/professional-classroom-with-technology-and-interac.jpg"
                            alt="Academic Excellence - Modern classroom with technology"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Career Success Image */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/graduates-in-professional-setting-career-success-a.jpg"
                            alt="Career Success - Graduates in professional environment"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Us Section */}
              <AboutUsSection />

              {/* Courses & Programs Section */}
              <CoursesAndProgramsSection />

              {/* Campus Facilities Section */}
              <CampusFacilitiesSection />

              {/* Faculty & Staff Section */}
              <FacultyStaffSection />

              {/* Admissions & Contact Section */}
              <AdmissionsContactSection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-border/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary/50">
          <div
            className="h-full bg-foreground transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-foreground text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-muted-foreground text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
