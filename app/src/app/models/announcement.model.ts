import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class announcement {
  @JsonProperty('announcement', String, true)
  public announcement: string = undefined;

}