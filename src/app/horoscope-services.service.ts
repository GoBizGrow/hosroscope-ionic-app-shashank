import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeServicesService {
  baseUrl = 'https://lotteryresults-app-expert-work-8073.nodechef.com/horoscopes/';
   constructor(
    public http: HttpClient,
    private httpService: HttpService,

    ) {
  }

  getSignDaily(): Observable<any> {
    return this.httpService.horoscopePost(this.baseUrl+'daily',[]);
  }
   getSignQuarterly(): Observable<any> {
    return this.httpService.horoscopePost(this.baseUrl+'quarterly',[]);
   }
   getSignMonthly(): Observable<any> {
    return this.httpService.horoscopePost(this.baseUrl+'monthly',[]);
   }
   getSignYearly(): Observable<any> {
    return this.httpService.horoscopePost(this.baseUrl+'yearly',[]);
   }
   
}
