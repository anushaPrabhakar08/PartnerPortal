/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService,NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

    constructor(private bdms: NDataModelService,
        private formBuilder: FormBuilder,
        private partnerservice:partnerservice,
         private alertService: NSnackbarService,
             private rout:Router,
    
        ) {
        super();
      
        this.mm = new ModelMethods(bdms);

    }
    firstFormGroup = new FormGroup({
        companyName: new FormControl(''),
        companyWebsite: new FormControl(''),
        companyType: new FormControl(''),
        numberofEmployees: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        userName: new FormControl(''),
        password: new FormControl(''),
        country: new FormControl(''),
        mobileNumber: new FormControl(''),
        emailId: new FormControl(''),
        designation: new FormControl(''),
        address: new FormControl('')
    });

    ngOnInit() {
        
    }

 submit(data) {
        
this.dm.partnerregistration= data;
if(typeof this.dm.partnerregistration === 'object'){
this.partnerservice.savepartnerdata(this.dm.partnerregistration);
 this.rout.navigate(['/login']);
}
else{
     this.alertService.openSnackBar('fill all the details');
    
}
        

this.firstFormGroup.reset();
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
