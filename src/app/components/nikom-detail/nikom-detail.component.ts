import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-nikom-detail',
  templateUrl: './nikom-detail.component.html',
  styleUrls: ['./nikom-detail.component.scss']
})
export class NikomDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetNikom(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        firstname: res['firstname'],
        username: res['username'],
        password: res['password'],
        surname: res['surname'],
        email: res['email'],
        tel: res['tel']
      })
    })

    this.updateForm = this.formBuilder.group({
      name: [''],
      firstname: [''],
      username: [''],
      password: [''],
      surname: [''],
      email: [''],
      tel: ['']
    })

  }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateNikom(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data updated successfully');
      this.ngZone.run(() => this.router.navigateByUrl('/nikom-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
