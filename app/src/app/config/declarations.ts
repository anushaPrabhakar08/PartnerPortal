import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-deletedeveloperComponent
import { deletedeveloperComponent } from '../components/deletedeveloperComponent/deletedeveloper.component';
//CORE_REFERENCE_IMPORT-viewmarketingpdfComponent
import { viewmarketingpdfComponent } from '../components/viewmarketingpdfComponent/viewmarketingpdf.component';
//CORE_REFERENCE_IMPORT-partnerloginComponent
import { partnerloginComponent } from '../components/partnerloginComponent/partnerlogin.component';
//CORE_REFERENCE_IMPORT-uploadcertificateComponent
import { uploadcertificateComponent } from '../components/uploadcertificateComponent/uploadcertificate.component';
//CORE_REFERENCE_IMPORT-deletepopupComponent
import { deletepopupComponent } from '../components/deletepopupComponent/deletepopup.component';
//CORE_REFERENCE_IMPORT-channel_addmarketingComponent
import { channel_addmarketingComponent } from '../components/channel_addmarketingComponent/channel_addmarketing.component';
//CORE_REFERENCE_IMPORT-partner_addleadComponent
import { partner_addleadComponent } from '../components/partner_addleadComponent/partner_addlead.component';
//CORE_REFERENCE_IMPORT-partner_adddeveloperComponent
import { partner_adddeveloperComponent } from '../components/partner_adddeveloperComponent/partner_adddeveloper.component';
//CORE_REFERENCE_IMPORT-partnerregistrationComponent
import { partnerregistrationComponent } from '../components/partnerregistrationComponent/partnerregistration.component';
//CORE_REFERENCE_IMPORT-memberregisterationComponent
import { memberregisterationComponent } from '../components/memberregisterationComponent/memberregisteration.component';
//CORE_REFERENCE_IMPORT-spinnerComponent
import { spinnerComponent } from '../components/spinnerComponent/spinner.component';
//CORE_REFERENCE_IMPORT-contactpageComponent
import { contactpageComponent } from '../components/contactpageComponent/contactpage.component';
//CORE_REFERENCE_IMPORT-productComponent
import { productComponent } from '../components/productComponent/product.component';
//CORE_REFERENCE_IMPORT-memberloginComponent
import { memberloginComponent } from '../components/memberloginComponent/memberlogin.component';
//CORE_REFERENCE_IMPORT-sampleComponent
import { sampleComponent } from '../components/sampleComponent/sample.component';
//CORE_REFERENCE_IMPORT-partner_developersComponent
import { partner_developersComponent } from '../components/partner_developersComponent/partner_developers.component';
//CORE_REFERENCE_IMPORT-partner_leadsComponent
import { partner_leadsComponent } from '../components/partner_leadsComponent/partner_leads.component';
//CORE_REFERENCE_IMPORT-partner_marketingComponent
import { partner_marketingComponent } from '../components/partner_marketingComponent/partner_marketing.component';
//CORE_REFERENCE_IMPORT-partner_agreementComponent
import { partner_agreementComponent } from '../components/partner_agreementComponent/partner_agreement.component';
//CORE_REFERENCE_IMPORT-channel_announcementsComponent
import { channel_announcementsComponent } from '../components/channel_announcementsComponent/channel_announcements.component';
//CORE_REFERENCE_IMPORT-channel_marketingComponent
import { channel_marketingComponent } from '../components/channel_marketingComponent/channel_marketing.component';
//CORE_REFERENCE_IMPORT-partner_detailsComponent
import { partner_detailsComponent } from '../components/partner_detailsComponent/partner_details.component';
//CORE_REFERENCE_IMPORT-partnerComponent
import { partnerComponent } from '../components/partnerComponent/partner.component';
//CORE_REFERENCE_IMPORT-channelComponent
import { channelComponent } from '../components/channelComponent/channel.component';
//CORE_REFERENCE_IMPORT-channel_dashboardComponent
import { channel_dashboardComponent } from '../components/channel_dashboardComponent/channel_dashboard.component';
//CORE_REFERENCE_IMPORT-ArtImgSrcDirective
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';
import { viewagreementComponent } from 'app/components/viewagreementComponent/viewagreement.component';


/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent,
  partner_adddeveloperComponent,
  channel_addmarketingComponent,
  deletepopupComponent,
  partner_addleadComponent,
  uploadcertificateComponent,
  viewagreementComponent,
  deletedeveloperComponent,
  viewmarketingpdfComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deletedeveloperComponent
deletedeveloperComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-viewmarketingpdfComponent
viewmarketingpdfComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partnerloginComponent
partnerloginComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-uploadcertificateComponent
uploadcertificateComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deletepopupComponent
deletepopupComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-channel_addmarketingComponent
channel_addmarketingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_addleadComponent
  partner_addleadComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_adddeveloperComponent
  partner_adddeveloperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partnerregistrationComponent
  partnerregistrationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-memberregisterationComponent
  memberregisterationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-spinnerComponent
  spinnerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contactpageComponent
  contactpageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-productComponent
  productComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-memberloginComponent
  memberloginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sampleComponent
  sampleComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_developersComponent
  partner_developersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_leadsComponent
  partner_leadsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_marketingComponent
  partner_marketingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_agreementComponent
  partner_agreementComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_adddevelopersComponent
  //partner_adddevelopersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_addleadsComponent
 // partner_addleadsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-channel_announcementsComponent
  channel_announcementsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-channel_marketingComponent
  channel_marketingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partner_detailsComponent
  partner_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partnerComponent
  partnerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-channelComponent
  channelComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-channel_dashboardComponent
  channel_dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ArtImgSrcDirective
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
  loaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  viewagreementComponent,
  deletedeveloperComponent
];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: 'cantact', component: contactpageComponent}]},{path: 'login', component: loginComponent,
children: [{path: 'partnerlogin', component: partnerloginComponent},{path: 'memberlogin', component: memberloginComponent}]},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: 'product', component: productComponent},{path: 'contact', component: contactpageComponent},{path: 'channel', component: channelComponent,
children: [{path: 'dashboard', component: channel_dashboardComponent},{path: 'dashboardPartnerDetails/:_id', component: partner_detailsComponent},{path: 'dashboardChannelMarketing', component: channel_marketingComponent},{path: 'dashboardChannelAnnouncements', component: channel_announcementsComponent,
children: []}]},{path: 'partner', component: partnerComponent,
children: [{path: 'dashboardPartnerMarketing', component: partner_marketingComponent},{path: 'dashboardPartnerLeads', component: partner_leadsComponent},{path: 'dashboardPartnerDevelopers', component: partner_developersComponent},{path: 'dashboardPartnerAgreement', component: partner_agreementComponent}]},{path: 'memberregisteration', component: memberregisterationComponent},{path: 'partnerregistration', component: partnerregistrationComponent},{path: 'partner_addDeveloper', component: partner_adddeveloperComponent},{path: 'partner_addLead', component: partner_addleadComponent,
children: []},{path: 'sample', component: sampleComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
