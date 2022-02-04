//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simple_CRUD_Angular';

  baseURL = 'http://rental.test/api/'
  brandForm!: FormGroup;
  isSubmitted = false;
  brandList: any;

  constructor(
  private _http: HttpClient,
  private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.brandForm = this._fb.group({
      id: [0],
      name: ['', Validators.required],
      is_active: [1] ,
    });

  }

  get _fc() { return this.brandForm.controls;}


}
