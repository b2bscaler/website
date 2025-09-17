'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'

export function ROICalculator() {
  // Calculator state
  const [avgDealSize, setAvgDealSize] = useState(15000)
  const [closeRate, setCloseRate] = useState(20)
  const [salesRepCost, setSalesRepCost] = useState(120000)
  const [currentMeetingsPerMonth, setCurrentMeetingsPerMonth] = useState(5)

  // B2B Scaler constants
  const b2bScalerCost = 5000 // monthly
  const b2bScalerMeetings = 10 // BANT qualified meetings per month
  
  // Hire Someone option - based on market research
  const hireSomeoneCost = 7000 // $84k/year for dedicated appointment setter
  const hireSomeoneMeetings = Math.max(currentMeetingsPerMonth + 2, 8)
  const hireSomeoneCostPerMeeting = Math.round(hireSomeoneCost / hireSomeoneMeetings)
  
  // Email/LinkedIn Agency option
  const cheapAgencyCost = 2500 // typical for low-end agencies
  const cheapAgencyMeetings = 8 // meetings they claim
  const cheapAgencyQualifiedMeetings = 2 // only 25% are actually qualified
  const cheapAgencyCostPerQualified = Math.round(cheapAgencyCost / cheapAgencyQualifiedMeetings)
  
  // Calculations
  const meetingsNeededPerDeal = Math.round(100 / closeRate) || 5
  const revenuePerMeeting = (avgDealSize * closeRate) / 100
  
  // B2B Scaler calculations
  const b2bScalerCostPerMeeting = Math.round(b2bScalerCost / b2bScalerMeetings)
  // BANT qualified meetings close 25% better
  const b2bScalerMonthlyRevenue = b2bScalerMeetings * avgDealSize * (closeRate / 100) * 1.25
  const b2bScalerROI = Math.round(((b2bScalerMonthlyRevenue - b2bScalerCost) / b2bScalerCost) * 100)
  
  // Lost opportunity cost
  const missedRevenuePerMonth = Math.max(0, (b2bScalerMeetings - currentMeetingsPerMonth) * revenuePerMeeting)
  const salesRepTimeWasted = currentMeetingsPerMonth > 0
    ? Math.round((salesRepCost / 12) * 0.4) // 40% of time on prospecting
    : Math.round((salesRepCost / 12) * 0.6) // 60% if few meetings

  return (
    <section
      id="calculator"
      aria-label="ROI Calculator"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            The Math Nobody Wants to Do (But Should)
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Stop guessing. Start calculating. Here&apos;s what appointment setting actually costs
            and what you&apos;re leaving on the table.
          </p>
        </div>

        {/* Calculator Input Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10">
            <h3 className="font-display text-xl text-slate-900 mb-8">Your Numbers</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Deal Size
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-slate-900 w-24 text-right">
                    ${avgDealSize.toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Close Rate (%)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-slate-900 w-24 text-right">
                    {closeRate}%
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Sales Rep Total Cost (Annual)
                  <span className="block text-xs font-normal text-slate-500 mt-1">
                    Include salary, benefits, tools
                  </span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="80000"
                    max="200000"
                    step="10000"
                    value={salesRepCost}
                    onChange={(e) => setSalesRepCost(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-slate-900 w-24 text-right">
                    ${(salesRepCost/1000).toFixed(0)}K
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Current Qualified Meetings/Month
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={currentMeetingsPerMonth}
                    onChange={(e) => setCurrentMeetingsPerMonth(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-slate-900 w-24 text-right">
                    {currentMeetingsPerMonth}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {/* Option 1: Hire Someone */}
            <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-slate-900">Hire Someone</h3>
                <span className="text-2xl">🤷</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monthly cost:</span>
                  <span className="font-semibold text-slate-900">${hireSomeoneCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Meetings/month:</span>
                  <span className="font-semibold text-slate-900">~{hireSomeoneMeetings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Cost per meeting:</span>
                  <span className="font-semibold text-slate-900">${hireSomeoneCostPerMeeting}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Meeting quality:</span>
                  <span className="text-slate-600">Mixed</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-red-600 font-semibold">Hidden costs:</div>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• 3-month ramp time</li>
                    <li>• 18-month turnover</li>
                    <li>• Management overhead</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 2: Email/LinkedIn Agency */}
            <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-slate-900">Email/LinkedIn Agency</h3>
                <span className="text-2xl">💩</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monthly cost:</span>
                  <span className="font-semibold text-slate-900">${cheapAgencyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Meetings claimed:</span>
                  <span className="font-semibold text-slate-900">{cheapAgencyMeetings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Actually qualified:</span>
                  <span className="font-semibold text-red-600">~{cheapAgencyQualifiedMeetings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Real cost/qualified:</span>
                  <span className="font-semibold text-red-600">${cheapAgencyCostPerQualified}</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-red-600 font-semibold">Reality check:</div>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• Not BANT qualified</li>
                    <li>• &quot;Just browsing&quot; meetings</li>
                    <li>• No budget authority</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 3: B2B Scaler */}
            <div className="rounded-2xl bg-blue-50 p-6 shadow-xl shadow-slate-900/10 ring-2 ring-blue-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-slate-900">B2B Scaler</h3>
                <span className="text-2xl">✅</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monthly investment:</span>
                  <span className="font-semibold text-slate-900">${b2bScalerCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">BANT qualified meetings:</span>
                  <span className="font-semibold text-green-600">{b2bScalerMeetings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Cost per qualified:</span>
                  <span className="font-semibold text-slate-900">${b2bScalerCostPerMeeting}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Revenue generated:</span>
                  <span className="font-semibold text-green-600">${Math.round(b2bScalerMonthlyRevenue).toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-green-600 font-semibold">ROI: {b2bScalerROI}%</div>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>• BANT qualified only</li>
                    <li>• Pipeline nurturing included</li>
                    <li>• 25% better close rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line Section */}
          <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white">
            <h3 className="font-display text-2xl mb-6">Your Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-400">
                  ${Math.round(missedRevenuePerMonth).toLocaleString()}
                </div>
                <div className="mt-2 text-white/80">
                  Revenue you&apos;re missing monthly by not having enough qualified meetings
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">
                  ${salesRepTimeWasted.toLocaleString()}
                </div>
                <div className="mt-2 text-white/80">
                  Monthly cost of your sales reps doing their own prospecting (40-60% of their time)
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-white/90 mb-6">
                You need {meetingsNeededPerDeal} meetings to close one deal worth ${avgDealSize.toLocaleString()}.
                <span className="block mt-2 font-semibold">
                  We&apos;ll get you those meetings. BANT qualified. Every month.
                </span>
              </p>
              <a
                href="/reality-check"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                See If You Qualify
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50 text-center">
                *Based on industry averages: Entry-level appointment setter $70-90K, agencies $2-4K/month,
                25% BANT qualification improvement. Your results will vary based on industry and sales process.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
