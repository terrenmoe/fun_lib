// Common Serializing Idioms
//
// To escape a character means to create a string of "\"
// (U+005C), followed by the character.
const escapeCharacter = (char = '', esc = `\u{005C}`) => `${esc}${char[0]}`;

// To escape a character as code point means to create a string
// of "\" (U+005C), followed by the Unicode code point as the
// smallest possible number of hexadecimal digits in the range
// 0-9 a-f (U+0030 to U+0039 and U+0061 to U+0066) to represent
// the code point in base 16, followed by a single SPACE
// (U+0020).

// In the Unicode standard, a plane is a continuous group of
// 65,536 (2**16) code points. There are 17 planes, identified by
// the numbers 0 to 16, which corresponds with the possible
// values 00–10₁₆ of the first two positions in six position
// hexadecimal format (U+hhhhhh).

// 65,472 of the 65,536 code points in this plane have been
// allocated to a Unicode block, leaving just 64 code points in
// unallocated ranges 48 code points at 0870..089F₁₆ and 16 code
// points at 2FE0..2FEF₁₆
const escapeCharAsCodePoint = (function() {
  const BasicMultilingualPlane =
    new Map(
      Array(2 ** 16).fill(1).map(
        (cur, idx) => [
          String.fromCodePoint(idx),
          idx.toString(16)
        ]
      )
    );
  return function(char = '') {
    if(!BasicMultilingualPlane.has(char)) {
      return char;
    }
    return `u{${BasicMultilingualPlane.get(char)}}`;
  };
}());

// To serialize an identifier means to create a string
// represented by the concatenation of, for each character of the
// identifier:
//
//     If the character is NULL (U+0000), then the REPLACEMENT
//     CHARACTER (U+FFFD).
//     If the character is in the range [\1-\1f] (U+0001 to
//     U+001F) or is U+007F, then the character escaped as code
//     point.
//     If the character is the first character and is in the
//     range [0-9] (U+0030 to U+0039), then the character escaped
//     as code point.
//     If the character is the second character and is in the
//     range [0-9] (U+0030 to U+0039) and the first character is
//     a "-" (U+002D), then the character escaped as code point.
//     If the character is the first character and is a "-"
//     (U+002D), and there is no second character, then the
//     escaped character.
//     If the character is not handled by one of the above rules
//     and is greater than or equal to U+0080, is "-" (U+002D) or
//     "_" (U+005F), or is in one of the ranges [0-9] (U+0030 to
//     U+0039), [A-Z] (U+0041 to U+005A), or \[a-z] (U+0061 to
//     U+007A), then the character itself.
//     Otherwise, the escaped character.
//
// To serialize a string means to create a string represented by
// '"' (U+0022), followed by the result of applying the rules
// below to each character of the given string, followed by '"'
// (U+0022):
//
//     If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
//     If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F, the character escaped as code point.
//     If the character is '"' (U+0022) or "\" (U+005C), the escaped character.
//     Otherwise, the character itself.
//
// Note: "'" (U+0027) is not escaped because strings are always serialized with '"' (U+0022).
//
// To serialize a URL means to create a string represented by "url(", followed by the serialization of the URL as a string, followed by ")".
//
// To serialize a LOCAL means to create a string represented by "local(", followed by the serialization of the URL as a string, followed by ")".
//
// To serialize a comma-separated list concatenate all items of the list in list order while separating them by ", ", i.e., COMMA (U+002C) followed by a single SPACE (U+0020).
//
// To serialize a whitespace-separated list
// concatenate all items of the list in list order while separating them by " ", i.e., a single SPACE (U+0020).
//
// Note: When serializing a list according to the above rules, extraneous whitespace is not inserted prior to the first item or subsequent to the last item. Unless otherwise specified, an empty list is serialized as the empty string.
