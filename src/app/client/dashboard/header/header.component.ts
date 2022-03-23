import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { GetDataService } from '../../../services/get-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  entreprises=[];
  currentClient:any;
  currentEntreprise:any;
  constructor(private router:Router, private getData:GetDataService) { }

  ngOnInit(): void {
  //#FD8F5F
  let idCl=localStorage.getItem("tunidomHomeToken");
  let idEnt=localStorage.getItem("currentEntreprise");
  this.currentClient=this.getData.getClient(idCl);
  this.currentEntreprise=this.getData.getEntrepriseInformations(idEnt);
  this.entreprises=this.getData.getEntreprises(idCl);
  try {
    
       var menu = $('.js-item-menu');
       var menus=[];
       for (var i = 0; i < menu.length; i++) {
       menus[i]=menu[i];
       }

    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");        
        if (jQuery.inArray(this, menus) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menus);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }
  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }

  }
  changeCurrentEntreprise(id:any){
    localStorage.setItem("currentEntreprise",id);
    this.router.navigate(['/letters',id]);
  }
  logOut(){
    localStorage.removeItem("tunidomHomeToken");
    localStorage.removeItem("currentEntreprise");
    this.router.navigate(['/login']);
  }

}
