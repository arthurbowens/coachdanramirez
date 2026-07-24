import { Component, computed, signal } from '@angular/core';

type Lang = 'en' | 'es';

const copy = {
  en: {
    nav: {
      about: 'About',
      values: 'Values',
      coaching: 'Coaching',
      contact: 'Contact',
    },
    hero: {
      brand: 'Coach Dan Ramirez',
      headline: 'Strength. Discipline. Excellence.',
      sub: 'NPC Masters Bodybuilder. Coach. Educator. Leader. Dad.',
      cta: 'DM me for coaching',
      location: 'New Jersey',
    },
    about: {
      eyebrow: 'The Coach',
      title: 'Owner — Coach Dan Ramirez LLC',
      body: 'Built on the stage and refined in the gym. I help athletes and everyday people forge real strength through discipline, structure, and excellence — not shortcuts.',
      roles: ['Coach', 'NPC Masters Bodybuilder', 'Educator', 'Leader', 'Dad'],
    },
    values: {
      eyebrow: 'The Standard',
      title: 'What I stand for',
      items: [
        {
          key: 'strength',
          title: 'Strength',
          body: 'Physical power and mental toughness trained together — so progress lasts beyond the workout.',
        },
        {
          key: 'discipline',
          title: 'Discipline',
          body: 'Consistency over hype. Clear plans, honest feedback, and habits that hold under pressure.',
        },
        {
          key: 'excellence',
          title: 'Excellence',
          body: 'Compete with yourself every day. Detail, intensity, and standards that raise the bar.',
        },
      ],
    },
    coaching: {
      eyebrow: 'Coaching',
      title: 'Ready to train with purpose?',
      body: 'Whether you are building for the stage or leveling up your life, reach out and let us build your plan.',
      cta: 'Start the conversation',
      note: 'Based in New Jersey · Online coaching available',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Strength • Discipline • Excellence',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      values: 'Valores',
      coaching: 'Coaching',
      contact: 'Contacto',
    },
    hero: {
      brand: 'Coach Dan Ramirez',
      headline: 'Fuerza. Disciplina. Excelencia.',
      sub: 'Culturista NPC Masters. Coach. Educador. Líder. Padre.',
      cta: 'Escríbeme para coaching',
      location: 'Nueva Jersey',
    },
    about: {
      eyebrow: 'El Coach',
      title: 'Dueño — Coach Dan Ramirez LLC',
      body: 'Forjado en el escenario y perfeccionado en el gym. Ayudo a atletas y personas comunes a construir fuerza real con disciplina, estructura y excelencia — sin atajos.',
      roles: ['Coach', 'Culturista NPC Masters', 'Educador', 'Líder', 'Padre'],
    },
    values: {
      eyebrow: 'El Estándar',
      title: 'Por lo que vivo',
      items: [
        {
          key: 'strength',
          title: 'Fuerza',
          body: 'Poder físico y mental entrenados juntos — para que el progreso dure más allá del entrenamiento.',
        },
        {
          key: 'discipline',
          title: 'Disciplina',
          body: 'Constancia sobre el hype. Planes claros, feedback honesto y hábitos que se sostienen bajo presión.',
        },
        {
          key: 'excellence',
          title: 'Excelencia',
          body: 'Compite contigo cada día. Detalle, intensidad y estándares que elevan la barra.',
        },
      ],
    },
    coaching: {
      eyebrow: 'Coaching',
      title: '¿Listo para entrenar con propósito?',
      body: 'Ya sea para el escenario o para subir de nivel en tu vida, escríbeme y construyamos tu plan.',
      cta: 'Iniciar la conversación',
      note: 'Basado en Nueva Jersey · Coaching online disponible',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      tagline: 'Fuerza • Disciplina • Excelencia',
    },
  },
} as const;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly lang = signal<Lang>('en');
  protected readonly menuOpen = signal(false);
  protected readonly t = computed(() => copy[this.lang()]);
  protected readonly year = new Date().getFullYear();
  protected readonly instagramUrl = 'https://instagram.com/coachdanramirez';

  protected setLang(next: Lang): void {
    this.lang.set(next);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => {
      const next = !open;
      this.lockScroll(next);
      return next;
    });
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.lockScroll(false);
  }

  private lockScroll(locked: boolean): void {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  protected scrollTo(id: string, event?: Event): void {
    event?.preventDefault();
    this.closeMenu();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
