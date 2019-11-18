/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fileService } from '../../sd-services/fileService';

@Component({
    selector: 'bh-uploadcertificate',
    templateUrl: './uploadcertificate.template.html'
})
export class uploadcertificateComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    formData = new FormData();
    uploadData = false;
    previewImage = '/assets/Web/neutrinos-prime-certiificate.jpg';
    constructor(private bdms: NDataModelService, public dialogRef: MatDialogRef<uploadcertificateComponent>, private alertService: NSnackbarService,
        private fileService: fileService,@Inject(MAT_DIALOG_DATA) public data) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    ngOnInit() {
        console.log(this.data);
    }
    preview(event) {
        if (event && event[0]) {
            console.log(this.data);
            this.uploadData = true;
            var reader = new FileReader();
            this.formData.append('file', event[0]);
            this.formData.append('id', this.data);
            this.formData.append('type', 'certificate');
            reader.readAsDataURL(event[0]);
            reader.onload = (data: any) => {
                this.previewImage = data.target.result;
            }
        }
    }
    uploadFile(event) {
        if (this.uploadData) {
            this.upload(event);
            this.resetUpload(event);
        }
    }
    async upload(event) {
        let result = (await this.fileService.sendFile(this.formData)).local.response;
        this.alertService.openSnackBar(result.message);
    }
    resetUpload(event) {
        this.uploadData = false;
        event.file = null;
        event.fileName = null;
        this.formData.delete('file');
        this.formData.delete('id');
        this.formData.delete('type');
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