import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import {MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-card-tareas',
  templateUrl: './card-tareas.component.html'
})
export class CardTareasComponent implements OnInit {

  tareas;
  dataSource;
  p:number = 1;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private tareaService:TareasService) { }

  ngOnInit(): void {
    this.tareaService.getTareas().toPromise().then(res=>{
      this.tareas=res;
      this.dataSource= new MatTableDataSource(this.tareas);
      this.dataSource.paginator = this.paginator;
      //console.log(this.tareas);
    }) 
  }
  

}
