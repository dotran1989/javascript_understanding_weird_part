// Boolean("")
// false
// Boolean(null)
// false
// Boolean(undefined)
// false

var a = 0; // undefined, null, "", 0 -> nothing

// "hi", "0" -> Something is there. -> "0" is not necessarily lack of existence (valid value).

if (a) { // Boolean(0) -> false
    console.log('Something is there.');
}

if (a || a === 0) { // false || true
    console.log('Something is there 222.');
}