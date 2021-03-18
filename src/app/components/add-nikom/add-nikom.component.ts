import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-nikom',
  templateUrl: './add-nikom.component.html',
  styleUrls: ['./add-nikom.component.scss']
})
export class AddNikomComponent implements OnInit {

  nikomForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.nikomForm = this.formBuilder.group({
      name: [''],
      username: [''],
      password: [''],
      firstname: [''],
      surname: [''],
      email: [''],
      tel: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddNikom(this.nikomForm.value)
    .subscribe(() => {
      console.log("Data added Successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/nikom-list'))
    },(err) => {
      console.log(err);
    })
  }

}
