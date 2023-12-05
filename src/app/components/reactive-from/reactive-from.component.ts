import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss'],
})
export class ReactiveFromComponent implements OnInit {
  user: User = {
    name: '',
    surname: '',
    password: '',
    gender: '',
    username: '',
    bio: '',
    picture: '',
  };

  form!: FormGroup;

  name = new FormControl('');
  surname = new FormControl('');
  password = new FormControl('');
  gender = new FormControl('');
  username = new FormControl('');
  bio = new FormControl('');
  picture = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.user.name = this.name.value;
    this.user.surname = this.surname.value;
    this.user.password = this.password.value;
    this.user.gender = this.gender.value;
    this.user.username = this.username.value;
    this.user.bio = this.bio.value;
    this.user.picture = this.picture.value;
    console.log(this.user);
  }
}
