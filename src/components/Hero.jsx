import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// You can keep these or replace with actual client logos if you have them
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Not Another "Scale Fast" Agency.{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">We Book Meetings</span>
        </span>{' '}
        That Actually Matter.
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700">
        Selective B2B appointment setting for companies tired of quantity-over-quality prospecting. 
        <span className="block mt-2 font-semibold">2 clients max. By design, not limitation.</span>
      </p>
      
      {/* Key proof points */}
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          5-8% list-to-meeting conversion
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          $64K monthly ARR for clients
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          20+ years closing complex B2B
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/reality-check">Book a Reality Check</Button>
        <Button
          href="#video-intro"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Why We'll Probably Say No</span>
        </Button>
      </div>

      {/* Current availability banner */}
      <div className="mt-12 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        Current Capacity: 2/2 Clients (Next opening: February 2026)
      </div>

      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          We've helped companies across multiple industries
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
          {['IT Services', 'M&A Advisory', 'SaaS', 'Financial Services', 'Manufacturing', 'CPG'].map((industry) => (
            <span key={industry} className="rounded-full bg-slate-100 px-4 py-2">
              {industry}
            </span>
          ))}
        </div>
        
        {/* Alternative: If you want to keep logos, update with actual clients or remove this section */}
        {/* <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Client 1', logo: logoTransistor },
              { name: 'Client 2', logo: logoTuple },
              { name: 'Client 3', logo: logoStaticKit },
            ],
            [
              { name: 'Client 4', logo: logoMirage },
              { name: 'Client 5', logo: logoLaravel },
              { name: 'Client 6', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
        
        <p className="mt-12 text-sm text-slate-500">
          Yes, we're called B2B Scaler and we only take 2 clients. 
          <span className="block">We scale your business, not ours.</span>
        </p>
      </div>
    </Container>
  )
}