import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  constructor() { }

  @Input()
  calificacion!: number;

  @Output()
  calificacionChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }
  
  subir(): void{
    if(this.calificacion < 10){
      this.calificacion++;
      this.calificacionChange.emit(this.calificacion);
    }
  }

  bajar(): void{
    if(this.calificacion > 0){
      this.calificacion--;
      this.calificacionChange.emit(this.calificacion);
    }
  }
}
