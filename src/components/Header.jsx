'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="#process">Our Process</MobileNavLink>
        <MobileNavLink href="#qualification">Who It&apos;s For</MobileNavLink>
        <MobileNavLink href="#calculator">ROI Calculator</MobileNavLink>
        <MobileNavLink href="#faq">FAQ</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href="/reality-check">Book Reality Check</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home" className="flex items-center gap-2">
              <Logo className="h-10 w-auto" />
              <div className="hidden sm:block">
                <span className="font-semibold text-slate-900">B2B Scaler</span>
                <span className="ml-2 text-xs text-slate-500">2 clients max</span>
              </div>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#qualification">Who It&apos;s For</NavLink>
              <NavLink href="#calculator">Calculator</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* Availability indicator */}
            <div className="hidden lg:flex items-center gap-2 text-sm text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>2/2 Clients</span>
            </div>
            
            {/* LinkedIn link instead of sign in */}
            <div className="hidden md:block">
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-700 hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
            
            <Button href="/reality-check" color="blue">
              <span>
                Book <span className="hidden lg:inline">Reality Check</span>
                <span className="lg:hidden">Call</span>
              </span>
            </Button>
            
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
