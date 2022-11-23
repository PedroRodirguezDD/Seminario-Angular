import { Component, OnInit } from '@angular/core';
import {Song} from './Song';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit{

  cancion: Song = {
    nombre:'Help',
    banda:'The Beatles',
    genero:'Rock',
    anio:1965  
  }

  constructor(){ }

  ngOnInit(): void {
  }
}
