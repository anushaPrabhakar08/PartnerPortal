/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { channelservice } from '../../sd-services/channelservice';

@Component({
    selector: 'bh-memberregisteration',
    templateUrl: './memberregisteration.template.html'
})

export class memberregisterationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

     hide = true;
     
    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     userName: new FormControl(''),
    //     emailId: new FormControl(''),
    //     password: new FormControl('')
    // });

      profileForm: FormGroup;

    constructor(private bdms: NDataModelService,
        private fb: FormBuilder,
        private alertService: NSnackbarService,
        private rout: Router,
        private memberreg: channelservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
          this.profileForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            emailId: ['', [Validators.required,  Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            userName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[\w\s]+$/)]],
            password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
        });
    }

        get firstName() { return this.profileForm.get('firstName') }
        get lastName() { return this.profileForm.get('lastName') }
        get userName() { return this.profileForm.get('userName') }
        get password() { return this.profileForm.get('password') }
        get emailId() { return this.profileForm.get('emailId') }

    submit(data) {
        if (data.firstName == "" || data.lastName == "" || data.userName == "" || data.emailId == "" || data.password == "") {
            this.alertService.openSnackBar('fill all the details');
        } else {
            this.dm.memberregisteration = data;
            console.log(this.dm.memberregisteration);
            this.memberreg.channelmemberregistration(this.dm.memberregisteration);
            this.alertService.openSnackBar('Member Registered');
            this.rout.navigate(['/login/memberlogin']);
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
