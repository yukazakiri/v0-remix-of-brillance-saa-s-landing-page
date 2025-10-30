"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function AdmissionsPage() {
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
            <div ref={navContainerRef} className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
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
                    <a href="/academics" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Academics
                    </a>
                    <a href="/admissions" className="text-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Admissions
                    </a>
                    <a href="/about" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      About Us
                    </a>
                    <a href="/campus-life" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Campus Life
                    </a>
                    <a href="/contact" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Contact
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a href="/" className="hidden sm:flex px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full items-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                    Back to Home
                  </a>

                  <button
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="sm:hidden h-8 w-8 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary/60 active:scale-95 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                    href="/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Admissions
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
                    href="/campus-life"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/60 focus:bg-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Campus Life
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
                    Back to Home
                  </a>
                </nav>
              </div>
            </div>

            {/* Page Content */}
            <div className="pt-12 sm:pt-16 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-foreground text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
                    Join Our
                    <br />
                    Academic Community
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-muted-foreground sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Start your journey with Data Center College. Find comprehensive information about admissions requirements, application procedures, and important dates.
                  </div>
                </div>
              </div>

              {/* Admissions Timeline */}
              <div className="w-full max-w-[960px] lg:w-[960px] pt-8 sm:pt-12 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-6 relative z-5 my-8 sm:my-12 md:my-16">
                <div className="w-full">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Admissions Timeline</h2>
                    <p className="text-muted-foreground">Key dates and deadlines for your application</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border border-border mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">Nov 1</div>
                        <div className="text-lg font-semibold text-foreground mb-1">Application Opens</div>
                        <div className="text-sm text-muted-foreground">Start your journey</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">Jan 15</div>
                        <div className="text-lg font-semibold text-foreground mb-1">Entrance Exam</div>
                        <div className="text-sm text-muted-foreground">Test date</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">Feb 1</div>
                        <div className="text-lg font-semibold text-foreground mb-1">Results Release</div>
                        <div className="text-sm text-muted-foreground">Check your status</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-2">Mar 15</div>
                        <div className="text-lg font-semibold text-foreground mb-1">Enrollment</div>
                        <div className="text-sm text-muted-foreground">Complete registration</div>
                      </div>
                    </div>
                  </div>

                  {/* Application Steps with Progress */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Your Path to Admission</h3>
                  </div>
                  
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>
                    
                    <div className="space-y-8">
                      <div className="flex items-start gap-6 relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                        <div className="flex-1 bg-card p-6 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-foreground">Online Application</h4>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">5-10 mins</span>
                          </div>
                          <p className="text-muted-foreground mb-4">Fill out our comprehensive online application form with your personal and educational information.</p>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Secure and encrypted
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                        <div className="flex-1 bg-card p-6 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-foreground">Document Submission</h4>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Required</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium text-foreground mb-2">Freshmen Applicants</h5>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• High School Diploma</li>
                                <li>• Birth Certificate (NSO)</li>
                                <li>• Form 138 (Report Card)</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-foreground mb-2">Transfer Applicants</h5>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Transcript of Records</li>
                                <li>• Certificate of Transfer</li>
                                <li>• Honorable Dismissal</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Upload digitally or submit in person
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                        <div className="flex-1 bg-card p-6 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-foreground">Entrance Examination</h4>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">2-3 hours</span>
                          </div>
                          <p className="text-muted-foreground mb-4">Take our comprehensive entrance exam covering Mathematics, English, and Logical Reasoning.</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="text-lg font-bold text-foreground">Mathematics</div>
                              <div className="text-sm text-muted-foreground">40 questions</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="text-lg font-bold text-foreground">English</div>
                              <div className="text-sm text-muted-foreground">40 questions</div>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                              <div className="text-lg font-bold text-foreground">Logic</div>
                              <div className="text-sm text-muted-foreground">20 questions</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Results in 2 weeks
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                        <div className="flex-1 bg-card p-6 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-foreground">Interview & Final Decision</h4>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Final Step</span>
                          </div>
                          <p className="text-muted-foreground mb-4">Attend a personal interview with our admissions committee to discuss your goals and aspirations.</p>
                          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <h5 className="font-medium text-foreground mb-1">What We Look For:</h5>
                                <ul className="space-y-1 text-muted-foreground">
                                  <li>• Academic potential</li>
                                  <li>• Leadership qualities</li>
                                  <li>• Community involvement</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-foreground mb-1">Prepare Questions About:</h5>
                                <ul className="space-y-1 text-muted-foreground">
                                  <li>• Program details</li>
                                  <li>• Campus life</li>
                                  <li>• Career opportunities</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <button className="w-full py-3 bg-foreground text-white rounded-lg font-medium hover:bg-foreground/90 transition">
                            Schedule Your Interview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Aid Section */}
              <div className="w-full max-w-[960px] lg:w-[960px] pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-6 relative z-5">
                <div className="w-full bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Financial Aid & Scholarships</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Academic Scholarship</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">Full tuition coverage for students with excellent academic records.</p>
                      <div className="text-sm font-medium text-green-600">Up to 100% tuition waiver</div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Financial Assistance</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">Need-based support for deserving students from various backgrounds.</p>
                      <div className="text-sm font-medium text-blue-600">Up to 50% tuition discount</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">
                      Apply for Financial Aid
                    </button>
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
