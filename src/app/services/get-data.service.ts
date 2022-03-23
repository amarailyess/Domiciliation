import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datas } from '../classes/datas';
import { Client } from '../classes/client';
import { Entreprise } from '../classes/entreprise';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
clients=[
    {
      "id":"1",
      "firstname":"Mohamed",
      "lastname":"Amara",
      "gender":"male",
      "email":"mohamed@gmail.com",
      "phone":"22541478",
      "password":"mohamedamara",
      "adress":"ibn khouldoun",
      "city":"Tunis",
      "country":"Tunisie",
      "zip":"3260",
      "photo":"assets/dashboardClient/images/iiii.jpg",
      "cardNumber":"2154236521458563",
      "expiration":"12-12-2024",
      "cardCode":"08521453",
      "cardType":"MasterCard",
    },
    {
      "id":"2",
      "firstname":"Khira",
      "lastname":"Amara",
      "gender":"female",
      "email":"khira@gmail.com",
      "phone":"96521478",
      "password":"khiraamara",
      "adress":"Oesres",
      "city":"Lisbonne",
      "country":"Portugal",
      "zip":"32510",
      "photo":"assets/dashboardClient/images/2.jpg",
      "cardNumber":"2356147889560125",
      "expiration":"19-11-2025",
      "cardCode":"01452369",
      "cardType":"VisaCard",
    },
    {
      "id":"3",
      "firstname":"Ayoub",
      "lastname":"Amara",
      "gender":"male",
      "email":"ayoub@gmail.com",
      "phone":"27413658",
      "password":"ayoubamara",
      "adress":"Om somaa souk lahad",
      "city":"Kebili",
      "country":"Tunisie",
      "zip":"4230",
      "photo":"assets/dashboardClient/images/3.jpg",
      "cardNumber":"0214125863202147",
      "expiration":"12-10-2026",
      "cardCode":"03251459",
      "cardType":"MasterCard",
    },
    {
      "id":"4",
      "firstname":"Ilyess",
      "lastname":"Amara",
      "gender":"male",
      "email":"ilyessamara@gmail.com",
      "phone":"92081406",
      "password":"ilyessamara",
      "adress":"Souk Lahad",
      "city":"Kebili",
      "country":"Tunisie",
      "zip":"4212",
      "photo":"assets/dashboardClient/images/4.jpg",
      "cardNumber":"025412369852147",
      "expiration":"20-09-2022",
      "cardCode":"02581478",
      "cardType":"VisaCard",
    },
    {
      "id":"5",
      "firstname":"Dhaw",
      "lastname":"Gammar",
      "gender":"male",
      "email":"dhaw@gmail.com",
      "phone":"25428298",
      "password":"dhawgammar",
      "adress":"Bardo",
      "city":"Tunis",
      "country":"Tunisie",
      "zip":"3687",
      "photo":"assets/dashboardClient/images/5.jpg",
      "cardNumber":"3625410258963214",
      "expiration":"01-02-2021",
      "cardCode":"09658741",
      "cardType":"MasterCard",
    }
  ];
   entreprises=[

    {
      "id":"1",
      "name":"Digital Lab",
      "legal_forme":"SARL",
      "capital":"3000",
      "activity":"Marketing solutions",
      "adress":"Manzah 5",
      "city":"Tunis",
      "country":"Tunisie",
      "zip":"3000",
      "manager":"Dhaw Gammar",
      "logo":"assets/dashboardClient/images/bg-title-01.jpg",
      "registerDate":"01-09-2020",
      "offer":"domipack",
      "tunidomAdress":"Centre Ville,Tunis",
      "ownerId":"5"
    },
    {
      "id":"2",
      "name":"Excellence",
      "legal_forme":"SARL",
      "capital":"6000",
      "activity":"Enseignement en ligne",
      "adress":"La Marsa",
      "city":"Tunis",
      "country":"Tunisia",
      "zip":"3100",
      "manager":"Mohamed Amara",
      "logo":"assets/dashboardClient/images/bg-title-02.jpg",
      "registerDate":"20-10-2019",
      "offer":"scanpack",
      "tunidomAdress":"Centre Urbain Nord,Tunis",
      "ownerId":"1"
    },
    {
      "id":"3",
      "name":"Vivo Bio Tech",
      "legal_forme":"SA",
      "capital":"120000",
      "activity":"Technologies Biologies",
      "adress":"Porto",
      "city":"Lisbonne",
      "country":"Portugal",
      "zip":"7500",
      "manager":"Khira Amara",
      "logo":"assets/dashboardClient/images/bg-title-01.jpg",
      "registerDate":"01-014-2018",
      "offer":"scanpack",
      "tunidomAdress":"Centre Ville,Tunis",
      "ownerId":"2"
    },
    {
      "id":"4",
      "name":"HighTech",
      "legal_forme":"SARL",
      "capital":"12000",
      "activity":"Software engineering",
      "adress":"Om somaa",
      "city":"Souk Lahad",
      "country":"Kebili",
      "zip":"4212",
      "manager":"Ilyess Amara",
      "logo":"assets/dashboardClient/images/bg-title-02.jpg",
      "registerDate":"06-05-2017",
      "offer":"domisimple",
      "tunidomAdress":"Centre Urbain Nord,Tunis",
      "ownerId":"4"
    },
    {
      "id":"5",
      "name":"ProTech",
      "legal_forme":"SARL",
      "capital":"25000",
      "activity":"Embedded systems",
      "adress":"Rue 24,TSHCN",
      "city":"Berlin",
      "country":"Allemagne",
      "zip":"6321",
      "manager":"Ayoub Amara",
      "logo":"assets/dashboardClient/images/bg-title-01.jpg",
      "registerDate":"01-01-2020",
      "offer":"scanpack",
      "tunidomAdress":"Centre Ville,Tunis",
      "ownerId":"3"
    },
    {
      "id":"6",
      "name":"Sahara Solar",
      "legal_forme":"SARL",
      "capital":"57000",
      "activity":"Solar energy",
      "adress":"Souk Lahad",
      "city":"kebili",
      "country":"Tunisie",
      "zip":"4230",
      "manager":"Mohamed Amara",
      "logo":"assets/dashboardClient/images/bg-title-01.jpg",
      "registerDate":"20-03-2016",
      "offer":"domisimple",
      "tunidomAdress":"Centre Ville,Tunis",
      "ownerId":"1"
    }

  ];
   
   letters=[

    {
      "id":"1",
      "seen":"yes",
      "state":"delivred",
      "date":"19-10-2020",
      "time":"20:35",
      "path":"assets/dashboardClient/images/bg-title-01.jpg",
      "documentId":"7",
      "entrepriseId":"2",

    },
    {
      "id":"2",
      "seen":"yes",
      "state":"delivred",
      "date":"11-12-2020",
      "time":"08:14",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "entrepriseId":"1",

    },
    {
      "id":"3",
      "seen":"no",
      "state":"delivred",
      "date":"01-12-2020",
      "time":"10:35",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "entrepriseId":"1",

    },
    {
      "id":"4",
      "seen":"no",
      "state":"ready",
      "date":"29-11-2020",
      "time":"12:45",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "entrepriseId":"4",

    },
    {
      "id":"5",
      "seen":"no",
      "state":"delivred",
      "date":"05-12-2020",
      "time":"16:30",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "documentId":"8",
      "entrepriseId":"3",

    },
    {
      "id":"6",
      "seen":"no",
      "state":"ready",
      "date":"02-12-2020",
      "time":"09:05",
      "path":"assets/dashboardClient/images/bg-title-01.jpg",
      "documentId":"9",
      "entrepriseId":"3",

    },
    
    {
      "id":"8",
      "seen":"yes",
      "state":"ready",
      "date":"25-11-2020",
      "time":"13:58",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "entrepriseId":"6",

    },
    {
      "id":"9",
      "seen":"no",
      "state":"delivred",
      "date":"04-12-2020",
      "time":"19:52",
      "path":"assets/dashboardClient/images/bg-title-02.jpg",
      "documentId":"10",
      "entrepriseId":"3",

    },
    {
      "id":"10",
      "seen":"yes",
      "state":"delivered",
      "date":"10-10-2020",
      "time":"19:52",
      "path":"assets/dashboardClient/images/bg-title-01.jpg",
      "documentId":"11",
      "entrepriseId":"3",

    },
  ];
  documents=[

    {
      "id":"1",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/2.pdf",
      "type":"bill",
      "day":"29",
      "month":"10",
      "year":"2020",
      "time":"08:00",
      "entrepriseId":"1",

    },
    {
      "id":"2",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/1.pdf",
      "type":"bill",
      "day":"15",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"2",

    },
    {
     "id":"3",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/3.pdf",
      "type":"bill",
      "day":"15",
      "month":"11",
      "year":"2020",
      "time":"19:30",
      "entrepriseId":"3",

    },
    {
      "id":"4",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/4.pdf",
      "type":"bill",
      "day":"15",
      "month":"9",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"4",

    },
    {
      "id":"5",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/2.pdf",
      "type":"bill",
      "day":"15",
      "month":"12",
      "year":"2020",
      "time":"12:30",
      "entrepriseId":"5",
    },
    {
      "id":"6",
      "name":"facture1",
      "path":"assets/dashboardClient/documents/courriers/1.pdf",
      "type":"bill",
      "day":"10",
      "month":"12",
      "year":"2020",
      "time":"04:30",
      "entrepriseId":"6",

    },
    {
      "id":"7",
      "name":"letter1",
      "path":"assets/dashboardClient/documents/courriers/1.pdf",
      "type":"letter",
      "day":"15",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"2",

    },
    {
      "id":"8",
      "name":"letter2",
      "path":"assets/dashboardClient/documents/courriers/2.pdf",
      "type":"letter",
      "day":"1",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"3",


    },
    {
      "id":"9",
      "name":"letter2",
      "path":"assets/dashboardClient/documents/courriers/3.pdf",
      "type":"letter",
      "day":"1",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"3",

    },
    {
      "id":"10",
      "name":"letter2",
      "path":"assets/dashboardClient/documents/courriers/4.pdf",
      "type":"letter",
      "day":"1",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"3",
    },
    {
      "id":"11",
      "name":"letter2",
      "path":"assets/dashboardClient/documents/courriers/5.pdf",
      "type":"letter",
      "day":"1",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"3",
    },

    {
      "id":"12",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/2.pdf",
      "type":"entrepriseDoc",
      "day":"29",
      "month":"10",
      "year":"2020",
      "time":"08:00",
      "entrepriseId":"1",

    },
    {
      "id":"13",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/1.pdf",
      "type":"entrepriseDoc",
      "day":"15",
      "month":"12",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"2",

    },
    {
     "id":"3",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/3.pdf",
      "type":"entrepriseDoc",
      "day":"15",
      "month":"11",
      "year":"2020",
      "time":"19:30",
      "entrepriseId":"3",

    },
    {
      "id":"4",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/4.pdf",
      "type":"entrepriseDoc",
      "day":"15",
      "month":"9",
      "year":"2020",
      "time":"09:30",
      "entrepriseId":"4",

    },
    {
      "id":"5",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/2.pdf",
      "type":"entrepriseDoc",
      "day":"15",
      "month":"12",
      "year":"2020",
      "time":"12:30",
      "entrepriseId":"5",
    },
    {
      "id":"6",
      "name":"ContratTunidom",
      "path":"assets/dashboardClient/documents/courriers/1.pdf",
      "type":"entrepriseDoc",
      "day":"10",
      "month":"12",
      "year":"2020",
      "time":"04:30",
      "entrepriseId":"6",

    }
  ]
  i:number;
  j:number;
  constructor() { }

  getClient(idCl:any){
  	for (this.i = 0; this.i < this.clients.length; this.i++) {
  		if(this.clients[this.i].id==idCl){
  			return this.clients[this.i];
  		}
  	}
  }

  getEntreprises(idCl:any){
  	let ents=[];
  	for (this.i = 0; this.i < this.entreprises.length; this.i++) {
  		if(this.entreprises[this.i].ownerId==idCl){
  			ents.push(this.entreprises[this.i]);
  		}
  	}
  	return ents;
  }

  getEntrepriseInformations(idEnt:any){
  	for (this.i = 0; this.i < this.entreprises.length; this.i++) {
  		if(this.entreprises[this.i].id==idEnt){
  			return this.entreprises[this.i];
  		}
  	}
  }

  getLetters(idEnt:any){
  	let letts=[];
  	for (this.i = 0; this.i < this.letters.length; this.i++) {
  		if(this.letters[this.i].entrepriseId==idEnt){
  			letts.push(this.letters[this.i]);
  		}
  	}
  	return letts;
  }

  getAllLetters(){
    return this.letters;
  }
  getAllEntrepriseLetters(idCl:any){
    let ents=[];
    let letts=[];
    ents=this.getEntreprises(idCl);
    for (this.i = 0; this.i < ents.length; this.i++) {
    for (this.j = 0; this.j < this.letters.length; this.j++) {
      if(this.letters[this.j].entrepriseId==ents[this.i].id){
        letts.push(this.letters[this.j]);
      }
    }
    }
    return letts;
  }

  getLetterDocument(docId){
    for (this.i = 0; this.i < this.documents.length; this.i++) {
      if(this.documents[this.i].id==docId){
        return this.documents[this.i].path;
      }
    }
  }
  
  getDocumentOfEntreprise(idEnt:any){
    let docs=[];
    for (this.i = 0; this.i < this.documents.length; this.i++) {
      if(this.documents[this.i].entrepriseId==idEnt){
        docs.push(this.documents[this.i]);
      }
    }
    return docs;
  }

  getDocumentsByFeature(idEnt:any,feature:any){
    let docs=[];
    let i:number;
    let doc:any;
    for (i = 0; i < this.documents.length; i++) {
      doc=this.documents[i];
      if(doc.entrepriseId==idEnt && doc[feature.key]==feature.value){
        docs.push(doc);
      }
    }
    return docs;
    
  }

 
}
