import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];

  projectForm = new FormGroup({
    projectName: new FormControl('RCB', Validators.required),
    email: new FormControl('admin@gmail.it', [
      Validators.required,
      Validators.email,
    ]),
    projectStatus: new FormControl(this.projectStatus, Validators.required),
  });

  ngOnInit() {}

  onSubmitForm() {
    console.log(this.projectForm);
  }
}
