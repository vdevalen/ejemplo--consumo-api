import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumo-api-ng';
  public personas : Array<any> =[]

  constructor(
    private PersonaService:PersonaService
  ){
      this.PersonaService.getPersonas().subscribe((resp:any) =>{
        console.log(resp);
        this.personas = resp
      })
  }


}
