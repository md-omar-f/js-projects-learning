// The string
const str = "I want to count the number of occurrences of each char in this string";

// A map for the character=>count mappings
const counts = new Map();

// Loop through the string...
for (const ch of str) {
    // Get the count for it, if we have one; we'll get `undefined` if we don't
    // know this character yet. Using nullish coalescing (`??`), we can turn
    // that `undefined` into a `0`. (In obsolete environments that don't
    // support nullish coalescing, for this use case we could use the logical
    // OR operator [`||`] instead to use `0` instead of any falsy value, since
    // A) `undefined` is falsy, and B) None of the count values we're tracking
    // will be falsy because they're all non-zero. For some other use cases,
    // we'd need to use a conditional testing `undefined` explicitly.)
    const count = counts.get(ch) ?? 0;

    // Add one and store the result
    counts.set(ch, count + 1);
}

// Show the counts
for (const [ch, count] of counts) {
    console.log(`"${ch}" count: ${counts.get(ch)}`);
}