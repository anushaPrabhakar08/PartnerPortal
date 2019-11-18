/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/


// import { BDataModelService } from '../service/bDataModel.service';


import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router';
import { user } from '../../models/user.model';
import { loaderComponent } from '../loaderComponent/loader.component';
import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NLoginService, NSnackbarService, NSystemService , NHTTPLoaderService } from 'neutrinos-seed-services';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { loginservice } from '../../sd-services/loginservice';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

/**
 *
 * Service Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */

@Component({
    selector: 'bh-partnerlogin',
    templateUrl: './partnerlogin.template.html'
})

export class partnerloginComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
  user: user;
   constructor(private bdms: NDataModelService,
    private rout:Router,
    private alertService: NSnackbarService,
    private router: Router,
    private dialog: MatDialog,
    private httpLoaderService: NHTTPLoaderService,
    private loginservice:loginservice
  ) {
    super();
    this.mm = new ModelMethods(bdms);
    this.user = new user();
  }
    ngOnInit() {

    }
      openDialog() {
    const dialogRef = this.dialog.open(loaderComponent, {
      data: { message: 'Authenticating' },
      width: '250px',
      disableClose: true
    });
  }


    data;

  async authenticate() {
   
    console.log(this.user.username);    
    this.data=(await this.loginservice.login( this.user.username,this.user.password)).local.result;
    console.log(typeof this.data);
    if(Object.keys(this.data).length===0){
        this.alertService.openSnackBar('username or password incorrect');
    }else{
        this.rout.navigate(['/partner/dashboardPartnerAgreement']);
      sessionStorage.setItem('id',this.data[0]._id);

    }
  }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
