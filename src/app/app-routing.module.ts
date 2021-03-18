import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNikomComponent } from './components/add-nikom/add-nikom.component';
import { NikomDetailComponent } from './components/nikom-detail/nikom-detail.component';
import { NikomListComponent } from './components/nikom-list/nikom-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-nikom' },
  { path: 'nikom-list', component: NikomListComponent },
  { path: 'add-nikom', component: AddNikomComponent },
  { path: 'edit-nikom/:id', component: NikomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
