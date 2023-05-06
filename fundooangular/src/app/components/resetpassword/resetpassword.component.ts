import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm=this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmpassword:['',[Validators.required, Validators.minLength(8)]]
   
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.resetPasswordForm.invalid){
      return;
    }
    alert('Success!');
  }
}
