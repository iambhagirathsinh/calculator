import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  constructor(){}

  buttonValues = [

    { btn: '1' },
    { btn: '2' },
    { btn: '3' },
    { btn: '4' },
    { btn: '5' },
    { btn: '6' },
    { btn: '7' },
    { btn: '8' },
    { btn: '9' },
    { btn: '+' },
    { btn: '-' },
    { btn: '*' },
    { btn: '/' },
    { btn: '=' },

  ]

  display: any;

  output($event: any){
    this.display = $event
    
  }

  
}
