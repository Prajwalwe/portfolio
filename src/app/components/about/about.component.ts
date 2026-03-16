import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-padding bg-dark-secondary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0 animate-up">
            <div class="position-relative">
              <img src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" class="img-fluid rounded-4 shadow-lg grayscale-image" alt="About Me">
              <div class="experience-badge shadow">
                <h2 class="mb-0 fw-bold text-accent-blue">ISE</h2>
                <small>Student &#64; Acharya</small>
              </div>
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5 animate-up" style="animation-delay: 0.2s">
            <h5 class="text-accent-green mb-3 fw-bold">ABOUT ME</h5>
            <h2 class="display-5 mb-4 fw-bold">Building Digital Solutions with <span class="text-accent-blue">Purpose</span></h2>
            <p class="text-muted mb-4 lead">
              I am an Information Science and Engineering student at Acharya Institute of Technology with a CGPA of 7.8. 
              As a <strong>Specialist Programmer (Infosys Select)</strong>, I focus on creating high-quality, 
              scalable, and responsive web applications.
            </p>
            <p class="text-muted mb-5">
              My core philosophy revolves around solving real-world problems through innovative technology. 
              Whether it's a medical assistant chatbot or a community-driven blood donation platform, 
              I strive to deliver excellence in every line of code.
            </p>
            
            <div class="row g-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <div class="icon-box me-3">
                    <i class="bi bi-lightning-fill text-accent-blue"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 fw-bold">Fast & Efficient</h6>
                    <small class="text-muted">Optimized code</small>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <div class="icon-box me-3">
                    <i class="bi bi-phone-fill text-accent-green"></i>
                  </div>
                  <div>
                    <h6 class="mb-0 fw-bold">Responsive</h6>
                    <small class="text-muted">Mobile-first design</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-badge {
      position: absolute;
      bottom: -20px;
      right: 20px;
      background: var(--card-bg);
      padding: 20px 30px;
      border-radius: 15px;
      border-left: 5px solid var(--accent-blue);
    }
    .icon-box {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .grayscale-image {
      filter: grayscale(0.5) contrast(1.1);
      transition: filter 0.5s ease;
    }
    .grayscale-image:hover {
      filter: grayscale(0);
    }
  `]
})
export class AboutComponent { }
