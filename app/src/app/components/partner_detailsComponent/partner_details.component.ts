/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { partnerservice } from '../../sd-services/partnerservice';
import { uploadcertificateComponent } from '../uploadcertificateComponent/uploadcertificate.component';
import { partner_adddeveloperComponent } from '../partner_adddeveloperComponent/partner_adddeveloper.component';
import { deletedeveloperComponent } from '../deletedeveloperComponent/deletedeveloper.component';
import { MatDialog } from '@angular/material';
import { channelservice } from '../../sd-services/channelservice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { fileService } from '../../sd-services/fileService';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'bh-partner_details',
    templateUrl: './partner_details.template.html'
})

export class partner_detailsComponent extends NBaseComponent implements OnInit {

    mm: ModelMethods;
    data;
    leaddata;
    devdata;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatPaginator, { static: true }) leadPaginator: MatPaginator;
    id;
    userData: any;
    userCompanyData;
    dataSource = new MatTableDataSource(this.leaddata);
    leadsDataSource = new MatTableDataSource(this.devdata);
    getdevdata;
    userId = sessionStorage.getItem('uid');
    uploadData = false;
    formData = new FormData();
    previewImage;
    agreementData;
    agreementDataSource = new MatTableDataSource(this.agreementData);

    profileForm = new FormGroup({
        companyName: new FormControl(''),
        companyWebsite: new FormControl(''),
        companyType: new FormControl(''),
        numberofEmployees: new FormControl(''),
    });
    personalForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        phone: new FormControl(''), 
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
        private channelservice: channelservice,
        private titleService: Title
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    async ngOnInit() {
        this.titleService.setTitle('Partner Details');
        this.id = this.route.snapshot.paramMap.get('_id');
        this.dataSource.paginator = this.paginator;
        this.userCompanyData = (await this.channelservice.getPartnerCompany({ userId: this.id })).local.result;
        this.profileForm.patchValue({
            companyName: this.userCompanyData.name,
            companyWebsite: this.userCompanyData.website,
            companyType: this.userCompanyData.industry,
            numberofEmployees: this.userCompanyData.size,
        });
        this.userData = (await this.channelservice.getPartner({ _id: this.id })).local.result;
        this.personalForm.patchValue({
            firstName: this.userData.firstname,
            lastName: this.userData.lastname,
            phone: this.userData.phone,
            emailId: this.userData.email,
            designation: this.userData.position,
            address: this.userData.present_address
        });
        this.getDevelopers();
        this.getLeads();
        this.getAgreements();
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
        this.getAgreements();
    }

    resetUpload(event) {
        this.uploadData = false;
        event.file = null;
        event.fileName = null;
        this.formData.delete('file');
        this.formData.delete('id');
        this.formData.delete('type');
    }

    addDeveloper() {
        const dialogRef = this.dialog.open(partner_adddeveloperComponent, {
            width: '450px',
            data: this.id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }

    previewCertificate() {
        const dialogRef = this.dialog.open(partner_adddeveloperComponent, {
            width: '450px',
            data: this.id
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
    applyFilterLeads(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.leadsDataSource.filter = filterValue;
    }

    addCertificateDialog(upload) {
        const dialogRef = this.dialog.open(uploadcertificateComponent, {
            width: '450px',
            //disableClose: true,
            data: { id: this.id, uploadView: upload }
        });
    }


    openDeleteDialog(data) {
        const dialogRef = this.dialog.open(deletedeveloperComponent, {
            width: '450px',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }

    objtoArr(obj) {
        return Array.from(Object.keys(obj), k => obj[k]);
    }

    async getLeads() {
        this.leaddata = this.objtoArr((await this.partnerservice.getPartnerLeads({ userId: this.id })).local.result);
        this.leadsDataSource.data = this.leaddata;
        this.leadsDataSource.paginator = this.leadPaginator;
    }

    async getDevelopers() {
        this.devdata = this.objtoArr((await this.partnerservice.getDevelopers({ userId: this.id })).local.result);
        this.dataSource.data = this.devdata;
    }
    async getAgreements() {
        this.agreementData = this.objtoArr((await this.channelservice.getPartnerAgreement({ userId: this.id, type: 'aggreement' })).local.result);
        this.agreementDataSource.data = this.agreementData;
    }

}
