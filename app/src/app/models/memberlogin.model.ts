import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class memberlogin {
  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('musername', String, true)
  public musername: string = undefined;

}