import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="app-header">
      <div class="logo">
        <a routerLink="/">DataArchitect</a>
      </div>
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home (SSG)</a></li>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard (CSR)</a></li>
          <li><a routerLink="/live-gas-prices" routerLinkActive="active">Live Prices (SSR)</a></li>
          <li><a routerLink="/reports/housing-regression" routerLinkActive="active">Reports (ISR)</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .logo a {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      letter-spacing: -0.5px;
    }
    nav ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    nav a {
      color: #a0aec0;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }
    nav a:hover, nav a.active {
      color: #fff;
    }
  `]
})
export class HeaderComponent {}
