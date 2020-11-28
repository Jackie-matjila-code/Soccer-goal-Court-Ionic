import { LoginService } from './../../services/login.service';
import { HomeService } from './../../services/home.service';
import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  login = {} as Login;
  teams = [];
  
  teamA = "";
  teamB = "";
   count = 0;
   counte = 0;
   countYellowTeamB = 0;
   countYellowTeamA = 0;
   countRedTeamB = 0;
   countRedTeamA = 0;
   countOffTeamA = 0;
   countOffTeamB = 0;

  constructor(private router: Router, private service: HomeService, public alertController: AlertController, private servic:LoginService) {
  this.count=this.service.count;
  this.counte = this.service.counte;
  this.countYellowTeamA = this.service.countYellowTeamA;
  this.countYellowTeamB = this.service.countYellowTeamB;
  this.countRedTeamA = this.service.countRedTeamA;
  this.countRedTeamB = this.service.countRedTeamB;
  this.countOffTeamA = this.service.countOffTeamA;
  this.countOffTeamB = this.service.countOffTeamB;
  
   }

   ngOnInit() {
    this.teams = this.servic.getTeam();
  }

   goStats(){
    this.router.navigateByUrl('chats');
   }

    goCounter(){
      this.service.counter();
    this.count=this.service.count;
   }
   goCounta(){
     this.service.counta();
    this.counte = this.service.counte;
    }

    goCounterMinus(){
     this.service.counterMinus();
    this.count=this.service.count;
    }
    goCountaMini(){
      this.service.countaMini();
     this.counte = this.service.counte;
     }
     async goYellow(){

      
    
        this.service.yellowTeamA();
        this.countYellowTeamA = this.service.countYellowTeamA;
      
      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Yellow Card Orlando Pirates',
          // subHeader: 'Subtitle',
          // message: 'This is an alert message.',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    
    async goYellows(){
  
      this.service.yellowTeamB();
      this.countYellowTeamB = this.service.countYellowTeamB;
     // this.countYellowTeamB = this.countYellowTeamB + 1;
      // console.log("Kaizer Chiefs has " + this.countYellowTeamB + " Yellow Cards");
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Yellow Card Kaizer Chiefs',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async goRed(){
      
      this.service.redTeamA();
      this.countRedTeamA = this.service.countRedTeamA;
      console.log("Orlando Pirates has " + this.countRedTeamA + " Red Cards");
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Red Card Orlando Pirates',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async goReds(){
      if(this.countYellowTeamA >= 2 || this.countYellowTeamB >= 2){
           console.log("Two yellow == Red");
      }else{
        this.service.redTeamB();
        this.countRedTeamB = this.service.countRedTeamB;
        console.log("Kaizer Chiefs has " + this.countRedTeamB + " Red Cards");
      }
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Red Card Kaizer Chiefs',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
     
    }

    async goOffTeamA(){
       this.service.offTeamA();
       this.countOffTeamA = this.service.countOffTeamA;
       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Offside Orlando Pirates',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async goOffTeamB(){
      this.service.offTeamB();
      this.countOffTeamB = this.service.countOffTeamB;
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Offside Kaizer Chiefs',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

   async reset(){

      if(this.count == this.counte){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'It is a draw',
          // subHeader: 'Subtitle',
          // message: 'This is an alert message.',
          buttons: ['OK']
        });
    
        await alert.present();
    }else if(this.count > this.counte){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Team A won',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Team B won',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

      this.service.resets();
      this.count=this.service.count;
      this.counte = this.service.counte;
      this.countYellowTeamA = this.service.countYellowTeamA;
      this.countYellowTeamB = this.service.countYellowTeamB;
      this.countRedTeamA = this.service.countRedTeamA;
      this.countRedTeamB = this.service.countRedTeamB;
      this.countOffTeamA = this.service.countOffTeamA;
      this.countOffTeamB = this.service.countOffTeamB;
    }
    goNext(){
      this.servic.goNex(this.login);
      console.log('Team Names', this.servic.getTeam());
    }
}
