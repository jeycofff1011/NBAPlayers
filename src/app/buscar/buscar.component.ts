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
  busqueda!: string;
  nbaPlayersFilter: Array<any> = [];

  constructor(public json: JsonService) {
    json.getJson('https://mach-eight.uc.r.appspot.com/')
      .subscribe((respuesta: any) => {
        this.nbaPlayers = respuesta.values;
        this.nbaPlayersFilter = respuesta.values;
      });

  }

  filterPlayer():void{
    this.nbaPlayersFilter = this.nbaPlayers.filter(player => player.h_meters === this.busqueda );
    
  }



  ngOnInit(): void {}
}
