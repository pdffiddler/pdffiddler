# Map
Represent Map/Dictionary kind of object
## Methods
#### clear()
Remove all items from map
- **Returns**: void
#### containsKey(K key)
Returns true if this map contains a mapping for the specified key
- **Props**:
  - `key`- K
- **Returns**: [Boolean](Boolean.html)
#### containsValue(K value)
Returns &lt;tt&gt;true&lt;/tt&gt; if this map maps one or more keys to the specified value.
- **Props**:
  - `value`- K
- **Returns**: [Boolean](Boolean.html)
#### each(Closure closure)
Iterates through a Map, passing each key, value to the given closure.
- **Props**:
  - `closure`- Closure
- **Returns**: [Map](Map.html)
#### eachWithIndex(Closure closure)
Iterates through a Map, passing each Key, value and the item's index (a counter starting at zero) to the given closure.
- **Props**:
  - `closure`- Closure
- **Returns**: [Map](Map.html)
#### get(K key)
Returns the value to which the specified key is mapped,
- **Props**:
  - `key`- K
- **Returns**: V
#### isEmpty()
Check if map is empty
- **Returns**: [Boolean](Boolean.html)
#### keySet()
Return list view of keys contained in this map
- **Returns**: [List](List.html)&lt;K&gt;
#### put(K key, V value)
Associates the specified value with the specified key in this map
- **Props**:
  - `key`- K
  - `value`- V
- **Returns**: V
#### remove(K key)
Removes the mapping for a key from this map if it is present
- **Props**:
  - `key`- K
- **Returns**: V
#### size()
Map size
- **Returns**: [Number](Number.html)
#### values()
Returns a List view of the values contained in this map.
- **Returns**: [List](List.html)&lt;V&gt;
