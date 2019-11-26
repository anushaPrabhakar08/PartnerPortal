/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject, Input } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'bh-partner_addlead',
    templateUrl: './partner_addlead.template.html'
})

export class partner_addleadComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    savedata;
    leadForm: FormGroup;
    data;
    rapdata;

    // @Input()
    // max: D | null
    tomorrow = new Date();
    constructor(private bdms: NDataModelService,
        private fb: FormBuilder,
        private partnerservice: partnerservice,
        private alertService: NSnackbarService,
        @Inject(MAT_DIALOG_DATA) private userId: any,
    ) {
        super();
        this.mm = new ModelMethods(bdms);
        this.tomorrow.setDate(this.tomorrow.getDate());
    }


    ngOnInit() {
        // console.log(this.userId);
        this.leadForm = this.fb.group({
            organisationName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
            location: ['', [Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
            orgWebsite: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            comment: ['', [Validators.maxLength(100), Validators.pattern(/^[\w\s]+$/)]],
            contactDetails: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
            leadGeneratedDate: [''],
            opportunityType: ['']
        });
    }

    get organisationName() { return this.leadForm.get('organisationName') }
    get orgWebsite() { return this.leadForm.get('orgWebsite') }
    get location() { return this.leadForm.get('location') }
    get comment() { return this.leadForm.get('comment') }
    get contactDetails() { return this.leadForm.get('contactDetails') }

    async savelead() {
        if (this.leadForm.valid) {
            this.dm.partner_addlead = this.leadForm.value;
            this.data = this.dm.partner_addlead;
            this.data.userId = this.userId;
            await this.partnerservice.savelead(this.data);
            this.alertService.openSnackBar('Lead created');
        }
        else {
            this.alertService.openSnackBar('fill all the details');
        }

    }


}
