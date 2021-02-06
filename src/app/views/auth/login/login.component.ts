import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";
import { RestApiService } from "src/app/services/rest-api.service";
import {CookieService} from 'node_modules/ngx-cookie-service';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  private cookieValue;
  
  perfil={
    email:"",
    password:""
  };
  
  constructor( private apiService:RestApiService,private router:Router, private cookieService:CookieService ) {}

  ngOnInit(): void {}

  cachEmail(email:string){
    this.perfil.email=email;
  }

  cachPass(pass:string){
    this.perfil.password=pass;
  }

  login(){
    this.apiService.loginUser(this.perfil).subscribe((data:any)=>{
      console.log(data);
      
      localStorage.setItem("token",JSON.stringify(data))
      this.cookieValue = this.cookieService.get('Token');
      this.cookieService.set('Token',JSON.stringify(data));
      if("token" in localStorage){
        this.router.navigate(['admin/dashboard']);
       }
    })
    
    // if(localStorage.getItem("token") === null){
    //   this.router.navigate(['admin/dashboard']);
    //  }

  }
}
