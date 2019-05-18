# List
Represent Collection of object
## Methods
#### add(E e)
Add item at the end of list
- **Props**:
  - `e`- E
- **Returns**: boolean
#### add(Number idx, E e)
Add item at particular idx of list
- **Props**:
  - `idx`- [Number](Number.html)
  - `e`- E
- **Returns**: boolean
#### clear()
Remove all items from list
- **Returns**: void
#### collect(Closure transform)
Iterates through this Iterable transforming each entry into a new value using transform closure
- **Props**:
  - `transform`- Closure
- **Returns**: [List](List.html)
#### collectEntries(Closure transform)
Iterates through this Iterable transforming each item using the transform closure and returning a map of the resulting transformed entries.
- **Props**:
  - `transform`- Closure
- **Returns**: [Map](Map.html)
#### contains(E o)
Check if list contains object
- **Props**:
  - `o`- E
- **Returns**: [Boolean](Boolean.html)
#### each(Closure closure)
Iterates through a List, passing each item to the given closure.
- **Props**:
  - `closure`- Closure
- **Returns**: [List](List.html)
#### eachWithIndex(Closure closure)
Iterates through a List, passing each item and the item's index (a counter starting at zero) to the given closure.
- **Props**:
  - `closure`- Closure
- **Returns**: [List](List.html)
#### findAll(Closure closure)
Finds all values matching the closure condition.
- **Props**:
  - `closure`- Closure<br/>{(item)
- **Returns**: [List](List.html)
#### get(Number idx)
Return item at particular idx
- **Props**:
  - `idx`- [Number](Number.html)
- **Returns**: E
#### indexOf(E e)
Returns the index of the first occurrence of the specified element
- **Props**:
  - `e`- E
- **Returns**: [Number](Number.html)
#### isEmpty()
Check list is empty
- **Returns**: [Boolean](Boolean.html)
#### lastIndexOf(E e)
Returns the index of the last occurrence of the specified element
- **Props**:
  - `e`- E
- **Returns**: [Number](Number.html)
#### remove(Number idx)
Remove item at particular idx of list
- **Props**:
  - `idx`- [Number](Number.html)
- **Returns**: E
#### remove(E e)
Remove particular item from list
- **Props**:
  - `e`- E
- **Returns**: E
#### reverse()
Creates a new List with the identical contents to this list but in reverse order.
- **Returns**: [List](List.html)
#### size()
List size
- **Returns**: [Number](Number.html)
#### subList(Number fromIndex, Number toIndex)
Returns a view of the portion of this list between the specified idx
- **Props**:
  - `fromIndex`- [Number](Number.html)
  - `toIndex`- [Number](Number.html)
- **Returns**: [List](List.html)
#### toUnique()
Returns a List containing the items from the List but with duplicates removed using the natural ordering of the items to determine uniqueness.
- **Returns**: [List](List.html)
