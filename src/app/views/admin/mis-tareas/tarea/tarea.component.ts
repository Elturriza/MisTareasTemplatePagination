import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tareas } from 'src/app/interfaces/tareas';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea:Tareas
  tareas=[]
  id:string;
  constructor(private tareaService:TareasService,private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.id=params["id"];
    })
   }

  ngOnInit(): void {
    this.tareaService.getTarea(this.id).toPromise().then(res=>{
      this.tarea=res;
      //this.guardarTarea();
    })
  }

  // guardarTarea(){
  //   this.tareas.push(this.tarea);
  //   localStorage.setItem("Tarea",JSON.stringify(this.tareas));
  //   console.log("guardado");
  // }

}
