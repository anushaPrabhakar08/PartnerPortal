/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SDBaseService } from '../n-services/SDBaseService';
import { environment } from '../../environments/environment';
import {
  NAlertComponent,
  NAlertService,
  NFileIOService,
  NFileUploadComponent
} from 'neutrinos-module';
import {
  NDataModelService,
  NAuthGuardService,
  NHTTPLoaderService,
  NLocalStorageService,
  NLoginService,
  NLogoutService,
  NNotificationService,
  NPubSubService,
  NSessionStorageService,
  NSnackbarService,
  NSystemService,
  NTokenService
} from 'neutrinos-seed-services';
//CORE_REFERENCE_IMPORTS

declare const window: any;
declare const cordova: any;

@Injectable()
export class loginservice {
  systemService = NSystemService.getInstance();
  appProperties;

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar,
    private sdService: SDBaseService,
    private sessionStorage: NSessionStorageService,
    private tokenService: NTokenService,
    private router: Router,
    private httpLoaderService: NHTTPLoaderService,
    private dataModelService: NDataModelService,
    private loginService: NLoginService,
    private authGuardService: NAuthGuardService,
    private localStorageService: NLocalStorageService,
    private logoutService: NLogoutService,
    private notificationService: NNotificationService,
    private pubsubService: NPubSubService,
    private snackbarService: NSnackbarService,
    private alertService: NAlertService,
    private fileIOService: NFileIOService
  ) {}

  //   service flows_loginservice

  public async login(userData = undefined, ...others) {
    try {
      let bh = {
        input: { userData: userData },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_hT5MmaR2qH2HaZbC(bh);
      //appendnew_next_login
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async authenticated(data = undefined, ...others) {
    try {
      let bh = { input: { data: data }, local: {} };
      bh = this.__constructDefault(bh);

      bh = await this.sd_ckYxlETQLKEKfVGG(bh);
      bh = await this.sd_EMzzBsookyCCkLCk(bh);
      bh = await this.sd_9oKTUmaNwRgHPn1u(bh);
      //appendnew_next_authenticated
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_loginservice_Start

  async sd_hT5MmaR2qH2HaZbC(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/authenticate';

      bh = await this.sd_QEwiG1uwqRCVw0xw(bh);
      //appendnew_next_sd_hT5MmaR2qH2HaZbC
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_QEwiG1uwqRCVw0xw(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userData
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_QEwiG1uwqRCVw0xw
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_ckYxlETQLKEKfVGG(bh) {
    try {
      localStorage.setItem('currentUser', JSON.stringify(bh.input.data.data));
      //appendnew_next_sd_ckYxlETQLKEKfVGG
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_EMzzBsookyCCkLCk(bh) {
    try {
      localStorage.setItem('loggedIn', JSON.stringify('true'));
      //appendnew_next_sd_EMzzBsookyCCkLCk
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_9oKTUmaNwRgHPn1u(bh) {
    try {
      localStorage.setItem('token', JSON.stringify(bh.input.data.token));
      //appendnew_next_sd_9oKTUmaNwRgHPn1u
      return bh;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_node

  __constructDefault(bh) {
    const system: any = {};

    try {
      system.currentUser = this.sessionStorage.getValue('userObj');
      system.environment = environment;
      system.tokenService = this.tokenService;
      system.deviceService = this.systemService;
      system.router = this.router;
      system.httpLoaderService = this.httpLoaderService;
      system.dataModelService = this.dataModelService;
      system.loginService = this.loginService;
      system.authGuardService = this.authGuardService;
      system.localStorageService = this.localStorageService;
      system.logoutService = this.logoutService;
      system.notificationService = this.notificationService;
      system.pubsubService = this.pubsubService;
      system.snackbarService = this.snackbarService;
      system.alertService = this.alertService;
      system.fileIOService = this.fileIOService;

      Object.defineProperty(bh, 'system', {
        value: system,
        writable: false
      });

      return bh;
    } catch (e) {
      throw e;
    }
  }
}
