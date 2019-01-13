import { Component, OnInit } from '@angular/core';
import {Gold} from "../golds/golds.interface";
import {GoldService} from "../golds/gold.service";

@Component({
  selector: 'app-ajout-gold',
  templateUrl: './ajout-gold.component.html',
  styleUrls: ['./ajout-gold.component.scss']
})
export class AjoutGoldComponent implements OnInit {

  golds: Gold = {
    id_gold: null,
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

  constructor(private goldService: GoldService) { }

  ngOnInit() {
  }

  createGold(data: Gold){
    this.goldService.createGold(data);
  }

}
