import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCitasComponent,
    CrearCitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
