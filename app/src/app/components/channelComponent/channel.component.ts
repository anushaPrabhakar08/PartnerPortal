/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { loginservice } from '../../sd-services/loginservice';
import { Router } from '@angular/router';


@Component({
    selector: 'bh-channel',
    templateUrl: './channel.template.html'
})

export class channelComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    loggedIn = true;
    userType = 'C';
    constructor(private bdms: NDataModelService,
        public media: MediaObserver,
        public titleService: Title,
        private router: Router,
        public loginservice: loginservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.loginservice.isLoggedIn('C').then(data => {
            if (data.local.state == null) {
                this.loggedIn = false;
            }
        });
    }


}
