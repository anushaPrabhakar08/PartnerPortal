import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class user {
  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('remember', Boolean, true)
  public remember: boolean = undefined;

  @JsonProperty('type', String, true)
  public type: string = undefined;

}