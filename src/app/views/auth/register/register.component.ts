import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestApiService } from "src/app/services/rest-api.service";
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  
  singupForm: FormGroup;
  perfildata
  constructor(private router:Router,private restApi:RestApiService,private http:HttpClient) {}

  ngOnInit(): void {

    console.log("hola turi soy un mensaje");
    this.singupForm = new FormGroup({
      'email' : new FormControl(null),
      'password' : new FormControl(null)
    });

  }

  safeAccount(){
    
    console.log(this.singupForm.value);
    
    this.restApi.createUser(this.singupForm.value).subscribe(data=>{
       console.log(data);
    })
    
    //this.router.navigate(['auth/login']);
  }
  
}
