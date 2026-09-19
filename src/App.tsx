import { type CSSProperties, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Menu,
  Minus,
  Plus,
  X,
} from 'lucide-react'
import './App.css'
import TechCarousel from './components/techcarousel.tsx'
import gforceLogo from './Assets/gforce_logo.jpg'
import bgfConsultoriaLogo from './Assets/bgf_consultoria.jpeg'

type SkillArea = {
  title: string
  description: string
  technologies: string[]
}

const skillAreas: SkillArea[] = [
  {
    title: 'Front-end',
    description:
      'Interfaces com React e TypeScript — performance, acessibilidade e UX.',
    technologies: ['React', 'TypeScript', 'TailywindCSS'],
  },
  {
    title: 'Back-end',
    description: 'APIs e modelagem com Node.js, NestJS e Prisma.',
    technologies: ['Node.js', 'NestJS', 'Prisma'],
  },
  {
    title: 'Mobile',
    description: 'Aplicações móveis e focadas em fluxo e entrega rápida.',
    technologies: ['React Native', 'Mobile', 'UX'],
  },
]

type Experience = {
  title: string
  description: string
  imageAlt: string
  url: string
  imageSrc: string
}

const experiences: Experience[] = [
  {
    title: 'Plataforma web para comunidade fitness (G-Force Coach)',
    description:
      'Aplicação em React + Node.js, com infraestrutura em Docker, AWS e Vercel.',
    imageAlt: 'Gforce Coach',
    url: 'https://www.gforcecoach.com',
    imageSrc: gforceLogo,
  },
  {
    title: 'Estagio em Suporte Técnico (BGF Consultoria)',
    description: 'Suporte técnico com foco em Active Directory, Sistemas operacionais, VPN e Manutenções preventivas.',
    imageAlt: 'BGF Consultoria',
    url: 'https://www.bgfconsultoria.com.br',
    imageSrc: bgfConsultoriaLogo,
  },
]

type Qualification = {
  category: string
  details: string
}

const qualifications: Qualification[] = [
  { category: 'Escolaridade', details: 'Ensino Médio Técnico em informatica — conclusão 12/2023' },
  { category: 'Inglês', details: 'Avançado (CNA) — Conclusão 06/2024' },
  { category: 'Graduação', details: 'Ciência da Computação — Conclusão 12/2027' },
]

type SlideDirection = 'next' | 'prev'

// Deve ser igual à duração da animação .is-exiting no CSS (0.25s)
const EXPERIENCE_EXIT_DURATION_MS = 250

export function App(){
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<SlideDirection>('next')
  const [isExiting, setIsExiting] = useState(false)
  const exitTimeoutRef = useRef<number | undefined>(undefined)

  const hasPreviousExperience = currentExperienceIndex > 0
  const hasNextExperience = currentExperienceIndex < experiences.length - 1

  const changeExperience = (requestedDirection: SlideDirection) => {
    if (isExiting) return

    const targetIndex =
      requestedDirection === 'next'
        ? currentExperienceIndex + 1
        : currentExperienceIndex - 1
    if (targetIndex < 0 || targetIndex >= experiences.length) return

    setSlideDirection(requestedDirection)
    setIsExiting(true)

    exitTimeoutRef.current = window.setTimeout(() => {
      setCurrentExperienceIndex(targetIndex)
      setIsExiting(false)
    }, EXPERIENCE_EXIT_DURATION_MS)
  }

  const handlePreviousExperience = () => changeExperience('prev')
  const handleNextExperience = () => changeExperience('next')

  // Limpa o timeout caso o componente seja desmontado durante a transição
  useEffect(() => {
    return () => window.clearTimeout(exitTimeoutRef.current)
  }, [])

  // Pré-carrega as imagens das experiências para evitar "piscar" ao trocar
  useEffect(() => {
    experiences.forEach((experience) => {
      const preloadedImage = new Image()
      preloadedImage.src = experience.imageSrc
    })
  }, [])

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('.reveal')

    document.documentElement.classList.add('reveal-ready')

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    )

    revealTargets.forEach((element) => revealObserver.observe(element))

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  const currentExperience = experiences[currentExperienceIndex]

  return (
    <main className="page-shell" id="top">
      <header className={`site-header ${isMenuOpen ? 'is-open' : ''}`}>
        <a className="brand" href="#top" onClick={() => setIsMenuOpen(false)}>
          Pedro Costa
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fechar navegação' : 'Abrir navegação'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="nav-links" id="primary-navigation" aria-label="Navegação principal">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            Sobre mim
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Competências
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experiência
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contato
          </a>
        </nav>

        <a className="email-button" href="#contact">
          Email
          <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero-section" id="hero" aria-labelledby="hero-title">
        <div className="hero-media" />
        <div className="hero-overlay" />

        <div className="hero-content reveal">
          <p className="section-label">Desenvolvedor Web & Mobile</p>
          <h1 id="hero-title">
            Pedro Costa
            <span>React · Node · TypeScript</span>
          </h1>
          <p>
            Desenvolvimento de sites rápidos, responsivos e consistentes
            foco em React, TypeScript e experiência do usuário.
          </p>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Ir para a próxima seção">
          <ChevronDown size={24} />
        </a>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-label reveal">Sobre mim</div>
        <h2 className="reveal" id="about-title">
          Estudante de Ciência da Computação | Técnico de Informática
        </h2>

        <div className="qualifications-grid" aria-label="Formação e qualificações">
          {qualifications.map((qualification, index) => (
            <div
              className="qualification-card reveal"
              key={qualification.details}
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <strong>{qualification.category}</strong>
              <span>{qualification.details}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="skills-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="skills-heading reveal">
          <div className="section-label">Especialidades</div>

          <h2 id="skills-title">
            Competências técnicas e tecnologias utilizadas
          </h2>


          <TechCarousel />
        </div>

        <div className="skill-list reveal">
          {skillAreas.map((skillArea, index) => {
            const isExpanded = activeSkillIndex === index;

            return (
              <article
                className={`skill-item ${isExpanded ? "is-active" : ""}`}
                key={skillArea.title}
              >
                <button
                  className="skill-toggle"
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setActiveSkillIndex(isExpanded ? null : index)
                  }
                >
                  <span>{skillArea.title}</span>

                  <span className="toggle-icon" aria-hidden="true">
                    {isExpanded ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {isExpanded && (
                  <div className="skill-details">
                    <p>{skillArea.description}</p>

                    <div className="technology-list">
                      {skillArea.technologies.map((technology) => (
                        <figure className="technology-tile" key={technology}>
                          <figcaption>{technology}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading reveal">
          <div className="section-label">Experiência</div>
          <h2 id="experience-title">Projetos e serviços de relevantes</h2>
        </div>

        <div className="experience-carousel reveal">
          {hasPreviousExperience && (
            <button
              className="experience-arrow experience-arrow-left"
              type="button"
              onClick={handlePreviousExperience}
              aria-label="Projeto anterior"
              disabled={isExiting}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="experience-viewport" aria-live="polite">
            <article
              key={currentExperienceIndex}
              className={`experience-card experience-card--${slideDirection} ${isExiting ? 'is-exiting' : ''}`}
            >
              <div
                className="experience-image"
                role="img"
                aria-label={currentExperience.imageAlt}
                style={{ '--experience-image': `url(${currentExperience.imageSrc})` } as CSSProperties}
              />
              <div className="experience-content">
                <span>Projeto que desenvolvi</span>
                <h3>{currentExperience.title}</h3>
                <p>{currentExperience.description}</p>
                <a href={currentExperience.url} target="_blank" rel="noreferrer">
                  Veja mais
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          </div>

          {hasNextExperience && (
            <button
              className="experience-arrow experience-arrow-right"
              type="button"
              onClick={handleNextExperience}
              aria-label="Próximo projeto"
              disabled={isExiting}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="reveal">
          <div className="section-label">Contato</div>
          <h2 id="contact-title">Sempre em busca de soluções logicas.</h2>
        </div>
        <a className="email-button email-button-large reveal" href="mailto:ph.costa0305@gmail.com">
          ph.costa0305@gmail.com
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  )
}