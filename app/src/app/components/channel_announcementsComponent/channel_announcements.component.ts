/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { channelservice } from '../../sd-services/channelservice';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {announcepartnerlistComponent} from  '../announcepartnerlistComponent/announcepartnerlist.component'
import { announcement } from '../../models/announcement.model';
import { Title } from '@angular/platform-browser';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

@Component({
    selector: 'bh-channel_announcements',
    templateUrl: './channel_announcements.template.html'
})

export class channel_announcementsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    public classicEditor = ClassicEditor;
    constructor(private bdms: NDataModelService, private channelservice: channelservice,private dialog:MatDialog, private titleService: Title,private rout:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }
announcementdetail=new FormGroup({
announcement:new FormControl('')
})
    // partnerType = [
    //     { value: 'primePartner', viewValue: 'Prime Partner' },
    //     { value: 'normalPartner', viewValue: 'Normal Partner' },
    // ];
submit(data){
    console.log(data);
}
opendilogue(data){
     const dialogRef = this.dialog.open(announcepartnerlistComponent, {
      width: '250px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {

this.rout.navigate(['/admin/announcements']);
    });
}
    ngOnInit() {
        this.titleService.setTitle('Announcements')
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
