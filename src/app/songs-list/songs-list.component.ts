import { Component, OnInit } from '@angular/core';
import { CancionDataService } from '../cancion-data.service';
import { CancionesLikesService } from '../canciones-likes.service';
import {Song} from './Song';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit{

  canciones: Song[] = [];

  constructor(private cancionGusta:CancionesLikesService, private cancionData:CancionDataService){
  }

  ngOnInit(): void {
      this.cancionData.getAll().subscribe(songs => this.canciones=songs);
  }

  addCancion(cancion : Song): void{
    this.cancionGusta.addCancion(cancion);
  }
 
}
