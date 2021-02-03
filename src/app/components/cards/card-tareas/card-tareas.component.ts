import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card-tareas',
  templateUrl: './card-tareas.component.html'
})
export class CardTareasComponent implements OnInit {

  tareas;
  dataSource;
  p:number = 1;

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private tareaService:TareasService, private router:Router) { }

  ngOnInit(): void {
    this.tareaService.getTareas().toPromise().then(res=>{
      this.tareas=res;
    }) 
  }
  verTarea(id:string){
    this.router.navigate(['/admin/mitarea',id])
  }

}
