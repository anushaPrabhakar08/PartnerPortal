/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { MatDialog } from '@angular/material';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { NDataModelService, NLoginService, NSnackbarService, NSystemService , NHTTPLoaderService } from 'neutrinos-seed-services';
import { user } from '../../models/user.model';
import { loginComponent } from '../loginComponent/login.component';
import { partner_adddeveloperComponent } from '../partner_adddeveloperComponent/partner_adddeveloper.component';
import { partnerservice } from '../../sd-services/partnerservice';
import { deletedeveloperComponent } from '../deletedeveloperComponent/deletedeveloper.component';



@Component({
    selector: 'bh-partner_developers',
    templateUrl: './partner_developers.template.html'
})

export class partner_developersComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
data;
    dataSource = new MatTableDataSource(this.data);

    constructor(private bdms: NDataModelService, private dialog:MatDialog, private partnerservice:partnerservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      console.log(this.dataSource);
   this.getdata();

    }

    openDeleteDialog(data) {
        const dialogRef = this.dialog.open(deletedeveloperComponent, {
            width: '450px',
            //disableClose: true,
            data: data
        });
    }

    async getdata(){
        this.data = this.leadObjtoArr((await this.partnerservice.getdeveloper()).local.result);
    }
    leadObjtoArr(obj){
        return Array.from(Object.keys(obj), k=> obj[k]);
    }


    addDeveloper() {
        const dialogRef = this.dialog.open(partner_adddeveloperComponent, {
            width: '450px',
            //disableClose: true,
            data: 'hello'
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
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
