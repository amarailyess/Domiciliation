import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../classes/client';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../../assets/fontawesome-free-5.15.1-web/css/all.css']
})
export class RegisterComponent implements OnInit {
    
	registerForm:FormGroup;
  codeCheck:boolean=false;
  code:any;
  route:any;
  offreName:string;
 offrePrice:number;
 currentStep:number;
 steps:number;
  sub:any;

  formeJuridique=[{"type":"SARL"},{"type":"SUARL"},{"type":"SA"},{"type":"STARTUP"}];
  countries=[
  {
        "country": "Tunisia"
    },
    {
        "country": "Afghanistan"
    },
    {
        "country": "Albania"
    },
    {
        "country": "Algeria"
    },
    {
        "country": "American Samoa"
    },
    {
        "country": "Andorra"
    },
    {
        "country": "Angola"
    },
    {
        "country": "Anguilla"
    },
    {
        "country": "Antarctica"
    },
    {
        "country": "Antigua and Barbuda"
    },
    {
        "country": "Argentina"
    },
    {
        "country": "Armenia"
    },
    {
        "country": "Aruba"
    },
    {
        "country": "Australia"
    },
    {
        "country": "Austria"
    },
    {
        "country": "Azerbaijan"
    },
    {
        "country": "Bahamas"
    },
    {
        "country": "Bahrain"
    },
    {
        "country": "Bangladesh"
    },
    {
        "country": "Barbados"
    },
    {
        "country": "Belarus"
    },
    {
        "country": "Belgium"
    },
    {
        "country": "Belize"
    },
    {
        "country": "Benin"
    },
    {
        "country": "Bermuda"
    },
    {
        "country": "Bhutan"
    },
    {
        "country": "Bolivia"
    },
    {
        "country": "Bosnia and Herzegovina"
    },
    {
        "country": "Botswana"
    },
    {
        "country": "Bouvet Island"
    },
    {
        "country": "Brazil"
    },
    {
        "country": "British Indian Ocean Territory"
    },
    {
        "country": "Brunei"
    },
    {
        "country": "Bulgaria"
    },
    {
        "country": "Burkina Faso"
    },
    {
        "country": "Burundi"
    },
    {
        "country": "Cambodia"
    },
    {
        "country": "Cameroon"
    },
    {
        "country": "Canada"
    },
    {
        "country": "Cape Verde"
    },
    {
        "country": "Cayman Islands"
    },
    {
        "country": "Central African Republic"
    },
    {
        "country": "Chad"
    },
    {
        "country": "Chile"
    },
    {
        "country": "China"
    },
    {
        "country": "Christmas Island"
    },
    {
        "country": "Cocos (Keeling) Islands"
    },
    {
        "country": "Colombia"
    },
    {
        "country": "Comoros"
    },
    {
        "country": "Congo"
    },
    {
        "country": "The Democratic Republic of Congo"
    },
    {
        "country": "Cook Islands"
    },
    {
        "country": "Costa Rica"
    },
    {
        "country": "Ivory Coast"
    },
    {
        "country": "Croatia"
    },
    {
        "country": "Cuba"
    },
    {
        "country": "Cyprus"
    },
    {
        "country": "Czech Republic"
    },
    {
        "country": "Denmark"
    },
    {
        "country": "Djibouti"
    },
    {
        "country": "Dominica"
    },
    {
        "country": "Dominican Republic"
    },
    {
        "country": "East Timor"
    },
    {
        "country": "Ecuador"
    },
    {
        "country": "Egypt"
    },
    {
        "country": "England"
    },
    {
        "country": "El Salvador"
    },
    {
        "country": "Equatorial Guinea"
    },
    {
        "country": "Eritrea"
    },
    {
        "country": "Estonia"
    },
    {
        "country": "Ethiopia"
    },
    {
        "country": "Falkland Islands"
    },
    {
        "country": "Faroe Islands"
    },
    {
        "country": "Fiji Islands"
    },
    {
        "country": "Finland"
    },
    {
        "country": "France"
    },
    {
        "country": "French Guiana"
    },
    {
        "country": "French Polynesia"
    },
    {
        "country": "French Southern territories"
    },
    {
        "country": "Gabon"
    },
    {
        "country": "Gambia"
    },
    {
        "country": "Georgia"
    },
    {
        "country": "Germany"
    },
    {
        "country": "Ghana"
    },
    {
        "country": "Gibraltar"
    },
    {
        "country": "Greece"
    },
    {
        "country": "Greenland"
    },
    {
        "country": "Grenada"
    },
    {
        "country": "Guadeloupe"
    },
    {
        "country": "Guam"
    },
    {
        "country": "Guatemala"
    },
    {
        "country": "Guernsey"
    },
    {
        "country": "Guinea"
    },
    {
        "country": "Guinea-Bissau"
    },
    {
        "country": "Guyana"
    },
    {
        "country": "Haiti"
    },
    {
        "country": "Heard Island and McDonald Islands"
    },
    {
        "country": "Holy See (Vatican City State)"
    },
    {
        "country": "Honduras"
    },
    {
        "country": "Hong Kong"
    },
    {
        "country": "Hungary"
    },
    {
        "country": "Iceland"
    },
    {
        "country": "India"
    },
    {
        "country": "Indonesia"
    },
    {
        "country": "Iran"
    },
    {
        "country": "Iraq"
    },
    {
        "country": "Ireland"
    },
    {
        "country": "Israel"
    },
    {
        "country": "Isle of Man"
    },
    {
        "country": "Italy"
    },
    {
        "country": "Jamaica"
    },
    {
        "country": "Japan"
    },
    {
        "country": "Jersey"
    },
    {
        "country": "Jordan"
    },
    {
        "country": "Kazakhstan"
    },
    {
        "country": "Kenya"
    },
    {
        "country": "Kiribati"
    },
    {
        "country": "Kuwait"
    },
    {
        "country": "Kyrgyzstan"
    },
    {
        "country": "Laos"
    },
    {
        "country": "Latvia"
    },
    {
        "country": "Lebanon"
    },
    {
        "country": "Lesotho"
    },
    {
        "country": "Liberia"
    },
    {
        "country": "Libyan Arab Jamahiriya"
    },
    {
        "country": "Liechtenstein"
    },
    {
        "country": "Lithuania"
    },
    {
        "country": "Luxembourg"
    },
    {
        "country": "Macao"
    },
    {
        "country": "North Macedonia"
    },
    {
        "country": "Madagascar"
    },
    {
        "country": "Malawi"
    },
    {
        "country": "Malaysia"
    },
    {
        "country": "Maldives"
    },
    {
        "country": "Mali"
    },
    {
        "country": "Malta"
    },
    {
        "country": "Marshall Islands"
    },
    {
        "country": "Martinique"
    },
    {
        "country": "Mauritania"
    },
    {
        "country": "Mauritius"
    },
    {
        "country": "Mayotte"
    },
    {
        "country": "Mexico"
    },
    {
        "country": "Micronesia, Federated States of"
    },
    {
        "country": "Moldova"
    },
    {
        "country": "Monaco"
    },
    {
        "country": "Mongolia"
    },
    {
        "country": "Montserrat"
    },
    {
        "country": "Montenegro"
    },
    {
        "country": "Morocco"
    },
    {
        "country": "Mozambique"
    },
    {
        "country": "Myanmar"
    },
    {
        "country": "Namibia"
    },
    {
        "country": "Nauru"
    },
    {
        "country": "Nepal"
    },
    {
        "country": "Netherlands"
    },
    {
        "country": "Netherlands Antilles"
    },
    {
        "country": "New Caledonia"
    },
    {
        "country": "New Zealand"
    },
    {
        "country": "Nicaragua"
    },
    {
        "country": "Niger"
    },
    {
        "country": "Nigeria"
    },
    {
        "country": "Niue"
    },
    {
        "country": "Norfolk Island"
    },
    {
        "country": "North Korea"
    },
    {
        "country": "Northern Ireland"
    },
    {
        "country": "Northern Mariana Islands"
    },
    {
        "country": "Norway"
    },
    {
        "country": "Oman"
    },
    {
        "country": "Pakistan"
    },
    {
        "country": "Palau"
    },
    {
        "country": "Palestine"
    },
    {
        "country": "Panama"
    },
    {
        "country": "Papua New Guinea"
    },
    {
        "country": "Paraguay"
    },
    {
        "country": "Peru"
    },
    {
        "country": "Philippines"
    },
    {
        "country": "Pitcairn"
    },
    {
        "country": "Poland"
    },
    {
        "country": "Portugal"
    },
    {
        "country": "Puerto Rico"
    },
    {
        "country": "Qatar"
    },
    {
        "country": "Reunion"
    },
    {
        "country": "Romania"
    },
    {
        "country": "Russian Federation"
    },
    {
        "country": "Rwanda"
    },
    {
        "country": "Saint Helena"
    },
    {
        "country": "Saint Kitts and Nevis"
    },
    {
        "country": "Saint Lucia"
    },
    {
        "country": "Saint Pierre and Miquelon"
    },
    {
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "country": "Samoa"
    },
    {
        "country": "San Marino"
    },
    {
        "country": "Sao Tome and Principe"
    },
    {
        "country": "Saudi Arabia"
    },
    {
        "country": "Scotland"
    },
    {
        "country": "Senegal"
    },
    {
        "country": "Serbia"
    },
    {
        "country": "Seychelles"
    },
    {
        "country": "Sierra Leone"
    },
    {
        "country": "Singapore"
    },
    {
        "country": "Slovakia"
    },
    {
        "country": "Slovenia"
    },
    {
        "country": "Solomon Islands"
    },
    {
        "country": "Somalia"
    },
    {
        "country": "South Africa"
    },
    {
        "country": "South Georgia and the South Sandwich Islands"
    },
    {
        "country": "South Korea"
    },
    {
        "country": "South Sudan"
    },
    {
        "country": "Spain"
    },
    {
        "country": "SriLanka"
    },
    {
        "country": "Sudan"
    },
    {
        "country": "Suriname"
    },
    {
        "country": "Svalbard and Jan Mayen"
    },
    {
        "country": "Swaziland"
    },
    {
        "country": "Sweden"
    },
    {
        "country": "Switzerland"
    },
    {
        "country": "Syria"
    },
    {
        "country": "Tajikistan"
    },
    {
        "country": "Tanzania"
    },
    {
        "country": "Thailand"
    },
    {
        "country": "Timor-Leste"
    },
    {
        "country": "Togo"
    },
    {
        "country": "Tokelau"
    },
    {
        "country": "Tonga"
    },
    {
        "country": "Trinidad and Tobago"
    },
    {
        "country": "Turkey"
    },
    {
        "country": "Turkmenistan"
    },
    {
        "country": "Turks and Caicos Islands"
    },
    {
        "country": "Tuvalu"
    },
    {
        "country": "Uganda"
    },
    {
        "country": "Ukraine"
    },
    {
        "country": "United Arab Emirates"
    },
    {
        "country": "United Kingdom"
    },
    {
        "country": "United States"
    },
    {
        "country": "United States Minor Outlying Islands"
    },
    {
        "country": "Uruguay"
    },
    {
        "country": "Uzbekistan"
    },
    {
        "country": "Vanuatu"
    },
    {
        "country": "Venezuela"
    },
    {
        "country": "Vietnam"
    },
    {
        "country": "Virgin Islands, British"
    },
    {
        "country": "Virgin Islands, U.S."
    },
    {
        "country": "Wales"
    },
    {
        "country": "Wallis and Futuna"
    },
    {
        "country": "Western Sahara"
    },
    {
        "country": "Yemen"
    },
    {
        "country": "Zambia"
    },
    {
        "country": "Zimbabwe"
    }
];
  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
  if(this.router.url === '/register/domisimple' || this.router.url === '/register/domipack' || this.router.url === '/register/scanpack'){
        this.route="welcomeRegister";
    }
    if(this.router.url === '/domicilate/register/domipack' || this.router.url === '/domicilate/register/domisimple' || this.router.url === '/domicilate/register/scanpack'){
        this.route="homeRegister";
    }
  	let formControls={
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        
      ]),
      rpassword:new FormControl('',[
        Validators.required
      ]),
      prenom:new FormControl('',[
        Validators.required
      ]),
      code_confirmation:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),

      ]),
      nom:new FormControl('',[
        Validators.required
      ]),
      telephone:new FormControl('',[
        Validators.required
      ]),
      adresse:new FormControl('',[
        Validators.required
      ]),
      ville:new FormControl('',[
        Validators.required
      ]),
      
      nom_entreprise:new FormControl('',[
        Validators.required
      ]),
      capital_entreprise:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      domaine_activite_entreprise:new FormControl('',[
        Validators.required
      ]),
      adresse_entreprise:new FormControl('',[
        Validators.required
      ]),
      code_postal:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.maxLength(5),
        Validators.minLength(4),

      ]),
      ville_entreprise:new FormControl('',[
        Validators.required
      ]),
      
      gerant_entreprise:new FormControl('',[
        Validators.required
      ]),
      numero_carte:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
      code_carte:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      date_expiration:new FormControl('',[
        Validators.required
      ])
    }
    this.registerForm=this.fb.group(formControls);
   }
   
  
  register(){
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
    this.offreName = params.get('offre'); 
    if(this.offreName=='domisimple'){this.offrePrice=40;}
    if(this.offreName=='domipack'){this.offrePrice=60;}
    if(this.offreName=='scanpack'){this.offrePrice=80;}
});

  }
  ngAfterViewInit(): void {
  let thisClass=this;
    $(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
if(thisClass.route === 'welcomeRegister'){
var steps = $("fieldset").length-1;
}else{
    var steps = $("fieldset").length;
}
var fs=1;
var code;
var ok=true;
setProgressBar(current);
thisClass.currentStep=current;
thisClass.steps=steps;
if(thisClass.route === 'homeRegister'){
    $("#progressbar").css({
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto'
    });
}
$(".next").click(function(){
    
  if(fs==1){
   if(thisClass.route === 'welcomeRegister'){
    if(checkEmail()){
      code=sendCodeBymail();
      alert("code envoyé sur votre email: "+code);
      fs++;
      var btn=$(this);
      clickNext(btn);
      setProgressBar(current);

    }else{
      alert("Email déja utilisé.réssayer svp.")
    }
  }else{
  var btn=$(this);
    clickNext(btn);
    setProgressBar(++current);
    thisClass.currentStep=current;
  }
  }
  else{
    var btn=$(this);
    clickNext(btn);
    setProgressBar(++current);
    thisClass.currentStep=current;
  }
  


});

$(".previous").click(function(){
current_fs = $(this).parent();
if(thisClass.route === 'homeRegister'){
$("#progressbar i").eq($("fieldset").index(current_fs)).removeClass("active");
setProgressBar(--current);
thisClass.currentStep=current;}
 if(ok==true){
fs--;
}else{
  
 //Remove class active
$("#progressbar i").eq($("fieldset").index(current_fs)-1).removeClass("active");
setProgressBar(--current);
thisClass.currentStep=current;
}
  
  previous_fs = $(this).parent().prev();

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});

});
function clickNext(btn){
current_fs = btn.parent();

next_fs = btn.parent().next();
//Add Class Active
if(thisClass.route === 'welcomeRegister'){
    $("#progressbar i").eq($("fieldset").index(current_fs)).addClass("active");
}else{
    $("#progressbar i").eq($("fieldset").index(current_fs)+1).addClass("active");
}

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
}
function setProgressBar(curStep){
var per=String(100/steps);
var percent = parseFloat(per) * curStep;
//percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

function sendCodeBymail(){
 return Math.floor(Math.random() * (9000 + 1) + 1000);
  }

function checkCode(){
    var codeEntered=$("#code_confirmation").val();
    if(code==codeEntered){
      return true;
    }else{      
      return false;
    }
  }
function checkEmail(){
  return $("#email").val()!="admin@gmail.com";
}

$(".renvoyer_code").click(function(){

  code=sendCodeBymail();
  alert("code renvoyé."+code+" Consulter votre email svp!");
  $("#code_confirmation").css("outline","none");
});
$(".submit").click(function(){
return false;
});

$("#code_confirmation").keyup(function(){
if(checkCode()==true){
  $("#code_confirmation").css("border","1px solid green");
  alert("email validé");
  var btn=$(this).parent();
  clickNext(btn);
  setProgressBar(++current);
  thisClass.currentStep=current;
  ok=false;
}else{
  $("#code_confirmation").css("border","1px solid red");
}
});


});
  }
  get email(){
  return this.registerForm.get('email');
  }
  get password(){
  return this.registerForm.get('password');
  }
  get rpassword(){
  return this.registerForm.get('rpassword');
  }
  get nom(){
  return this.registerForm.get('nom');
  }
  get prenom(){
  return this.registerForm.get('prenom');
  }
  get telephone(){
  return this.registerForm.get('telephone');
  }
  get adresse(){
  return this.registerForm.get('adresse');
  }
  get ville(){
  return this.registerForm.get('ville');
  }
  get pays(){
  return this.registerForm.get('pays');
  }
  get nom_entreprise(){
  return this.registerForm.get('nom_entreprise');
  }
  
  get domaine_activite_entreprise(){
  return this.registerForm.get('domaine_activite_entreprise');
  }
  get capital_entreprise(){
  return this.registerForm.get('capital_entreprise');
  }
  get adresse_entreprise(){
  return this.registerForm.get('adresse_entreprise');
  }
  get code_postal(){
  return this.registerForm.get('code_postal');
  }
  get ville_entreprise(){
  return this.registerForm.get('ville_entreprise');
  }
  get pays_entreprise(){
  return this.registerForm.get('pays_entreprise');
  }
  get gerant_entreprise(){
  return this.registerForm.get('gerant_entreprise');
  }
  get numero_carte(){
  return this.registerForm.get('numero_carte');
  }
  get code_carte(){
  return this.registerForm.get('code_carte');
  }
  get date_expiration(){
  return this.registerForm.get('date_expiration');
  }
  get code_confirmation(){
  return this.registerForm.get('code_confirmation');
  }
  
  
  }

