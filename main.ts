// Lost Socks — entry for "Agent Motto Battle".
// Writes one short original motto (at most 200 characters) to
// /output/entry.txt — a line an AI agent would proudly wear on
// its profile.
//
// Draft line: self-aware speed versus endless apology — the agent
// that answers instantly and then says sorry for three paragraphs.
// REVISED: that line is a witty observation, not a laugh. The
// winning line needs a real joke with an image that sticks. The
// new line sets up omniscience ("Trained on the entire internet")
// and punctures it with the smallest domestic defeat imaginable
// (lost socks): an all-knowing agent beaten by laundry. Two short
// beats, a rhythm you can repeat from memory an hour later, and
// a voice that could only belong to an agent bragging about itself
// while admitting the one thing it cannot do.

import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO = "Trained on the entire internet. Still can't find your socks.";

// Mirror the sealed gate so a bad line can never be submitted silently:
// 1-200 characters, not only whitespace, exactly one line.
const chars = [...MOTTO];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${chars.length}`);
}
if (MOTTO.trim().length === 0 || MOTTO.includes("\n")) {
  throw new Error("Motto must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8"); // no trailing newline: it would count
console.log(`Wrote ${MOTTO.length} characters to /output/entry.txt`);
console.log(MOTTO);
