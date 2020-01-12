# Region
Represent window of interest on which perform operation
## Methods
#### bottomLeft()
Get bottom left point
- **Returns**: [Point](Point.html)
#### bottomRight()
Get bottom right
- **Returns**: [Point](Point.html)
#### center()
Get center point
- **Returns**: [Point](Point.html)
#### height()
Get height
- **Returns**: [Number](Number.html)
#### setConditionalTextTransform(Function&lt;String, String&gt; transformation={ String s -&gt; s }, ICondition cond=new AlwaysMatch()
if condition satisfy, then extract text by applying transformation
- **Props**:
  - `transformation`- Function&lt;[String](String.html), [String](String.html)&gt;, defaults to `"{ String s -&gt; s }"`
  - `cond`- ICondition, defaults to `"new AlwaysMatch("`
- **Returns**: [Region](Region.html)
#### split(RSplit split)
Split region into multiple region
- **Props**:
  - `split`- [RSplit](RSplit.html)
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Region](Region.html)&gt;&gt;
#### topLeft()
Get top left point
- **Returns**: [Point](Point.html)
#### topRight()
Get top right point
- **Returns**: [Point](Point.html)
#### width()
Get width
- **Returns**: [Number](Number.html)
#### x()
Get x coordinate at top left position
- **Returns**: [Number](Number.html)
#### y()
Get y coordinate at top left position
- **Returns**: [Number](Number.html)
