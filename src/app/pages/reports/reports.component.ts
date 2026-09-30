import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, DataCardComponent],
  template: `
    <div class="page-container">
      <div class="header-container">
        <h2>Housing Market Regression</h2>
        <span class="badge">Incremental Static Regeneration (ISR)</span>
      </div>

      <p class="description">
        This report is statically generated and cached by the CDN. When the cache expires, the CDN serves the stale version while regenerating the page in the background (stale-while-revalidate).
      </p>

      <div class="report-content" *ngIf="reportData">
        <div class="grid">
          <app-data-card title="Predicted Trend" [value]="reportData.predictedTrend"></app-data-card>
          <app-data-card title="Confidence Score" [value]="reportData.confidenceScore + '%'"></app-data-card>
        </div>
        
        <div class="generation-info">
          <p><strong>Page Generated At:</strong> {{ reportData.lastUpdated | date:'medium' }}</p>
          <p class="note">Refresh the page to see how the CDN caching behavior keeps this timestamp static until the cache expires, while regenerating it behind the scenes.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .header-container { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    h2 { color: #fff; margin: 0; }
    .description { color: #a0aec0; margin-bottom: 2rem; line-height: 1.6; }
    .badge { background: #9f7aea; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.875rem; font-weight: 600; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem; }
    .generation-info { background: rgba(159, 122, 234, 0.1); border: 1px solid rgba(159, 122, 234, 0.3); padding: 1.5rem; border-radius: 8px; color: #cbd5e0; }
    .note { font-size: 0.875rem; color: #a0aec0; margin-top: 0.5rem; font-style: italic; }
  `]
})
export class ReportsComponent implements OnInit {
  private dataService = inject(DataService);
  reportData: any;

  ngOnInit() {
    this.dataService.getHousingReport().subscribe(data => {
      this.reportData = data;
    });
  }
}
