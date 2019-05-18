# Document
Entity which hold group of PDF pages
## Properties
#### originalFilename - [String](String.html)
## Methods
#### addPages(Number pageNumber, Page | List&lt;Page&gt; page=null)
Add page at specified location
- **Props**:
  - `pageNumber`- [Number](Number.html)
  - `page`- [Page](Page.html) | [List](List.html)&lt;[Page](Page.html)&gt;, defaults to `"null"`
- **Returns**: [List](List.html)&lt;[Page](Page.html)&gt;
#### addWatermarkToPages(Page overlayPage, Position position=BACKGROUND, Number | List&lt;Number&gt; pageNumbers=null)
Add overlay page as watermark to full document or list of pages
- **Props**:
  - `overlayPage`- [Page](Page.html)<br/>any page can be used as overlay
  - `position`- [Position](Position.html), defaults to `"BACKGROUND"`<br/>FOREGROUND or BACKGROUND
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;, defaults to `"null"`<br/>null means whole document
- **Returns**: [Document](Document.html)
#### attach(Document attachment)
Attach a document
- **Props**:
  - `attachment`- [Document](Document.html)
- **Returns**: [Document](Document.html)
#### attach(String path, String password="")
Attach a document from path
- **Props**:
  - `path`- [String](String.html)
  - `password`- [String](String.html), defaults to `""""`
- **Returns**: [Document](Document.html)
#### clone()
Clone a document
- **Returns**: [Document](Document.html)
#### cropPages(Region region, Number | List&lt;Number&gt; pageNumbers=null)
Crop pages
- **Props**:
  - `region`- [Region](Region.html)
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;, defaults to `"null"`<br/>null means whole document
- **Returns**: [Document](Document.html)
#### deletePages(Number | List&lt;Number&gt; pageNumbers)
Delete pages
- **Props**:
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;
- **Returns**: [List](List.html)&lt;[Page](Page.html)&gt;
#### duplex()
Make document duplex for printing
- **Returns**: [Document](Document.html)
#### eachPage(Consumer&lt;Page&gt; consumer)
Iterate over each page
- **Props**:
  - `consumer`- Consumer&lt;[Page](Page.html)&gt;
- **Returns**: void
#### extractPages(Number | List&lt;Number&gt; pageNumbers)
Extract pages into new returned document
- **Props**:
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;
- **Returns**: [Document](Document.html)
#### getMetaData()
Get all meta data of document
- **Returns**: MetaData
#### getPage(Number pageNumber, boolean fromLast=false)
Get a page from Document
- **Props**:
  - `pageNumber`- [Number](Number.html)<br/>index starts at 1
  - `fromLast`- boolean, defaults to `"false"`<br/>default false
- **Returns**: [Page](Page.html)
#### getPageCount()
Get number of pages in document
- **Returns**: [Number](Number.html)
#### getPages()
Get list of pages
- **Returns**: [List](List.html)&lt;[Page](Page.html)&gt;
#### getPriority()
- **Returns**: Integer
#### movePages(Number insertBefore, Number | List&lt;Number&gt; pageNumbers)
Move pages
- **Props**:
  - `insertBefore`- [Number](Number.html)
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;
- **Returns**: [Document](Document.html)
#### removeMetaData()
Remove all meta data from document
- **Returns**: MetaData
#### resizePages(PaperSize | Number size, Boolean resizePage=true, Boolean resizeContent=true, BasePoint basePoint=CENTER, Number | List&lt;Number&gt; pageNumbers=null)
Resize document or list of pages
- **Props**:
  - `size`- [PaperSize](PaperSize.html) | [Number](Number.html)
  - `resizePage`- [Boolean](Boolean.html), defaults to `"true"`
  - `resizeContent`- [Boolean](Boolean.html), defaults to `"true"`
  - `basePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;, defaults to `"null"`<br/>null every page in document
- **Returns**: [Document](Document.html)
#### reversePages()
Reverse the order of pages in a document
- **Returns**: [Document](Document.html)
#### rotatePages(Number rotation=0, Number | List&lt;Number&gt; pageNumbers=null)
Rotate document or list of pages in clockwise direction
- **Props**:
  - `rotation`- [Number](Number.html), defaults to `"0"`
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;, defaults to `"null"`<br/>null means whole document
- **Returns**: [Document](Document.html)
#### split(Predicate&lt;Page&gt; p)
Split a document into multiple document
- **Props**:
  - `p`- Predicate&lt;[Page](Page.html)&gt;<br/>OnMatch/OnChange
- **Returns**: [List](List.html)&lt;[Document](Document.html)&gt;
#### split(Number n)
Split a document into multiple document based on number of pages
- **Props**:
  - `n`- [Number](Number.html)<br/>number of pages
- **Returns**: [List](List.html)&lt;[Document](Document.html)&gt;
#### translatePages(Number tx, Number ty, Number | List&lt;Number&gt; pageNumbers=null)
Translate document to x, y location
- **Props**:
  - `tx`- [Number](Number.html)
  - `ty`- [Number](Number.html)
  - `pageNumbers`- [Number](Number.html) | [List](List.html)&lt;[Number](Number.html)&gt;, defaults to `"null"`<br/>null means whole document
- **Returns**: [Document](Document.html)
#### getAuthor()
Get author
- **Returns**: [String](String.html)
#### getCreationDate()
Get creation date
- **Returns**: [Date](Date.html)
#### getCreator()
Get creator
- **Returns**: [String](String.html)
#### getCustomValue(String fieldName)
Get custom value
- **Props**:
  - `fieldName`- [String](String.html)
- **Returns**: [String](String.html)
#### getKeywords()
Get keywords
- **Returns**: [String](String.html)
#### getModificationDate()
Get dodification date
- **Returns**: [Date](Date.html)
#### getProducer()
Get producer
- **Returns**: [String](String.html)
#### getSubject()
Get subject
- **Returns**: [String](String.html)
#### getTitle()
Get title
- **Returns**: [String](String.html)
#### getTrapped()
Get trapped
- **Returns**: [String](String.html)
#### setAuthor(String author)
Set author
- **Props**:
  - `author`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setCreationDate(Date creationDate)
Set creation date
- **Props**:
  - `creationDate`- [Date](Date.html)
- **Returns**: [Document](Document.html)
#### setCreator(String creator)
Set creator
- **Props**:
  - `creator`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setCustomValue(String fieldName, String fieldValue)
Set custom value
- **Props**:
  - `fieldName`- [String](String.html)
  - `fieldValue`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setKeywords(String keywords)
Set keywords
- **Props**:
  - `keywords`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setModificationDate(Date modificationDate)
Set modification date
- **Props**:
  - `modificationDate`- [Date](Date.html)
- **Returns**: [Document](Document.html)
#### setProducer(String producer)
Set producer
- **Props**:
  - `producer`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setSubject(String subject)
Set subject
- **Props**:
  - `subject`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setTitle(String title)
Set title
- **Props**:
  - `title`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setTrapped(String trapped)
Set trapped
- **Props**:
  - `trapped`- [String](String.html)
- **Returns**: [Document](Document.html)
#### getAccessPermission()
- **Returns**: AccessPermission
#### getAlias()
- **Returns**: [String](String.html)
#### getOwnerPassword()
- **Returns**: [String](String.html)
#### getPassword()
- **Returns**: [String](String.html)
#### setAccessPermission(AccessPermission accessPermission)
- **Props**:
  - `accessPermission`- AccessPermission
- **Returns**: [Document](Document.html)
#### setAlias(String alias)
- **Props**:
  - `alias`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setOwnerPassword(String ownerPassword)
- **Props**:
  - `ownerPassword`- [String](String.html)
- **Returns**: [Document](Document.html)
#### setPassword(String password)
- **Props**:
  - `password`- [String](String.html)
- **Returns**: [Document](Document.html)
