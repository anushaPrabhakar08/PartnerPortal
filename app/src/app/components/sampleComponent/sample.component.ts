/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { fileService } from '../../sd-services/fileService';

@Component({
    selector: 'bh-sample',
    template: `
    
        <pdf-viewer [src]="pdfSrc"
                    [render-text]="true"
                    [show-all]="true"
                    [autoresize]="true"
                    [original-size]='true'
                    [fit-to-page]='false'
                    [render-text]='false'
                    style="display: block;height: 400px;"
        ></pdf-viewer>
        `
})

export class sampleComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    pdfSrc = "";

    @Input() fileId: string;
    @Input() src: string;
    imgDdata;
    constructor(private bdms: NDataModelService, private alertService: NSnackbarService,
        private fileService: fileService, ) {
        super();
        this.mm = new ModelMethods(bdms);
    }


    ngOnInit() {
        this.fetchPdf();
    }
    async fetchPdf() {

        console.log(this.fileId);
        let result = {response:""}
        //  result['response'] = (await this.fileService.readFile({ fileId: this.fileId }));
        // .then(result => {
            // var file = new Blob([result], {type: 'application/pdf'});
            //  var fileURL = window.URL.createObjectURL(file);
            //  console.log(showPdf(result));
            // this.imgdata = "data:image/jpeg;base64," + result;
            // console.log(result.response);
            // console.log(btoa(result))
            //   window.open(fileURL);
            // this.pdfSrc = result
        // });
    }

    showPdf(data) {
        const linkSource = 'data:application/pdf;base64,' + data;
        const downloadLink = document.createElement("a");
        const fileName = "sample.pdf";
        data = {
            'source': linkSource,
            'download': downloadLink,
        };
        return data;
        // downloadLink.href = linkSource;
        // downloadLink.download = fileName;
        // downloadLink.click();
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
