import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private _http: HttpClient) {}
  /*Modify data using pipes from one form to other */
  GetAllProperties() {
    /*Pipe method is provided by Observable
    Map method is used to map one object to another object */
    return this._http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray: Array<any> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            console.log(id);
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
