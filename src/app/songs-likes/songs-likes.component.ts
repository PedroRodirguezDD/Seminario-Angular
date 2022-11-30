import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CancionesLikesService } from '../canciones-likes.service';
import { Song } from '../songs-list/Song';

@Component({
  selector: 'app-songs-likes',
  templateUrl: './songs-likes.component.html',
  styleUrls: ['./songs-likes.component.css']
})
export class SongsLikesComponent  implements OnInit{
  
  lista$!: Observable<Song[]>;
  constructor(private cancionGusta:CancionesLikesService){
    this.lista$=cancionGusta.cancionesListaLike.asObservable();
  }

  ngOnInit(): void {
  }

}
