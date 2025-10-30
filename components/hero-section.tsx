import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-foreground text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Effortless custom contract billing by Brillance
              </h1>
              <p className="max-w-[506px] text-center text-foreground/80 text-lg font-medium leading-7">
                Streamline your billing process with seamless automation for every custom contract, tailored by
                Brillance.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="h-10 px-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]">
              Start for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
