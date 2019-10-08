# Step By Step

## Upload Input file

By clicking on **Browse input files** or **drag-drop** file under this section, we can upload some pdf file, which needs to be modified or data to be extracted from.

![Browse Input File](/browseInputFile.jpg "Browse Input File")

## Upload Resource File, if any

If PDF has to be modified with additional resource file, then it can be uploaded by clicking on **Browse resource file** or **drag-drop** file under this section. Resource file such as image, json, csv, font file or any other pdf for attachment. 

![Browse Resource File](/browseResourceFile.jpg "Browse Resource File")

## Define Configuration Variable
Configuration variable are global variables, which can be used/reused in script at any place. 
By default, two global configuration variable defined by system, are always present
- $input `Represent the Uploaded input file name` 
  ```javascript
  //access uploaded input file via 
  $input[0] //positional index, represent the filePath, where it is uploaded 
  $input["fileName"] //file name, represent the filePath, where it is uploaded
  ```
- $resource `Represend the Uploaded resource file name`
  ```javascript
  //access uploaded resource file via 
  $resource[0] //positional index, represent the filePath, where it is uploaded 
  $resource["fileName"] //file name, represent the filePath, where it is uploaded
  ```

Apart from this, user can create his own configuration variable by 
<br/>

- Clicking on **New Variable** <br/>

![Configuration Variable](/configurationVariable.jpg "Configuration Variable")

<br/><br/>

- **Drawing region on PDF** (preview mode)<br/>
  
![Draw Region](/drawregion.jpg "Draw Region")

## Write Script

The script written in this section, get applied to all uploaded pdf and resource files. 

![Script](/script.jpg "Script")

Below is basic sample script

```javascript
doc = load($input[0]) //load the input file
output(doc) //output the file
```

For advanced example, go to [here](/guide/cookbook)

## Run 

Click on Run button, to check the output of script

![Script](/run.jpg "Script")