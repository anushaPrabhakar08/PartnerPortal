/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';
import { partnerregistration } from '../../models/partnerregistration.model';
import { Router } from '@angular/router';


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
            companyName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            companyWebsite: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            companyType: [''],
            numberofEmployees: ['',[ Validators.required, Validators.maxLength(5), Validators.pattern(/^[0-9]*$/)]],
            address: ['']
        });
        this.profileGroup = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
            country: [''],
            designation: [''],

        });
        this.accountGroup = this.fb.group({
            userName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[\w\s]+$/)]],
            password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
            emailId: ['', [Validators.required,  Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }

    get companyName() { return this.companyGroup.get('companyName') }
    get companyWebsite() { return this.companyGroup.get('companyWebsite') }
    get numberofEmployees() { return this.companyGroup.get('numberofEmployees') }

    get firstName() { return this.profileGroup.get('firstName') }
    get lastName() { return this.profileGroup.get('lastName') }
    get mobileNumber() { return this.profileGroup.get('mobileNumber') }

    get userName() { return this.accountGroup.get('userName') }
    get password() { return this.accountGroup.get('password') }
    get emailId() { return this.accountGroup.get('emailId') }

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
