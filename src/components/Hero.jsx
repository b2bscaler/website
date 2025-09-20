import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Complex B2B Sales Need{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="m203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Real Relationships</span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            We book 10 high-value meetings monthly through deep research and actual conversations. 
            For companies whose deals are worth doing right.
          </p>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-blue-600">5-8%</span>
              meeting conversion rate
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-blue-600">$64K</span>
              monthly ARR generated
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="font-semibold text-blue-600">18+</span>
              month average retention
            </div>
          </div>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#book-call"
              className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
            >
              Book a Strategy Call
            </a>
            <a
              href="#approach"
              className="group inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-slate-100 active:text-slate-600"
            >
              See Our Approach
            </a>
          </div>
          
          {/* Capacity Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm text-yellow-800">
              <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400"></span>
              2 clients maximum. Next opening: March 2026
            </div>
          </div>
          
          {/* Credentials */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
              ?? Top 1% ADP List Mentor
            </div>
            <div className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
              20+ Years Complex B2B Sales
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}