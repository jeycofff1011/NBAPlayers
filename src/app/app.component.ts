import { Component } from '@angular/core';
import { JsonService } from 'src/services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBAPlayers';

  constructor(private json: JsonService){
    this.json.getJson('https://mach-eight.uc.r.appspot.com/').subscribe((res: any)=> {
      console.log(res)
    })
  }

}
