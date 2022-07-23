import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private _http:HttpClient) { }

  GetAllProperties()
  {
    return this._http.get('data/properties.json');
  }
}
