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

  public async requestAccess(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { apiUrl: undefined, result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_yDrVNWFnxrLMuhPE(bh);
      //appendnew_next_requestAccess
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async savelead(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { result: undefined, modlerApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_gNx9b2tspcdexa5v(bh);
      //appendnew_next_savelead
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getLeads(id = undefined, ...others) {
    try {
      let bh = {
        input: { id: id },
        local: { result: undefined, modlerApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_cQOTbPx05kjnxAbD(bh);
      //appendnew_next_getLeads
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async deleteleads(id = undefined, ...others) {
    try {
      let bh = {
        input: { id: id },
        local: { result: undefined, modlerApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_GlkZGVcuIlNo2jIe(bh);
      //appendnew_next_deleteleads
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getDevelopers(id = undefined, ...others) {
    try {
      let bh = {
        input: { id: id },
        local: { result: undefined, modlerApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_Y7EaXhOEgsfgUdv5(bh);
      //appendnew_next_getDevelopers
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async addDeveloper(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { apiUrl: undefined, result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_21Kc6l0b4FdaHWpg(bh);
      //appendnew_next_addDeveloper
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getPartnerLeads(id = undefined, ...others) {
    try {
      let bh = {
        input: { id: id },
        local: { result: undefined, modlerApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_RMaxx8kmHoKGqRPh(bh);
      //appendnew_next_getPartnerLeads
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_partnerservice_Start

  async sd_yDrVNWFnxrLMuhPE(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/RequsetAccess';

      bh = await this.sd_P8ynSLERMD5fuNIx(bh);
      //appendnew_next_sd_yDrVNWFnxrLMuhPE
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_P8ynSLERMD5fuNIx(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_P8ynSLERMD5fuNIx
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_gNx9b2tspcdexa5v(bh) {
    try {
      bh.local.modlerApi = `http://localhost:24483/api/saveleads`;

      bh = await this.sd_EGzddB7DyzeQ5GF3(bh);
      //appendnew_next_sd_gNx9b2tspcdexa5v
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_EGzddB7DyzeQ5GF3(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_EGzddB7DyzeQ5GF3
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_cQOTbPx05kjnxAbD(bh) {
    try {
      bh.local.modlerApi = `http://localhost:24483/api/getLeads`;

      bh = await this.sd_730I0mVuhK1frBeU(bh);
      //appendnew_next_sd_cQOTbPx05kjnxAbD
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_730I0mVuhK1frBeU(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerApi,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_730I0mVuhK1frBeU
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_GlkZGVcuIlNo2jIe(bh) {
    try {
      bh.local.modlerApi = `http://localhost:24483/api/deletelead?_id=${bh.input.id}`;

      bh = await this.sd_jTpo33o70lgfwqE6(bh);
      //appendnew_next_sd_GlkZGVcuIlNo2jIe
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_jTpo33o70lgfwqE6(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerApi,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_jTpo33o70lgfwqE6
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_Y7EaXhOEgsfgUdv5(bh) {
    try {
      bh.local.modlerApi = `http://localhost:24483/api/getDevelopers`;

      bh = await this.sd_NkK4dGpIbdt1IBvj(bh);
      //appendnew_next_sd_Y7EaXhOEgsfgUdv5
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_NkK4dGpIbdt1IBvj(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_NkK4dGpIbdt1IBvj
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_21Kc6l0b4FdaHWpg(bh) {
    try {
      bh.local.apiUrl = `http://localhost:24483/api/addDeveloper`;

      bh = await this.sd_4jFD8G26iFllmCZe(bh);
      //appendnew_next_sd_21Kc6l0b4FdaHWpg
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_4jFD8G26iFllmCZe(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_4jFD8G26iFllmCZe
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_RMaxx8kmHoKGqRPh(bh) {
    try {
      bh.local.modlerApi = `http://localhost:24483/api/getPartnerLeads`;

      bh = await this.sd_wDamdfxVNrmwvGA4(bh);
      //appendnew_next_sd_RMaxx8kmHoKGqRPh
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_wDamdfxVNrmwvGA4(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_wDamdfxVNrmwvGA4
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
