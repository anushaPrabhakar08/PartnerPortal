/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule,FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { partnerservice } from '../../sd-services/partnerservice';

@Component({
    selector: 'bh-partner_addlead',
    templateUrl: './partner_addlead.template.html'
})

export class partner_addleadComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
  
    profileForm: FormGroup;

    constructor(private bdms: NDataModelService, private fb: FormBuilder, private partnerservice:partnerservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }


    ngOnInit() {
         this.profileForm = this.fb.group({
            organisationName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]],
            location: ['', [Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]],
            orgWebsite: ['', [Validators.required,  Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            comment: ['', [Validators.maxLength(100), Validators.pattern(/^[\w\s]+$/)]],
            contactDetails: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
            leadGeneratedDate:[''],
            opportunityType: ['']
        });
    }
  
        get organisationName() { return this.profileForm.get('organisationName') }
        get orgWebsite() { return this.profileForm.get('orgWebsite') }
        get location() { return this.profileForm.get('location') }
        get comment() { return this.profileForm.get('comment') }
        get contactDetails() { return this.profileForm.get('contactDetails') }

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

submit(data) {
    console.log(data);
    let partid=sessionStorage.getItem('id');
let obj={organisationName:data.organisationName,orgWebsite:data.orgWebsite,location:data.location,opportunityType:data.opportunityType,leadGeneratedDate:data.leadGeneratedDate,contactDetails:data.contactDetails,comment:data.comment};
console.log(obj);
this.partnerservice.saveleadata(data);
this.profileForm.reset();
}


}
