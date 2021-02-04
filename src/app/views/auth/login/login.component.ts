import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";
import {CookieService} from 'node_modules/ngx-cookie-service/ngx-cookie-service';
import { RestApiService } from "src/app/services/rest-api.service";


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
  
  constructor(private cookieService:CookieService, private apiService:RestApiService,private router:Router ) {}

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
    })
    //this.router.navigate(['admin/dashboard']);
  }
}
