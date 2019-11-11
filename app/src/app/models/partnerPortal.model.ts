import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class partnerPortal {
  @JsonProperty('firstname', String, true)
  public firstname: string = undefined;

  @JsonProperty('lastname', String, true)
  public lastname: string = undefined;

  @JsonProperty('companyname', String, true)
  public companyname: string = undefined;

  @JsonProperty('businessEmail', String, true)
  public businessEmail: string = undefined;

  @JsonProperty('contactNumber', Number, true)
  public contactNumber: number = undefined;

  @JsonProperty('websiteUrl', String, true)
  public websiteUrl: string = undefined;

  @JsonProperty('companytype', String, true)
  public companytype: string = undefined;

  @JsonProperty('numberEmployess', Number, true)
  public numberEmployess: number = undefined;

  @JsonProperty('country', String, true)
  public country: string = undefined;

  @JsonProperty('designation', String, true)
  public designation: string = undefined;

  @JsonProperty('address', String, true)
  public address: string = undefined;

}