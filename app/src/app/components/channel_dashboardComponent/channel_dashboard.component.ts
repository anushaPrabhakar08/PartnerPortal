/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';


export interface PeriodicElement {
    //id: string;
    no: number;
    companyType: string;
    location: string;
    companyWebsite: string;
    companyName: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, companyName: 'JoyIT', companyType: 'Product based', companyWebsite: 'www.joyitconsulting.com', location: 'Bangalore' },
    { no: 2, companyName: 'Mentric', companyType: 'Service based', companyWebsite: 'www.mentric.com', location: 'Chennai' },
    { no: 3, companyName: 'Indigo', companyType: 'Product based', companyWebsite: 'www.indigo.com', location: 'Pune' },
    { no: 4, companyName: 'Dell', companyType: 'Product based', companyWebsite: 'www.dell.com', location: 'Chennai' },
    { no: 5, companyName: 'Philips', companyType: 'Service based', companyWebsite: 'www.philips.com', location: 'Pune' },
    { no: 6, companyName: 'Squirrelseva', companyType: 'Service based based', companyWebsite: 'www.squirrelseva.com', location: 'Bangalore' },
    { no: 7, companyName: 'Worksheets', companyType: 'Product based', companyWebsite: 'www.worksheets.com', location: 'Pune' },
    { no: 8, companyName: 'Wipro', companyType: 'Product based', companyWebsite: 'www.wipro.com', location: 'Pune' },
    { no: 9, companyName: 'Matrix', companyType: 'Product based', companyWebsite: 'www.matrix.com', location: 'Bangalore' },
    { no: 10, companyName: 'Moodys', companyType: 'Service based', companyWebsite: 'www.moodys.com', location: 'Bangalore' },
];

@Component({
    selector: 'bh-channel_dashboard',
    templateUrl: './channel_dashboard.template.html'
})

export class channel_dashboardComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    dataSource = new MatTableDataSource(ELEMENT_DATA);

    constructor(private bdms: NDataModelService,private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);

    }

    // onPaginateChange(event) {
    //     console.log("rytvubjnkft")
    //    // alert(JSON.stringify("Current page index: " + event.pageIndex));
    // }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    // applyFilter(filterValue: string) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    // }

    showPartnerDetails() {
        const test = `/channel/dashboardPartnerDetails`;
        this.router.navigate([test]);
        console.log("ghjyig")
        //this.router.navigateByUrl('/dashboardPartnerDetails');
    }

        get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
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

        delete (dataModelName, filter) {
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
