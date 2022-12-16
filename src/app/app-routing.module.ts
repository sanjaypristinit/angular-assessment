import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '', component: AddressDetailComponent
  },
  {
    path: 'address-list', component: AddressDetailComponent
  },
  {
    path: 'address', component: AddressComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
