/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';


@Component({
    selector: 'bh-partner_adddeveloper',
    templateUrl: './partner_adddeveloper.template.html'
})

export class partner_adddeveloperComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    // developerForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     position: new FormControl(''),
    //     experience: new FormControl('')
    // });

    developerForm: FormGroup;

    constructor(private bdms: NDataModelService,  private fb: FormBuilder,
    private partnerservice:partnerservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
         this.developerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)]],
            email: ['', [Validators.required,  Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            position: [''],
            experience: ['',[Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
            contactNo: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
        });
    }

    get firstName() { return this.developerForm.get('firstName') }
    get lastName() { return this.developerForm.get('lastName') }
    get email() { return this.developerForm.get('email') }
    get experience() { return this.developerForm.get('experience') }
    get contactNo() { return this.developerForm.get('contactNo') }

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

    async submit(data) {
         let partid=sessionStorage.getItem('id');
         let obj={partner_id:partid,firstName:data.firstName,lastName:data.lastName,position:data.position,experience:data.experience,contactNo:data.contactNo,email:data.email};
       await this.partnerservice.savedev(obj);
        console.log(data);
             this.developerForm.reset(); 
    }
}
