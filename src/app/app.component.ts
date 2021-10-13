import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  constructor(){}

  display: any = "";
  a: any;
  history = "";
  
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
    { btn: '0' },
    { btn: '+' },
    { btn: '-' },
    { btn: '*' },
    { btn: '/' },
    { btn: '=' },
    { btn: 'C' },

  ]

  output(event: any){

    this.display += event;
    console.log(this.display);

    if(this.display.includes('C')){
      this.display = "";
    }
    if(this.display.includes('=')){     
      this.a = eval(this.display.replace('=',''));
      this.display += this.a;
      this.history = this.history + "\n" + this.display;
    } 
  }
}
