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
      padding: 1.25rem 3rem;
      background: rgba(9, 9, 11, 0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    }
    .logo a {
      font-family: 'Outfit', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: #fff;
      text-decoration: none;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo a::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: var(--gradient-primary);
      border-radius: 6px;
      box-shadow: 0 0 15px rgba(59,130,246,0.5);
    }
    nav ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    nav a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      font-size: 0.95rem;
      padding: 0.5rem 0;
      position: relative;
    }
    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
      border-radius: 2px;
    }
    nav a:hover {
      color: #fff;
    }
    nav a.active {
      color: #fff;
      font-weight: 600;
    }
    nav a.active::after {
      width: 100%;
    }
  `]
})
export class HeaderComponent {}
