import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';
@Component({
  selector: 'app-entreprise-profile',
  templateUrl: './entreprise-profile.component.html',
  styleUrls: ['./entreprise-profile.component.css']
})
export class EntrepriseProfileComponent implements OnInit {
  idEnt:any;
  entreprise:any;
  constructor(private router:Router, private getData:GetDataService, private acroute: ActivatedRoute) { }

  ngOnInit(): void {
  this.idEnt = this.acroute.snapshot.paramMap.get('idEnt');
  this.entreprise=this.getData.getEntrepriseInformations(this.idEnt);
  }
  ngAfterViewInit(): void {

    $( document ).ready(function() {
   var myId;
  $('.menu-list').on( "click", function() {
      $('.active-item').removeClass('active-item');
      $(this).addClass('active-item');

      myId = $(this).attr("id");
      if(myId=="generalInfo"){
        $(".adressInfo").hide();
        $(".offreInfo").hide();
        $(".generalInfo").show();
      }else if(myId=="adressInfo"){
        $(".offreInfo").hide();
        $(".generalInfo").hide();
        $(".adressInfo").show();      
      }else if(myId=="offreInfo"){
        $(".generalInfo").hide();
        $(".adressInfo").hide();
        $(".offreInfo").show();
      }
      
  });
  $('.showHide').on( "click", function() {
  
    $('#updateAdress').toggle(700);
   });
   $('.showHideOffre').on( "click", function() {
  
    $('#updateOffre').toggle(700);
   });
  });

  }

  saveGeneralInformation(){
  }
  saveAdressInformation(){

  }
  saveTunidomAdress(){

  }
  saveOffer(){
  
  }
}
