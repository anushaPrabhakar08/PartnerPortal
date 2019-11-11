/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { user } from '../../models/user.model';
import { loginComponent } from '../loginComponent/login.component';
<<<<<<< Updated upstream
import { partnerservice } from '../../sd-services/partnerservice';
=======
import { partner_addleadComponent } from '../partner_addleadComponent/partner_addlead.component';
import { deletepopupComponent } from '../deletepopupComponent/deletepopup.component';


>>>>>>> Stashed changes
export interface PeriodicElement {
    no: number;
    oppType: string;
    location: string;
    website: string;
    orgName: string;
    leadCreationDate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, orgName: 'JoyIT', oppType: 'Hydrogen', website: 'www.joyitconsulting.com', location: 'Bangalore', leadCreationDate: '02-05-2019' },
    { no: 2, orgName: 'Mentric', oppType: 'Helium', website: 'www.mentric.com', location: 'chennai', leadCreationDate: '02-05-2019' },
    { no: 3, orgName: 'Indigo', oppType: 'Lithium', website: 'www.indigo.com', location: 'Bangalore', leadCreationDate: '02-05-2019' },
    { no: 4, orgName: 'Dell', oppType: 'Beryllium', website: 'www.dell.com', location: 'Bangalore', leadCreationDate: '02-05-2019' },
    { no: 5, orgName: 'Philips', oppType: 'Boron', website: 'www.philips.com', location: 'Hyderabad', leadCreationDate: '02-05-2019' },
    { no: 6, orgName: 'Squirrelseva', oppType: 'Carbon', website: 'www.squirrelseva.com', location: 'pune', leadCreationDate: '02-05-2019' },
    { no: 7, orgName: 'Worksheets', oppType: 'Nitrogen', website: 'www.worksheets.com', location: 'pune', leadCreationDate: '02-05-2019' },
    { no: 8, orgName: 'Wipro', oppType: 'Oxygen', website: 'www.wipro.com', location: 'Mumbai', leadCreationDate: '02-05-2019' },
    { no: 9, orgName: 'Matrix', oppType: 'Fluorine', website: 'www.matrix.com', location: 'Hyderabad', leadCreationDate: '02-05-2019' },
    { no: 10, orgName: 'Moodys', oppType: 'Neon', website: 'www.moodys.com', location: 'Hyderabad', leadCreationDate: '02-05-2019' },
];


@Component({
    selector: 'bh-partner_leads',
    templateUrl: './partner_leads.template.html'
})

export class partner_leadsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

            dataSource = new MatTableDataSource(this.data);

<<<<<<< Updated upstream
    constructor(private bdms: NDataModelService, 
    private dialog:MatDialog, 
    private partnerservice:partnerservice
    ) {
=======
    constructor(private bdms: NDataModelService, private dialog: MatDialog) {
>>>>>>> Stashed changes
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getleads();
        console.log(this.dataSource);

    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(deletepopupComponent, {
            width: '450px',
            //disableClose: true,
            data: 'hello'
        });
    }


    addLead() {
        const dialogRef = this.dialog.open(partner_addleadComponent, {
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



    async getleads( ){
        this.data = (await this.partnerservice.getleadsdata()).local.result;
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
