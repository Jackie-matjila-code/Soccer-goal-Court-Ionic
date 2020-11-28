import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  count = 0;
  counte = 0;
  countMinus;
  countMin;
  countYellow = 0;
  countYellowTeamB = 0;

  countYellowTeamA = 0;

  countRedTeamB = 0;

  countRedTeamA = 0;

  countOffTeamA = 0;

  countOffTeamB = 0;

  constructor() { }

  counter(){
    this.count = this.count + 1;
   }
   counta(){
     this.counte = this.counte + 1;
    }

    counterMinus(){
      if(this.count > 0){
        this.count = this.count - 1;
      }
     
    }
    countaMini(){
      if(this.counte > 0){
        this.counte = this.counte - 1;
      }
      
     }

     yellowTeamA(){
      this.countYellowTeamA = this.countYellowTeamA + 1;
     }


     yellowTeamB(){
      this.countYellowTeamB = this.countYellowTeamB + 1;
     }
     redTeamA(){
      this.countRedTeamA = this.countRedTeamA + 1;
     }
     redTeamB(){
      this.countRedTeamB = this.countRedTeamB + 1;
     }

     offTeamA(){
        this.countOffTeamA = this.countOffTeamA + 1;
     }

     offTeamB(){
      this.countOffTeamB = this.countOffTeamB + 1;
    }

    resets(){

      if(this.count == this.counte){
        console.log("It is a draw")
    }else if(this.count > this.counte){
      console.log("Team A won");
    }else{
      console.log("Team B won");
    }
    
      this.count = 0;
      this.counte = 0;
    
      
      this.countYellowTeamB = 0;
    
      this.countYellowTeamA = 0;
    
      this.countRedTeamB = 0;
    
      this.countRedTeamA = 0;
    
      this.countOffTeamA = 0;
    
      this.countOffTeamB = 0;


    }
}
