import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public apiUrl: string = ''
  public envName: string =''

  constructor() { }
}
