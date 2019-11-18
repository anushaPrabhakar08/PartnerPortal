/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { loginservice } from '../../sd-services/loginservice';

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {
  mm: ModelMethods;
  isTextFieldType = false;
  constructor(private bdms: NDataModelService,
    private rout:Router,
    private alertService: NSnackbarService,
    private router: Router,
    private loginservice:loginservice
  ) {
    super();
    this.mm = new ModelMethods(bdms);
  }

  ngOnInit() {
  }

}
