import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit, OnDestroy {
  address: any = []
  newAddress: any;
  unSubscribe = new Subject<any>()
  constructor(
    private commonService: CommonService, private router: Router
  ) { }

  ngOnInit(): void {
    this.newAddress = JSON.parse(localStorage.getItem('newForm') as any)
    this.commonService.getCountryData().pipe(takeUntil(this.unSubscribe)).subscribe((addresses: any) => {
      this.address = addresses
    })
    this.setFormValue()
  }


  setFormValue() {
    this.address.find((element: any, index: number) => {
      if (element?.id === this.newAddress?.id) {
        this.address[index].name = this.newAddress.name
        this.address[index].address = this.newAddress.address
        this.address[index].email = this.newAddress.email
        this.address[index].phone = this.newAddress.phone
      }
    });
  }
  editForm(event: any) {
    this.address.find((value: any) => {
      if (event?.id === value?.id) {
        localStorage.setItem('addressField', JSON.stringify(value))
      }
    })
    this.router.navigate(['address']);
  }

  deleteForm(event: any) {
    this.address.find((value: any, index: number) => {
      if (event?.id === value?.id) {
        this.address.splice(index, 1)
      }
    })
  }

  ngOnDestroy() {
    this.unSubscribe.next(true);
    this.unSubscribe.complete();
}
}


