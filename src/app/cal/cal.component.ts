import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  @Output() box: any = new EventEmitter();

  arr: any = [];
  display:any = "" ;
  a: any;
  b: any;
  c: any;
  d = "";
  

  ngOnInit(): void {
    
  }

  in(value: any){
    this.box.emit(this.display);
    if((this.b == "+") || (this.b == "-") || (this.b == "*") || (this.b == "/")){
      this.d = this.d + value;
      this.display = this.display + value;
      this.c = this.d;
    }

    else{
      this.display = this.display + value;
      this.a = this.display;
    }
  }

  oprator(value: any){
    this.box.emit(this.display);
    this.display = this.display + value;
    this.b = value;
  }

  clear(){
    this.box.emit(this.display);
    this.display = "";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
  }
  

  result(){
    this.box.emit(this.display);
    if(this.b == "+"){
    this.display = this.display + "=" + (parseInt(this.a) + parseInt(this.c)).toString();
    this.display = (parseInt(this.display) + parseInt(this.c)).toString();

    this.arr.push(parseInt(this.display) + parseInt(this.c));
    }

    if(this.b == "-"){
      this.display = this.display + "=" + (parseInt(this.a) - parseInt(this.c)).toString();
      this.display = (parseInt(this.display) - parseInt(this.c)).toString();
    }

    if(this.b == "*"){
      this.display = this.display + "=" + (parseInt(this.a) * parseInt(this.c)).toString();
      this.display = (parseInt(this.display) * parseInt(this.c)).toString();
    }

    if(this.b == "/"){
      this.display = this.display + "=" + (parseInt(this.a) / parseInt(this.c)).toString();
      this.display = (parseInt(this.display) / parseInt(this.c)).toString();
    }
}

  




}