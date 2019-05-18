# Understanding Coordinates

When you set the (x, y) location in any PDFFiddler API, then this location is relative to top left position of PDF Page.

All coordinates (x, y) in PDFFiddler API are defined in `mm`.

![Coordinate Space](/pdffiddler/coordinate.jpg "Coordinate Space")

## Getting coordinates

We can easily get coordinates in pdf, by visually drawing region in PDFFiddler.

- After uploading pdf in input or resource section. Preview the PDF file, using eye (preview) icon. 
- Now, you can draw any rectangle (region), in that pdf. By clicking on the starting point within the pdf and dragging the mouse to the opposite corner of the desired rectangle, then release.
- After drawing is completed, a popup will appear, which will ask the Name of that region, to be defined as configuration variable. 

In that popup, you can see x, y, width and height coordinates in `mm`. 
You can save that region as configuration variable, so that it can be used in script.

![Draw Region](/pdffiddler/drawregion.gif "Draw Region")

## Using coordinates in script
In PDFFiddler API, all coordinates are defined as Point or Region. Point define a particular point in PDF, whereas region define a rectangular window of interest in PDF.

There are two way to use a `Point` or `Region` in script. 
- Defined as configuration variable<br/><br/>
  if you define a configuration variable as type `Region` and name as **invoice**, then it can be used in below manner
  ```javascript
  invoiceRegion = $invoice //Represent the invoice region
  topLeftPoint = $invoice.topLeft() //Represent the top left Point of invoice Region
  topRightPoint = $invoice.topRight() //Represent the top right Point of invoice Region
  bottomLeftPoint = $invoice.bottomLeft() //Represent the bottom left Point of invoice Region
  bottomRightPoint = $invoice.bottomRight() //Represent the bottom right Point of invoice Region
  ```  
  <br/> 
- Defined using Global Method<br/><br/>
  Create a `Point`, with x at 10 and y at 20 position.
  ```javascript
  point = Point(10, 20)
  ```

  <br/><br/>
  Create a `Region`, with topLeft position at (10, 20) and width & height as (40, 50).
  ```javascript
  point = Region(10, 20, 40, 50)
  ```




