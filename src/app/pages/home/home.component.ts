import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DataCardComponent],
  template: `
    <div class="page-container">
      <div class="hero-section">
        <h1 class="gradient-text">Data Science Analytics</h1>
        <p class="subtitle">High-performance rendering architectures in Angular</p>
      </div>
      
      <div class="grid">
        <app-data-card title="Rendering Strategy" value="SSG" subtitle="Static Site Generation"></app-data-card>
        <app-data-card title="Load Time" value="~50ms" subtitle="Prerendered at build time"></app-data-card>
        <app-data-card title="SEO" value="Excellent" subtitle="Full HTML available to crawlers"></app-data-card>
      </div>

      <div class="info-panel">
        <h3>About this Landing Page</h3>
        <p>This page uses <strong>SSG (Static Site Generation)</strong>. The HTML is generated entirely during the build process. It is blazing fast and requires zero server-side processing at runtime.</p>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .hero-section { text-align: center; margin-bottom: 4rem; margin-top: 2rem; }
    .gradient-text {
      font-size: 3.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }
    .subtitle { font-size: 1.25rem; color: #a0aec0; margin-top: 1rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 4rem; }
    .info-panel {
      background: rgba(0, 242, 254, 0.05);
      border-left: 4px solid #00f2fe;
      padding: 1.5rem;
      border-radius: 0 8px 8px 0;
    }
    .info-panel h3 { margin-top: 0; color: #fff; }
    .info-panel p { color: #cbd5e0; line-height: 1.6; margin-bottom: 0; }
  `]
})
export class HomeComponent {}
