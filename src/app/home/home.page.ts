import { Component, OnInit } from '@angular/core';
import { HoroscopeServicesService } from '../horoscope-services.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public signs: any[] = [];
  public daily: any[] = [];
  public monthly: any[] = [];
  public quarterly: any[] = [];
   public yearly: any[] = [];
  isLoading=true;
  constructor(      
     private HoroscopeServices: HoroscopeServicesService,
     private storage:StorageService
    ) {
   this.signs=['Virgo','Scropio','Cancer','Taurus','Leo','Aries','Sagittarius','Gemini','Pisces','Aquarius','Capricorn','Libra'];
  }

  ngOnInit() {
  this.loadData();
  }

  async loadData() {

    this.isLoading=true;
    this.HoroscopeServices.getSignDaily().subscribe((result: any) => {
     //console.log(result.data)
     this.daily=result.data;
     this.storage.setValue('daily',JSON.stringify(result.data));
     this.isLoading=false;
    },
     (error: any)=>{  console.log(error)  ; this.isLoading=false;} )

     this.isLoading=true;
     this.HoroscopeServices.getSignQuarterly().subscribe((result: any) => {
      //console.log(result.data)
      this.quarterly=result.data;
      this.storage.setValue('quarterly',JSON.stringify(result.data));

      this.isLoading=false;
     },
      (error: any)=>{  console.log(error)  ; this.isLoading=false;} )
 
      this.isLoading=true;
      this.HoroscopeServices.getSignMonthly().subscribe((result: any) => {
       //console.log(result.data)
       this.monthly=result.data;
       this.storage.setValue('monthly',JSON.stringify(result.data));

       this.isLoading=false;
      },
       (error: any)=>{  console.log(error)  ; this.isLoading=false;} )
  
       this.isLoading=true;
       this.HoroscopeServices.getSignYearly().subscribe((result: any) => {
        //console.log(result.data)
        this.yearly=result.data;
        this.storage.setValue('yearly',JSON.stringify(result.data));
        this.isLoading=false;
       },
        (error: any)=>{  console.log(error)  ; this.isLoading=false;} ) 
  }
}

 
