import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function CheckIcon({ className, ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon({ className, ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx('h-6 w-6 flex-none', className)}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            One Service. One Price. No BS.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We don&apos;t have tiers because quality doesn&apos;t come in packages.
          </p>
        </div>

        {/* Single pricing card */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <h3 className="text-base font-semibold leading-7 text-blue-400">
              Full Service Appointment Setting
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-white">$5,000</span>
              <span className="text-base font-semibold leading-7 text-gray-400">/month</span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-300">
              For B2B companies serious about predictable pipeline. 
              3-month minimum commitment. Cancel anytime after.
            </p>
            
            {/* What's included */}
            <div className="mt-10 space-y-4">
              <h4 className="text-sm font-semibold text-white">What&apos;s Included:</h4>
              <ul role="list" className="space-y-3 text-sm leading-6 text-gray-300">
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>150-200 targeted cold calls per week</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Multi-channel outreach (phone, email, LinkedIn)</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>8-12 qualified meetings per month (typical)</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Real-time reporting dashboard</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Weekly optimization calls</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>All infrastructure included (no hidden costs)</span>
                </li>
              </ul>
            </div>

            {/* What's NOT included */}
            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-semibold text-white">What&apos;s NOT Included:</h4>
              <ul role="list" className="space-y-3 text-sm leading-6 text-gray-400">
                <li className="flex gap-x-3">
                  <XIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                  <span>Sales closing (that&apos;s your team&apos;s job)</span>
                </li>
                <li className="flex gap-x-3">
                  <XIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                  <span>Content marketing or social media</span>
                </li>
                <li className="flex gap-x-3">
                  <XIcon className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                  <span>100 garbage meetings to hit a number</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mt-8 rounded-lg bg-yellow-500/10 p-4">
              <p className="text-sm font-semibold text-yellow-400">Minimum Requirements:</p>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>• $10K+ average deal size</li>
                <li>• At least one dedicated closer</li>
                <li>• Product-market fit confirmed</li>
                <li>• 3-month commitment</li>
              </ul>
            </div>

            <Button
              href="/reality-check"
              variant="solid"
              color="white"
              className="mt-10 w-full"
            >
              See If You Qualify
            </Button>
            
            <p className="mt-4 text-center text-xs text-gray-500">
              Next opening: March 2026
            </p>
          </div>
        </div>

        {/* Alternative options */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center text-lg font-semibold text-white mb-8">
            Not Ready for Full Service?
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 text-center">
              <h4 className="font-semibold text-white">Sales Audit</h4>
              <p className="mt-2 text-3xl font-bold text-white">Free</p>
              <p className="mt-2 text-sm text-gray-400">45-min analysis for qualified companies</p>
              <a href="/sales-audit" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">
                Learn more →
              </a>
            </div>
            
            <div className="rounded-2xl bg-white/5 p-6 text-center">
              <h4 className="font-semibold text-white">DIY Playbook</h4>
              <p className="mt-2 text-3xl font-bold text-white">$497</p>
              <p className="mt-2 text-sm text-gray-400">Our templates, scripts, and process docs</p>
              <a href="/playbook" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">
                Learn more →
              </a>
            </div>
            
            <div className="rounded-2xl bg-white/5 p-6 text-center">
              <h4 className="font-semibold text-white">Team Training</h4>
              <p className="mt-2 text-3xl font-bold text-white">$2,500</p>
              <p className="mt-2 text-sm text-gray-400">Train your SDR with our system</p>
              <a href="/training" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="rounded-2xl bg-blue-600/10 p-8 ring-1 ring-blue-600/20">
            <h3 className="text-lg font-semibold text-white">Our Guarantee</h3>
            <p className="mt-4 text-gray-300">
              We&apos;ll book qualified meetings in your target market within 30 days, 
              or we&apos;ll work for free until we do. But here&apos;s the catch: 
              if your sales process is broken, even perfect appointments won&apos;t help. 
              That&apos;s why we audit everything before we start.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
