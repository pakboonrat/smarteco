import { Component, OnInit , NgModule } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nikom-list',
  templateUrl: './nikom-list.component.html',
  styleUrls: ['./nikom-list.component.scss']
})
export class NikomListComponent implements OnInit {

  Nikoms:any = []

  constructor(private crudService: CrudService ) { }

  ngOnInit(): void {
    this.crudService.GetNikoms().subscribe(res =>{
      console.log(res)
      this.Nikoms = res;
    });
  }

  delete(id:any, i:any){
    console.log(id)
    if(window.confirm('ต้องการลบข้อมูล ?')){
      this.crudService.deleteNikom(id).subscribe((res) => {
        this.Nikoms.splice(i,1);
      })
    }
  }

}
