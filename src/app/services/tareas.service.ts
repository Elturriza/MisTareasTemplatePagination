import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tareas } from '../interfaces/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http:HttpClient) { }

  getTareas(){
    return this.http.get<Tareas>("https://jsonplaceholder.typicode.com/todos");
  }
  getTarea(id:string){
    return this.http.get<Tareas>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
