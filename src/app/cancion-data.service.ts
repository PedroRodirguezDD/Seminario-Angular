import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Song } from './songs-list/Song';

const URL='https://63866d90beaa6458267c6c63.mockapi.io/Canciones';

@Injectable({
  providedIn: 'root'
})
export class CancionDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Song[]>{
    return this.http.get<Song[]>(URL).pipe(tap( (canciones:Song[]) => console.log(canciones)));
  }

}
