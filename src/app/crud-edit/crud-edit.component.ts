import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../business.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit, OnDestroy {

  business: any = {};
  sub: Subscription;
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder, 
              private bs: BusinessService) {this.createForm()}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bs.getBusiness(id).subscribe((business: any) => {
          if (business) {
            this.business = business;
            console.log(this.business);
          } else {
            console.log(`Business with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  editBusiness(person_name, busines_name, business_gst_number, id) {
    this.bs.editBusiness(person_name, busines_name, business_gst_number, id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/business']);
  }

}
