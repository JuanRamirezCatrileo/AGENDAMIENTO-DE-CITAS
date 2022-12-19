import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Output() deleteCita= new EventEmitter<number>();
  @Input() listadoCitas: any;
  


  eliminarCita(index: number){
    this.deleteCita.emit(index);

  }
}
