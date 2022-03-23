import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents=[];
  idEnt:any;
  entreprise:any;
  currentClient:any;
  filterDocs=[];
  yearList=[];
  monthList=[];
  currentForlder:any;

  constructor(private router: Router, private getData:GetDataService, private acroute: ActivatedRoute) {

    this.idEnt = localStorage.getItem("currentEntreprise");
    this.entreprise=this.getData.getEntrepriseInformations(this.idEnt);
    this.documents=this.getData.getDocumentOfEntreprise(this.idEnt);
    this.filterDocs=this.documents;
   }

  ngOnInit(): void {
 
  }
  ngAfterViewInit(): void {
    $( document ).ready(function() {
  
  /* Folder on click
  $('.folder').on( "click", function() {
    
      $('.level-up').removeClass('level-up');
      $('.level-current').addClass('level-up');
      $('.level-current').removeClass('level-current');       
      $('.level-down').addClass('level-current');
      $('.level-down').removeClass('level-down').next().addClass('level-down');
    
  });*/
    
  // topBills on click
  $('.topBills').on( "click", function() {
    
      $('.topWrap').addClass('level-up');
      $('.topWrap').removeClass('level-current');       
      $('.yearBills').addClass('level-current');
      $('.yearBills').removeClass('level-down');
      $('.monthBills').addClass('level-down');
    
  });

  // topEntDcs on click
  $('.topEntDcs').on( "click", function() {
    
      $('.topWrap').addClass('level-up');
      $('.topWrap').removeClass('level-current');       
      $('.fileEntDocs').addClass('level-current');
      $('.fileEntDocs').removeClass('level-down');
    
  });

  // topLetters on click
  $('.topLetters').on( "click", function() {
    
      $('.topWrap').addClass('level-up');
      $('.topWrap').removeClass('level-current');       
      $('.yearLetters').addClass('level-current');
      $('.yearLetters').removeClass('level-down');
      $('.monthLetters').addClass('level-down');
    
  });

  // yearBills on click
  $('.yb').click(function() {
      console.log( "year bills clicked" );
      $('.topWrap').removeClass('level-up');
      $('.yearBills').addClass('level-up');
      $('.yearBills').removeClass('level-current');       
      $('.monthBills').addClass('level-current');
      $('.monthBills').removeClass('level-down');
      $('.fileBills').addClass('level-down');
    
  });

  // yearLetters on click
  $('.yl').click(function() {
      console.log( "year letters clicked" );
      $('.topWrap').removeClass('level-up');
      $('.yearLetters').addClass('level-up');
      $('.yearLetters').removeClass('level-current');       
      $('.monthLetters').addClass('level-current');
      $('.monthLetters').removeClass('level-down');
      $('.fileLetters').addClass('level-down');
    
  });

  // monthBills on click
  $('.mb').on( "click", function() {
    
      $('.yearBills').removeClass('level-up');
      $('.monthBills').addClass('level-up');
      $('.monthBills').removeClass('level-current');       
      $('.fileBills').addClass('level-current');
      $('.fileBills').removeClass('level-down');
    
  });

  // monthLetters on click
  $('.ml').on( "click", function() {
    
      $('.yearBills').removeClass('level-up');
      $('.monthLetters').addClass('level-up');
      $('.monthLetters').removeClass('level-current');       
      $('.fileLetters').addClass('level-current');
      $('.fileLetters').removeClass('level-down');
    
  });

  // Back on Click
  $('.back').on( "click", function() {
    if(
      $('.level-current').is(':first-child')){
    } 
    else {
      console.log( "Drill back up" );
      $('.level-down').removeClass('level-down')
      $('.level-current').addClass('level-down');
      $('.level-current').removeClass('level-current');
      $('.level-up').addClass('level-current');
      $('.level-up').removeClass('level-up').prev().addClass('level-up');
    }
    
  });
});
  }

  getDocumentsByFeature(feature:any){
      let i:number;
      let doc:any;
      let temp=this.filterDocs;
      this.filterDocs=[];
      for (i = 0; i < temp.length; i++) {
        doc=temp[i];
        if(doc[feature.key]==feature.value){
          this.filterDocs.push(doc);
        }
      }
  }
  getYearList(){
    let i:number;
    for (i = 2015; i < 2100; i++) {
      if(this.documents.find(x=>x.year == i)){
        this.yearList.push(i);
      }
    }
  }

  getMonthList(){
    let i:number;
    for (i = 1; i <= 12; i++) {
      if(this.documents.find(x=>x.month == i)){
        this.monthList.push(i);
      }
    }
  }
  changeCurrentForlder(folder){
    this.currentForlder=folder;
  }
  openFile(docId:any){
  let fileURL=this.getData.getLetterDocument(docId);
    window.open(fileURL, '_blank');
  }

}
