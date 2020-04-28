# Global
## Methods
#### fixed(Number v)
Return Fixed Number
- **Props**:
  - `v`- [Number](Number.html)
- **Returns**: Fixed
#### formatDate(Date d, String pattern)
Format date to string
- **Props**:
  - `d`- [Date](Date.html)
  - `pattern`- [String](String.html)
- **Returns**: [String](String.html)
#### group(List&lt;Document&gt; documents, List&lt;Region&gt; regions, Boolean ascending=null, Number pageNumber=1, Boolean fromLast=false)
Merge/Group documents into one based upon text within region on particular page defined by pageNumber of each document
- **Props**:
  - `documents`- [List](List.html)&lt;[Document](Document.html)&gt;
  - `regions`- [List](List.html)&lt;[Region](Region.html)&gt;
  - `ascending`- [Boolean](Boolean.html), defaults to `"null"`
  - `pageNumber`- [Number](Number.html), defaults to `"1"`
  - `fromLast`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [List](List.html)&lt;[Document](Document.html)&gt;
#### load(String path, String password="", String privateKey=null, String alias=null)
Load document from path
- **Props**:
  - `path`- [String](String.html)
  - `password`- [String](String.html), defaults to `""""`
  - `privateKey`- [String](String.html), defaults to `"null"`
  - `alias`- [String](String.html), defaults to `"null"`
- **Returns**: [Document](Document.html)
#### loadAll(List&lt;String&gt; | Map&lt;String, String&gt; | String path)
Load all unencrypted document from path
- **Props**:
  - `path`- [List](List.html)&lt;[String](String.html)&gt; | [Map](Map.html)&lt;[String](String.html), [String](String.html)&gt; | [String](String.html)
- **Returns**: [List](List.html)&lt;[Document](Document.html)&gt;
#### loadCSV(String path, Boolean withHeader=true, String seperator=")
Load CSV document
- **Props**:
  - `path`- [String](String.html)
  - `withHeader`- [Boolean](Boolean.html), defaults to `"true"`
  - `seperator`- [String](String.html), defaults to `"""`
- **Returns**: any
#### loadFile(String path, Boolean isBinary=false, Boolean asLines=true)
Load file
- **Props**:
  - `path`- [String](String.html)
  - `isBinary`- [Boolean](Boolean.html), defaults to `"false"`<br/>in binary/text format
  - `asLines`- [Boolean](Boolean.html), defaults to `"true"`<br/>in
- **Returns**: any
#### loadFont(String fontPath, Boolean embedSubset=false)
Load font from path
- **Props**:
  - `fontPath`- [String](String.html)
  - `embedSubset`- [Boolean](Boolean.html), defaults to `"false"`<br/>default false, if true, strip down to required character and remove cmap table.
- **Returns**: [Font](Font.html)
#### loadImage(String imagePath)
Load image from path
- **Props**:
  - `imagePath`- [String](String.html)
- **Returns**: [Image](Image.html)
#### loadJSON(String path)
Load valid JSON document
- **Props**:
  - `path`- [String](String.html)
- **Returns**: any
#### loadXML(String path)
Load valid XML document
- **Props**:
  - `path`- [String](String.html)
- **Returns**: any
#### log(def data)
Write log for debugging purpose
- **Props**:
  - `data`- any
- **Returns**: any
#### merge(List | Map | Document | String documents)
Merge documents into one
- **Props**:
  - `documents`- [List](List.html) | [Map](Map.html) | [Document](Document.html) | [String](String.html)
- **Returns**: [Document](Document.html)
#### now()
Current date
- **Returns**: [Date](Date.html)
#### output(Document | List&lt;Document&gt; | Map&lt;String, Document&gt; | Map&lt;String, List&lt;Document&gt;&gt; document, String fileName=null)
Output document to file path
- **Props**:
  - `document`- [Document](Document.html) | [List](List.html)&lt;[Document](Document.html)&gt; | [Map](Map.html)&lt;[String](String.html), [Document](Document.html)&gt; | [Map](Map.html)&lt;[String](String.html), [List](List.html)&lt;[Document](Document.html)&gt;&gt;<br/>Can be of type Document or List&lt;Document&gt; or Map&lt;String, Document&gt;
  - `fileName`- [String](String.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[String](String.html)&gt;
#### outputCSV(List&lt;Map&lt;String, String&gt;&gt; data, Boolean withHeader=true, String seperator=', String fileName=null)
Output data in CSV format
- **Props**:
  - `data`- [List](List.html)&lt;[Map](Map.html)&lt;[String](String.html), [String](String.html)&gt;&gt;
  - `withHeader`- [Boolean](Boolean.html), defaults to `"true"`
  - `seperator`- [String](String.html), defaults to `"'"`
  - `fileName`- [String](String.html), defaults to `"null"`
- **Returns**: [String](String.html)
#### outputFile(String | List&lt;String&gt; | byte[] data, String fileName=null)
Output file
- **Props**:
  - `data`- [String](String.html) | [List](List.html)&lt;[String](String.html)&gt; | byte[]
  - `fileName`- [String](String.html), defaults to `"null"`
- **Returns**: [String](String.html)
#### outputFont(Font font)
Output font
- **Props**:
  - `font`- [Font](Font.html)
- **Returns**: [String](String.html)
#### outputImage(Image | List&lt;Image&gt; image, String imageName=null)
Output image to file path
- **Props**:
  - `image`- [Image](Image.html) | [List](List.html)&lt;[Image](Image.html)&gt;
  - `imageName`- [String](String.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[String](String.html)&gt;
#### outputJSON(def data, String fileName=null)
Output data in JSON format
- **Props**:
  - `data`- any
  - `fileName`- [String](String.html), defaults to `"null"`
- **Returns**: [String](String.html)
#### outputXML(def data, String fileName=null)
Output data in XML format
- **Props**:
  - `data`- any
  - `fileName`- [String](String.html), defaults to `"null"`
- **Returns**: [String](String.html)
#### parseDate(String dateStr, String pattern)
Parse date
- **Props**:
  - `dateStr`- [String](String.html)
  - `pattern`- [String](String.html)
- **Returns**: [Date](Date.html)
#### partition(List&lt;Document&gt; documents, Map&lt;String, Predicate&lt;Document&gt;&gt; cond, Boolean exclusive=true)
Partition/Index documents into various document streams based upon condition such as same text.. within particular page of each document
- **Props**:
  - `documents`- [List](List.html)&lt;[Document](Document.html)&gt;
  - `cond`- [Map](Map.html)&lt;[String](String.html), Predicate&lt;[Document](Document.html)&gt;&gt;
  - `exclusive`- [Boolean](Boolean.html), defaults to `"true"`
- **Returns**: [Map](Map.html)&lt;[String](String.html), [List](List.html)&lt;[Document](Document.html)&gt;&gt;
#### sort(List&lt;Document&gt; documents, List&lt;Region&gt; regions, Boolean ascending=true, Number pageNumber=1, Boolean fromLast=false)
Sort the list of document based upon text within region on particular page defined by pageNumber of each document
- **Props**:
  - `documents`- [List](List.html)&lt;[Document](Document.html)&gt;
  - `regions`- [List](List.html)&lt;[Region](Region.html)&gt;
  - `ascending`- [Boolean](Boolean.html), defaults to `"true"`
  - `pageNumber`- [Number](Number.html), defaults to `"1"`
  - `fromLast`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [List](List.html)&lt;[Document](Document.html)&gt;
