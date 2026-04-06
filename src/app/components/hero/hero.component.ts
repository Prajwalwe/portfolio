import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
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
