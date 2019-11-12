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
export class partnerservice {
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

  //   service flows_partnerservice

  public async savedaveloper(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_xIgXKrl1iV0XgH8H(bh);
      //appendnew_next_savedaveloper
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async saveleadata(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_eDmQDZuVa9keEApB(bh);
      //appendnew_next_saveleadata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getleadsdata(...others) {
    try {
      let bh = {
        input: {},
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_qQMYR4XbjuXTqvkx(bh);
      //appendnew_next_getleadsdata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getdeveloper(...others) {
    try {
      let bh = {
        input: {},
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_I2EB3GOPeTTSh4Jq(bh);
      //appendnew_next_getdeveloper
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async savepartnerdata(obj = undefined, ...others) {
    try {
      let bh = {
        input: { obj: obj },
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_ukVlnZhxTeDLRamF(bh);
      //appendnew_next_savepartnerdata
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_partnerservice_Start

  async sd_xIgXKrl1iV0XgH8H(bh) {
    try {
      bh.local.modlerUrlApi = `http://localhost:24483/api/savedevelopers?data=${bh.input.data}`;

      bh = await this.sd_IJG4oyLVYQYyL2yf(bh);
      //appendnew_next_sd_xIgXKrl1iV0XgH8H
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_IJG4oyLVYQYyL2yf(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_IJG4oyLVYQYyL2yf
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_eDmQDZuVa9keEApB(bh) {
    try {
      bh.local.modlerUrlApi = `http://localhost:24483/api/saveleadsdata?data=${bh.input.data}`;

      bh = await this.sd_Qvl8jCVdHuywn5E0(bh);
      //appendnew_next_sd_eDmQDZuVa9keEApB
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Qvl8jCVdHuywn5E0(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Qvl8jCVdHuywn5E0
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_qQMYR4XbjuXTqvkx(bh) {
    try {
      bh.local.modlerUrlApi = `http://localhost:24483/api/getleadsdata`;

      bh = await this.sd_zfHojHu2pemhgFbG(bh);
      //appendnew_next_sd_qQMYR4XbjuXTqvkx
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_zfHojHu2pemhgFbG(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_zfHojHu2pemhgFbG
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_I2EB3GOPeTTSh4Jq(bh) {
    try {
      bh.local.modlerUrlApi = `http://localhost:24483/api/getdevelopers`;

      bh = await this.sd_3Ns00MGI4f6dZsAS(bh);
      //appendnew_next_sd_I2EB3GOPeTTSh4Jq
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_3Ns00MGI4f6dZsAS(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_3Ns00MGI4f6dZsAS
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_ukVlnZhxTeDLRamF(bh) {
    try {
      bh.local.modlerUrlApi = `http://localhost:24483/api/addpartnerdata?obj=${bh.input.obj}`;

      bh = await this.sd_db9vxZREbhyd2XC5(bh);
      //appendnew_next_sd_ukVlnZhxTeDLRamF
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_db9vxZREbhyd2XC5(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.obj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_db9vxZREbhyd2XC5
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
