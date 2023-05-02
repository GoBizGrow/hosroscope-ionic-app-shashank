import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { type } from 'os';

 

@Component({
  selector: 'app-horoscope-details',
  templateUrl: './horoscope-details.page.html',
  styleUrls: ['./horoscope-details.page.scss'],
})
export class HoroscopeDetailsPage implements OnInit {
 public sign = '';
  public daily= {
       Name:'',
       Today:'',
       career:'',
       color:'',
       finance:'',
       health_and_wellness:'',
       love_and_relationships:'',
       numbers:'',
       personal_growth:'',
       social_life:'',
       todays_affirmation:''
      };
  public monthly= {
        Name:'',
        Month:'',
        Today:'',
        career:'',
        color:'',
        finance:'',
        health_and_wellness:'',
        love_and_relationships:'',
        numbers:'',
        personal_growth:'',
        todays_affirmation:''
       };
       public quarterly= {
        Name:'',
        Month:'',
        Today:'',
        career:'',
        color:'',
        finance:'',
        health_and_wellness:'',
        love_and_relationships:'',
        numbers:'',
        personal_growth:'',
        social_life:'',
        todays_affirmation:'',
        quarter:''
       };       
       
       public yearly= {
        Name:'',
        Today:'',
        color:'',
        numbers:'',
       }; 
 activeTab="daily";
  constructor(
    private route: ActivatedRoute,
    private storage:StorageService
    ) { }

  
  ngOnInit() {
    console.log("aaaaaaaaaaaaa");
    this.route.paramMap.subscribe(params => {
      this.sign=params.get('sign')!;
      this.loadData(params.get('sign')!)
     });
  }
async loadData(sign: string){
  var dailyData= JSON.parse((await this.storage.getValue('daily')).value!);
  var monthlyData= JSON.parse((await this.storage.getValue('monthly')).value!);
  var quarterlyData= JSON.parse((await this.storage.getValue('quarterly')).value!);
  var yearlyData= JSON.parse((await this.storage.getValue('yearly')).value!);

  this.GetDataFromArray(dailyData,'daily');
  this.GetDataFromArray(monthlyData,'monthly');
  this.GetDataFromArray(quarterlyData,'quarterly');
  this.GetDataFromArray(yearlyData,'yearly');
 
 
  }

 updateTab(tab:string){
 this.activeTab=tab;
 }
 GetDataFromArray(data : any, type:string){
    data.forEach((obj: any) => {
    if(obj.Name==this.sign && type=='daily'){
      this.daily= {
        Name:obj.Name,
        Today:obj.Today,
        career:obj.career,
        color:obj.color,
        finance:obj.finance,
        health_and_wellness:obj.health_and_wellness,
        love_and_relationships:obj.love_and_relationships,
        numbers:obj.numbers,
        personal_growth:obj.personal_growth,
        social_life:obj.social_life,
        todays_affirmation:obj.todays_affirmation,
       };
    }

    if(obj.Name==this.sign && type=='monthly'){
      console.log(obj);
      this.monthly= {
        Name:obj.Name,
        Month:obj.Month,
        Today:obj.Today,
        career:obj.career,
        color:obj.color,
        finance:obj.finance,
        health_and_wellness:obj.health_and_wellness,
        love_and_relationships:obj.love_and_relationships,
        numbers:obj.numbers,
        personal_growth:obj.personal_growth,
        todays_affirmation:obj.todays_affirmation,
       }
    }

    if(obj.Name==this.sign && type=='quarterly'){
      this.quarterly= {
        Name:obj.Name,
        Month:obj.month,
        Today:obj.Today,
        career:obj.career,
        color:obj.color,
        finance:obj.finance,
        health_and_wellness:obj.health_and_wellness,
        love_and_relationships:obj.love_and_relationships,
        numbers:obj.numbers,
        personal_growth:obj.personal_growth,
        todays_affirmation:obj.todays_affirmation,
        social_life:obj.social_life,
        quarter: obj.Quarter
       }
    }
    if(obj.Name==this.sign && type=='yearly'){
      this.yearly= {
        Name:obj.Name,
        Today:obj.Today,
        color:obj.color,
        numbers:obj.numbers,
       };

    }
   }); 
  }
}
