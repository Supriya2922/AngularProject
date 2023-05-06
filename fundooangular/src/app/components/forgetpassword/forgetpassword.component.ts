import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  ForgotPasswordForm!:FormGroup
  submitted=false;
  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.ForgotPasswordForm=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
   
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.ForgotPasswordForm.invalid){
      return;
    }

  }

}
