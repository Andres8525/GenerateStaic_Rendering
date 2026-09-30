import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-live-prices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="header-container">
        <h2>Live Gas Prices</h2>
        <span class="badge">Server-Side Rendered (SSR)</span>
      </div>
      
      <p class="description">This data is fetched in real-time by the Node.js server before the HTML is sent to the client. This ensures the latest prices are available to search engines.</p>

      <div class="table-container" *ngIf="priceData">
        <table class="data-table">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Current Price</th>
              <th>Trend</th>
              <th>Last Updated (Server Time)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Natural Gas</td>
              <td class="price">{{ priceData.price }} {{ priceData.currency }}</td>
              <td [ngClass]="priceData.trend === 'up' ? 'trend-up' : 'trend-down'">
                {{ priceData.trend === 'up' ? '▲' : '▼' }} {{ priceData.trend }}
              </td>
              <td class="timestamp">{{ priceData.timestamp | date:'mediumTime' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .header-container { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    h2 { color: #fff; margin: 0; }
    .description { color: #a0aec0; margin-bottom: 2rem; line-height: 1.6; }
    .badge { background: #48bb78; color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.875rem; font-weight: 600; }
    
    .table-container { overflow-x: auto; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
    .data-table { width: 100%; border-collapse: collapse; text-align: left; }
    .data-table th, .data-table td { padding: 1rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .data-table th { background: rgba(0,0,0,0.2); color: #a0aec0; font-weight: 600; text-transform: uppercase; font-size: 0.875rem; }
    .data-table td { color: #fff; }
    .data-table tr:last-child td { border-bottom: none; }
    
    .price { font-weight: 700; font-size: 1.125rem; }
    .trend-up { color: #48bb78; font-weight: 600; }
    .trend-down { color: #f56565; font-weight: 600; }
    .timestamp { color: #718096; font-family: monospace; }
  `]
})
export class LivePricesComponent implements OnInit {
  private dataService = inject(DataService);
  priceData: any;

  ngOnInit() {
    // Fetched on server and hydrated on client automatically
    this.dataService.getLiveGasPrices().subscribe(data => {
      this.priceData = data;
    });
  }
}
