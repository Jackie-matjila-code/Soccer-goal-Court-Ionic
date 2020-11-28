import { LoginService } from './../../services/login.service';
import { AlertController } from '@ionic/angular';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
    
  count = 0;
  counte = 0;
  teams = [];

  countYellowTeamB = 0;

  countYellowTeamA = 0;

  countRedTeamB = 0;

  countRedTeamA = 0;

  countOffTeamA = 0;

  countOffTeamB = 0;

  constructor(private service:HomeService, public alertController: AlertController, private servic:LoginService) {
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

  goCounter(){
    this.service.counter();
  //  console.log("hi");
  // this.count = this.count + 1;
  this.count=this.service.count;
 }
 goCounta(){
   this.service.counta();
  //  console.log("hi");
  // this.counte = this.counte + 1;
  this.counte = this.service.counte;
  }

  async goYellow(){

    // this.countYellowTeamA = this.countYellowTeamA + 1;
  
      this.service.yellowTeamA();
      this.countYellowTeamA = this.service.countYellowTeamA;
    // console.log("Orlando Pirates has " + this.countYellowTeamA + " Yellow Cards");
    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Yellow Card Orlando',
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
    //this.countRedTeamA = this.countRedTeamA + 1;
    this.service.redTeamA();
    this.countRedTeamA = this.service.countRedTeamA;
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
    }
   
  }
  goOffTeamA(){
    this.service.offTeamA();
    this.countOffTeamA = this.service.countOffTeamA;
 }

 goOffTeamB(){
   this.service.offTeamB();
   this.countOffTeamB = this.service.countOffTeamB;
 }

}
