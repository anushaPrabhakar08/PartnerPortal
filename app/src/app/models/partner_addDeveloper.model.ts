import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class partner_addDeveloper {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('position', String, true)
  public position: string = undefined;

  @JsonProperty('experience', String, true)
  public experience: string = undefined;

  @JsonProperty('fresher', String, true)
  public fresher: string = undefined;

}