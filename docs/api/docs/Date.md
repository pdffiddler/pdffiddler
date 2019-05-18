# Date
## Methods
#### format(String pattern)
Format date using below pattern
- **Props**:
  - `pattern`- [String](String.html)
- **Returns**: [String](String.html)
#### minus(Number amountToSubtract, ChronoUnit unit)
Minus field from date
- **Props**:
  - `amountToSubtract`- [Number](Number.html)
  - `unit`- [ChronoUnit](ChronoUnit.html)
- **Returns**: [Date](Date.html)
#### now()
Return current date
- **Returns**: [Date](Date.html)
#### parse(String dateStr, String pattern)
Parse String using pattern
- **Props**:
  - `dateStr`- [String](String.html)
  - `pattern`- [String](String.html)
- **Returns**: [Date](Date.html)
#### plus(Number amountToAdd, ChronoUnit unit)
Plus field to date
- **Props**:
  - `amountToAdd`- [Number](Number.html)
  - `unit`- [ChronoUnit](ChronoUnit.html)<br/>eg: HOURS, MINUTES, SECONDS, DAYS, WEEKS, MONTHS, YEARS
- **Returns**: [Date](Date.html)
