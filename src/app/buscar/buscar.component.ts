import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { JsonService } from 'src/services/json.service';
import { JugadoresService } from '../jugadores.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})


export class BuscarComponent implements OnInit {

  nbaPlayers: Array<any> = [];
  search!: string;
  nbaPlayersFilter: Array<any> = [];

  constructor(public json: JsonService) {
    json.getJson('https://mach-eight.uc.r.appspot.com/')
      .subscribe((answer: any) => {
        this.nbaPlayers = answer.values;
        this.nbaPlayersFilter = answer.values;
      });

  }

  filterPlayer():void{
    this.nbaPlayersFilter = this.nbaPlayers.filter(player => player.h_meters === this.search );
    
  }


  ngOnInit(): void {}
}
