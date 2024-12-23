'use client'

import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { useState } from 'react'

export default function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 glass" />

      {/* Content */}
      <div className="container relative">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold relative group"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-0 transition-opacity duration-200">
              WFLAer.space
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              WFLAer.space
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/about">{t.nav.about}</NavLink>
            <NavLink href="/projects">{t.nav.projects}</NavLink>
            <NavLink href="/contact">{t.nav.contact}</NavLink>
            <a 
              href="https://github.com/WFLAer-space"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <span className="relative z-10 flex items-center gap-1">
                {t.nav.github}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center" />
            </a>
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent mx-2" />
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 glass border-t border-gray-200 dark:border-gray-800 transition-all duration-200 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-1 px-4">
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>{t.nav.about}</MobileNavLink>
            <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>{t.nav.projects}</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</MobileNavLink>
            <a
              href="https://github.com/WFLAer-space"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                {t.nav.github}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center" />
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {children}
    </Link>
  )
} 