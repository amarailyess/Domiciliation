import { Injectable } from '@angular/core';
import { Client } from '../classes/client';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

	clients=[
	    {
	      "id":"1",
	      "firstname":"Mohamed",
	      "lastname":"Amara",
	      "gender":"male",
	      "email":"mohamed@gmail.com",
	      "phone":"22541478",
	      "password":"mohamedamara",
	      "adress":"ibn khouldoun",
	      "city":"Tunis",
	      "country":"Tunisie",
	      "zip":"3260",
	      "photo":"assets/dashboardClient/images/iiii.jpg",
	      "cardNumber":"2154236521458563",
	      "expiration":"12-12-2024",
	      "cardCode":"08521453",
	      "cardType":"MasterCard",
	    },
	    {
	      "id":"2",
	      "firstname":"Khira",
	      "lastname":"Amara",
	      "gender":"female",
	      "email":"khira@gmail.com",
	      "phone":"96521478",
	      "password":"khiraamara",
	      "adress":"Oesres",
	      "city":"Lisbonne",
	      "country":"Portugal",
	      "zip":"32510",
	      "photo":"assets/dashboardClient/images/2.jpg",
	      "cardNumber":"2356147889560125",
	      "expiration":"19-11-2025",
	      "cardCode":"01452369",
	      "cardType":"VisaCard",
	    },
	    {
	      "id":"3",
	      "firstname":"Ayoub",
	      "lastname":"Amara",
	      "gender":"male",
	      "email":"ayoub@gmail.com",
	      "phone":"27413658",
	      "password":"ayoubamara",
	      "adress":"Om somaa souk lahad",
	      "city":"Kebili",
	      "country":"Tunisie",
	      "zip":"4230",
	      "photo":"assets/dashboardClient/images/3.jpg",
	      "cardNumber":"0214125863202147",
	      "expiration":"12-10-2026",
	      "cardCode":"03251459",
	      "cardType":"MasterCard",
	    },
	    {
	      "id":"4",
	      "firstname":"Ilyess",
	      "lastname":"Amara",
	      "gender":"male",
	      "email":"ilyessamara@gmail.com",
	      "phone":"92081406",
	      "password":"ilyessamara",
	      "adress":"Souk Lahad",
	      "city":"Kebili",
	      "country":"Tunisie",
	      "zip":"4212",
	      "photo":"assets/dashboardClient/images/4.jpg",
	      "cardNumber":"025412369852147",
	      "expiration":"20-09-2022",
	      "cardCode":"02581478",
	      "cardType":"VisaCard",
	    },
	    {
	      "id":"5",
	      "firstname":"Dhaw",
	      "lastname":"Gammar",
	      "gender":"male",
	      "email":"dhaw@gmail.com",
	      "phone":"25428298",
	      "password":"dhawgammar",
	      "adress":"Bardo",
	      "city":"Tunis",
	      "country":"Tunisie",
	      "zip":"3687",
	      "photo":"assets/dashboardClient/images/5.jpg",
	      "cardNumber":"3625410258963214",
	      "expiration":"01-02-2021",
	      "cardCode":"09658741",
	      "cardType":"MasterCard",
	    }
	];
  i:number;
  constructor() { }
  
  login(infos:any){
  	let token:any;
    for (this.i = 0; this.i < this.clients.length; this.i++) {
      if(this.clients[this.i].email==infos.email && this.clients[this.i].password==infos.password){
      token=this.clients[this.i];
        return token;
      }
    }
    return false;
  }
  isLoggedIn(){
    let token=localStorage.getItem("tunidomHomeToken");
    if(token){
      return true;
    }else{
      return false;
    }
  }
}
