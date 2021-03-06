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
export class channelservice {
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

  //   service flows_channelservice

  public async channelmemberregistration(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { modlreApiUrl: undefined, result: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_2tky7jqHupi9JB9C(bh);
      //appendnew_next_channelmemberregistration
      //Start formatting output variables
      let outputVariables = { input: {}, local: {} };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getpartnerlist(...others) {
    try {
      let bh = {
        input: {},
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_qC0rhOq7GaFqQ2WM(bh);
      //appendnew_next_getpartnerlist
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getPartner(id = undefined, ...others) {
    try {
      let bh = {
        input: { id: id },
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_8jUiKC2c0l5ZLdQA(bh);
      //appendnew_next_getPartner
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getPartnerCompany(userId = undefined, ...others) {
    try {
      let bh = {
        input: { userId: userId },
        local: { result: undefined, modlerUrlApi: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_OJiyGHxlR90Qi3Wz(bh);
      //appendnew_next_getPartnerCompany
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getPartnerAgreement(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { result: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_xHKMCThdxwJbxsaK(bh);
      //appendnew_next_getPartnerAgreement
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_channelservice_Start

  async sd_2tky7jqHupi9JB9C(bh) {
    try {
      bh.local.modlreApiUrl = `http://localhost:24483/api/channelmemberregistration?obj=${bh.input.data}`;

      bh = await this.sd_X2HaIwoS0PpnP1i3(bh);
      //appendnew_next_sd_2tky7jqHupi9JB9C
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_X2HaIwoS0PpnP1i3(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlreApiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_X2HaIwoS0PpnP1i3
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_qC0rhOq7GaFqQ2WM(bh) {
    try {
      bh.local.modlerUrlApi = 'http://localhost:24483/api/getPartners?type=P';

      bh = await this.sd_e4HTIIEhpDWx2cjq(bh);
      //appendnew_next_sd_qC0rhOq7GaFqQ2WM
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_e4HTIIEhpDWx2cjq(bh) {
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
      //appendnew_next_sd_e4HTIIEhpDWx2cjq
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_8jUiKC2c0l5ZLdQA(bh) {
    try {
      bh.local.modlerUrlApi = 'http://localhost:24483/api/getPartner';

      bh = await this.sd_GpnwOR5HHkYnszkb(bh);
      //appendnew_next_sd_8jUiKC2c0l5ZLdQA
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_GpnwOR5HHkYnszkb(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_GpnwOR5HHkYnszkb
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_OJiyGHxlR90Qi3Wz(bh) {
    try {
      bh.local.modlerUrlApi = 'http://localhost:24483/api/getPartnerCompany';

      bh = await this.sd_XCHCRGN8KEJdXqFB(bh);
      //appendnew_next_sd_OJiyGHxlR90Qi3Wz
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_XCHCRGN8KEJdXqFB(bh) {
    try {
      let requestOptions = {
        url: bh.local.modlerUrlApi,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_XCHCRGN8KEJdXqFB
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_xHKMCThdxwJbxsaK(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:24483/api/getPartnerAgreement';

      bh = await this.sd_NVLh3vcypRNTqz9R(bh);
      //appendnew_next_sd_xHKMCThdxwJbxsaK
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_NVLh3vcypRNTqz9R(bh) {
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
      //appendnew_next_sd_NVLh3vcypRNTqz9R
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
