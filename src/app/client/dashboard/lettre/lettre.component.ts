import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import select2 from 'select2';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';
/*import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';*/
@Component({
  selector: 'app-lettre',
  templateUrl: './lettre.component.html',
  styleUrls: ['./lettre.component.css']
})
export class LettreComponent implements OnInit {
  letters=[];
  id:any;
  entreprise:any;
  currentClient:any;
  constructor(private router: Router, private getData:GetDataService, private acroute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
  if(this.router.url === '/letters'){
    this.id = localStorage.getItem("currentEntreprise");
  }else{
    this.id = this.acroute.snapshot.paramMap.get('id');
  }
    this.currentClient=localStorage.getItem("tunidomHomeToken");
    if(this.id=="all"){
      this.letters=this.getData.getAllEntrepriseLetters(this.currentClient);
    }else{
      this.letters=this.getData.getLetters(this.id);
      this.entreprise=this.getData.getEntrepriseInformations(this.id);
    }

}
ngAfterViewInit(): void {
$(document).ready(function(){

var mymodel=$("#myModalLetter");
 
$(".openLetterImage").click(function(){
var idImg=$(this).attr('name');
var id="#"+idImg;
var cl="."+idImg;
var imgsrc = $(id).attr('src');

  $(".modal-contentLetter").attr('src', imgsrc);
  $(cl).removeClass("statusNotok");
  $(cl).addClass("statusOk");
  $("button"+cl+"> i").removeClass("fa-eye-slash");
  $("button"+cl+"> i").addClass("fa-eye");

   mymodel.css("display","block");
  
});
$(".openLetterFile").click(function(){
var idImg=$(this).attr('name');
var cl="."+idImg;
 $(cl).removeClass("statusNotok");
  $(cl).addClass("statusOk");
  $("button"+cl+"> i").removeClass("fa-eye-slash");
  $("button"+cl+"> i").addClass("fa-eye");
});
$(".status").click(function(){

if($(this).hasClass("statusNotok")==true){
$(this).children('.fas').removeClass("fa-eye-slash");
$(this).children('.fas').addClass("fa-eye");
  $(this).removeClass("statusNotok");
  $(this).addClass("statusOk");}
else if($(this).hasClass("statusOk")==true){
$(this).children('.fas').removeClass("fa-eye");
$(this).children('.fas').addClass("fa-eye-slash");
  $(this).removeClass("statusOk");
  $(this).addClass("statusNotok");}
});

$(".close").click(function() { 
 
  mymodel.css("display","none");
});

});
  
}

  openFile(docId:any){
  let fileURL=this.getData.getLetterDocument(docId);
    window.open(fileURL, '_blank');
  }
}
