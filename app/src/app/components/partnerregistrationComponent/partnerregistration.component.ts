/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';
import { partnerregistration } from '../../models/partnerregistration.model';
import { Router } from '@angular/router';

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
    selector: 'bh-partnerregistration',
    templateUrl: './partnerregistration.template.html'
})

export class partnerregistrationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    companyGroup: FormGroup;
    profileGroup: FormGroup;
    accountGroup: FormGroup;
    companyTypeSource = ['service', 'product'];
    countrySource = ['India', 'US', 'London', 'Dubai', 'Egypt'];
    designationSource = ['Senior Engineer', 'Senior Developer', 'Senior Tester', 'Team Manager'];
    constructor(private bdms: NDataModelService,
        private fb: FormBuilder,
        private partnerservice: partnerservice,
        private alertService: NSnackbarService,
        private rout: Router) {
        super();
        this.mm = new ModelMethods(bdms);

    }

    ngOnInit() {
        this.companyGroup = this.fb.group({
            companyName: ['', Validators.required],
            companyWebsite: ['', Validators.required],
            companyType: ['', Validators.required],
            numberofEmployees: ['', Validators.required],
            address: ['']
        });
        this.profileGroup = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            mobileNumber: ['', Validators.required],
            country: ['', Validators.required],
            designation: ['', Validators.required],
            
        });
        this.accountGroup = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
            emailId: ['', Validators.required],
        });
    }

    savePartner() {
        let data = { ...this.companyGroup.value, ...this.profileGroup.value, ...this.accountGroup.value };
        this.dm.partnerregistration = data;
        if (typeof this.dm.partnerregistration === 'object') {
            this.partnerservice.savepartnerdata(this.dm.partnerregistration);
            this.rout.navigate(['/login/partnerlogin']);
        }
        else {
            this.alertService.openSnackBar('fill all the details');
        }
    }

    // submit(data) {

    //     this.dm.partnerregistration = data;
    //     if (typeof this.dm.partnerregistration === 'object') {
    //         this.partnerservice.savepartnerdata(this.dm.partnerregistration);
    //         this.rout.navigate(['/login']);
    //     }
    //     else {
    //         this.alertService.openSnackBar('fill all the details');
    //     }


    //     this.firstFormGroup.reset();
    // }

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

    delete(dataModelName, filter) {
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
