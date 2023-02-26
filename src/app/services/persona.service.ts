import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  url = '/api/games?category=shooter'
  constructor(
    private http:HttpClient
  ) {
    console.log("servicio funcionando")
  }
  getPersonas(){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')

    return this.http.get(this.url,{
      headers:header
    })
    }

}
