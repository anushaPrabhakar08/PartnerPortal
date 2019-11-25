/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Router } from '@angular/router';
import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginservice } from '../../sd-services/loginservice';

@Component({
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    isTextFieldType = false;
    localStorage = localStorage;
    constructor(private bdms: NDataModelService,
        private rout: Router,
        private alertService: NSnackbarService,
        private router: Router,
        private loginservice: loginservice
    ) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    @Input() userType: boolean;

    ngOnInit() {

    }

    authenticate() {
        if (this.dm.user.email === undefined || this.dm.user.password === undefined) {
            this.alertService.openSnackBar('Enter Username and Password');
        } else {
            let userdata = this.dm.user;
            userdata.type = this.userType ? 'C' : 'P';
            let result = this.loginservice.login(userdata);
            result.then(data => {
                if (data.local.result.status === 'success') {
                    this.loginservice.authenticated(data.local.result)
                    if (userdata.type == 'C') {
                        this.router.navigateByUrl('/admin/partners_list');
                    } else {
                        this.router.navigateByUrl('/partner');
                    }
                }
                this.alertService.openSnackBar(data.local.result.message);
            });
        }
    }

}
