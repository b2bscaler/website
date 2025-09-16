'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// Replace these with actual screenshots of your results/dashboards
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

const features = [
  {
    name: 'Perfect Fit',
    summary: 'Mid-market B2B companies ready to grow.',
    description:
      'You have at least one dedicated closer, deals worth $10K+, and understand that 5 qualified meetings beat 50 tire-kickers.',
    image: screenshotProfitLoss, // Replace with dashboard showing qualified leads
    icon: function PerfectFitIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="M18 6a12 12 0 100 24 12 12 0 000-24zm-2 17l-6-6 1.5-1.5L16 20l8.5-8.5L26 13l-10 10z"
            fill={`url(#${id})`}
          />
        </>
      )
    },
    details: [
      '$5M-$50M annual revenue',
      'Average deal size $10K+',
      'Sales team in place',
      'Budget: $3K-$7K/month',
      'Want quality over quantity',
    ],
  },
  {
    name: 'Good Fit',
    summary: 'Growing companies with solid fundamentals.',
    description:
      'You might not check every box, but you have product-market fit, can close deals, and are tired of inconsistent pipeline.',
    image: screenshotInventory, // Replace with pipeline/CRM screenshot
    icon: function GoodFitIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
    details: [
      'Proven sales process',
      'Converting leads already',
      'Need consistent flow',
      'Realistic expectations',
      'Value partnership approach',
    ],
  },
  {
    name: 'Not For You',
    summary: 'Save us both time if this sounds like you.',
    description:
      'Pre-revenue startups, "idea stage" companies, or anyone wanting the cheapest option. We can\'t help you, and that\'s okay.',
    image: screenshotContacts, // Replace with a simple graphic or chart
    icon: function NotForYouIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M18 6a12 12 0 100 24 12 12 0 000-24zm1 17h-2v-2h2v2zm0-4h-2V11h2v8z"
            fill="#fff"
          />
          <path
            d="M13 11h2v8h-2zm0 10h2v2h-2z"
            fill="#fff"
          />
        </>
      )
    },
    details: [
      'Pre-product market fit',
      'No dedicated closer',
      'Under $5K deal size',
      'Want pay-per-appointment',
      'Expect overnight results',
    ],
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? (feature.name === 'Not For You' ? 'bg-red-600' : 'bg-blue-600') : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? (feature.name === 'Not For You' ? 'text-red-600' : 'text-blue-600') : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10 p-6">
              <h4 className="font-semibold text-slate-900 mb-4">Checklist:</h4>
              <ul className="space-y-2">
                {feature.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className={clsx(
                        'h-5 w-5 mt-0.5 mr-2 flex-shrink-0',
                        feature.name === 'Not For You' ? 'text-red-600' : 'text-blue-600'
                      )} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2" 
                      stroke="currentColor"
                    >
                      {feature.name === 'Not For You' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-display font-semibold text-slate-900">
                        {feature.name === 'Perfect Fit' && '✅ You're exactly who we want to work with'}
                        {feature.name === 'Good Fit' && '👍 We can probably help you'}
                        {feature.name === 'Not For You' && '🛑 Let's not waste each other's time'}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Requirements:</h4>
                        <ul className="space-y-3">
                          {feature.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <svg 
                                className={clsx(
                                  'h-5 w-5 mt-0.5 mr-3 flex-shrink-0',
                                  feature.name === 'Not For You' ? 'text-red-600' : 'text-green-600'
                                )} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor"
                              >
                                {feature.name === 'Not For You' ? (
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                )}
                              </svg>
                              <span className="text-slate-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4">What happens next:</h4>
                        <div className="prose prose-sm text-slate-600">
                          {feature.name === 'Perfect Fit' && (
                            <p>Book a reality check call. We'll dive deep into your sales process, ICP, and goals. If we both say yes, you'll be booking qualified meetings within 30 days.</p>
                          )}
                          {feature.name === 'Good Fit' && (
                            <p>Let's talk. We might need to adjust our approach or timeline, but if you're committed to quality over quantity, we can make it work.</p>
                          )}
                          {feature.name === 'Not For You' && (
                            <p>We're not the right fit, and that's okay. Consider hiring an SDR directly, trying a lower-cost agency, or focusing on product-market fit first.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Who this is for"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Who This Is (And Isn't) For
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We reject 70% of prospects. Not because we're jerks, but because we only 
            succeed when you succeed. Here's how to know if we're a match.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg font-semibold text-slate-900">
              Think you're a fit?
            </p>
            <a
              href="/reality-check"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Book a Reality Check
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <p className="mt-3 text-sm text-slate-500">
              30-minute call. No fluff. We'll tell you if we can help.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
