"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function ContactPage() {
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
                    <a href="/admissions" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Admissions
                    </a>
                    <a href="/about" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      About Us
                    </a>
                    <a href="/campus-life" className="text-muted-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                      Campus Life
                    </a>
                    <a href="/contact" className="text-foreground hover:text-foreground text-xs md:text-[13px] font-medium leading-[14px] font-sans">
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
                    Get in Touch
                    <br />
                    With Us
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-muted-foreground sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    We're here to help and answer any questions you may have about our programs, admissions, or campus life.
                  </div>
                </div>
              </div>

              {/* Contact Content */}
              <div className="w-full max-w-[960px] lg:w-[960px] pt-8 sm:pt-12 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-6 relative z-5 my-8 sm:my-12 md:my-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Form */}
                  <div className="bg-card p-8 rounded-lg border border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="What is your message about?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <textarea 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32 resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-foreground text-white py-3 px-6 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div className="bg-card p-8 rounded-lg border border-border">
                      <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">Campus Address</h3>
                            <p className="text-muted-foreground">
                              123 Education Street<br />
                              Baguio City, Philippines<br />
                              2600
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">Phone Numbers</h3>
                            <p className="text-muted-foreground">
                              Main Office: (074) 123-4567<br />
                              Admissions: (074) 123-4568<br />
                              Fax: (074) 123-4569
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">Email Addresses</h3>
                            <p className="text-muted-foreground">
                              info@dccp.edu.ph<br />
                              admissions@dccp.edu.ph<br />
                              registrar@dccp.edu.ph
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">Office Hours</h3>
                            <p className="text-muted-foreground">
                              Monday - Friday: 8:00 AM - 6:00 PM<br />
                              Saturday: 8:00 AM - 12:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg border border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                          <span className="text-sm font-bold">f</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                          <span className="text-sm font-bold">t</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                          <span className="text-sm font-bold">in</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                          <span className="text-sm font-bold">ig</span>
                        </a>
                      </div>
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
