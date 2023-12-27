import type { ActorPF2e } from "@actor";
import type { ActorType } from "@actor/data/index.ts";
/**
 * Collects every actor whose token is controlled on the canvas, and if none are, collects the current user's character, if it exists.
 * @param types The actor types the function should take into consideration.
 * @returns An array of ActorPF2E elements according to the aforementioned filters.
 */
declare function getSelectedOrOwnActors(types?: ActorType[]): ActorPF2e[];
export { getSelectedOrOwnActors };