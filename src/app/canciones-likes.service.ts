import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './songs-list/Song';

@Injectable({
  providedIn: 'root'
})
export class CancionesLikesService {

  private _cancionesListaLike:Song []= [];
  cancionesListaLike:BehaviorSubject<Song []> = new BehaviorSubject(this._cancionesListaLike);

  constructor() { }

  addCancion(cancion: Song) {
    let item: Song= this._cancionesListaLike.find( (v1) => v1.nombre == cancion.nombre)!;
    if(!item){
      this._cancionesListaLike.push(cancion);
      console.log(this._cancionesListaLike);
    }
    else{
      alert("Esta cancion ya esta en tu lista");
    }
    this.cancionesListaLike.next(this._cancionesListaLike);
  }

}
