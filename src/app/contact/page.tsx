'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10 animate-pulse-soft" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-600/10 animate-pulse-soft" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-400/5 via-indigo-400/5 to-purple-400/5 dark:from-blue-600/5 dark:via-indigo-600/5 dark:to-purple-600/5 blur-3xl animate-gradient" />
        </div>

        <div className="container section-padding relative">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  {t.contact.title}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Join our community and help us build a better educational experience together.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Column: Contact Methods */}
              <div className="space-y-8">
                {/* Email Contact */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-xl bg-blue-100 dark:bg-blue-900/50 p-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t.contact.methods.email}</h2>
                    <a 
                      href="mailto:service@wflaer.space"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg font-medium group"
                    >
                      service@wflaer.space
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* WeChat Contact */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-xl bg-green-100 dark:bg-green-900/50 p-3">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t.contact.methods.wechat}</h2>
                    <p className="text-lg font-medium text-green-600 dark:text-green-400">dbccccwx</p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-xl bg-purple-100 dark:bg-purple-900/50 p-3">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t.contact.github.title}</h2>
                    <a 
                      href="https://github.com/WFLAer-space"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors text-lg font-medium group"
                    >
                      {t.contact.github.follow}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Community */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block rounded-xl bg-indigo-100 dark:bg-indigo-900/50 p-3">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.contact.community.title}</h2>
                  <div className="space-y-8 text-gray-600 dark:text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{t.contact.community.welcome}</h3>
                      <ul className="space-y-3">
                        {Object.values(t.contact.community.roles).map((role, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{t.contact.community.canDo.title}</h3>
                      <ul className="space-y-3">
                        {Object.values(t.contact.community.canDo)
                          .filter(item => item !== t.contact.community.canDo.title)
                          .map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 