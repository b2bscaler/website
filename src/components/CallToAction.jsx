import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Pre-qualifier */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Currently accepting 1 new client for Q1 2025
          </div>

          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Here&apos;s The Uncomfortable Truth
          </h2>
          
          <div className="mt-6 space-y-4 text-lg text-white/90">
            <p>
              Your sales team is wasting 60% of their time on prospecting they hate.
            </p>
            <p className="font-semibold text-white">
              That&apos;s $120K+ per year in lost productivity. Per rep.
            </p>
            <p>
              We fix that. But only if you&apos;re ready to invest in quality over quantity.
            </p>
          </div>

          {/* The Math Section */}
          <div className="mt-10 mx-auto max-w-lg rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-white mb-4">Quick Math:</h3>
            <div className="space-y-2 text-left text-white/90">
              <div className="flex justify-between">
                <span>Average SDR salary in Ottawa:</span>
                <span className="font-semibold">$65,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>Our monthly investment:</span>
                <span className="font-semibold">$5,000</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                <span>You save:</span>
                <span className="font-semibold text-green-300">$2,416/month</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80 text-left">
              Plus: No training. No turnover. No excuses.
            </p>
          </div>

          {/* Two CTAs for different mindsets */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/reality-check" color="white">
              Book a Reality Check
            </Button>
            <Button 
              href="#not-ready" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              I Need to Think About It
            </Button>
          </div>

          {/* Post-CTA message */}
          <div className="mt-8 text-sm text-white/70">
            <p>
              Fair warning: We&apos;ll ask about your sales process, close rates, and revenue goals.
            </p>
            <p className="mt-2">
              If you don&apos;t know these numbers, we&apos;re probably not a fit.
            </p>
          </div>
        </div>

        {/* Hidden section for "I Need to Think About It" */}
        <div id="not-ready" className="mt-20 mx-auto max-w-2xl rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">
            Not Ready? Here&apos;s What Usually Happens Next:
          </h3>
          <ol className="space-y-3 text-white/80">
            <li className="flex">
              <span className="mr-3 font-semibold">1.</span>
              <span>You&apos;ll try to do it yourself for another 3 months</span>
            </li>
            <li className="flex">
              <span className="mr-3 font-semibold">2.</span>
              <span>You&apos;ll hire a cheap agency that promises 100 meetings</span>
            </li>
            <li className="flex">
              <span className="mr-3 font-semibold">3.</span>
              <span>You&apos;ll get 100 terrible meetings and fire them</span>
            </li>
            <li className="flex">
              <span className="mr-3 font-semibold">4.</span>
              <span>You&apos;ll come back when you&apos;re ready for quality</span>
            </li>
          </ol>
          <p className="mt-6 text-white">
            Want to skip steps 1-3? 
            <a href="/reality-check" className="ml-2 underline font-semibold">
              Let&apos;s talk now →
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
