import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-welcome-wrapper',
  templateUrl: './welcome-wrapper.component.html',
  styleUrls: ['./welcome-wrapper.component.css']
})
export class WelcomeWrapperComponent implements OnInit {

  route:any;
  constructor(private router: Router, private auth:AuthentificationService ) { 
  let isLoggedIn=this.auth.isLoggedIn();
  if(isLoggedIn){
    this.router.navigate(['/letters']);
  }else{
  if(this.router.url === '/'){
  		this.route="home";
  	}
  	if(this.router.url === '/apropos'){
  		this.route="apropos";
  	}
  	if(this.router.url === '/services'){
  		this.route="services";
  	}
  	if(this.router.url === '/offres'){
  		this.route="offres";
  	}
  	if(this.router.url === '/register/domisimple' || this.router.url === '/register/domipack' || this.router.url === '/register/scanpack'){
  		this.route="register";
  	}
  	if(this.router.url === '/contact'){
  		this.route="contact";
  	}
    }
  	}

  ngOnInit(): void {
  
  }

}
