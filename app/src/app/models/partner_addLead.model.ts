import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class partner_addLead {
  @JsonProperty('organinsationName', String, true)
  public organinsationName: string = undefined;

  @JsonProperty('location', String, true)
  public location: string = undefined;

  @JsonProperty('opporunityType', String, true)
  public opporunityType: string = undefined;

  @JsonProperty('leadGeneratedDate', Date, true)
  public leadGeneratedDate: Date = undefined;

  @JsonProperty('contactDetails', Number, true)
  public contactDetails: number = undefined;

  @JsonProperty('comment', String, true)
  public comment: string = undefined;

  @JsonProperty('userId', String, true)
  public userId: string = undefined;

}