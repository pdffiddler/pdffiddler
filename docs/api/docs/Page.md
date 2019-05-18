# Page
Represent PDF Page
## Methods
#### addWatermark(Page overlayPage, Position position=BACKGROUND)
Add overlay page as watermark to this page
- **Props**:
  - `overlayPage`- [Page](Page.html)<br/>any page can be used as overlay
  - `position`- [Position](Position.html), defaults to `"BACKGROUND"`<br/>FOREGROUND or BACKGROUND
- **Returns**: [Page](Page.html)
#### crop(Region region)
Crop the page
- **Props**:
  - `region`- [Region](Region.html)
- **Returns**: [Page](Page.html)
#### height(Number h=null)
Get/Set Height of page in user defined unit
- **Props**:
  - `h`- [Number](Number.html), defaults to `"null"`
- **Returns**: [Number](Number.html)
#### resize(PaperSize | Number size, Boolean resizePage=true, Boolean resizeContent=true, BasePoint basePoint=CENTER)
Scale to paper size
- **Props**:
  - `size`- [PaperSize](PaperSize.html) | [Number](Number.html)
  - `resizePage`- [Boolean](Boolean.html), defaults to `"true"`
  - `resizeContent`- [Boolean](Boolean.html), defaults to `"true"`
  - `basePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
- **Returns**: [Page](Page.html)
#### rotate(Number rotation=null)
Get/Set Rotation a page in clockwise direction
- **Props**:
  - `rotation`- [Number](Number.html), defaults to `"null"`
- **Returns**: [Number](Number.html)
#### toImage(Number scale=100)
Convert page to image
- **Props**:
  - `scale`- [Number](Number.html), defaults to `"100"`
- **Returns**: [Image](Image.html)
#### translate(Number tx, Number ty)
Scale page in x and/or y direction with basepoint
- **Props**:
  - `tx`- [Number](Number.html)
  - `ty`- [Number](Number.html)
- **Returns**: [Page](Page.html)
#### width(Number w=null)
Get/Set Width of page in mm
- **Props**:
  - `w`- [Number](Number.html), defaults to `"null"`
- **Returns**: [Number](Number.html)
#### addImage(String | Image image, Point | Region at, Number width=null, Number height=null, Number rotate=0, Number opacity=1, Boolean inline=false)
Add image at particular location
- **Props**:
  - `image`- [String](String.html) | [Image](Image.html)<br/>Can be String/Image type
  - `at`- [Point](Point.html) | [Region](Region.html)<br/>Can be Point/Region type
  - `width`- [Number](Number.html), defaults to `"null"`<br/>default null, either derive from Region or Actual Width
  - `height`- [Number](Number.html), defaults to `"null"`<br/>default null, either derive from Region or Actual Height
  - `rotate`- [Number](Number.html), defaults to `"0"`<br/>Rotation such as 0, 90, 270 etc
  - `opacity`- [Number](Number.html), defaults to `"1"`<br/>Opacity (transparency from 0
  - `inline`- [Boolean](Boolean.html), defaults to `"false"`<br/>if true, then image will drawn as inline
- **Returns**: [Page](Page.html)
#### changeImage(Region region=null, String | Image image=null, Point moveBy=null, Number rotateBy=0, BasePoint rotateBasePoint=CENTER, Number scale=100, BasePoint scaleBasePoint=CENTER)
Change existing image within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `image`- [String](String.html) | [Image](Image.html), defaults to `"null"`<br/>Can be String/Image type
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `rotateBy`- [Number](Number.html), defaults to `"0"`
  - `rotateBasePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
  - `scale`- [Number](Number.html), defaults to `"100"`
  - `scaleBasePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
- **Returns**: [List](List.html)&lt;[Image](Image.html)&gt;
#### deleteImages(Region region=null)
Delete all images within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[Image](Image.html)&gt;
#### extractImages(Region region=null)
Extract all images within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[Image](Image.html)&gt;
#### addText(String | List&lt;String&gt; text, Point | Region at, String | Font font=HELVETICA, Number fontSize=12, Number rotate=0, Color color=null, Number opacity=1, Boolean justify=false, Number leading=null )
Add text at particular location
- **Props**:
  - `text`- [String](String.html) | [List](List.html)&lt;[String](String.html)&gt;<br/>it can be "abc" or ["abc", "def"]
  - `at`- [Point](Point.html) | [Region](Region.html)<br/>Point or Region type, if region then text get wrapped around
  - `font`- [String](String.html) | [Font](Font.html), defaults to `"HELVETICA"`
  - `fontSize`- [Number](Number.html), defaults to `"12"`
  - `rotate`- [Number](Number.html), defaults to `"0"`
  - `color`- [Color](Color.html), defaults to `"null"`
  - `opacity`- [Number](Number.html), defaults to `"1"`
  - `justify`- [Boolean](Boolean.html), defaults to `"false"`<br/>justify text, if wrapped around
  - `leading`- [Number](Number.html), defaults to `"null"`<br/>if null, leading space calculated automatically
- **Returns**: [Page](Page.html)
#### changeText(Region region, Color color=null, Point moveBy=null, String | Font font=null, Number fontSize=null)
Change text within region
- **Props**:
  - `region`- [Region](Region.html)
  - `color`- [Color](Color.html), defaults to `"null"`
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `font`- [String](String.html) | [Font](Font.html), defaults to `"null"`
  - `fontSize`- [Number](Number.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### deleteText(Region region=null)
Extract text relative to another text
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### extractText(Region region=null, Boolean trimSpaces=true)
Extract text within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `trimSpaces`- [Boolean](Boolean.html), defaults to `"true"`
- **Returns**: [String](String.html)
#### extractTextDefinition(Region region=null)
Extract text definition within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### findAndReplaceText(String find, String replace=null, Region region=null, Color color=null, Point moveBy=null, String | Font font=null, Number fontSize=null, Boolean caseSensitive=false)
Find text and then replace/delete it, within region/page
- **Props**:
  - `find`- [String](String.html)
  - `replace`- [String](String.html), defaults to `"null"`
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"null"`
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `font`- [String](String.html) | [Font](Font.html), defaults to `"null"`
  - `fontSize`- [Number](Number.html), defaults to `"null"`
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### findText(String find, Region region=null, Boolean caseSensitive=false)
Find text within region/page
- **Props**:
  - `find`- [String](String.html)<br/>text to be find
  - `region`- [Region](Region.html), defaults to `"null"`<br/>if null, find in whole page
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`<br/>by default false
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### replaceText(Region region, List&lt;String&gt; text, Color color=null, Point moveBy=null, String | Font font=null, Number fontSize=null)
Replace text within region
- **Props**:
  - `region`- [Region](Region.html)
  - `text`- [List](List.html)&lt;[String](String.html)&gt;
  - `color`- [Color](Color.html), defaults to `"null"`
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `font`- [String](String.html) | [Font](Font.html), defaults to `"null"`
  - `fontSize`- [Number](Number.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### addBarcode(BarcodeType type, String content, Point | Region at, Number rotate=0, Number modWidth=null, Number barHeight=null, String fontName=null, Number fontSize=null, HumanReadableLocation location=null)
Add Barcode in a PDF page at location
- **Props**:
  - `type`- [BarcodeType](BarcodeType.html)
  - `content`- [String](String.html)
  - `at`- [Point](Point.html) | [Region](Region.html)
  - `rotate`- [Number](Number.html), defaults to `"0"`
  - `modWidth`- [Number](Number.html), defaults to `"null"`
  - `barHeight`- [Number](Number.html), defaults to `"null"`
  - `fontName`- [String](String.html), defaults to `"null"`
  - `fontSize`- [Number](Number.html), defaults to `"null"`
  - `location`- [HumanReadableLocation](HumanReadableLocation.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addRectangleAnnotation(Region region, Color color=RED, Number opacity=0.5f, Number borderWidth=null, Color borderColor=null, Boolean flatten=false, String content=null)
Add Rectangle annotation
- **Props**:
  - `region`- [Region](Region.html)
  - `color`- [Color](Color.html), defaults to `"RED"`
  - `opacity`- [Number](Number.html), defaults to `"0.5f"`
  - `borderWidth`- [Number](Number.html), defaults to `"null"`
  - `borderColor`- [Color](Color.html), defaults to `"null"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
  - `content`- [String](String.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addTextAnnotation(TextMarkupType textMarkUp, Region region, Color color=null, Number opacity=null, Number borderWidth=null, Boolean flatten=false)
Add Text annotation.
- **Props**:
  - `textMarkUp`- [TextMarkupType](TextMarkupType.html)
  - `region`- [Region](Region.html)
  - `color`- [Color](Color.html), defaults to `"null"`
  - `opacity`- [Number](Number.html), defaults to `"null"`
  - `borderWidth`- [Number](Number.html), defaults to `"null"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [Page](Page.html)
#### flattenAnnotation(Region region=null)
Flatten all annotation within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### removeAnnotation(Region region)
Remove all annotation within region
- **Props**:
  - `region`- [Region](Region.html)
- **Returns**: [Page](Page.html)
#### findAndRedactText(String find, Region region=null, Color color=BLACK, Boolean caseSensitive=false)
Find and Redact text within region
- **Props**:
  - `find`- [String](String.html)<br/>text to be found
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`<br/>default color black
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [Page](Page.html)
#### redact(Region region=null, Color color=BLACK)
Redact both text and image a region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`
- **Returns**: [Page](Page.html)
#### redactImage(Region region=null, Color color=BLACK)
Redact images within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`
- **Returns**: [Page](Page.html)
#### redactRegion(Region region=null, Color color=BLACK)
Redact whole area within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`
- **Returns**: [Page](Page.html)
#### redactText(Region region=null, Color color=BLACK)
Redact Text within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`
- **Returns**: [Page](Page.html)
