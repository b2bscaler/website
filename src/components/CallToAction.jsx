import React from 'react';

// --- Helper Components (to resolve compilation errors) ---

// Replaces the proprietary <Image> component from Next.js
const Image = ({ src, alt, width, height, className = '', ...props }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} {...props} />
);

// Replaces the proprietary <Container> component
const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Replaces the proprietary <Button> component
const Button = ({ href, color, variant, className = '', children }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300";
  
  let colorClasses = '';
  if (variant === 'outline') {
    // This style was in the user's original code for the "I Need to Think About It" button
    colorClasses = 'border-white/30 text-white hover:bg-white/10';
  } else if (color === 'white') {
    colorClasses = 'bg-white text-blue-600 hover:bg-white/90';
  }

  return (
    <a href={href} className={`${baseClasses} ${colorClasses} ${className}`}>
      {children}
    </a>
  );
};

// A single item component for the cost breakdown for better readability
const CostItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-white/80">{label}</span>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

export default function App() {
  // Your provided cost breakdown
  const costs = {
    baseSalary: [50000, 60000],
    ote: [25000, 35000],
    recruiting: [5000, 10000],
    benefits: [10000, 15000],
    tech: [6000, 8000],
    management: [10000, 15000],
  };

  // Calculate low and high end totals
  const totalLow = Object.values(costs).reduce((acc, range) => acc + range[0], 0);
  const totalHigh = Object.values(costs).reduce((acc, range) => acc + range[1], 0);

  const ourInvestment = 5000;
  const yearlySavings = totalLow - (ourInvestment * 12);

  // Function to format numbers as currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Using a placeholder for the background image to resolve the import error
  const backgroundImageSrc = 'https://placehold.co/2347x1244/0284c7/FFFFFF?text=Background';

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-25"
        src={backgroundImageSrc}
        alt=""
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Pre-qualifier */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Currently accepting 1 new client for Q2 2026
          </div>

          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            The Uncomfortable Truth About Hiring
          </h2>
          
          <div className="mt-6 space-y-4 text-lg text-white/90">
            <p>
              Your sales team is likely wasting 60% of their time on prospecting they hate.
            </p>
            <p className="font-semibold text-white">
              You think hiring another SDR is the answer. It&apos;s not. It&apos;s a {formatCurrency(totalLow)}+ gamble.
            </p>
            <p>
              We fix the process, not just add a person. But only if you&apos;re ready to invest in results.
            </p>
          </div>

          {/* The Math Section - Revised */}
          <div className="mt-10 mx-auto w-full max-w-2xl rounded-2xl bg-white/10 p-6 sm:p-8 backdrop-blur-sm text-left">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              The True Cost of an In-House SDR
            </h3>
            
            <div className="space-y-3">
               <CostItem label="Base Salary" value={`${formatCurrency(costs.baseSalary[0])} - ${formatCurrency(costs.baseSalary[1])}`} />
               <CostItem label="OTE / Commissions" value={`${formatCurrency(costs.ote[0])} - ${formatCurrency(costs.ote[1])}`} />
               <CostItem label="Benefits & Payroll Taxes" value={`${formatCurrency(costs.benefits[0])} - ${formatCurrency(costs.benefits[1])}`} />
               <CostItem label="Recruiting & Hiring" value={`${formatCurrency(costs.recruiting[0])} - ${formatCurrency(costs.recruiting[1])}`} />
               <CostItem label="Tech Stack & Tools" value={`${formatCurrency(costs.tech[0])} - ${formatCurrency(costs.tech[1])}`} />
               <CostItem label="Management & Training" value={`${formatCurrency(costs.management[0])} - ${formatCurrency(costs.management[1])}`} />
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-lg text-white/80">Total Annual Cost:</span>
                <span className="text-xl font-bold text-white">{`${formatCurrency(totalLow)} - ${formatCurrency(totalHigh)}`}</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-dashed border-white/20 text-center">
                 <p className="text-lg text-white">Our Investment: <span className="font-bold">{formatCurrency(ourInvestment)}/month</span></p>
                 <p className="mt-2 text-xl text-green-300 font-semibold">
                    Annual Savings of at least {formatCurrency(yearlySavings)}
                 </p>
                 <p className="mt-2 text-sm text-white/70">
                   Plus: No training delays. No turnover drama. No excuses. Just results.
                 </p>
            </div>
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
              If you don&apos;t know these numbers, we&apos;re probably not a fit yet.
            </p>
          </div>
        </div>

        {/* Hidden section for "I Need to Think About It" */}
        <div id="not-ready" className="mt-20 mx-auto max-w-2xl rounded-2xl bg-white/5 p-8 backdrop-blur-sm scroll-mt-24">
          <h3 className="text-xl font-semibold text-white mb-4">
            Not Ready? Here’s What Usually Happens Next:
          </h3>
          <ol className="space-y-3 text-white/80 list-decimal list-inside">
            <li>You&apos;ll try to solve it internally for another 3-6 months.</li>
            <li>You&apos;ll hire a cheap agency that promises 100 meetings a month.</li>
            <li>You&apos;ll get 100 unqualified meetings and fire them, wasting time and money.</li>
            <li>You&apos;ll come back when you&apos;re ready for a strategic partner.</li>
          </ol>
          <p className="mt-6 text-white">
            Want to skip to step 4? 
            <a href="/reality-check" className="ml-2 underline font-semibold hover:text-white/80">
              Let&apos;s talk now &rarr;
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}

