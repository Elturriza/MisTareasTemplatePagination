import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  
  perfil={
    name:"",
    email:"",
    password:""
  };
  perfilList=[];

  constructor() {}

  ngOnInit(): void {}

  guardaName(name:string){
    this.perfil.name=name;
    
  }
  guardaEmail(email:string){
    this.perfil.email=email;
    
  }
  guardaPass(pass:string){
    this.perfil.password=pass;
    
  }
  safeAccount(){
    this.perfilList.push(Object.assign({},this.perfil));
    console.log(this.perfilList);
    localStorage.setItem("Tarea",JSON.stringify(this.perfilList));
    console.log("guardado");
  }
  
}
