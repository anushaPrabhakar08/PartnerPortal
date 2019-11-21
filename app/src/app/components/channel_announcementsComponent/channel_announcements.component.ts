/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

import { channelservice } from '../../sd-services/channelservice';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {announcepartnerlistComponent} from  '../announcepartnerlistComponent/announcepartnerlist.component'
import { announcement } from '../../models/announcement.model';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'bh-channel_announcements',
    templateUrl: './channel_announcements.template.html'
})

export class channel_announcementsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
 
    constructor(private bdms: NDataModelService, private channelservice: channelservice,private dialog:MatDialog, private titleService: Title) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    // partnerType = [
    //     { value: 'primePartner', viewValue: 'Prime Partner' },
    //     { value: 'normalPartner', viewValue: 'Normal Partner' },
    // ];

opendilogue(){
     const dialogRef = this.dialog.open(announcepartnerlistComponent, {
      width: '250px',
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
}
    ngOnInit() {
        this.titleService.setTitle('Announcements')
    }

    submit(data){
       // this.data = this.leadObjtoArr((await this.channelservice.postAnnouncement()).local.result);
    }

    async getdata() {
      // this.data = this.leadObjtoArr((await this.channelservice.postAnnouncement()).local.result);
       // console.log(this.data);
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
