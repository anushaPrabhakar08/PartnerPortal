import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class memberregisteration {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('emailId', String, true)
  public emailId: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}