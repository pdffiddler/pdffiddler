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
#### split(List&lt;Number&gt; ratio, Boolean rowSplit=false)
Split Region into multiple region
- **Props**:
  - `ratio`- [List](List.html)&lt;[Number](Number.html)&gt;
  - `rowSplit`- [Boolean](Boolean.html), defaults to `"false"`<br/>if true, then split row wise
- **Returns**: [List](List.html)&lt;[Region](Region.html)&gt;
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
