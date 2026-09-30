import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getTitanicData(): Observable<any> {
    // CSR: Only fetched in browser if we want, or fetched in component
    return of([
      { class: '1st', survived: 62.9 },
      { class: '2nd', survived: 47.3 },
      { class: '3rd', survived: 24.2 }
    ]).pipe(delay(500)); // Simulate network latency
  }

  getLiveGasPrices(): Observable<any> {
    // SSR: Fetched on server dynamically
    return of({
      price: (Math.random() * 0.5 + 3.0).toFixed(2),
      currency: 'USD/Gal',
      trend: Math.random() > 0.5 ? 'up' : 'down',
      timestamp: new Date().toISOString()
    }).pipe(delay(200));
  }

  getHousingReport(): Observable<any> {
    // ISR: Fetched periodically on the server and cached
    return of({
      predictedTrend: 'Stable',
      confidenceScore: 85,
      lastUpdated: new Date().toISOString()
    }).pipe(delay(300));
  }
}
