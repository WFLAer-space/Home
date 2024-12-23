'use client'

import { useLanguage } from './i18n/LanguageContext'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl animate-float" />
          <div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-200/20 blur-3xl animate-float-delayed" />
        </div>

        <div className="container relative px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                WFLAer.space
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {t.home.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/projects"
                  className="group px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    {t.home.cta.projects}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <a
                  href="https://github.com/WFLAer-space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* About Card */}
              <Link href="/about" className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block p-2.5 rounded-lg bg-blue-50 text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.home.quickLinks.about}</h3>
                <p className="text-gray-600 mb-4 text-sm">{t.home.quickLinks.aboutDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                  {t.home.quickLinks.learnMore}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              {/* Projects Card */}
              <Link href="/projects" className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.home.quickLinks.projects}</h3>
                <p className="text-gray-600 mb-4 text-sm">{t.home.quickLinks.projectsDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-indigo-600 font-medium group-hover:gap-2 transition-all">
                  {t.home.quickLinks.explore}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              {/* Contact Card */}
              <Link href="/contact" className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block p-2.5 rounded-lg bg-green-50 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.home.quickLinks.contact}</h3>
                <p className="text-gray-600 mb-4 text-sm">{t.home.quickLinks.contactDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium group-hover:gap-2 transition-all">
                  {t.home.quickLinks.getInTouch}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                WFLAer.space
              </h2>
            </div>

            <nav className="mb-8">
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t.nav.projects}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/WFLAer-space" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                © 2024 WFLAer.space. {t.footer.rights}
              </p>
              <p className="text-sm text-gray-500">
                {t.footer.founder}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
