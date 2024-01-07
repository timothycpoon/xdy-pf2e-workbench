import type { ActorPF2e } from "@actor";
import { ItemPF2e } from "@item";
import { ItemSourcePF2e } from "@item/base/data/index.ts";
import type { StringField } from "types/foundry/common/data/fields.d.ts";
import { AELikeChangeMode } from "../ae-like.ts";
import type { RuleElementPF2e } from "../base.ts";
import { ResolvableValueField } from "../data.ts";
declare class ItemAlteration extends foundry.abstract.DataModel<RuleElementPF2e, ItemAlterationSchema> {
    #private;
    static VALID_PROPERTIES: readonly ["ac-bonus", "badge-max", "badge-value", "bulk", "category", "check-penalty", "description", "dex-cap", "focus-point-cost", "hardness", "hp-max", "material-type", "pd-recovery-dc", "persistent-damage", "rarity", "frequency-max", "frequency-per", "other-tags", "speed-penalty", "strength", "traits"];
    static defineSchema(): ItemAlterationSchema;
    get actor(): ActorPF2e;
    /** Convenience access to the parent rule element's `resolveValue` method */
    resolveValue(...args: Parameters<RuleElementPF2e["resolveValue"]>): ReturnType<RuleElementPF2e["resolveValue"]>;
    /**
     * Apply this alteration to an item (or source)
     * @param item The item to be altered
     */
    applyTo(item: ItemPF2e<ActorPF2e> | ItemSourcePF2e): void;
}
interface ItemAlteration extends foundry.abstract.DataModel<RuleElementPF2e, ItemAlterationSchema>, ModelPropsFromSchema<ItemAlterationSchema> {
}
type ItemAlterationSchema = {
    mode: StringField<AELikeChangeMode, AELikeChangeMode, true, false, false>;
    property: StringField<ItemAlterationProperty, ItemAlterationProperty, true, false, false>;
    value: ResolvableValueField<true, true, false>;
};
type ItemAlterationProperty = (typeof ItemAlteration.VALID_PROPERTIES)[number];
export { ItemAlteration };
export type { ItemAlterationProperty, ItemAlterationSchema };
