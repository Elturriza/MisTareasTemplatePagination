import { Component, Input, OnInit } from '@angular/core';
import { Tareas } from 'src/app/interfaces/tareas';

@Component({
  selector: 'app-card-una-tarea',
  templateUrl: './card-una-tarea.component.html'
})
export class CardUnaTareaComponent implements OnInit {

  @Input() tarea:Tareas
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  constructor() {
    
   }

  ngOnInit(): void {
  }

}
