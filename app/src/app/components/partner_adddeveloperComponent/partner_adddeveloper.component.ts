/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { ReactiveFormsModule,FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

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
    selector: 'bh-partner_adddeveloper',
    templateUrl: './partner_adddeveloper.template.html'
})

export class partner_adddeveloperComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    developerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        position: new FormControl('')
    });

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

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

submit(data) {
    if(data.firstName=="" && data.lastName=="" && data.position=="" ){
        console.log('data not present');
    }else{
  console.log(data);
    }
this.developerForm.reset();
}
}
