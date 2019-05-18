# String
## Methods
#### charAt(Number index)
Get character at particular index
- **Props**:
  - `index`- [Number](Number.html)
- **Returns**: [String](String.html)
#### contains(String s)
Returns true if and only if this string contains the specified string
- **Props**:
  - `s`- [String](String.html)
- **Returns**: [Boolean](Boolean.html)
#### endsWith(String suffix)
Test if string ends with suffix
- **Props**:
  - `suffix`- [String](String.html)
- **Returns**: [Boolean](Boolean.html)
#### equals(String anotherString)
Returns true if and only if this string equals the specified string in case sensitive
- **Props**:
  - `anotherString`- [String](String.html)
- **Returns**: [Boolean](Boolean.html)
#### equalsIgnoreCase(String anotherString)
Returns true if and only if this string equals the specified string in case insensitive
- **Props**:
  - `anotherString`- [String](String.html)
- **Returns**: [Boolean](Boolean.html)
#### indexOf(String str, Number fromIndex=0)
Returns the index within this string of the first occurrence of the specified substring starting from fromIndex
- **Props**:
  - `str`- [String](String.html)
  - `fromIndex`- [Number](Number.html), defaults to `"0"`
- **Returns**: [Number](Number.html)
#### isEmpty()
Return true, if and only if length of string is zero
- **Returns**: [Boolean](Boolean.html)
#### lastIndexOf(String str, Number fromIndex=length()
Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index.
- **Props**:
  - `str`- [String](String.html)
  - `fromIndex`- [Number](Number.html), defaults to `"length("`
- **Returns**: [Number](Number.html)
#### length()
Length of String
- **Returns**: [Number](Number.html)
#### matches(String regex)
Tells whether or not this string matches the given regular expression
- **Props**:
  - `regex`- [String](String.html)
- **Returns**: [Boolean](Boolean.html)
#### replaceAll(String regex, String replacement)
Replaces each substring of this string that matches the given String
- **Props**:
  - `regex`- [String](String.html)
  - `replacement`- [String](String.html)
- **Returns**: [String](String.html)
#### replaceFirst(String regex, String replacement)
Replaces first substring of this string that matches the given String
- **Props**:
  - `regex`- [String](String.html)
  - `replacement`- [String](String.html)
- **Returns**: [String](String.html)
#### split(String regex, Number limit=0)
Splits this string around matches of the given regular expression
- **Props**:
  - `regex`- [String](String.html)
  - `limit`- [Number](Number.html), defaults to `"0"`
- **Returns**: String[]
#### startsWith(String prefix, Number offset=0)
Test if string starts with prefix
- **Props**:
  - `prefix`- [String](String.html)
  - `offset`- [Number](Number.html), defaults to `"0"`
- **Returns**: [Boolean](Boolean.html)
#### substring(Number beginIndex, Number endIndex=length()
Returns a string that is a substring of this string
- **Props**:
  - `beginIndex`- [Number](Number.html)
  - `endIndex`- [Number](Number.html), defaults to `"length("`
- **Returns**: [String](String.html)
#### toLowerCase()
To lowercase
- **Returns**: [String](String.html)
#### toUpperCase()
To Uppercase
- **Returns**: [String](String.html)
#### trim()
Returns a string whose value is this string, with any leading and trailing whitespaces removed
- **Returns**: [String](String.html)
