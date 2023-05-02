import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  horoscopePost(url: string, data: any ){
       var headers = new HttpHeaders();
       headers = headers.set("key", "ajdjhdj4448488hhh3h3");

       const options = { headers: headers};
       
      return this.http.post(url,data, options);
  }

  googlePlacesDetails(url: string, data: any ){
     const headers = new HttpHeaders();
 
     const options = { headers: headers,changeOrigin: true};
     return this.http.post(url,[], options);
    }

}