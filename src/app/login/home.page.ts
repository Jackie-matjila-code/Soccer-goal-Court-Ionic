import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login = {} as Login;
  teams = [];
  constructor(private router: Router, private servic:LoginService) {
    this.teams = this.servic.getTeam()
  }

  goNext(){
    
      this.servic.goNex(this.login);
      this.router.navigateByUrl('tabs/home');
    
  }
  // goNexte(){
  //   this.servic.goNex();
  // }
}
