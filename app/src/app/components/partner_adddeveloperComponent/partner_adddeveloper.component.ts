/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'bh-partner_adddeveloper',
    templateUrl: './partner_adddeveloper.template.html'
})

export class partner_adddeveloperComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    developerForm: FormGroup;

    constructor(private bdms: NDataModelService, private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private userId: any,
        private alertService: NSnackbarService,
        private partnerservice: partnerservice) {
        super();
        this.mm = new ModelMethods(bdms);
        // console.log(userId);
    }

    ngOnInit() {
        this.developerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            email: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            position: [''],
            presentWorkingCompany: ['', [Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]],
            experience: ['', [Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
            contactNo: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
        });
    }

    get firstName() { return this.developerForm.get('firstName') }
    get lastName() { return this.developerForm.get('lastName') }
    get email() { return this.developerForm.get('email') }
    get experience() { return this.developerForm.get('experience') }
    get contactNo() { return this.developerForm.get('contactNo') }
    get presentWorkingCompany() { return this.developerForm.get('presentWorkingCompany') }

    async submit(data) {
        if (this.developerForm.valid) {
            let obj = {
                userId: this.userId,
                firstname: data.firstName,
                lastname: data.lastName,
                position: data.position,
                experience: data.experience,
                phone: data.contactNo,
                email: data.email,
                presentWorkingCompany: data.presentWorkingCompany
            };
            await this.partnerservice.addDeveloper(obj);
            this.alertService.openSnackBar('Developer Added')
            this.developerForm.reset();
        } else {
            this.alertService.openSnackBar('Please Fill Mandatory Fields')
        }
    }
}
