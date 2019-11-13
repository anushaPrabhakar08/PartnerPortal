/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { partnerservice } from '../../sd-services/partnerservice';
import { uploadcertificateComponent } from '../uploadcertificateComponent/uploadcertificate.component';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
    //id: string;
    no: number;
    position: string;
    name: string;
    status:string;
    email:string;
}

export interface LeadsElement {
    no: number;
    orgName: string;
    orgWebsite: string;
    leadCreationDate: string;
    oppType:string;
    location;
}
const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, status: 'fresher', name: 'Anusha', email: 'www.joyitconsulting.com',  position: 'Junior developer'},
    { no: 2, status: 'experienced', name: 'Anup', email: 'www.mentric.com',  position: 'senior developer' },
    { no: 3, status: 'fresher', name: 'Pavan', email: 'www.indigo.com', position: 'Junior developer' },
    { no: 4, status: 'experienced', name: 'Namitha', email: 'www.dell.com', position: 'senior developer' },
    { no: 5, status: 'fresher', name: 'Nitesh', email: 'www.philips.com', position: 'Junior developer' },
    { no: 6, status: 'fresher', name: 'Nikhil', email: 'www.squirrelseva.com', position: 'Junior developer' },
    { no: 7, status: 'fresher', name: 'Gokul', email: 'www.worksheets.com',  position: 'Junior developer' },
    { no: 8, status: 'experienced', name: 'Jagadeshwari', email: 'www.wipro.com', position: 'senior developer' },
    { no: 9, status: 'experienced', name: 'Akshara', email: 'www.matrix.com',  position: 'senior developer' },
    { no: 10, status: 'experienced', name: 'Viren', email: 'www.moodys.com', position: 'senior developer' },
];

const LEADS_DATA: LeadsElement[] = [
    { no: 1, orgName: 'JoyIT', oppType: 'Resalers',  orgWebsite: 'www.joyitconsulting.com', location: 'Bangalore', leadCreationDate:'02-06-2019' },
    { no: 2, orgName: 'Mentric', oppType: 'Distributors',  orgWebsite: 'www.mentric.com', location: 'chennai', leadCreationDate:'06-05-2019'  },
    { no: 3, orgName: 'Indigo', oppType: 'Sales',  orgWebsite: 'www.indigo.com', location: 'Bangalore', leadCreationDate:'25-06-2019'  },
    { no: 4, orgName: 'Dell', oppType: 'Distributors',  orgWebsite: 'www.dell.com', location: 'Bangalore', leadCreationDate:'02-05-2019'  },
    { no: 5, orgName: 'Philips', oppType: 'Distributors',  orgWebsite: 'www.philips.com', location: 'Hyderabad', leadCreationDate:'21-05-2018'  },
    { no: 6, orgName: 'Squirrelseva', oppType: 'Sales',  orgWebsite: 'www.squirrelseva.com', location: 'pune', leadCreationDate:'02-05-2019'  },
    { no: 7, orgName: 'Worksheets', oppType: 'Sales',  orgWebsite: 'www.worksheets.com', location: 'pune', leadCreationDate:'10-05-2018'  },
    { no: 8, orgName: 'Wipro', oppType: 'Distributors',  orgWebsite: 'www.wipro.com', location: 'Mumbai', leadCreationDate:'02-05-2018'  },
    { no: 9, orgName: 'Matrix', oppType: 'Fluorine',  orgWebsite: 'www.matrix.com', location: 'Hyderabad', leadCreationDate:'02-06-2018'  },
    { no: 10, orgName: 'Moodys', oppType: 'Sales',  orgWebsite: 'www.moodys.com', location: 'Hyderabad', leadCreationDate:'02-07-2017'  },
];

@Component({
    selector: 'bh-partner_details',
    templateUrl: './partner_details.template.html'
})

export class partner_detailsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data;

   // @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    dataSource = new MatTableDataSource(ELEMENT_DATA);

    leadsDataSource = new MatTableDataSource(LEADS_DATA);

    constructor(private bdms: NDataModelService,private dialog: MatDialog,
    private partnerservice:partnerservice
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    //titles = [{ name: "Experiment 1" }, { name: "Experiment 2" }];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); 
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    addCertificateDialog() {
        const dialogRef = this.dialog.open(uploadcertificateComponent, {
            width: '450px',
            //disableClose: true,
            data: 'hello'
        });
    }

    ngOnInit() {
         this.dataSource.paginator = this.paginator;
         this.leadsDataSource.paginator = this.paginator;
         this.getleads();
    }

    async getleads(){
        this.data = (await this.partnerservice.getleadsdata()).local.result;
        console.log(this.data);
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
