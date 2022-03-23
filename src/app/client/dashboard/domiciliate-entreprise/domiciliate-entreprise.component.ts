import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-domiciliate-entreprise',
  templateUrl: './domiciliate-entreprise.component.html',
  styleUrls: ['./domiciliate-entreprise.component.css']
})
export class DomiciliateEntrepriseComponent implements OnInit {
	route:any;
  constructor(private router: Router) { 
  if(this.router.url === '/domicilate/offres'){
  		this.route="offres";
  	}
  	if(this.router.url === '/domicilate/register/domipack' || this.router.url === '/domicilate/register/domisimple' || this.router.url === '/domicilate/register/scanpack'){
  		this.route="register";
  	}
  	}

  ngOnInit(): void {
  }

}
