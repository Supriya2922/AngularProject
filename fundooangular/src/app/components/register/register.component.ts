import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });

  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("Enter valid data");
      return;
    }
    else {
      let regData = {
        "firstName": this.registerForm.value.firstname,
        "lastName": this.registerForm.value.lastname,
        "email": this.registerForm.value.email,
        "password": this.registerForm.value.password
      }
      this.user.registration(regData).subscribe((response: any) => {
        console.log(response)
      })
    }
  }
}
