import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted=false;
  token:any;
  constructor(private formBuilder: FormBuilder,private activeRoute:ActivatedRoute,private user:UserService,private route:Router) { }

  ngOnInit(): void {
    this.resetPasswordForm=this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmpassword:['',[Validators.required, Validators.minLength(8)]]
   
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  onSubmit(){
    this.submitted=true;
    if(this.resetPasswordForm.invalid){
      return;
    }
    
    else{
      let resestData={
        "newPassword": this.resetPasswordForm.value.password,
        "confirmPassword": this.resetPasswordForm.value.confirmpassword
      }
      this.user.resetpassword(resestData,this.token).subscribe((response:any)=>{
        console.log(response)
        this.route.navigateByUrl('/login')  
      })
    }
  }
}
