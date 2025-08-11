import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then((config) => {
        this.config = config;
        console.log('✅ App Config Loaded:', config);
      })
      .catch((err) => {
        console.error('❌ Failed to load config:', err);
        this.config = {};
      });
  }

  getConfig() {
    return this.config;
  }
}
