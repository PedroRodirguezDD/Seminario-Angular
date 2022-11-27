import { Component } from '@angular/core';
import { CancionesLikesService } from '../canciones-likes.service';

@Component({
  selector: 'app-songs-likes',
  templateUrl: './songs-likes.component.html',
  styleUrls: ['./songs-likes.component.css']
})
export class SongsLikesComponent {
  
  constructor(private cancionGusta:CancionesLikesService){
  }

}
