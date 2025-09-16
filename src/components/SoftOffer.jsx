import { Container } from '@/components/Container'
import Image from 'next/image'
// Replace with your actual headshot or ADP List badge if you have it
import mentorImage from '@/images/avatars/avatar-1.png'

export function SoftOffer() {
  return (
    <section
      id="soft-offer"
      className="relative bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="text-xl">🏆</span>
              Top 1% Business Development Mentor on ADP List
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - The offer */}
            <div>
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Not Ready for Full Service?
                <span className="block text-2xl mt-2 text-slate-600">
                  Let&apos;s Start With Something Smaller
                </span>
              </h2>
              
              <div className="mt-6 space-y-4 text-lg text-slate-700">
                <p>
                  Before we work together, I offer qualified companies a free 45-minute 
                  Sales Audit where we&apos;ll:
                </p>
                
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Analyze your current outreach (I&apos;ll review 3 of your emails/scripts)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Calculate your true cost-per-meeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Identify the #1 bottleneck killing your pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Give you the exact framework I used to generate $2M+ annually</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-slate-900">
                    No pitch. No obligation.
                  </p>
                  <p className="text-sm mt-2 text-slate-600">
                    If we&apos;re not a fit for full service, you&apos;ll still walk away 
                    with actionable insights you can implement immediately.
                  </p>
                </div>
              </div>

              {/* The catch */}
              <div className="mt-8 p-4 border-l-4 border-yellow-400 bg-yellow-50">
                <p className="font-semibold text-slate-900">The Catch:</p>
                <p className="text-sm mt-1 text-slate-700">
                  To qualify, you need: $10K+ average deal size, a sales team in place, 
                  and genuine intent to fix your pipeline in the next 90 days.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/sales-audit"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Apply for Free Sales Audit
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <p className="mt-3 text-sm text-slate-500">
                  Limited to 4 audits per month
                </p>
              </div>
            </div>

            {/* Right side - Testimonial highlight */}
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-slate-50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    className="h-16 w-16 rounded-full object-cover"
                    src={mentorImage}
                    alt="Aliester"
                    width={64}
                    height={64}
                  />
                  <div>
                    <p className="font-semibold text-slate-900">Recent Mentee Feedback</p>
                    <p className="text-sm text-slate-600">From ADP List</p>
                  </div>
                </div>
                
                <blockquote className="space-y-4">
                  <p className="text-slate-700 italic">
                    &quot;Aliester put me in the shoes of the business owner receiving my outreach. 
                    I left with a clear plan of action and even a written recap to guide me. 
                    Best session I&apos;ve had.&quot;
                  </p>
                  <cite className="block text-sm text-slate-600 not-italic">
                    — Manuel, UX/UI Designer
                  </cite>
                </blockquote>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">19 five-star reviews</span> from 
                    founders and sales professionals
                  </p>
                </div>
              </div>

              {/* Alternative offers */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Other Ways We Can Work Together:
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span><strong>DIY Playbook ($497):</strong> Our exact scripts, templates, and process docs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span><strong>Team Training ($2,500):</strong> Train your SDR with our proven system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span><strong>Mentorship ($150/hour):</strong> Book directly on ADP List</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
