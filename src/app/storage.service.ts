import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor( 
     ) { }

   setValue = async (key: any,value: any) => {
      await Preferences.set({
        key: key,
        value: value,
      });
    };
   getValue = async (key: any) => {
      return await Preferences.get({ key: key });
   };
 
   removeKey = async (key: any) => {
    await Preferences.remove({ key: key});
  };


  


 
}