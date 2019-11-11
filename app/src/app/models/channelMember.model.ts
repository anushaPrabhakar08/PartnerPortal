import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class channelMember {
  @JsonProperty('firstname', String, true)
  public firstname: string = undefined;

  @JsonProperty('lastname', String, true)
  public lastname: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}