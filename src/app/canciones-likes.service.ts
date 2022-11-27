import { Injectable } from '@angular/core';
import { Song } from './songs-list/Song';

@Injectable({
  providedIn: 'root'
})
export class CancionesLikesService {

  cancionesListaLike: Song [] = [];

  constructor() { }

  addCancion(cancion: Song) {
    let item: Song= this.cancionesListaLike.find( (v1) => v1.nombre == cancion.nombre)!;
    if(!item){
      this.cancionesListaLike.push(cancion);
      console.log(this.cancionesListaLike);
    }
    else{
      alert("Esta cancion ya esta en tu lista");
    }
    
  }

}
