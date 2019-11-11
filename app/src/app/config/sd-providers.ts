import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-memberloginservice
import { memberloginservice } from '../sd-services/memberloginservice';
//CORE_REFERENCE_IMPORT-loginservice
import { loginservice } from '../sd-services/loginservice';
//CORE_REFERENCE_IMPORT-partnerservice
import { partnerservice } from '../sd-services/partnerservice';


export const sdProviders = [
    SDBaseService,
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-memberloginservice
    memberloginservice,
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-loginservice
    loginservice,
    //CORE_REFERENCE_PUSH_TO_SD_ARRAY-partnerservice
    partnerservice,
];