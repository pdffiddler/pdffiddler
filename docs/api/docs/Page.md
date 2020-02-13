# Page
Represent PDF Page
## Methods
#### crop(Region region)
Crop the page
- **Props**:
  - `region`- [Region](Region.html)
- **Returns**: [Page](Page.html)
#### getPaperSize()
Get Paper Size
- **Returns**: [PaperSize](PaperSize.html)
#### height(Number h=null)
Get/Set Height of page in user defined unit
- **Props**:
  - `h`- [Number](Number.html), defaults to `"null"`
- **Returns**: [Number](Number.html)
#### resize(PaperSize | Point | Number size, Boolean resizePage=true, Boolean resizeContent=true, BasePoint basePoint=CENTER)
Scale to paper size
- **Props**:
  - `size`- [PaperSize](PaperSize.html) | [Point](Point.html) | [Number](Number.html)
  - `resizePage`- [Boolean](Boolean.html), defaults to `"true"`
  - `resizeContent`- [Boolean](Boolean.html), defaults to `"true"`
  - `basePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
- **Returns**: [Page](Page.html)
#### rotate(Number rotation=null)
Get/Set Rotation a page in clockwise direction
- **Props**:
  - `rotation`- [Number](Number.html), defaults to `"null"`
- **Returns**: [Number](Number.html)
#### toImage(Number scale=1)
Convert page to image
- **Props**:
  - `scale`- [Number](Number.html), defaults to `"1"`
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
#### addImage(String | Image image, Point | Region at=null, Number width=null, Number height=null, Boolean inline=false, GState gs=null)
Add image at particular location
- **Props**:
  - `image`- [String](String.html) | [Image](Image.html)<br/>Can be String/Image type
  - `at`- [Point](Point.html) | [Region](Region.html), defaults to `"null"`<br/>Can be Point/Region type
  - `width`- [Number](Number.html), defaults to `"null"`<br/>default null, either derive from Region or Actual Width
  - `height`- [Number](Number.html), defaults to `"null"`<br/>default null, either derive from Region or Actual Height
  - `inline`- [Boolean](Boolean.html), defaults to `"false"`<br/>if true, then image will drawn as inline
  - `gs`- [GState](GState.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### changeImage(Region region=null, String | Image image=null, Point moveBy=null, Number rotateBy=0, BasePoint rotateBasePoint=CENTER, Number scale=1, BasePoint scaleBasePoint=CENTER)
Change existing image within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `image`- [String](String.html) | [Image](Image.html), defaults to `"null"`<br/>Can be String/Image type
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `rotateBy`- [Number](Number.html), defaults to `"0"`
  - `rotateBasePoint`- [BasePoint](BasePoint.html), defaults to `"CENTER"`
  - `scale`- [Number](Number.html), defaults to `"1"`
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
#### addText(String | List&lt;String&gt; text, Region | Point at=null, GState gs=null)
Add text at particular location
- **Props**:
  - `text`- [String](String.html) | [List](List.html)&lt;[String](String.html)&gt;<br/>String/List&lt;String&gt;
  - `at`- [Region](Region.html) | [Point](Point.html), defaults to `"null"`<br/>Region/Point (Optional)
  - `gs`- [GState](GState.html), defaults to `"null"`<br/>GState (Optional)
- **Returns**: [Page](Page.html)
#### changeText(Region region, List&lt;String&gt; replace=null, Color color=null, Point moveBy=null, String | Font font=null, Number fontSize=null)
Change text within region
- **Props**:
  - `region`- [Region](Region.html)
  - `replace`- [List](List.html)&lt;[String](String.html)&gt;, defaults to `"null"`
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
#### findAndChangeText(String find, String replace=null, Region region=null, Color color=null, Point moveBy=null, String | Font font=null, Number fontSize=null, Boolean caseSensitive=false, Boolean regex=false)
Find text and then change it, within region/page
- **Props**:
  - `find`- [String](String.html)
  - `replace`- [String](String.html), defaults to `"null"`
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"null"`
  - `moveBy`- [Point](Point.html), defaults to `"null"`
  - `font`- [String](String.html) | [Font](Font.html), defaults to `"null"`
  - `fontSize`- [Number](Number.html), defaults to `"null"`
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`
  - `regex`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### findAndDeleteText(String find, Region region=null, Boolean caseSensitive=false, Boolean regex=false)
Find and delete text
- **Props**:
  - `find`- [String](String.html)
  - `region`- [Region](Region.html), defaults to `"null"`
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`
  - `regex`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### findText(String find, Region region=null, Boolean caseSensitive=false, Boolean regex=false)
Find text within region/page
- **Props**:
  - `find`- [String](String.html)<br/>text to be find
  - `region`- [Region](Region.html), defaults to `"null"`<br/>if null, find in whole page
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`<br/>by default false
  - `regex`- [Boolean](Boolean.html), defaults to `"false"`<br/>default false
- **Returns**: [List](List.html)&lt;[List](List.html)&lt;[Text](Text.html)&gt;&gt;
#### addBarcode(BarcodeType type, String content, Point | Region at, BarcodeStyle style=null)
Add Barcode in a PDF page at location
- **Props**:
  - `type`- [BarcodeType](BarcodeType.html)
  - `content`- [String](String.html)
  - `at`- [Point](Point.html) | [Region](Region.html)
  - `style`- [BarcodeStyle](BarcodeStyle.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addImageLinkAnnotation(Region region, Action action, Border border=null, HighlightMode highlightMode=NONE, Boolean flatten=false)
Add Image Link Annotation
- **Props**:
  - `region`- [Region](Region.html)
  - `action`- [Action](Action.html)
  - `border`- [Border](Border.html), defaults to `"null"`<br/>default no border
  - `highlightMode`- [HighlightMode](HighlightMode.html), defaults to `"NONE"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [Page](Page.html)
#### addRectangleAnnotation(Region region, Color color=RED, Number opacity=0.5f, Border border=null, Boolean flatten=false, String content=null)
Add Rectangle annotation
- **Props**:
  - `region`- [Region](Region.html)
  - `color`- [Color](Color.html), defaults to `"RED"`
  - `opacity`- [Number](Number.html), defaults to `"0.5f"`
  - `border`- [Border](Border.html), defaults to `"null"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
  - `content`- [String](String.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addRegionLinkAnnotation(Region region, Action action, Border border=null, HighlightMode highlightMode=NONE, Boolean flatten=false)
Add Region Link Annotation
- **Props**:
  - `region`- [Region](Region.html)
  - `action`- [Action](Action.html)
  - `border`- [Border](Border.html), defaults to `"null"`<br/>default having border
  - `highlightMode`- [HighlightMode](HighlightMode.html), defaults to `"NONE"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
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
#### addTextLinkAnnotation(Region region, Action action, Border border=null, HighlightMode highlightMode=NONE, Boolean flatten=false)
Add Text Link Annotation
- **Props**:
  - `region`- [Region](Region.html)
  - `action`- [Action](Action.html)
  - `border`- [Border](Border.html), defaults to `"null"`<br/>default underline style
  - `highlightMode`- [HighlightMode](HighlightMode.html), defaults to `"NONE"`
  - `flatten`- [Boolean](Boolean.html), defaults to `"false"`
- **Returns**: [Page](Page.html)
#### flattenAnnotation(Region region=null)
Flatten all annotation within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### removeAnnotation(Region region=null)
Remove all annotation within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### findAndRedactText(String find, Region region=null, Color color=BLACK, Boolean caseSensitive=false, Boolean regex=false)
Find and Redact text within region
- **Props**:
  - `find`- [String](String.html)<br/>text to be found
  - `region`- [Region](Region.html), defaults to `"null"`
  - `color`- [Color](Color.html), defaults to `"BLACK"`<br/>default color black
  - `caseSensitive`- [Boolean](Boolean.html), defaults to `"false"`
  - `regex`- [Boolean](Boolean.html), defaults to `"false"`
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
#### addLayer(Layer layer, Point | Region at=null, Number width=null, Number height=null, GState gs=null)
Add layer to page at particular position
- **Props**:
  - `layer`- [Layer](Layer.html)
  - `at`- [Point](Point.html) | [Region](Region.html), defaults to `"null"`<br/>if null, then take default layer position.
  - `width`- [Number](Number.html), defaults to `"null"`
  - `height`- [Number](Number.html), defaults to `"null"`
  - `gs`- [GState](GState.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addWatermark(Page overlayPage, Overlay/Position position=BACKGROUND)
Add overlay page as watermark to this page
- **Props**:
  - `overlayPage`- [Page](Page.html)<br/>any page can be used as overlay
  - `position`- Overlay/Position, defaults to `"BACKGROUND"`<br/>FOREGROUND or BACKGROUND
- **Returns**: [Page](Page.html)
#### createAsLayer(Region region=null)
Create a layer
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Layer](Layer.html)
#### addCell(Region | List&lt;Region&gt; | List&lt;List&lt;Region&gt;&gt; region, GState gs=null)
- **Props**:
  - `region`- [Region](Region.html) | [List](List.html)&lt;[Region](Region.html)&gt; | [List](List.html)&lt;[List](List.html)&lt;[Region](Region.html)&gt;&gt;
  - `gs`- [GState](GState.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addCircle(Region | Point at=null, Number radius=null, GState gs=null)
Add circle
- **Props**:
  - `at`- [Region](Region.html) | [Point](Point.html), defaults to `"null"`<br/>Region/Point
  - `radius`- [Number](Number.html), defaults to `"null"`<br/>in mm, if null, then circle is drawn inside region.
  - `gs`- [GState](GState.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addRect(Point | Region at=null, Number width=null, Number height=null, Number | Point cornerRadius=null, GState gs=null)
Add Rect
- **Props**:
  - `at`- [Point](Point.html) | [Region](Region.html), defaults to `"null"`
  - `width`- [Number](Number.html), defaults to `"null"`
  - `height`- [Number](Number.html), defaults to `"null"`
  - `cornerRadius`- [Number](Number.html) | [Point](Point.html), defaults to `"null"`
  - `gs`- [GState](GState.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### addSignature(Region region, Signature signature)
- **Props**:
  - `region`- [Region](Region.html)
  - `signature`- [Signature](Signature.html)
- **Returns**: [Page](Page.html)
#### removeAllSignature()
- **Returns**: [Page](Page.html)
#### addField(TextField | CheckBox | RadioButton | ListBox | ComboBox | SignatureField | Button field)
Add Form field to page
- **Props**:
  - `field`- [TextField](TextField.html) | [CheckBox](CheckBox.html) | [RadioButton](RadioButton.html) | [ListBox](ListBox.html) | [ComboBox](ComboBox.html) | [SignatureField](SignatureField.html) | [Button](Button.html)<br/>Can be TextField/CheckBox/RadioButton/ListBox/ComboBox
- **Returns**: [Page](Page.html)
#### deleteField(Region region=null)
Remove all form field within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### extractField(FormField formField)
Get Form Field
- **Props**:
  - `formField`- FormField
- **Returns**: Field
#### extractFields(Region region=null)
Extract all field within Region/MultiRegion
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [List](List.html)&lt;Field&gt;
#### extractFieldsValue(Region region=null)
Extract all field as name value pair within Region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Map](Map.html)&lt;[String](String.html), any&gt;
#### flattenField(Region region=null)
Flatten all form field within region
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
- **Returns**: [Page](Page.html)
#### formFilling(Region region=null, Map&lt;String, Object&gt; mapping)
Form filling using name value pair
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `mapping`- [Map](Map.html)&lt;[String](String.html), any&gt;
- **Returns**: void
#### extractTable(Region region=null, Boolean withHeader=true, Boolean isLattice=false, Boolean vertically=false)
Extract Table
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `withHeader`- [Boolean](Boolean.html), defaults to `"true"`<br/>if header is present in table
  - `isLattice`- [Boolean](Boolean.html), defaults to `"false"`<br/>if ruling are present in table
  - `vertically`- [Boolean](Boolean.html), defaults to `"false"`<br/>extract data vertically
- **Returns**: [List](List.html)&lt;[Map](Map.html)&lt;[String](String.html), [String](String.html)&gt;&gt;
#### extractTableAsMap(Region region=null, Boolean isLattice=false, Boolean vertically=false)
Extract table as Map, Mainly used when only two column or two row are present in tabular structure
- **Props**:
  - `region`- [Region](Region.html), defaults to `"null"`
  - `isLattice`- [Boolean](Boolean.html), defaults to `"false"`<br/>if ruling are present in table
  - `vertically`- [Boolean](Boolean.html), defaults to `"false"`<br/>extract data vertically
- **Returns**: [Map](Map.html)&lt;[String](String.html), [String](String.html)&gt;
