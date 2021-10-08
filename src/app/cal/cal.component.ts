import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  @Input() ivalues: {btn: string} = {btn: ''};

  @Output() box: any = new EventEmitter();

  arr: any = [];
  display:any = "";
  a: any;
  b: any;
  c: any;
  d = "";
  

  ngOnInit(): void {
  }

  in(value: any){
  this.oprator(value);
    console.log(this.display);
    this.box.emit(this.display);
    if((this.b == "+") || (this.b == "-") || (this.b == "*") || (this.b == "/")){
      
      this.d = this.d + value;
      this.display = this.display /*+ value*/;
      this.c = this.d;
    }

    else{
      this.display = this.display /*+ value*/;
      this.a = this.display;
    }

    this.result();
  }

  oprator(value: any){
    this.display = this.display + value;
      this.b = value;
  }

  result(){
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