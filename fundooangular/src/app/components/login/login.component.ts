import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
submitted=false;
  constructor(private formBuilder: FormBuilder,private user:UserService,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
   password:['',[Validators.required]]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
   else{
    let loginData={
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
      
    }
    this.user.login(loginData).subscribe((response:any)=>{
      console.log(response.data)
       localStorage.setItem('token',response.data);
       this.route.navigateByUrl('/dashboard/notes')   
      
      })
   }
  }
}
