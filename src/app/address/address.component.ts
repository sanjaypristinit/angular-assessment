import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  data: any;
  addressField: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private cd: ChangeDetectorRef) { };

  addressForm!: FormGroup;
  ngOnInit() {

    this.addressForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      id: new FormControl(null)
    });
    this.setFormValue()
  }

  setFormValue() {
    this.addressField = JSON.parse(localStorage.getItem('addressField') as any)

    this.addressForm.patchValue({
      name: this.addressField.name,
      address: this.addressField.address,
      email: this.addressField.email,
      phone: this.addressField.phone,
      id: this.addressField.id
    });
  }

  onSubmit() {
    localStorage.setItem("newForm", JSON.stringify(this.addressForm.value))
    this.router.navigate(['address-list']);
  }
}





