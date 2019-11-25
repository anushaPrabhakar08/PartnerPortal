/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { contactmodel } from '../../models/contactmodel.model';
import { contactus } from '../../sd-services/contactus';
import { Router } from '@angular/router';
import { partnerservice } from '../../sd-services/partnerservice';
import { countryservice } from '../../sd-services/countryservice';
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
    industry = ['Banking & Finance', 'Retail', 'Public Sector', 'Insurance', 'Education'];
    companysize = ['1-49', '50-99', '100-249', '250-499'];
    country = [];

    requestForm: FormGroup;
    contactmodel: contactmodel;

    constructor(private bdms: NDataModelService, private alertService: NSnackbarService, private cont: contactus, private rout: Router,
        private partnerservice: partnerservice, private count: countryservice) {
        super();
        this.mm = new ModelMethods(bdms);
        this.contactmodel = new contactmodel();
    }

    async ngOnInit() {


        this.requestForm = new FormGroup({
            user: new FormGroup({
                firstname: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]),
                lastname: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]),
                email: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
                mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
            }),
            company: new FormGroup({
                name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z]+$/)]),
                industry: new FormControl('', Validators.required),
                size: new FormControl('', Validators.required),
                message: new FormControl(''),
                country: new FormControl('', Validators.required),
            }),

        });
        this.getcountries();
    }

    async  getcountries() {
        let countryres = (await this.count.getcountry()).local.countryresult;
        for (let key in countryres) {
            this.country[key] = countryres[key].name;
        }
    }

    get firstname() { return this.requestForm.controls.user.get('firstname'); }
    get lastname() { return this.requestForm.controls.user.get('lastname') }
    get email() { return this.requestForm.controls.user.get('email') }
    get mobile() { return this.requestForm.controls.user.get('mobile') }

    get name() { return this.requestForm.controls.company.get('name') }
    //   get industry() { return this.requestForm.controls.company.get('industry') }
    //   get size() { return this.requestForm.controls.company.get('size') }
    //   get message() { return this.requestForm.controls.company.get('message') }
    //   get country() { return this.requestForm.controls.company.get('country') }

    submit() {
        console.log(this.requestForm.value)
        if (this.requestForm.valid) {
            let result = this.partnerservice.requestAccess(this.requestForm.value);
            this.alertService.openSnackBar('Please wait');
            result.then(data => {
                this.alertService.openSnackBar(data.local.result.message);
                this.requestForm.reset();
                if (data.local.result.status == 'success') {
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
