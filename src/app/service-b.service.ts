import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }

  methodB(): string {
    return 'Method B';
  }
}
