import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 /* items = ["Nun","NUn1","Nun2","Nun3","Nun4","Nun5"]; */

  items = [
    { name : "Nun", tel  : "0877481760", avatar : "1.jpg"},
    { name : "Nun1", tel : "0877481760", avatar : "2.jpg"},
    { name : "Nun2", tel : "0877481760", avatar : "3.jpg"},
    { name : "Nun3", tel : "0877481760", avatar : "4.jpg"},
    { name : "Nun4", tel : "0877481760", avatar : "5.jpg"}
  ];
itemSelected(item : string){
  console.log("Selected Item", item);
}
  constructor(public navCtrl: NavController) {

  }

}
