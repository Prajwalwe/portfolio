import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section-padding">
      <div class="container">
        <div class="text-center mb-5 pb-3">
          <h5 class="text-accent-blue fw-bold">PORTFOLIO</h5>
          <h2 class="display-5 fw-bold">Recent <span class="text-accent-green">Projects</span></h2>
          <div class="mx-auto" style="width: 80px; height: 4px; background: var(--accent-blue); border-radius: 2px;"></div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 animate-up" *ngFor="let p of projects; let i = index" [style.animation-delay]="i * 0.1 + 's'">
            <div class="project-card h-100 p-4">
              <div class="project-icon mb-4" [style.background-color]="p.color + '22'" [style.color]="p.color">
                <i [className]="'bi ' + p.icon"></i>
              </div>
              <h4 class="fw-bold mb-3">{{ p.title }}</h4>
              <p class="text-muted mb-4 small">{{ p.description }}</p>
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span class="badge rounded-pill bg-dark border border-secondary text-light px-2" *ngFor="let t of p.tech">{{ t }}</span>
              </div>
              <a [href]="p.link" target="_blank" class="mt-auto text-accent-blue fw-bold d-flex align-items-center gap-2 view-project">
                View Details <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .project-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
    }
    .view-project:hover i {
      transform: translateX(5px);
      transition: transform 0.3s ease;
    }
    .badge {
      font-weight: 500;
      font-size: 0.75rem;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Meme Platform',
      description: 'A full-stack social platform for meme enthusiasts with .NET 8 Web API, Angular frontend, and Azure Blob Storage for media hosting.',
      tech: ['.NET 8', 'Angular 19', 'Azure', 'SQL Server'],
      link: 'https://github.com/prajwalwe',
      icon: 'bi-image-fill',
      color: '#00d2ff'
    },
    {
      title: 'Blood Bridge',
      description: 'Location-based connectivity platform connecting blood donors with recipients in real-time with integrated WhatsApp notifications.',
      tech: ['Angular', 'Node.js', 'Maps API', 'WhatsApp API'],
      link: 'https://github.com/prajwalwe',
      icon: 'bi-droplet-fill',
      color: '#ff4b2b'
    },
    {
      title: "Doctor's Assistant",
      description: 'AI-driven medical support system featuring diagnostic assistance and an intelligent chatbot for preliminary patient guidance.',
      tech: ['Python', 'AI/ML', 'Angular', 'FastAPI'],
      link: 'https://github.com/prajwalwe',
      icon: 'bi-capsule',
      color: '#00ff88'
    }
  ];
}
