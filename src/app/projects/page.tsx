'use client'

import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

interface ProjectDescription {
  en: string;
  zh: string;
}

interface Project {
  title: string;
  url: string;
  description: ProjectDescription;
  status: 'Beta' | 'Active' | 'Legacy';
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Derive AI",
    url: "https://ai.wflaer.space",
    description: {
      en: "Advanced AIGC platform designed specifically for WFLA students and teachers, providing industry-leading AI services. Currently in beta testing phase with all services free of charge.",
      zh: "专为WFLA学生和教师设计的AIGC平台，提供广泛业界领先的AI服务。当前处于公测阶段，所有服务全部免费，希望收集用户声音计划进一步优化。"
    },
    status: "Beta",
    featured: true,
  },
  {
    title: "Resource Hub",
    url: "https://files.wflaer.space",
    description: {
      en: "Centralized platform for academic resources including software and e-books. Features high-speed download capabilities with dual-line deployment for optimal performance.",
      zh: "集中收集各类学术资源的平台，包括常用软件，电子书等。部署两条高速线路保证下载的速度与稳定性（实测可跑满千兆网速）。"
    },
    status: "Active",
  },
  {
    title: "GDC Tutorial",
    url: "https://gdc.wflaer.space",
    description: {
      en: "Comprehensive GDC user guide designed for beginners, providing quick-start guidance. Our first completed project that laid a solid foundation for subsequent initiatives.",
      zh: "专为初学者设计的GDC用户指南，提供快速入门指导。作为组织的第一个完成项目，为后续项目奠定了坚实基础。"
    },
    status: "Active",
  },
  {
    title: "Campus Guide",
    url: "https://campus.wflaer.space",
    description: {
      en: "Quick search tool for campus and teacher information, including email addresses and office locations.",
      zh: "校园和教师信息的快速搜索工具，可检索常用教师信息，如邮箱，办公室位置等。"
    },
    status: "Legacy",
  },
  {
    title: "Links Collection",
    url: "https://links.wflaer.space",
    description: {
      en: "Curated collection of educational websites and resources for easy access by students and teachers.",
      zh: "对学习有帮助的网站的分类收藏集，方便师生快速访问各种学习资料。"
    },
    status: "Legacy",
  }
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-grid-pattern opacity-[0.02]" />
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl animate-float" />
            <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-indigo-400/10 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute bottom-1/4 left-2/3 w-56 h-56 rounded-full bg-purple-400/10 blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/60" />
        </div>

        <div className="container section-padding relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {t.projects.title}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t.projects.description}
            </p>
          </div>
          
          {/* Featured Projects */}
          {projects.filter(p => p.featured).length > 0 && (
            <div className="mb-24">
              <h2 className="mb-12 text-3xl font-bold text-center">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t.projects.featured}
                </span>
              </h2>
              <div className="grid gap-8">
                {projects.filter(p => p.featured).map((project) => (
                  <div key={project.title} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
                    
                    {/* Animated shapes */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl group-hover:scale-110 transition-transform duration-500 animate-pulse-soft" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl group-hover:scale-110 transition-transform duration-500 animate-float" />
                    
                    <div className="relative z-10">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-4 mb-8">
                          <h3 className="text-4xl font-bold text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
                          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-500/20">
                            {t.projects.status.beta}
                          </span>
                        </div>
                        <p className="mb-10 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">{project.description[language]}</p>
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group/btn"
                        >
                          {t.projects.visitProject}
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Projects */}
          <div className="mb-24">
            <h2 className="mb-12 text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t.projects.active}
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.filter(p => p.status === 'Active').map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-colors duration-300" />
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-green-500/5 to-emerald-500/5 blur-3xl group-hover:scale-110 transition-transform duration-500 animate-pulse-soft" />
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className="inline-block text-sm text-green-600">{t.projects.status.active}</span>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-600">{project.description[language]}</p>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium group"
                    >
                      {t.projects.visitProject}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legacy Projects */}
          <div>
            <h2 className="mb-12 text-3xl font-bold text-center">
              <span className="inline-block bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">
                {t.projects.legacy}
              </span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.filter(p => p.status === 'Legacy').map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/0 to-gray-500/0 group-hover:from-gray-500/5 group-hover:to-gray-500/10 transition-colors duration-300" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-gray-500/5 to-gray-400/5 blur-3xl group-hover:scale-110 transition-transform duration-500 animate-pulse-soft" />
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white shadow-lg shadow-gray-500/10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <span className="text-sm text-gray-500">{t.projects.status.legacy}</span>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600 text-sm">{project.description[language]}</p>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium group"
                    >
                      {t.projects.visitProject}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 