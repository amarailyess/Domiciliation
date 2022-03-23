import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-personnal-profile',
  templateUrl: './personnal-profile.component.html',
  styleUrls: ['./personnal-profile.component.css']
})
export class PersonnalProfileComponent implements OnInit {
  idCl:any;
  client:any;
  contactInformationsForm:FormGroup;
  

  constructor( private router:Router, private getData:GetDataService) { 
    
  }
  saveContactInformations(){
    //this.toastr.success("Informations de contact sont bien enrgistrés");
  }

  saveAdress(){

  }

  savePassword(){

  }

  savePayment(){

  }

  ngOnInit(): void {
    this.idCl=localStorage.getItem("tunidomHomeToken");
    this.client=this.getData.getClient(this.idCl);

  }
  ngAfterViewInit(): void {
     $( document ).ready(function() {
   var myId;
  $('.menu-list').on( "click", function() {
      $('.active-item').removeClass('active-item');
      $(this).addClass('active-item');

      myId = $(this).attr("id");
      if(myId=="generalInfo"){
        $(".passwordInfo").hide();
        $(".payementInfo").hide();
        $(".generalInfo").show();
      }else if(myId=="passwordInfo"){
        $(".payementInfo").hide();
        $(".generalInfo").hide();
        $(".passwordInfo").show();      
      }else if(myId=="payementInfo"){
        $(".generalInfo").hide();
        $(".passwordInfo").hide();
        $(".payementInfo").show();
      }
      
  });


  });
  }

   logOut(){
    localStorage.removeItem("tunidomHomeToken");
    localStorage.removeItem("currentEntreprise");
    this.router.navigate(['/login']);
  }
  savePhoto(){
  
  }
  saveContactInformation(){

  }
  saveAdressInformation(){

  }
  savePasswordInformation(){

  }
  savePaymentInformation(){

  }

}
