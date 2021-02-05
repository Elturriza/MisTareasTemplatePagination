import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestApiService } from "src/app/services/rest-api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  
  perfil={
   
    email:"",
    password:""
  };
  perfilList=[];

  constructor(private router:Router,private restApi:RestApiService) {}

  ngOnInit(): void {

    console.log("hola turi soy un mensaje");

  }

  // guardaName(name:string){
  //   this.perfil.name=name;
    
  // }
  guardaEmail(email:string){
    this.perfil.email=email;

  }
  guardaPass(pass:string){
    this.perfil.password=pass;
  }
  safeAccount(){
    // this.perfilList.push(Object.assign({},this.perfil));//to copy an array to another
    // console.log(this.perfilList);
    // localStorage.setItem("token",JSON.stringify(this.perfilList));
    // console.log("guardado");
    // this.router.navigate(['auth/login']);

    console.log(this.perfil);
    this.restApi.createUser(this.perfil).subscribe((data:{})=>{
      console.log(data);
      
    //  this.router.navigate(['auth/login']);
    
    })
    
    
  }
  
}
