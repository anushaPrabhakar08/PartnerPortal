import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class partnerregistration {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('country', String, true)
  public country: string = undefined;

  @JsonProperty('companyName', String, true)
  public companyName: string = undefined;

  @JsonProperty('companyWebsite', String, true)
  public companyWebsite: string = undefined;

  @JsonProperty('companyType', String, true)
  public companyType: string = undefined;

  @JsonProperty('numberofEmployees', Number, true)
  public numberofEmployees: number = undefined;

  @JsonProperty('designation', String, true)
  public designation: string = undefined;

  @JsonProperty('mobileNumber', Number, true)
  public mobileNumber: number = undefined;

  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('address', String, true)
  public address: string = undefined;

  @JsonProperty('userName', String, true)
  public userName: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}