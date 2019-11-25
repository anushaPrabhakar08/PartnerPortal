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
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { loginservice } from '../../sd-services/loginservice';
// import { Pipe, PipeTransform } from '@angular/core';
// import { DatePipe } from '@angular/common';

@Component({
    selector: 'bh-partner_leads',
    templateUrl: './partner_leads.template.html'
})

export class partner_leadsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data = [];
    rapdata;
    userId;
    date;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


    dataSource = new MatTableDataSource(this.data);

    constructor(private bdms: NDataModelService, private dialog: MatDialog,
        private partnerservice: partnerservice,
        private title: Title,
        private loginservice: loginservice,
       // private datePipe: DatePipe
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    async getdata() {
        try {
            let id =  (await this.loginservice.getCurrentUserId().then(result => { this.userId = result.local.result}));
            // console.log(this.userId);
            this.data = this.leadObjtoArr((await this.partnerservice.getLeads({userId: this.userId})).local.result);
            
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
        this.title.setTitle('Leads');
        //this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');
    }

   

    openDeleteDialog(table) {
        const dialogRef = this.dialog.open(deletepopupComponent,{
            width: '450px',
            disableClose: true,
            data: table
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getdata();
        });
    }


    addLead() {
        const dialogRef = this.dialog.open(partner_addleadComponent,{ disableClose: true }, {
            width: '40%',
            height: '60%',
            data: this.userId
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getdata();
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    

}
