import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>&copy; 2026 DataArchitect. All rights reserved. Built with Angular 17+ SSR/SSG/ISR/CSR.</p>
    </footer>
  `,
  styles: [`
    .app-footer {
      text-align: center;
      padding: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #718096;
      font-size: 0.875rem;
      margin-top: auto;
    }
  `]
})
export class FooterComponent {}
