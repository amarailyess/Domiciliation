import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../classes/client';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../../assets/acceuilClient/login/css/util.css',
  '../../../assets/acceuilClient/login/css/main.css']
})
export class LoginComponent implements OnInit {
	loginForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private auth:AuthentificationService, private toastr: ToastrService) {
  let formControls={
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        
      ])
    }
    this.loginForm=this.fb.group(formControls);
  }

  get email(){
  	 return this.loginForm.get('email');
  }
  get password(){
  	 return this.loginForm.get('password');
  }

  ngOnInit(): void {
  let isLoggedIn=this.auth.isLoggedIn();
  if(isLoggedIn){
    this.router.navigate(['/letters']);
  }
  }

  
  loginClient(){
    let data=this.loginForm.value;
    let infos={"email":data.email,"password":data.password};
    let res=this.auth.login(infos);
    if(res!=false)
      {
        localStorage.setItem("tunidomHomeToken",res.id);
        this.router.navigate(['/letters']);
       
      }else
      {
        this.toastr.error("Aucun client de ces paramètres");
      }
    
  	
  }

}
