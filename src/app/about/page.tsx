'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'chat':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )
      case 'resource':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      case 'manage':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      case 'support':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      default:
        return null
    }
  }

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
                  {t.about.title}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.introduction}
              </p>
            </div>

            <div className="space-y-16">
              {/* Vision */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.about.vision.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t.about.vision.content}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.about.vision.description}</p>
                </div>
              </div>

              {/* Mission */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.about.mission.title}</h2>
                  <ul className="space-y-4">
                    {t.about.mission.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t.about.challenges.title}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {t.about.challenges.items.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 transition-colors duration-300" />
                      <div className="relative z-10">
                        <div className="mb-4 inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/50 p-3 text-indigo-600 dark:text-indigo-400">
                          {renderIcon(item.icon)}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.about.values.title}</h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                      <div className="inline-block rounded-xl bg-blue-100 dark:bg-blue-900/50 p-3">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t.about.values.innovation}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t.about.values.innovationDesc}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="inline-block rounded-xl bg-purple-100 dark:bg-purple-900/50 p-3">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t.about.values.collaboration}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t.about.values.collaborationDesc}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="inline-block rounded-xl bg-indigo-100 dark:bg-indigo-900/50 p-3">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t.about.values.education}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t.about.values.educationDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.about.community.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t.about.community.description}</p>
                  <div className="grid gap-6 md:grid-cols-3">
                    {t.about.community.roles.map((role, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{role.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.about.leadership.title}</h2>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                      D
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">dbc</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{t.about.leadership.founder}</p>
                      <p className="text-gray-500 dark:text-gray-400">{t.about.leadership.founderDesc}</p>
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