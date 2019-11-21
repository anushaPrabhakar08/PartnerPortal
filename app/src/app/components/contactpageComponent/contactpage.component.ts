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
import { partnerservice } from '../../sd-services/partnerservice';
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
industry=['Banking & Finance','Retail','Public Sector','insurance','Education'];
companysize=['1-49','50-99','100-249','250-499'];
country=['Afghanistan','Ailand Island','Albania','Algeria','Australia','india'];

requestForm: Formgroup;

    constructor(private bdms: NDataModelService,private alertService: NSnackbarService,private cont:contactus,private rout:Router,
    private partnerservice: partnerservice) {
        super();
        this.mm = new ModelMethods(bdms);
          this.contactmodel = new contactmodel();
    }

    ngOnInit() {
        this.requestForm = new FormGroup({
            user: new FormGroup({
                firstname: new FormControl('', Validators.required),
                lastname: new FormControl('', Validators.required),
                email: new FormControl('', Validators.required),
                mobile: new FormControl('', Validators.required),
            }),
            company: new FormGroup({
                name: new FormControl('', Validators.required),
                industry: new FormControl('', Validators.required),
                size: new FormControl('', Validators.required),
                message: new FormControl('', Validators.required),
                country: new FormControl('', Validators.required),
            }),

        });
    }

    submit() {
        console.log(this.requestForm.value)
        if (this.requestForm.valid) {
            let result = this.partnerservice.requestAccess(this.requestForm.value);
            this.alertService.openSnackBar('Please wait');
            result.then(data=>{
                this.alertService.openSnackBar(data.local.result.message);
                this.requestForm.reset();
                if(data.local.result.status == 'success'){
                    this.rout.navigateByUrl('/home');
                }
            });
        } else {
            this.alertService.openSnackBar('Please fill all mandatory fields');
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
