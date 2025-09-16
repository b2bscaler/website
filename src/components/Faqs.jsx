import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Why should I pay $5K when others charge $1K?',
      answer:
        'Because the $1K agency will get you 100 meetings with "CEO at Student" and "Manager at Restaurant." We&apos;ll get you 5-10 meetings with actual decision-makers who can write checks. Your sales team&apos;s time is worth more than saving $4K.',
    },
    {
      question: 'What if we already tried appointment setting and it failed?',
      answer: 'Let me guess: They promised 50+ meetings per month, delivered quantity over quality, and your sales team stopped taking the calls after week 2? That&apos;s not appointment setting failing. That&apos;s hiring the wrong partner.',
    },
    {
      question: 'Why don&apos;t you do pay-per-appointment?',
      answer:
        'Because it attracts nightmare clients who want 100 bad meetings instead of 10 good ones. Plus, we&apos;re not desperate. We have 2 client slots and a waiting list. Pay-per-appointment is for agencies that need to say yes to everyone.',
    },
  ],
  [
    {
      question: 'How is this different from hiring an SDR?',
      answer:
        'An SDR costs $65K + benefits + training + tools + management time. They&apos;ll quit in 18 months. We cost $60K/year, need zero training, never call in sick, and our process gets better every month. Plus, you can fire us with 30 days notice.',
    },
    {
      question: 'What happens after the first 3 months?',
      answer:
        'If we&apos;re hitting targets, we keep going. If not, we part ways. No hard feelings. About 70% of clients stay for 12+ months. The 30% who leave usually aren&apos;t ready for consistent outbound (and we tell them that upfront).',
    },
    {
      question: 'Can you guarantee results?',
      answer:
        'We guarantee we&apos;ll book qualified meetings. We can&apos;t guarantee your team will close them. If your sales process is broken, even perfect appointments won&apos;t help. That&apos;s why we audit your process before starting.',
    },
  ],
  [
    {
      question: 'Why only 2 clients at a time?',
      answer:
        'Because cold prospecting is hard. Anyone who says they can manage 20+ clients is either lying or delivering garbage. We tried scaling once. Quality tanked. Clients left. We learned our lesson.',
    },
    {
      question: 'What if I need more than appointment setting?',
      answer: 'We&apos;ll refer you to someone else. We do one thing exceptionally well: book qualified B2B meetings. We don&apos;t do social media, content marketing, or "full-stack growth." That&apos;s how agencies become mediocre at everything.',
    },
    {
      question: 'Do you work with startups?',
      answer:
        'Only if you have: product-market fit, $10K+ average deal size, at least one person who can close, and realistic expectations. If you&apos;re still figuring out your offer, we&apos;re not the right fit. Yet.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            The Questions You&apos;re Thinking
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Straight answers to the questions everyone asks but most agencies dodge. 
            Still have questions? Email us at hello@b2bscaler.com and we&apos;ll actually respond.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        
        {/* Bottom section with a different kind of FAQ */}
        <div className="mt-20 mx-auto max-w-3xl rounded-2xl bg-blue-50 p-8">
          <h3 className="font-display text-xl text-slate-900 mb-4">
            The Question Nobody Asks (But Should)
          </h3>
          <div className="space-y-4">
            <p className="font-semibold text-slate-900">
              "What&apos;s the catch? Why are you different?"
            </p>
            <p className="text-slate-700">
              The catch is we&apos;re selective. We turn down 70% of inquiries. We don&apos;t scale beyond 2 clients. 
              We won&apos;t promise you 100 meetings. We charge more than most.
            </p>
            <p className="text-slate-700">
              Why are we different? Because we actually did the sales job ourselves. $2M+ annually as a manufacturer rep. 
              20+ years in complex B2B sales. We&apos;ve been in your shoes, missed quota, lost deals, and figured out what actually works.
            </p>
            <p className="text-slate-700 font-semibold">
              Most agencies are run by marketers who&apos;ve never made a cold call. That&apos;s the real difference.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
