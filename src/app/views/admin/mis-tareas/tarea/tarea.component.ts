import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea

  constructor(private tareaService:TareasService) { }

  ngOnInit(): void {
    this.tareaService.getTarea("1").toPromise().then(res=>{
      this.tarea=res;
      console.log(this.tarea);
    })
  }

}
