import * as t from "io-ts";
import { tNullable } from "../../utils";
import { BasePluginType } from "knub";
import { GuildArchives } from "../../data/GuildArchives";

export const ConfigSchema = t.type({
  can_use: t.boolean,
  update_cmd: tNullable(t.string),
});
export type TConfigSchema = t.TypeOf<typeof ConfigSchema>;

export interface BotControlPluginType extends BasePluginType {
  config: TConfigSchema;
  state: {
    archives: GuildArchives;
  };
}
