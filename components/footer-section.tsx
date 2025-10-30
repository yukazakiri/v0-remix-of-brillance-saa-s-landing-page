export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-primary-foreground text-sm font-bold">DC</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-foreground text-lg font-bold leading-4 font-sans">DCCPH</div>
              <div className="text-muted-foreground text-xs leading-2 font-sans">Baguio City</div>
            </div>
          </div>
          <div className="text-muted-foreground text-sm font-medium leading-[18px] font-sans max-w-xs">
            Excellence in Education. Preparing students for success in technology, business, and professional
            development.
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            {/* Facebook Icon */}
            <div className="w-6 h-6 relative overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </svg>
              </div>
            </div>

            {/* Twitter/X Icon */}
            <div className="w-6 h-6 relative overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </svg>
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="w-6 h-6 relative overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </svg>
              </div>
            </div>

            {/* YouTube Icon */}
            <div className="w-6 h-6 relative overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Academic Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-muted-foreground text-sm font-medium leading-5 font-sans">Academic</div>
            <div className="flex flex-col justify-end items-start gap-2">
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Programs
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Admissions
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Faculty
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Courses
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Scholarships
              </div>
            </div>
          </div>

          {/* Campus Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-muted-foreground text-sm font-medium leading-5 font-sans">Campus Life</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Student Life
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Facilities
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Events
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Clubs & Organizations
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Sports
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-muted-foreground text-sm font-medium leading-5 font-sans">Resources</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Library
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Career Services
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Student Portal
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Support Services
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Contact Us
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-muted-foreground text-sm font-medium leading-5 font-sans">About</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                About Us
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Mission & Vision
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Accreditation
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                News & Updates
              </div>
              <div className="text-foreground text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="self-stretch h-auto relative overflow-hidden border-t border-border py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted-foreground text-xs sm:text-sm font-normal leading-5 font-sans">
          © 2025 Data Center College of the Philippines. All rights reserved.
        </div>
        <div className="flex gap-6 text-muted-foreground text-xs sm:text-sm font-normal">
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  )
}
