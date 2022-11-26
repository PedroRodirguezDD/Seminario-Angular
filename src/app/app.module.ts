import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongsLikesComponent } from './songs-likes/songs-likes.component';
import { CancionesContactoComponent } from './canciones-contacto/canciones-contacto.component';
import { CancionesHomeComponent } from './canciones-home/canciones-home.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { CalificacionComponent } from './calificacion/calificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongsLikesComponent,
    CancionesContactoComponent,
    CancionesHomeComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
