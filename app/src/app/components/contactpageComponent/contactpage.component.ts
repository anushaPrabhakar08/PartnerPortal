/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { contactmodel } from '../../models/contactmodel.model';
import { contactus } from '../../sd-services/contactus';
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
    selector: 'bh-contactpage',
    templateUrl: './contactpage.template.html'
})

export class contactpageComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
jobrole=['Salse & Marketing','Technology','Human Resource & Admin','Directors of Applications/IT'];
industry=['Manufacturing','insurance','Education'];
companysize=['1-49','50-99','100-249','250-499'];
country=['Afghanistan','Ailand Island','Albania','Algeria','Australia','india'];

contactmodel:contactmodel;
result;

contactdetails=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    companyemail:new FormControl(''),
    companyname:new FormControl(''),
    jobroles:new FormControl(''),
    industryname:new FormControl(''),
    mobilenumber:new FormControl(''),
    compsize:new FormControl(''),
    countryname:new FormControl(''),
    message:new FormControl(''),

})
    constructor(private bdms: NDataModelService,private alertService: NSnackbarService,private cont:contactus,private rout:Router) {
        super();
        this.mm = new ModelMethods(bdms);
          this.contactmodel = new contactmodel();
    }

    ngOnInit() {
this.rout.navigate(['/contact']);
    }

async submit(data){
this.dm.contactmodel=data;
   this.alertService.openSnackBar('submited');
this.result=(await this.cont.contactusp(this.dm.contactmodel));
this.ngOnInit();

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


}
