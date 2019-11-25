/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Skill {
  name: string;
}

@Component({
    selector: 'bh-partner_adddeveloper',
    templateUrl: './partner_adddeveloper.template.html'
})

export class partner_adddeveloperComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills:Skill[] = [];

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
            firstName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+$/)]],
            email: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            position: [''],
            presentWorkingCompany: ['', [Validators.maxLength(100), Validators.pattern(/^[a-zA-Z]+$/)]],
            experience: ['', [Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
            contactNo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
            selectskill:['']
        });
    }

    get firstName() { return this.developerForm.get('firstName') }
    get lastName() { return this.developerForm.get('lastName') }
    get email() { return this.developerForm.get('email') }
    get experience() { return this.developerForm.get('experience') }
    get contactNo() { return this.developerForm.get('contactNo') }
    get presentWorkingCompany() { return this.developerForm.get('presentWorkingCompany') }

    async submit(data) {
        console.log(data.selectskill);
        if (this.developerForm.valid) {
            let obj = {
                userId: this.userId,
                firstname: data.firstName,
                lastname: data.lastName,
                position: data.position,
                experience: data.experience,
                phone: data.contactNo,
                email: data.email,
                presentWorkingCompany: data.presentWorkingCompany,
                // selectskill:data.selectskill
            };
            await this.partnerservice.addDeveloper(obj);
            this.alertService.openSnackBar('Developer Added')
            this.developerForm.reset();
        } else {
            this.alertService.openSnackBar('Please Fill Mandatory Fields')
        }
    }

    add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our skill
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(skill): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
    }
}
}
