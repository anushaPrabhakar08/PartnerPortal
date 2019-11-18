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
export class fileService {
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

  //   service flows_fileService

  public async sendFile(file = undefined, ...others) {
    try {
      let bh = {
        input: { file: file },
        local: { response: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_FAwuzurJk6dmiBqC(bh);
      //appendnew_next_sendFile
      //Start formatting output variables
      let outputVariables = {
        input: {},
        local: { response: bh.local.response }
      };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getFile(data = undefined, ...others) {
    try {
      let bh = {
        input: { data: data },
        local: { response: undefined, apiUrl: undefined }
      };
      bh = this.__constructDefault(bh);

      bh = await this.sd_dZGlvO7dGaXWpy6T(bh);
      //appendnew_next_getFile
      //Start formatting output variables
      let outputVariables = {
        input: {},
        local: { response: bh.local.response }
      };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_fileService_Start

  async sd_FAwuzurJk6dmiBqC(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:3000/uploadFile';

      bh = await this.sd_BM9dZ2RQxDMmKYHe(bh);
      //appendnew_next_sd_FAwuzurJk6dmiBqC
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_BM9dZ2RQxDMmKYHe(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.file
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_BM9dZ2RQxDMmKYHe
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_dZGlvO7dGaXWpy6T(bh) {
    try {
      bh.local.apiUrl = 'http://localhost:3000/getFile';

      bh = await this.sd_zJhxuBebP2iYFdhK(bh);
      //appendnew_next_sd_dZGlvO7dGaXWpy6T
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_zJhxuBebP2iYFdhK(bh) {
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
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_zJhxuBebP2iYFdhK
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
