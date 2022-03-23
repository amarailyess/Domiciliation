import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	 contactForm:FormGroup;
	 succMessage="Message envoyer avec succèes";
  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService) { 
  	let formControls={
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      nom:new FormControl('',[
        Validators.required
      ]),
      message:new FormControl('',[
        Validators.required
      ]),
      sujet:new FormControl('',[
        Validators.required
      ]),
      }
      this.contactForm=this.fb.group(formControls);
  }

  ngOnInit(): void {
  }
  get email(){
  return this.contactForm.get('email');
  }
  get nom(){
  return this.contactForm.get('nom');
  }
  get sujet(){
  return this.contactForm.get('sujet');
  }
  get message(){
  return this.contactForm.get('message');
  }
  contacter(){
  	 this.toastr.success(this.succMessage); 
  	 
  }

}
