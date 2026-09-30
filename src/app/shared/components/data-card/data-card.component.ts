import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="data-card">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-value">{{ value }}</div>
      <div class="card-subtitle" *ngIf="subtitle">{{ subtitle }}</div>
    </div>
  `,
  styles: [`
    .data-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      backdrop-filter: blur(10px);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .data-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .card-title {
      font-size: 0.875rem;
      color: #a0aec0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 0.5rem 0;
    }
    .card-value {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.25rem;
    }
    .card-subtitle {
      font-size: 0.875rem;
      color: #718096;
    }
  `]
})
export class DataCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() subtitle?: string;
}
