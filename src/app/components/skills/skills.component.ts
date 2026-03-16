import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section-padding bg-dark-secondary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 mb-5 mb-lg-0 animate-up">
            <h5 class="text-accent-green mb-3 fw-bold">MY EXPERTISE</h5>
            <h2 class="display-5 mb-4 fw-bold">Technical <span class="text-accent-blue">Proficiency</span></h2>
            <p class="text-muted pb-3">
              I specialize in full-stack development with a deep focus on 
              <strong>Angular</strong> and <strong>.NET</strong>. 
              My education at Acharya Institute of Technology has provided me with
              a strong foundation in Computer Science principles and Information Science.
            </p>
            <div class="d-flex flex-column gap-3">
               <div class="skill-item">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="fw-bold">Frontend (Angular 19)</span>
                    <span class="text-accent-blue">90%</span>
                  </div>
                  <div class="progress" style="height: 6px; background: rgba(255,255,255,0.05)">
                    <div class="progress-bar" style="width: 90%; background: var(--accent-blue)"></div>
                  </div>
               </div>
               <div class="skill-item">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="fw-bold">Backend (.NET 8 / Web API)</span>
                    <span class="text-accent-green">85%</span>
                  </div>
                  <div class="progress" style="height: 6px; background: rgba(255,255,255,0.05)">
                    <div class="progress-bar" style="width: 85%; background: var(--accent-green)"></div>
                  </div>
               </div>
               <div class="skill-item">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="fw-bold">Database (SQL Server / MySQL)</span>
                    <span class="text-accent-blue">80%</span>
                  </div>
                  <div class="progress" style="height: 6px; background: rgba(255,255,255,0.05)">
                    <div class="progress-bar" style="width: 80%; background: var(--accent-blue)"></div>
                  </div>
               </div>
            </div>
          </div>
          
          <div class="col-lg-7 ps-lg-5 animate-up" style="animation-delay: 0.2s">
            <div class="row g-4">
              <div class="col-6 col-sm-4" *ngFor="let s of skillBadges">
                <div class="skill-badge-card text-center p-4">
                  <div class="skill-icon-wrap mb-3" [style.color]="s.color">
                    <i [className]="'bi ' + s.icon"></i>
                  </div>
                  <h6 class="mb-0 fw-bold">{{ s.name }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-badge-card {
      background: var(--card-bg);
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
    }
    .skill-badge-card:hover {
      border-color: var(--accent-green);
      transform: scale(1.05);
      background: var(--hover-bg);
    }
    .skill-icon-wrap {
      font-size: 2.5rem;
    }
  `]
})
export class SkillsComponent {
  skillBadges = [
    { name: 'Java', icon: 'bi-cup-hot-fill', color: '#f89820' },
    { name: 'Python', icon: 'bi-filetype-py', color: '#3776ab' },
    { name: 'Azure', icon: 'bi-cloud-check-fill', color: '#0089d6' },
    { name: 'C#', icon: 'bi-hash', color: '#239120' },
    { name: 'TypeScript', icon: 'bi-filetype-ts', color: '#3178c6' },
    { name: 'Git', icon: 'bi-git', color: '#f05032' }
  ];
}
