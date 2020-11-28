import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


teams = [];

  constructor() { }
 goNex(login){
   this.teams.push({teamA: login.teamA, teamB:login.teamB});
 }

 getTeam(){
   return this.teams;
 }
}
