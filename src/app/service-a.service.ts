import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {

  constructor() { }

  methodA(): string {
    return 'Method A';
  }
}
