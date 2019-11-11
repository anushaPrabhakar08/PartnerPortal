import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class leads {
  @JsonProperty('orgName', String, true)
  public orgName: string = undefined;

  @JsonProperty('location', String, true)
  public location: string = undefined;

  @JsonProperty('opportunityType', String, true)
  public opportunityType: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('contactdetail', Number, true)
  public contactdetail: number = undefined;

  @JsonProperty('comment', String, true)
  public comment: string = undefined;

}