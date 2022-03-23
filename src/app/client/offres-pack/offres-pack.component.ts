import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offres-pack',
  templateUrl: './offres-pack.component.html',
  styleUrls: ['./offres-pack.component.css']
})
export class OffresPackComponent implements OnInit {

  route:any;
  constructor(private router: Router) { 
  if(this.router.url === '/offres'){
  		this.route="welcomeOffres";
  	}
  	if(this.router.url === '/domicilate/offres'){
  		this.route="homeOffres";
  	}
  	}

  ngOnInit(): void {
  }

}
