"use client"

export default function AboutSection() {
  return (
    <div className="w-full border-b border-[rgba(26,58,82,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(26,58,82,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(26,58,82,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(26,58,82,0.08)]">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5" stroke="#1a3a52" strokeWidth="1" fill="none" />
                <path d="M6 3v6M3 6h6" stroke="#1a3a52" strokeWidth="1" />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#1a3a52] text-xs font-medium leading-3 font-sans">
              About Us
            </div>
          </div>
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#1a3a52] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Empowering Students for Tomorrow
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Data Center College Of The Philippines is committed to providing quality education that prepares students
            for success in an increasingly digital world. Located in the heart of Baguio City, we foster innovation,
            critical thinking, and professional excellence.
          </div>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(26,58,82,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(26,58,82,0.12)]">
          <div className="border-b border-r-0 md:border-r border-[rgba(26,58,82,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#1a3a52] text-lg sm:text-xl font-semibold leading-tight font-sans">Our Mission</h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                To provide accessible, high-quality education that develops competent, ethical, and innovative
                professionals ready to contribute to society and lead in their respective fields.
              </p>
            </div>
          </div>

          <div className="border-b border-[rgba(26,58,82,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#1a3a52] font-semibold leading-tight font-sans text-lg sm:text-xl">Our Vision</h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                To be a leading educational institution recognized for academic excellence, innovation, and the
                development of globally competitive professionals in technology and business.
              </p>
            </div>
          </div>

          <div className="border-r-0 md:border-r border-[rgba(26,58,82,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#1a3a52] text-lg sm:text-xl font-semibold leading-tight font-sans">Core Values</h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Excellence, Integrity, Innovation, Inclusivity, and Community Engagement guide everything we do. We
                believe in empowering students to achieve their full potential.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#1a3a52] text-lg sm:text-xl font-semibold leading-tight font-sans">Location</h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Nestled in the cool highlands of Baguio City, our campus provides an ideal environment for focused
                learning and personal growth. Easy access to technology hubs and business centers.
              </p>
            </div>
          </div>
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(26,58,82,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
