import type { ActorType } from "@actor/types.ts";
import type { ArrayField, StringField } from "types/foundry/common/data/fields.d.ts";
import { ModelPropsFromRESchema } from "./data.ts";
import { RuleElementOptions, RuleElementPF2e, RuleElementSchema, RuleElementSource } from "./index.ts";
declare class ActorTraitsRuleElement extends RuleElementPF2e<ActorTraitsRuleSchema> {
    #private;
    protected static validActorTypes: ActorType[];
    static defineSchema(): ActorTraitsRuleSchema;
    constructor(data: RuleElementSource, options: RuleElementOptions);
    beforePrepareData(): void;
}
type ActorTraitsRuleSchema = RuleElementSchema & {
    add: ArrayField<StringField<string, string, true, false, false>>;
    remove: ArrayField<StringField<string, string, true, false, false>>;
};
interface ActorTraitsRuleElement extends RuleElementPF2e<ActorTraitsRuleSchema>, ModelPropsFromRESchema<ActorTraitsRuleSchema> {
}
export { ActorTraitsRuleElement };
