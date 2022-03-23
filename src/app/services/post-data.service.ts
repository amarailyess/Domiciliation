import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datas } from '../classes/datas';
import { Client } from '../classes/client';
import { Entreprise } from '../classes/entreprise';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
	
  constructor(private http:HttpClient, private data:Datas) { }

  addClient(client:Client){
  	this.data.push(client);
  	return {"message":"client saved successfuly"};
  }
  addEntreprise(entreprise:Entreprise){
  	this.data.push(entreprise);
  	return {"message":"entreprise saved successfuly"};
  }
  updateClient(client:Client){

  }
  updateEntreprise(entreprise:Entreprise){

  }
}
