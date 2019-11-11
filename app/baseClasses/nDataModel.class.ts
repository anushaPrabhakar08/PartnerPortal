import { user } from '../src/app/models/user.model';
import { memberlogin } from '../src/app/models/memberlogin.model';
import { memberregisteration } from '../src/app/models/memberregisteration.model';
import { partnerregistration } from '../src/app/models/partnerregistration.model';
import { partner_addDeveloper } from '../src/app/models/partner_addDeveloper.model';
import { partner_addLead } from '../src/app/models/partner_addLead.model';
import { partnerPortal } from '../src/app/models/partnerPortal.model';
import { channelMember } from '../src/app/models/channelmember.model';
import { Developers } from '../src/app/models/Developers.model';
import { leads } from '../src/app/models/Leads.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
memberlogin: memberlogin;
memberregisteration: memberregisteration;
partnerregistration: partnerregistration;
partner_adddeveloper: partner_addDeveloper;
partner_addlead: partner_addLead;
partnerPortal: partnerPortal;
channelmember: channelMember;
developers: Developers;
leads: leads;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.memberlogin = new memberlogin();
this.memberregisteration = new memberregisteration();
this.partnerregistration = new partnerregistration();
this.partner_adddeveloper = new partner_addDeveloper();
this.partner_addlead = new partner_addLead();
this.partnerPortal = new partnerPortal();
this.channelmember = new channelMember();
this.developers = new Developers();
this.leads = new leads();
//CREATE NEW DM INSTANCE
    }
}