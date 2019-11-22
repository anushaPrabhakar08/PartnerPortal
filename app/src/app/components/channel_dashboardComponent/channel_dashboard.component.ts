/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { partnerservice } from '../../sd-services/partnerservice';
import { channelservice } from '../../sd-services/channelservice';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'bh-channel_dashboard',
    templateUrl: './channel_dashboard.template.html'
})

export class channel_dashboardComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    data;

    dataSource = new MatTableDataSource(this.data);

    constructor(private bdms: NDataModelService, 
                private router: Router, 
                private partnerservice: partnerservice, 
                private channelservice: channelservice,
                private titleService: Title) {
        super();
        this.mm = new ModelMethods(bdms);

    }

    ngOnInit() {
        this.titleService.setTitle('Partners')
        this.getdata();
    }


    async getdata() {
        this.data = this.leadObjtoArr((await this.channelservice.getpartnerlist()).local.result);
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.data);
    }

    leadObjtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    showPartnerDetails(table) {
        this.router.navigate(['admin/partner', table.userId]);    
    }


}
