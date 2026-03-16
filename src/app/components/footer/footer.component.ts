import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-5 border-top border-secondary border-opacity-10 bg-dark-primary">
      <div class="container text-center">
        <h4 class="fw-bold mb-4">
          <span class="text-accent-blue">P</span>rajwal<span class="text-accent-green">.</span>
        </h4>
        <div class="d-flex justify-content-center gap-4 mb-4">
          <a href="#home" class="text-muted fs-6">Home</a>
          <a href="#about" class="text-muted fs-6">About</a>
          <a href="#projects" class="text-muted fs-6">Projects</a>
          <a href="#skills" class="text-muted fs-6">Skills</a>
          <a href="#contact" class="text-muted fs-6">Contact</a>
        </div>
        <div class="mb-4">
           <a href="https://linkedin.com/in/prajwalhpp" target="_blank" class="mx-2 text-muted fs-5"><i class="bi bi-linkedin"></i></a>
           <a href="https://github.com/prajwalwe" target="_blank" class="mx-2 text-muted fs-5"><i class="bi bi-github"></i></a>
           <a href="mailto:prajwalhpp1&#64;gmail.com" class="mx-2 text-muted fs-5"><i class="bi bi-envelope"></i></a>
        </div>
        <p class="text-muted small mb-0">
          &copy; {{ currentYear }} Prajwal H P. Built with <span class="text-danger">❤</span> using Angular 19 & Bootstrap 5.1.
        </p>
      </div>
    </footer>
  `,
  styles: [`
    a:hover {
      color: var(--accent-blue) !important;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
