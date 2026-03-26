import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div class="container py-2">
        <a class="navbar-brand fw-bold fs-3" href="#">
          <span class="text-accent-blue">P</span>rajwal
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <a class="nav-link px-3" href="#home" [class.active]="activeSection === 'home'">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#about" [class.active]="activeSection === 'about'">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#projects" [class.active]="activeSection === 'projects'">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#skills" [class.active]="activeSection === 'skills'">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#contact" [class.active]="activeSection === 'contact'">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7) !important;
      position: relative;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--accent-blue) !important;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--accent-blue);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }
  `]
})
export class NavbarComponent {
  activeSection: string = 'home';

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.onScroll();
      });
    }
  }

  onScroll() {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const scrollPos = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection = section;
        }
      }
    }
  }
}
