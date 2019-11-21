/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { partner_addleadComponent } from '../partner_addleadComponent/partner_addlead.component';
import { deletepopupComponent } from '../deletepopupComponent/deletepopup.component';
import { partnerservice } from '../../sd-services/partnerservice';
import {Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'bh-partner_leads',
    templateUrl: './partner_leads.template.html'
})

export class partner_leadsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data = [];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


    dataSource = new MatTableDataSource(this.data);

    constructor(private bdms: NDataModelService, private dialog: MatDialog,
        private partnerservice: partnerservice,
         private title:Title
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    async getdata() {
        try {
            let partid=sessionStorage.getItem('id');
            
            let partobj={partner_id:partid};
            console.log(partobj);
            this.data = this.leadObjtoArr((await this.partnerservice.getleadsdata(partid)).local.result);
            console.log(this.data);
            this.dataSource = new MatTableDataSource(this.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        catch (e) {
            console.log(e);
        }
    }
    leadObjtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }
    ngOnInit() {
        this.getdata();
        // this.title.setTitle('Leads');
    }

    openDeleteDialog(table) {
        const dialogRef = this.dialog.open(deletepopupComponent, {
            width: '450px',
            data: table
        });
            dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
    });
    }


    addLead() {
        const dialogRef = this.dialog.open(partner_addleadComponent, {
            width: '450px',
            height: '500px',
            data: 'hello'
        });
        dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
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
