import { Component } from '@angular/core';
import { FacadeServiceService } from './facade-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-facade';
  operationResult:string | undefined;
  
  /**
   *
   */
  constructor(
    private facadeService:FacadeServiceService
  ) {
   
    this.operationResult = this.facadeService.simplifiedOperation();    
  }
  
}
