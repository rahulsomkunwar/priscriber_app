import { Component } from '@angular/core';
import { Common, ItemDetailsPage, ListPage } from '../page'
import { NavController, AlertController } from 'ionic-angular'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

     login = {
       username:'',
       password:'',
     };
     common: Common;
     subTitleMessage:string;

  constructor(private nav:NavController,private alert:AlertController) {
this.common = new Common();
  }

  onLogin(){
if(this.login.username==this.common.username && this.login.password==this.common.password){
  console.log("Validation success");
  this.nav.push(ListPage);
  
}else{
  console.log("Validation Failed");
if(this.login.username=='' && this.login.password=='')
  this.subTitleMessage = 'Please enter Username , Password';
else
  this.subTitleMessage = 'Username or Password Is Wrong';
  


    let alert = this.alert.create({
      title: 'Alert',
      subTitle: this.subTitleMessage,
      buttons: ['OK']
    });
    alert.present();
}


  }
}
