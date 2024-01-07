import type { DamageDicePF2e } from "@actor/modifiers.ts";
import { DamageInstance, DamageRoll } from "./roll.ts";
import { ArithmeticExpression, Grouping } from "./terms.ts";
import { BaseDamageData, DamageCategory, DamageDieSize, DamageType } from "./types.ts";
declare function nextDamageDieSize(next: {
    upgrade: DamageDieSize;
}): DamageDieSize;
declare function nextDamageDieSize(next: {
    downgrade: DamageDieSize;
}): DamageDieSize;
/** Provides constants for typical damage categories */
declare const DamageCategorization: {
    /** Map a damage type to its corresponding damage category, if any. */
    readonly fromDamageType: (damageType: DamageType) => DamageCategory | null;
    /** Get a set of all damage categories (both base and custom). */
    readonly allCategories: () => Set<"abysium" | "adamantine" | "dawnsilver" | "djezet" | "duskwood" | "energy" | "inubrix" | "noqual" | "orichalcum" | "physical" | "siccatite" | "silver" | "precision" | "splash" | "cold-iron" | "keep-stone" | "peachwood" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "warpglass" | "persistent" | null>;
    /** Get a set of all of the base rule damage types. */
    readonly baseCategories: () => Set<"abysium" | "adamantine" | "dawnsilver" | "djezet" | "duskwood" | "energy" | "inubrix" | "noqual" | "orichalcum" | "physical" | "siccatite" | "silver" | "precision" | "splash" | "cold-iron" | "keep-stone" | "peachwood" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "warpglass" | "persistent" | null>;
    /** Map a damage category to the set of damage types in it. */
    readonly toDamageTypes: (category: string) => Set<string>;
};
/** Apply damage dice overrides and upgrades to a non-weapon's damage formula */
declare function applyDamageDiceOverrides(baseEntries: BaseDamageData[], dice: DamageDicePF2e[], options?: {
    critical?: boolean;
    maxIncreases?: number;
}): void;
/**
 * Given a DamageRoll, reverts it into base damage data to allow adding modifiers and damage dice.
 * Throws an exception if it cannot be parsed
 */
declare function extractBaseDamage(roll: DamageRoll): BaseDamageData[];
/** Create a span element for displaying splash damage */
declare function renderComponentDamage(term: RollTerm): HTMLElement;
declare function isSystemDamageTerm(term: RollTerm): term is ArithmeticExpression | Grouping;
declare function deepFindTerms(term: RollTerm, { flavor }: {
    flavor: string;
}): RollTerm[];
/**
 * Create or retrieve a simplified term from a more-complex one, given that it can be done without information loss.
 * @returns A simplified term, if possible, or otherwise the original
 */
declare function simplifyTerm<T extends RollTerm>(term: T): T | Die | NumericTerm;
declare function isFlavoredArithmetic(term: RollTerm): boolean;
/** Check whether a roll has dice terms associated with a damage roll */
declare function looksLikeDamageRoll(roll: Roll): boolean;
/** Create a representative Font Awesome icon from a damage roll */
declare function damageDiceIcon(roll: DamageRoll | DamageInstance, { fixedWidth }?: {
    fixedWidth?: boolean | undefined;
}): HTMLElement;
export { DamageCategorization, applyDamageDiceOverrides, damageDiceIcon, deepFindTerms, extractBaseDamage, isFlavoredArithmetic, isSystemDamageTerm, looksLikeDamageRoll, nextDamageDieSize, renderComponentDamage, simplifyTerm, };
