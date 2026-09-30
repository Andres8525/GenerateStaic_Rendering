import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DataCardComponent],
  template: `
    <div class="page-container">
      <div class="header-container">
        <h2>Titanic Dataset Analysis</h2>
        <span class="badge">Client-Side Rendered (CSR)</span>
      </div>

      <div *ngIf="loading" class="loader-container">
        <div class="spinner"></div>
        <p>Fetching dynamic charts and data...</p>
      </div>

      <div *ngIf="!loading" class="dashboard-grid">
        <app-data-card *ngFor="let item of titanicData" 
          [title]="item.class + ' Class'" 
          [value]="item.survived + '%'" 
          subtitle="Survival Rate">
        </app-data-card>
      </div>

      <div *ngIf="!loading" class="chart-placeholder">
        <div class="chart-mock">
          Interactive Correlation Map will render here (requires heavy JS libraries)
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .header-container { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    h2 { color: #fff; margin: 0; }
    .badge { background: #ed8936; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.875rem; font-weight: 600; }
    .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
    .chart-placeholder { background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.2); border-radius: 12px; padding: 3rem; text-align: center; color: #718096; }
    .chart-mock { font-style: italic; }
    .loader-container { text-align: center; padding: 4rem 0; color: #a0aec0; }
    .spinner {
      width: 40px; height: 40px; margin: 0 auto 1rem auto;
      border: 3px solid rgba(255,255,255,0.1); border-radius: 50%;
      border-top-color: #ed8936; animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class DashboardComponent implements OnInit {
  private dataService = inject(DataService);
  private platformId = inject(PLATFORM_ID);

  titanicData: any[] = [];
  loading = true;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.dataService.getTitanicData().subscribe(data => {
        this.titanicData = data;
        this.loading = false;
      });
    }
  }
}
