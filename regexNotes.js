'use strict';

/** RegExp passed Methods

from RegExp:
  exec: executes a search for a match in a string. It returns an array of information or null on a mismatch.
  test: tests for a match in a string. It returns true or false.
from String:
  match: returns an array containing all of the matches, including capturing groups, or null if no match is found.
  matchAll: returns an iterator containing all of the matches, including capturing groups.
  replace: tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  search: executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  split: uses a regular expression or a fixed string to break a string into an array of substrings.
**/

// Regex Patterns

/** Assertions:
Indicate in some way that a match is possible.
Assertions expression types:
  For each type key, it Matches A only if A is:
    Look-ahead: followed by B.
    Ex. /A(?=B)/
    Negative Look-ahead: not followed by B.
    Ex. /A(?!B)/
    Look-behind: preceded by B.
    Ex. /(?<=B)A/
    Negative Look-behind: not preceded by B.
    Ex. /(?<!B)A/
**/

/** Boundaries:
Indicate the beginnings and endings of lines and words
Boundary expression types:
  For each type key the symbol matches nothing in the position:
    ^: at start and after line breaks
    $: at end amd befre line breaks
    \b: at word boundaries
    \B: at non-word boundaries
**/

/** Character Classes:
Distinguishes kinds of chars
Character Class expression types:
  .: any single char except line terminators,
      When bracketed it's literal
      The s flag for dotall to also match line terminators
  \d: digit [0-9]
  \D: non-digit [^0-9]
  \w: alphanumeric char [a-zA-Z0-9_]
  \W: non-alphanumeric char [^a-zA-Z0-9_]
  \s: any space char
      [\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
  \S: non-space char
  \t: tab
  \r: return
  \n: newline
  \v: vertical tab
  \f: form feed
  [\b]: backspace
  \0: null
  \cX: control seq literal
  \xhh: double hex digiit codepoint
  \uhhhh: utf-16 hex digit codepoint
  \: backslash escape char, can use \\ to escape itself
  When u flag is set extendend utf-16
    \u{h+}: u flag enables curly \u esc w/ 1-6 hex digits
**/

/** Groups and Ranges:
Indicates groups and ranges of expression chars
Group and Range expression types:
  A|B:
  [ABC]: Char set matches any single char
  [A-C]: Range giving same as above Char set
  [^ABC]: Not Char set
  [^AC-]: Matches Any char not A, C or hyphen
  (ABC): Capturing groups
  (?<Name>x): Named Capturing groups
  (?:ABC): Non-Capturing groups
  \n: Back Reference
**/

/** Quantifiers:
Indicates numbers of chars or expressions to match
Quantifier expression types:
  A*
  A+
  A?
  A{n}
  A{n,}
  A{n,m}
The above list can also be appended a ? to avoid greedy matching
  Ex: A* vs A*? matched against AAAA
    A* matches: AAA
    A*? matches: A
**/

/** Unicode Property Escapes:
Distinguishes based on unicode char properties
Unicode property expression types:
  Non-Binary
    \p{LC}
    \p{Cased_Letter}
    \p{UnicodePropertyName=Cased_Letter}
      Any letter with both lower case and upper case variants.
      This is equivalent to \p{Lu}|\p{Ll}|p{Lt}.

    \p{Close_Punctuation}
    \p{UnicodePropertyName=Close_Punctuation}

    \p{Connector_Punctuation}
    \p{UnicodePropertyName=Connector_Punctuation}

    \p{Control}
    \p{UnicodePropertyName=Control}

    \p{Currency_Symbol}
    \p{UnicodePropertyName=Currency_Symbol}

    \p{Dash_Punctuation}
    \p{UnicodePropertyName=Dash_Punctuation}

    \p{Decimal_Number}
    \p{UnicodePropertyName=Decimal_Number}

    \p{Enclosing_Mark}
    \p{UnicodePropertyName=Enclosing_Mark}

    \p{Final_Punctuation}
    \p{UnicodePropertyName=Final_Punctuation}

    \p{Format}
    \p{UnicodePropertyName=Format}

    \p{Initial_Punctuation}
    \p{UnicodePropertyName=Initial_Punctuation}

    \p{Letter}
    \p{UnicodePropertyName=Letter}

    \p{Letter_Number}
    \p{UnicodePropertyName=Line_Separator}

    \p{Lowercase_Letter}
    \p{UnicodePropertyName=Lowercase_Letter}

    \p{Mark}
    \p{UnicodePropertyName=Mark}

    \p{Math_Symbol;}
    \p{UnicodePropertyName=Math_Symbol}

    \p{Modifier_Letter}
    \p{UnicodePropertyName=Modifier_Letter}

    \p{Modifier_Symbol}
    \p{UnicodePropertyName=Modifier_Symbol}

    \p{Nonspacing_Mark}
    \p{UnicodePropertyName=Nonspacing_Mark}

    \p{Number}
    \p{UnicodePropertyName=Number}

    \p{Open_Punctuation}
    \p{UnicodePropertyName=Open_Punctuation}

    \p{Other}
    \p{UnicodePropertyName=Other_Letter}

    \p{Other_Letter}
    \p{UnicodePropertyName=Other_Letter}

    \p{Other_Number}
    \p{UnicodePropertyName=Other_Number}

    \p{Other_Punctuation}
    \p{UnicodePropertyName=Other_Punctuation}

    \p{Paragraph_Separator}
    \p{UnicodePropertyName=Paragraph_Separator}

    \p{Private_Use}
    \p{UnicodePropertyName=Private_Use}

    \p{Punctuation}
    \p{UnicodePropertyName=Punctuation}

    \p{Separator}
    \p{UnicodePropertyName=Separator}

    \p{Space_Separator}
    \p{UnicodePropertyName=Space_Separator}

    \p{Spaceing_Mark}
    \p{UnicodePropertyName=Spacing_Mark}

    \p{Surrogate}
    \p{UnicodePropertyName=Surrogate}

    \p{Symbol}
    \p{UnicodePropertyName=Symbol}

    \p{Titlecase_Letter}
    \p{UnicodePropertyName=Titlecase_Letter}

    \p{Unassigned}
    \p{UnicodePropertyName=Unassigned}

    \p{Uppercase_Letter}
    \p{UnicodePropertyName=UppercaseLetter}

  Binary
    \p{Alphabetic}
    \p{Bidi_Control}
    \p{Bidi_Mirrored}
    \p{Case_Ignorable}
    \p{Cased}
    \p{Changes_When_Casefolded}
    \p{Changes_When_Casemapped}
    \p{Changes_When_Lowercased}
    \p{Changes_When_NFKC_Casefolded}
    \p{Changes_When_Titlecased}
    \p{Changes_When_Uppercased}
    \p{Dash}
    \p{Default_Ignorable_Code_Point}
    \p{Deprecated}
    \p{Diacritic}
    \p{Emoji}
    \p{Emoji_Component}
    \p{Emoji_Modifier}
    \p{Emoji_Modifier_Base}
    \p{Emoji_Presentation}
    \p{Extender}
    \p{Grapheme_Base}
    \p{Grapheme_Extend}
    \p{Hex_Digit}
    \p{ID_Continue}
    \p{ID_Start}
    \p{Ideographic}
    \p{IDS_Binary_Operator}
    \p{IDS_Trinary_Operator}
    \p{Join_Control}
    \p{Logical_Order_Exception}
    \p{Lowercase}
    \p{Math}
    \p{Noncharacter_Code_Point}
    \p{Pattern_Syntax}
    \p{Pattern_White_Space}
    \p{Quotation_Mark}
    \p{Radical}
    \p{RegionalIndicator}
    \p{Sentence_Terminal}
    \p{Soft_Dotted}
    \p{Terminal_Punctuation}
    \p{Unified_Ideograph}
    \p{Uppercase}
    \p{Variation_Selector}
    \p{White_Space}
    \p{XID_Continue}
    \p{XID_Start}
**/
