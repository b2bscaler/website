'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
// You'll need to replace these with actual screenshots of your dashboards/process
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Week 1-2: Deep Dive',
    description:
      "We don't use templates. We study YOUR buyers, YOUR language, YOUR value prop. This isn't copy-paste from our last client.",
    image: screenshotPayroll, // Replace with screenshot of your ICP research/notes
    details: [
      'Interview your top sales reps',
      'Analyze your best closed deals',
      'Map your actual buyer personas',
      'Test 5-10 messaging angles',
    ],
  },
  {
    title: 'Week 3-4: Infrastructure',
    description:
      "Self-hosted tech stack. Custom dashboards. Real-time reporting. Because spreadsheets are for amateurs.",
    image: screenshotExpenses, // Replace with screenshot of your dashboard
    details: [
      'Apollo for quality contact data',
      'NocoDB for campaign tracking',
      'Metabase for live analytics',
      'Custom integrations with your CRM',
    ],
  },
  {
    title: 'Month 2: Systematic Scaling',
    description:
      "Now we turn up the volume. But only after we know what works. Data drives decisions, not hunches.",
    image: screenshotVatReturns, // Replace with screenshot of campaign metrics
    details: [
      '150-200 calls per week',
      'A/B test every message',
      'Weekly optimization calls',
      'Detailed conversion tracking',
    ],
  },
  {
    title: 'Always: Full Transparency',
    description:
      "See every call, every email, every outcome. Your dashboard updates in real-time. No black box BS.",
    image: screenshotReporting, // Replace with screenshot of reporting dashboard
    details: [
      'Daily activity reports',
      'Call recordings available',
      'Pipeline value tracking',
      'Honest feedback (even when it hurts)',
    ],
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Our obsessive process"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Obsessive Process
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            We cap at 2 clients because this level of detail doesn't scale. 
            And that's exactly the point.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg data-selected:not-data-focus:outline-hidden',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Desktop view with image */}
                    <div className="mt-10 hidden lg:block w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                    
                    {/* Mobile and tablet view with bullet points instead of image */}
                    <div className="mt-10 lg:hidden w-full overflow-hidden rounded-xl bg-white shadow-xl shadow-blue-900/20 p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">What actually happens:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
        
        {/* Add a bottom CTA or proof point */}
        <div className="mt-20 text-center">
          <p className="text-xl text-white font-semibold">
            This process has generated $64K monthly ARR for our clients.
          </p>
          <p className="mt-2 text-blue-100">
            With a 5-8% list-to-meeting conversion rate (industry average: 1-2%)
          </p>
        </div>
      </Container>
    </section>
  )
}
