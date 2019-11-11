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
import { deletepopupComponent } from '../deletepopupComponent/deletepopup.component';
import { partner_adddeveloperComponent } from '../partner_adddeveloperComponent/partner_adddeveloper.component';

export interface PeriodicElement {
    no: number;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    position: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, status: 'fresher', firstName: 'Anusha', email: 'www.joyitconsulting.com', lastName: 'p', position: 'Junior developer'},
    { no: 2, status: 'experienced', firstName: 'Anup', email: 'www.mentric.com', lastName: 'Kumar', position: 'senior developer' },
    { no: 3, status: 'fresher', firstName: 'Pavan', email: 'www.indigo.com', lastName: 'Kumar', position: 'Junior developer' },
    { no: 4, status: 'experienced', firstName: 'Namitha', email: 'www.dell.com', lastName: 'Be', position: 'senior developer' },
    { no: 5, status: 'fresher', firstName: 'Nitesh', email: 'www.philips.com', lastName: 'Desai', position: 'Junior developer' },
    { no: 6, status: 'fresher', firstName: 'Nikhil', email: 'www.squirrelseva.com', lastName: 'Desai', position: 'Junior developer' },
    { no: 7, status: 'fresher', firstName: 'Gokul', email: 'www.worksheets.com', lastName: 'kanan', position: 'Junior developer' },
    { no: 8, status: 'experienced', firstName: 'Jagadeshwari', email: 'www.wipro.com', lastName: 'Murugan', position: 'senior developer' },
    { no: 9, status: 'experienced', firstName: 'Akshara', email: 'www.matrix.com', lastName: 'singhania', position: 'senior developer' },
    { no: 10, status: 'experienced', firstName: 'Viren', email: 'www.moodys.com', lastName: 'vadeyar', position: 'senior developer' },
];

@Component({
    selector: 'bh-partner_developers',
    templateUrl: './partner_developers.template.html'
})

export class partner_developersComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    dataSource = new MatTableDataSource(ELEMENT_DATA);

    constructor(private bdms: NDataModelService, private dialog:MatDialog) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(deletepopupComponent, {
            width: '450px',
            //disableClose: true,
            data: 'hello'
        });
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
