import { Component, OnInit } from '@angular/core';
import {Bronze} from "../bronzes/bronzes.interface";
import {BronzeService} from "../bronzes/bronze.service";

@Component({
  selector: 'app-ajout-bronze',
  templateUrl: './ajout-bronze.component.html',
  styleUrls: ['./ajout-bronze.component.scss']
})
export class AjoutBronzeComponent implements OnInit {

  bronzes: Bronze = {
    id_bronze: null,
    email: '',
    nom: '',
    prenom: '',
    address: '',
    code_postal: null,
    ville: '',
    numero_telephone: null,
    monCV: '',
    matieres: ''
  };

  constructor(private bronzeService: BronzeService) { }

  ngOnInit() {
  }

  createBronze(data: Bronze){
    this.bronzeService.createBronze(data);
  }

}
