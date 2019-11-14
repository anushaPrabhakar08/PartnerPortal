/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { partnerservice } from '../../sd-services/partnerservice';
import { uploadcertificateComponent } from '../uploadcertificateComponent/uploadcertificate.component';
import { MatDialog } from '@angular/material';
import { channelservice } from '../../sd-services/channelservice';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'bh-partner_details',
    templateUrl: './partner_details.template.html'
})

export class partner_detailsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data;
    // @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
id;
P_data;
    dataSource = new MatTableDataSource(this.data);
    leadsDataSource = new MatTableDataSource();
    profileForm = new FormGroup({
    companyName: new FormControl(''),
    companyWebsite: new FormControl(''),
    companyType: new FormControl(''),
    numberofEmployees: new FormControl(''),
  });
    personalForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // country: new FormControl(''),
    mobileNumber: new FormControl(''),
    emailId: new FormControl(''),
    address: new FormControl(' '),
    designation: new FormControl('')
      });
    constructor(private bdms: NDataModelService, private dialog: MatDialog,
        private partnerservice: partnerservice,
        private router: Router,
        private route: ActivatedRoute,
        private channelservice:channelservice
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

   async ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.leadsDataSource.paginator = this.paginator;
        this.getleads();
    
    this.id = this.route.snapshot.paramMap.get('_id');
   console.log(this.id);
   this.P_data= (await this.channelservice.getPerticularPartner(this.id)).local.result;
   console.log(this.P_data);


   this.profileForm.patchValue({
      companyName: this.P_data.companyName,
      companyWebsite: this.P_data.companyWebsite,
      companyType: this.P_data.companyType,
      numberofEmployees:this.P_data.numberofEmployees,
   });

    this.personalForm.patchValue({
      firstName: this.P_data.firstName,
      lastName: this.P_data.lastName,
    //   country: this.P_data.country,
      mobileNumber: this.P_data.mobileNumber,
      emailId: this.P_data.emailId,
      designation: this.P_data.designation,
      address: this.P_data.address
    });

   
  }


    

   


    async getleads() {
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
