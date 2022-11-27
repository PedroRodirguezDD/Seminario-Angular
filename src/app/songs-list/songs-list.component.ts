import { Component, OnInit } from '@angular/core';
import { CancionesLikesService } from '../canciones-likes.service';
import {Song} from './Song';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit{

  canciones: Song[] = [
    {
      nombre:'Help',
      banda:'The Beatles',
      genero:'Rock',
      anio:1965,
      calificacion:0
    },
    {
      nombre:'Sugar',
      banda:'Maroon 5',
      genero:'Pop',
      anio:2012,
      calificacion:0
    },
    {
      nombre:'Elenor Rigby',
      banda:'The Beatles',
      genero:'Rock',
      anio:1966,
      calificacion:0
    }  
  ]

  constructor(private cancionGusta:CancionesLikesService){
  }

  ngOnInit(): void {
  }

  addCancion(cancion : Song): void{
    this.cancionGusta.addCancion(cancion);
  }
 
}
