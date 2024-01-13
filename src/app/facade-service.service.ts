import { Injectable } from '@angular/core';
import { ServiceAService } from './service-a.service';
import { ServiceBService } from './service-b.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeServiceService {

  constructor(
    private serviceA:ServiceAService,
    private serviceB:ServiceBService

  ) {   }

  simplifiedOperation(): string {
    const resultA = this.serviceA.methodA();
    const resultB = this.serviceB.methodB();
    return `${resultA} - ${resultB}`;
  }
}
