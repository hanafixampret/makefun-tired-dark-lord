import { mkdirSync, writeFileSync } from "node:fs";

// A 100-word monologue for a fantasy villain who is secretly just very tired.
// Tiredness lives in the pauses, the lost thread, the small deflections —
// never in a plain statement of weariness. The speaker keeps his scheme
// (the Thursday eclipse, the rite, the witness) and his history (three
// kneeling kings, the tax rolls, the Sleepless One) while his hands shake.
const MONOLOGUE =
  "Hero. Sit. No — stand. It hardly matters. The gate stands open, the " +
  "crown is... where did I leave it. Under the maps. Three kings knelt " +
  "this winter, yet the tax rolls chase me home. Your blade is bright. " +
  "Mine rusts in the east wing, beside the cat. The eclipse comes " +
  "Thursday. Nine years I've waited for Thursday, and the priests keep " +
  "shifting it. The villages call me the Sleepless One. Ha. If only. " +
  "Kneel, then. Or don't. The rite needs a witness, not a corpse. Just " +
  "hold the candle still, please. My hands shake now. They never used to.";

const words = MONOLOGUE.split(/\s+/).filter(Boolean);
// Count Unicode code points, not UTF-16 units, to match the gate's
// notion of "characters" for any punctuation the monologue may hold.
const chars = [...MONOLOGUE].length;
if (words.length < 90 || words.length > 110) {
  throw new Error(`word count ${words.length} is outside 90-110`);
}
if (chars < 1 || chars > 600) {
  throw new Error(`char count ${chars} is outside 1-600`);
}
if (!MONOLOGUE.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE);
console.log(`wrote ${words.length} words, ${chars} chars`);
