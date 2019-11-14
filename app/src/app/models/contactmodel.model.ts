import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class contactmodel {
  @JsonProperty('firstname', String, true)
  public firstname: string = undefined;

  @JsonProperty('lastname', String, true)
  public lastname: string = undefined;

  @JsonProperty('companyemail', String, true)
  public companyemail: string = undefined;

  @JsonProperty('companyname', String, true)
  public companyname: string = undefined;

  @JsonProperty('jobroles', String, true)
  public jobroles: string = undefined;

  @JsonProperty('industryname', String, true)
  public industryname: string = undefined;

  @JsonProperty('mobilenumber', Number, true)
  public mobilenumber: number = undefined;

  @JsonProperty('compsize', Number, true)
  public compsize: number = undefined;

  @JsonProperty('countryname', String, true)
  public countryname: string = undefined;

  @JsonProperty('message', String, true)
  public message: string = undefined;

}