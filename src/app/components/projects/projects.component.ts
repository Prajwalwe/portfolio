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
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Meme Platform',
      description: 'A full-stack social platform for meme enthusiasts with .NET 8 Web API, Angular frontend, and Azure Blob Storage for media hosting.',
      tech: ['Angular 19', '.NET 8', 'Azure'],
      link: 'https://github.com/prajwalwe',
      icon: 'bi-image-fill',
      color: '#00d2ff'
    },
    {
      title: "Doctor's Assistant",
      description: 'AI-driven medical support system featuring diagnostic assistance and an intelligent chatbot for preliminary patient guidance.',
      tech: ['Angular', '.NET 8', 'Azure', 'Google AI Studio API'],
      link: 'https://github.com/prajwalwe',
      icon: 'bi-capsule',
      color: '#00ff88'
    },
    {
      title: 'Blood Bridge',
      description: 'Location-based connectivity platform connecting blood donors with recipients in real-time with integrated WhatsApp notifications.',
      tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
      link: 'https://prajwalwe.github.io/BloodBridge/',
      icon: 'bi-droplet-fill',
      color: '#ff4b2b'
    },

  ];
}
