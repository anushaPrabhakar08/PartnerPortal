import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class Developers {
  @JsonProperty('firstname', String, true)
  public firstname: string = undefined;

  @JsonProperty('lastname', String, true)
  public lastname: string = undefined;

  @JsonProperty('designation', String, true)
  public designation: string = undefined;

}