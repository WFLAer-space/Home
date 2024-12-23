'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100/50 dark:bg-gray-800/50">
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
        }`}
      >
        <span className="relative z-10">EN</span>
        {language === 'en' && (
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 rounded-md scale-100 transition-transform origin-center" />
        )}
      </button>
      <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      <button
        onClick={() => setLanguage('zh')}
        className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'zh'
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
        }`}
      >
        <span className="relative z-10">中文</span>
        {language === 'zh' && (
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 rounded-md scale-100 transition-transform origin-center" />
        )}
      </button>
    </div>
  )
} 