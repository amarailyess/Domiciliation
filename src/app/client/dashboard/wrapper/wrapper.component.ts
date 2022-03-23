import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
	route:any;
  choice:string;
  entreprises=[];
  constructor(private router: Router, private getData:GetDataService, private acroute: ActivatedRoute) {
    
    
    if(this.router.url.startsWith("/letters")){
      this.route="letter";
    }
  	
  	if(this.router.url === '/documents'){
  		this.route="documents";
  	}
  	if(this.router.url === '/domicilate/offres'){
  		this.route="domicilate";
  	}
    if(this.router.url.startsWith("/domicilate/register")){
      this.route="domicilate";
    }
  	if(this.router.url === '/personal-profile'){
  		this.route="personal-profile";
  	}
  	if(this.router.url.startsWith("/entreprise-profile")){
  		this.route="entreprise-profile";
  	}
  	if(this.router.url === '/statutory'){
  		this.route="statutory";
  	}
   }

  ngOnInit(): void {

  let idCl=localStorage.getItem("tunidomHomeToken");
  this.entreprises=this.getData.getEntreprises(idCl);
  let thisClass=this;
  let ce=localStorage.getItem("currentEntreprise");
  if(!ce){
  if(this.entreprises.length>1){
    
      $(document).ready(function(){

        var mymodel=$("#myModal");
        mymodel.css("display","block");  

        $(".containerWrap").click(function() { 
          var id=$(this).attr("id");
         thisClass.choice='ok';
         localStorage.setItem("currentEntreprise",id);
          mymodel.css("display","none");
        });

      });

  }else{
    this.choice='ok';
    localStorage.setItem("currentEntreprise",this.entreprises[0].id);
  }
  }else{
    this.choice='ok';
  }
  
      
    
  }

}
