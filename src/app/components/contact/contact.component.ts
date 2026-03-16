import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="contact-wrapper bg-dark-secondary rounded-4 overflow-hidden border border-secondary border-opacity-10">
              <div class="row g-0">
                <div class="col-md-5 bg-accent-blue-gradient p-5 text-white">
                  <h3 class="fw-bold mb-4">Contact Info</h3>
                  <div class="d-flex align-items-center mb-4">
                    <div class="contact-icon-box me-3">
                      <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Email Me</h6>
                      <a href="mailto:prajwalhpp1&#64;gmail.com" class="text-white opacity-75">prajwalhpp1&#64;gmail.com</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="contact-icon-box me-3">
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Call Me</h6>
                      <a href="tel:+919482149855" class="text-white opacity-75">+91 9482149855</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-5">
                    <div class="contact-icon-box me-3">
                      <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Location</h6>
                      <p class="mb-0 opacity-75">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <h5 class="fw-bold mb-3">Follow Me</h5>
                  <div class="d-flex gap-3">
                    <a href="https://linkedin.com/in/prajwalhpp" target="_blank" class="social-btn"><i class="bi bi-linkedin"></i></a>
                    <a href="https://github.com/prajwalwe" target="_blank" class="social-btn"><i class="bi bi-github"></i></a>
                    <a href="mailto:prajwalhpp1&#64;gmail.com" class="social-btn"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                
                <div class="col-md-7 p-5">
                  <h3 class="fw-bold mb-4">Send a Message</h3>
                  <form (submit)="$event.preventDefault()">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label class="form-label small text-muted">NAME</label>
                        <input type="text" class="form-control custom-input" placeholder="Your Name">
                      </div>
                      <div class="col-md-6">
                        <label class="form-label small text-muted">EMAIL</label>
                        <input type="email" class="form-control custom-input" placeholder="Your Email">
                      </div>
                      <div class="col-12 mt-4">
                        <label class="form-label small text-muted">MESSAGE</label>
                        <textarea class="form-control custom-input" rows="4" placeholder="How can I help you?"></textarea>
                      </div>
                      <div class="col-12 mt-4">
                        <button type="button" class="btn btn-primary-custom w-100">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-accent-blue-gradient {
      background: linear-gradient(135deg, #00d2ff 0%, #00a8ff 100%);
    }
    .contact-icon-box {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
    .social-btn {
      width: 35px;
      height: 35px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;
    }
    .social-btn:hover {
      background: white;
      color: var(--accent-blue);
      transform: translateY(-3px);
    }
    .custom-input {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 12px;
    }
    .custom-input:focus {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--accent-blue);
      box-shadow: none;
      color: white;
    }
    .form-label {
      letter-spacing: 1px;
    }
  `]
})
export class ContactComponent { }
