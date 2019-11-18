/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { partnerservice } from '../../sd-services/partnerservice';
import { uploadcertificateComponent } from '../uploadcertificateComponent/uploadcertificate.component';
import { MatDialog } from '@angular/material';
import { channelservice } from '../../sd-services/channelservice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { fileService } from '../../sd-services/fileService';

export interface PeriodicElement {
    //id: string;
    no: number;
    position: string;
    name: string;
    status: string;
    email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
export interface LeadsElement {
    no: number;
    orgName: string;
    orgWebsite: string;
    leadCreationDate: string;
    oppType: string;
    location;
}
const LEADS_DATA: LeadsElement[] = [];
@Component({
    selector: 'bh-partner_details',
    templateUrl: './partner_details.template.html'
})

export class partner_detailsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    data;
    leaddata;
    devdata;
    // @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatPaginator, { static: true }) leadPaginator: MatPaginator;
    id;
    P_data;
    dataSource = new MatTableDataSource(this.leaddata);
    leadsDataSource = new MatTableDataSource(this.devdata);
    getdevdata;
    userId = sessionStorage.getItem('uid');
    uploadData = false;
    formData = new FormData();
    previewImage;

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
        private fileService: fileService,
        private partnerservice: partnerservice,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: NSnackbarService,
        private channelservice: channelservice
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }


    preview(event) {
        if (event && event[0]) {
            this.uploadData = true;
            var reader = new FileReader();
            this.formData.append('file', event[0]);
            this.formData.append('id', this.id);
            this.formData.append('type', 'aggreement');
            reader.readAsDataURL(event[0]);
            reader.onload = (data: any) => {
                this.previewImage = data.target.result;
            }
        }
    }
    uploadFile(event) {
        if (this.uploadData) {
            this.upload(event);
            this.resetUpload(event);
        }
    }
    async upload(event) {
        let result = (await this.fileService.sendFile(this.formData)).local.response;
        this.alertService.openSnackBar(result.message);
    }
    resetUpload(event) {
        this.uploadData = false;
        event.file = null;
        event.fileName = null;
        this.formData.delete('file');
        this.formData.delete('id');
        this.formData.delete('type');
    }


    //titles = [{ name: "Experiment 1" }, { name: "Experiment 2" }];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    applyFilterLeads(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.leadsDataSource.filter = filterValue;
    }
    addCertificateDialog() {
        const dialogRef = this.dialog.open(uploadcertificateComponent, {
            width: '450px',
            //disableClose: true,
            data: this.id
        });
    }

    async ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('_id');
        this.dataSource.paginator = this.paginator;
        this.getdevs();

        this.getleads();



        this.P_data = (await this.channelservice.getPerticularPartner(this.id)).local.result;



        this.profileForm.patchValue({
            companyName: this.P_data.companyName,
            companyWebsite: this.P_data.companyWebsite,
            companyType: this.P_data.companyType,
            numberofEmployees: this.P_data.numberofEmployees,
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
        this.leaddata = this.leadObjtoArr((await this.partnerservice.getleadslist(this.id)).local.resultleads);
        this.leadsDataSource.data = this.leaddata;
        this.leadsDataSource.paginator = this.leadPaginator;

    }
    leadObjtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }
    async getdevs() {
        this.devdata = this.developerObjtoArr((await this.partnerservice.getdeveloper(this.id)).local.result);
        this.dataSource.data = this.devdata;
    }
    developerObjtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }


    // async getleads() {
    //     this.data = (await this.partnerservice.getleadsdata()).local.result;

    //     console.log(this.data);
    // }


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
