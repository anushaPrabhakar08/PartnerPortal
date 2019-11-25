import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-countryservice
import { countryservice } from '../sd-services/countryservice';
//CORE_REFERENCE_IMPORT-fileService
import { fileService } from '../sd-services/fileService';
//CORE_REFERENCE_IMPORT-contactus
import { contactus } from '../sd-services/contactus';
//CORE_REFERENCE_IMPORT-channelservice
import { channelservice } from '../sd-services/channelservice';
//CORE_REFERENCE_IMPORT-memberloginservice
import { memberloginservice } from '../sd-services/memberloginservice';
//CORE_REFERENCE_IMPORT-loginservice
import { loginservice } from '../sd-services/loginservice';
//CORE_REFERENCE_IMPORT-partnerservice
import { partnerservice } from '../sd-services/partnerservice';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-countryservice
  countryservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-contactus
  contactus,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-fileService
  fileService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-channelservice
  channelservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-memberloginservice
  memberloginservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-loginservice
  loginservice,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-partnerservice
  partnerservice
];
