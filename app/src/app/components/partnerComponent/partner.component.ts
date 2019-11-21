/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { channelservice } from '../../sd-services/channelservice';
import { loginservice } from '../../sd-services/loginservice';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
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
    selector: 'bh-partner',
    templateUrl: './partner.template.html'
})

export class partnerComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    // sidenavdata="";
    partnerdata;
    pageTitle;
    data = "notification";
    badgeCount: Number;
    constructor(private bdms: NDataModelService, 
    private channelservice: channelservice, 
    private router: Router, route: ActivatedRoute, 
    public media: MediaObserver, 
    public title: Title,
     private loginservice: loginservice,) {
        super();
        this.mm = new ModelMethods(bdms);
        this.badgeCount = 1;

    }

      ngOnInit() {
        // let getd = sessionStorage.getItem('id');
        // console.log(getd);
        // this.partnerdata = (await this.channelservice.getparticularpartner(getd)).local.result;
        // console.log(this.partnerdata);

        this.loginservice.isLoggedIn().then(data => {
            if (!data.local.state) {
                this.loginservice.logout();
                if (!this.loggedIn) {
                    this.loggedIn = false;
                    this.router.navigateByUrl('/login');
                }
            }
        });

    }

    clearCount() {
        this.badgeCount = 0;
    }

    // ngAfterViewInit(){
    //       let currentUrl = this.router.url.replace('/partner/','');
    //     if(currentUrl=="marketing_collaterals"){
    //      this.pageTitle="Marketing Collaterals";
    //  }
    //  console.log(currentUrl);
    //  console.log(this.pageTitle);
    // }



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
