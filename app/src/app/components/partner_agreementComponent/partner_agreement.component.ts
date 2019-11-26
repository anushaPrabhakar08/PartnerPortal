/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog } from '@angular/material';
import { viewagreementComponent } from '../viewagreementComponent/viewagreement.component';
import { Title } from '@angular/platform-browser';
import { channelservice } from '../../sd-services/channelservice';
import { loginservice } from '../../sd-services/loginservice';


@Component({
    selector: 'bh-partner_agreement',
    templateUrl: './partner_agreement.template.html'
})

export class partner_agreementComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    userId;
    agreementData;
    constructor(private bdms: NDataModelService,
        private dialog: MatDialog,
        private title: Title,
        private channelservice: channelservice,
        private loginservice: loginservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    async ngOnInit() {
        this.title.setTitle('View Agreement');
        let user = (await this.loginservice.getCurrentUserId().then(result => { this.userId = result.local.result}));
        this.getAgreements();
    }

    openAgreement(data) {
        console.log("pdf Open");
        const dialogRef = this.dialog.open(viewagreementComponent, {
            data: {file: data, user: this.userId}
        });
    }
    objtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }

    async getAgreements() {
        this.agreementData = this.objtoArr((await this.channelservice.getPartnerAgreement({ userId: this.userId, type: 'aggreement' })).local.result);
        console.log(this.agreementData);
    }



}
