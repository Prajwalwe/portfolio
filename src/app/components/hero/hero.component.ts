import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="section-padding d-flex align-items-center min-vh-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 animate-up">
            <h5 class="text-accent-blue mb-3 fw-bold">WELCOME TO MY PORTFOLIO</h5>
            <h1 class="display-3 fw-extrabold mb-4">
              Hi, I'm <span class="gradient-text">Prajwal H P</span>
            </h1>
            <h2 class="h3 mb-4 text-white">
              I am a <span class="text-accent-green">{{ displayText }}</span><span class="cursor">|</span>
            </h2>
            <p class="lead text-muted mb-5 col-md-10"> 
              Specialist Programmer Trainee at Infosys. 
              Information Science and Engineering student at Acharya Institute of Technology.
              Passionate about building high-performance 
              web applications using Angular 19, .NET 8 and Azure.
            </p>
            <div class="d-flex gap-3">
              <a href="https://drive.google.com/file/d/1rPQba4ZVqRUtHXBHnZjZdOSi3w-YrC8R/view?usp=sharing" target="_blank" class="btn btn-primary-custom">
                <i class="bi bi-file-earmark-pdf me-2"></i>Resume
              </a>
              <a href="#contact" class="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-600">
                Let's Talk
              </a>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block animate-up" style="animation-delay: 0.2s">
            <div class="hero-image-container ms-auto">
               <div class="hero-shape"></div>
               <!-- Placeholder for profile image if available -->
               <img src="https://image2url.com/r2/default/images/1774526469008-a0180c2b-3a03-4be2-942f-77a4054328d9.jpeg" class="img-fluid rounded-circle border border-5 border-accent-blue shadow-lg" alt="Prajwal">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .fw-extrabold { font-weight: 800; }
    .cursor {
      animation: blink 0.7s infinite;
      color: var(--accent-green);
      font-weight: bold;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .hero-image-container {
      position: relative;
      width: 350px;
      height: 350px;
    }
    .hero-shape {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 100%;
      height: 100%;
      border: 5px solid var(--accent-green);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-15px, 15px); }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  roles: string[] = [
    'Specialist Programmer @ Infosys',
    'Angular Specialist',
    '.NET Developer',
    'Full Stack Engineer',
    'ISE Student'
  ];
  displayText: string = '';
  roleIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  typeTimeout: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
  }

  type() {
    const currentRole = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 50;
    } else {
      this.displayText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pause at end
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.typingSpeed = 500;
    }

    this.typeTimeout = setTimeout(() => this.type(), this.typingSpeed);
  }
}
