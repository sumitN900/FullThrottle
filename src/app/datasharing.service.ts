import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

   private apiurl = "assets/demodata/details.json";
   constructor(private http: HttpClient) { }
   getData() {
      return this.http.get(this.apiurl);
   }
 
}
