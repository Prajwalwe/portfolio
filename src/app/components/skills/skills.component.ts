import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillBadges = [
    { name: 'Java', icon: 'bi-cup-hot-fill', color: '#f89820' },
    { name: 'Python', icon: 'bi-filetype-py', color: '#3776ab' },
    { name: 'Azure', icon: 'bi-cloud-check-fill', color: '#0089d6' },
    { name: 'C#', icon: 'bi-hash', color: '#239120' },
    { name: 'TypeScript', icon: 'bi bi-typescript', color: '#3178c6' },
    { name: 'Git', icon: 'bi-git', color: '#f05032' }
  ];
}
