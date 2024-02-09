import type { ActorPF2e } from "@actor";
import { ItemPF2e } from "@item";
import { ActionCost, Frequency, RawItemChatData } from "@item/base/data/index.ts";
import { RangeData } from "@item/types.ts";
import type { UserPF2e } from "@module/user/index.ts";
import { AbilitySource, AbilitySystemData } from "./data.ts";
import { ActionTrait } from "./types.ts";
declare class AbilityItemPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    range: RangeData | null;
    static get validTraits(): Record<ActionTrait, string>;
    get traits(): Set<ActionTrait>;
    get actionCost(): ActionCost | null;
    get frequency(): Frequency | null;
    prepareBaseData(): void;
    onPrepareSynthetics(this: AbilityItemPF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
    getChatData(this: AbilityItemPF2e<ActorPF2e>, htmlOptions?: EnrichmentOptions): Promise<RawItemChatData>;
    protected _preCreate(data: this["_source"], options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
    protected _preUpdate(changed: DeepPartial<this["_source"]>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
}
interface AbilityItemPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: AbilitySource;
    system: AbilitySystemData;
}
export { AbilityItemPF2e };
