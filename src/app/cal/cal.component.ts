import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  display = "";

  constructor() { }

  @Input() ivalues: {btn: string} = {btn: ''};

  @Output() box: any = new EventEmitter();

  ngOnInit(): void {
  }

  in(value: any){
    this.box.emit(value);
  }
}