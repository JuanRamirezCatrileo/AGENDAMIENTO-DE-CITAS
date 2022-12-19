import { transition } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
nombre='';
fecha= '';
hora= '';
sintomas = ' ';

formularioIncorrecto = false;

@Output() nuevaCita= new EventEmitter<any>();

constructor(){
  
}
agregarcita(){
  if(this.nombre == ' ' || this.fecha == '' || this.hora == '' || this.sintomas == '' ){
    this.formularioIncorrecto = true;
    return;
  }
  this.formularioIncorrecto = false;

  const CITAS = {
    nombre: this.nombre,
    fecha: this.fecha,
    hora: this.hora,
    sintomas: this.sintomas
  }
  console.log(CITAS);
  this.nuevaCita.emit(CITAS);
  this.resetCampos();
}
resetCampos(){
  this.nombre = ' ' ;
  this.fecha = '';
  this.hora = '';
  this.sintomas = '';
}
}
