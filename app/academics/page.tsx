"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function AcademicsPage() {
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
                    <a href="/academics" className="text-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Academics
                    </a>
                    <a href="/admissions" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
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

            {/* Mobile Menu - Same structure as main page */}
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
                    Academic Programs
                    <br />
                    & Excellence
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-muted-foreground sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Discover our comprehensive range of programs designed to prepare students for successful careers in technology, business, and beyond.
                  </div>
                </div>
              </div>

              {/* Academic Programs with Filters */}
              <div className="w-full max-w-[960px] lg:w-[960px] pt-8 sm:pt-12 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-6 relative z-5 my-8 sm:my-12 md:my-16">
                {/* Program Categories */}
                <div className="w-full flex flex-wrap justify-center gap-2 mb-8">
                  <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">All Programs</button>
                  <button className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary">Technology</button>
                  <button className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary">Business</button>
                  <button className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary">Arts & Sciences</button>
                </div>

                {/* Featured Programs */}
                <div className="w-full mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Featured Programs</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">Popular</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Computer Science</h3>
                      <p className="text-muted-foreground mb-4">Master software development, AI, machine learning, and cybersecurity in our comprehensive CS program.</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">4 Years • Bachelor's Degree</span>
                        <span className="text-lg font-bold text-primary">₱85,000/yr</span>
                      </div>
                      <button className="w-full py-2 bg-foreground text-white rounded-lg font-medium hover:bg-foreground/90 transition">Learn More</button>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-lg border border-secondary/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="px-3 py-1 bg-secondary text-white text-xs rounded-full">New</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Business Analytics</h3>
                      <p className="text-muted-foreground mb-4">Combine business expertise with data science to drive strategic decision-making.</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">4 Years • Bachelor's Degree</span>
                        <span className="text-lg font-bold text-secondary">₱75,000/yr</span>
                      </div>
                      <button className="w-full py-2 bg-foreground text-white rounded-lg font-medium hover:bg-foreground/90 transition">Learn More</button>
                    </div>
                  </div>
                </div>

                {/* All Programs Grid */}
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-foreground mb-6 text-center">All Academic Programs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Information Technology</h3>
                      <p className="text-muted-foreground text-sm mb-3">Network management, cybersecurity, IT infrastructure</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">4 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Data Analytics</h3>
                      <p className="text-muted-foreground text-sm mb-3">Statistical analysis, machine learning, business intelligence</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">3 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Digital Marketing</h3>
                      <p className="text-muted-foreground text-sm mb-3">SEO, social media, content strategy, analytics</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">2 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Hospitality Management</h3>
                      <p className="text-muted-foreground text-sm mb-3">Hotel operations, tourism, event management</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">4 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Engineering Technology</h3>
                      <p className="text-muted-foreground text-sm mb-3">Electrical, mechanical, civil engineering principles</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">4 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Accounting</h3>
                      <p className="text-muted-foreground text-sm mb-3">Financial accounting, auditing, taxation</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">4 Years</span>
                        <span className="text-primary font-medium">Apply Now →</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Support */}
                <div className="w-full mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Academic Support Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Library Resources</h4>
                      <p className="text-muted-foreground text-sm">Access to digital books, journals, and research databases</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Tutorial Services</h4>
                      <p className="text-muted-foreground text-sm">Peer tutoring and faculty consultation hours</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Career Counseling</h4>
                      <p className="text-muted-foreground text-sm">Guidance for career planning and job placement</p>
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
