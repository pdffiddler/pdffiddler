var typeInfo = require('./typeInfo.js')
var config = require('./.vuepress/config')
var fs = require('fs');

var types = ["BaseScript", "Document", "Page", "OnChange", "OnMatch", "Region", "Point", "Image", "Font", "Text", "Date", "PaperSize", "Color", "BarcodeType", "TextMarkupType", "BasePoint", "ChronoUnit", "Position", "HumanReadableLocation", "List", "Map", "String", "Number", "Boolean"]

if(Object.keys(typeInfo).length == types.length){
    deleteFolderRecursive(__dirname + '/api/docs');
setTimeout(() => {
    fs.mkdirSync(__dirname + '/api/docs');
    var s = [];
    types.forEach(t => {
        var d = `# ${t == 'BaseScript'?'Global':t}\n`;
        var pc = parseComment(typeInfo[t].comment)
        if(pc.description){
            d += pc.description + "\n";
        }
        /* var constructors = typeInfo[t].constructors;
        if(constructors && constructors.length > 0){
            d += "## Constructor\n"
            constructors.forEach(b => { b.type=t; b.name=t; d += generateMethod(b) });
        } */

        var constants = typeInfo[t].body.filter(b => b.kind === 'field');
        if(constants.length > 0){
            d += "## Constants\n"
            constants.forEach(b => d += generateProperty(b));
        }
        var properties = typeInfo[t].body.filter(b => b.kind === 'property');
        if(properties.length > 0){
            d += "## Properties\n"
            properties.forEach(b => d += generateProperty(b));
        }
        
        var methods = typeInfo[t].body.filter(b => b.kind === 'method');
        if(methods.length > 0){
            d += "## Methods\n"
            methods.forEach(b => d += generateMethod(b));
        }
        fs.writeFileSync(`${__dirname}/api/docs/${t == 'BaseScript'?'Global':t}.md`, d);
        s.push(`'/api/docs/${t == 'BaseScript'?'Global':t}'`)
    });
    console.log(s.join(','))

    }, 3000)

}else{
    console.log("Seem like typeinfo json have more types, than defined in generateDoc.js, correct it")
}


function generateProperty(a){
    var pc = parseComment(a.comment);
    var s = "";
    s += `#### ${normalizeVal(a.name)} - ${normalizeVal(typeLink(a.type))}\n`;
    if(pc.description){
        s += pc.description + "\n";
    }
    return s;
}
function getMethodLabel(f) {
    var str = f.name + '(';
    if (f.params && f.params.length) {
    for (var i = 0; i < f.params.length; i++) {
            if (i > 0) str += ', ';
            str += f.params[i].type + ' ' + f.params[i].name;
            if (f.params[i].defaultVal !== null && f.params[i].defaultVal !== undefined) {
            str += '=' + f.params[i].defaultVal;
            }
        }
    }
    str += ')';
    return str;
}

function generateMethod(a){
    var pc = parseComment(a.comment);
    var s = "";
    s += `#### ${normalizeVal(getMethodLabel(a))}\n`;
    if(pc.description){
        s += pc.description + "\n";
    }
    if(a.params && a.params.length > 0){
        s += "- **Props**:\n";
        a.params.forEach(p => {
            s += `  - \`${normalizeVal(p.name)}\`- ${normalizeVal(typeLink(p.type))}`
            if(p.defaultVal){
                s += `, defaults to \`"${normalizeVal(p.defaultVal)}"\``
            }
            if(pc.params[p.name]){
                s += "<br/>" + pc.params[p.name];
            }
            s += "\n"
        });
    }
    s += `- **Returns**: ${normalizeVal(typeLink(a.type))}\n`;
    return s;
}

function normalizeVal(v){
    if(v){
        return v.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }else{
        return '';
    }
}
function typeLink(t){
    return t.split("|").map(m => {
        var a = m.indexOf('<')
        if(a >= 0){
            var main = typeLink(m.substring(0, a).trim());
            //console.log(m + "  " + m.substring(a+1, m.lastIndexOf('>')).trim())
            var sub = getArguments(m.substring(a+1, m.lastIndexOf('>')).trim()).map(s => typeLink(s)).join(", ");
            return `${main}<${sub}>`
        }else{
            m = m.trim()
            if(m == 'Object' || m == 'def'){
                return 'any'
            }
            if(typeInfo[m]){
                return `[${m}](${m}.html)`;
            }else{
                return m;
            }
        }
    }).join(" | ")
}
function parseComment(c){
    var ret = {description:'', params:{}};
    if(c){
        var t = c.split("\n")
        t.forEach(l => {
            l = l.trim();
            if(l){
                var pIdx = l.indexOf("@param");
                if( pIdx >= 0){
                    var m = l.substring(pIdx+6).split("-")
                    var k = normalizeVal(m[0]);
                    var v = normalizeVal(m[1]);
                    ret.params[k] = v;
                }else if(!ret.description){
                    ret.description = normalizeVal(l)
                }
            }
        })
    }
    return ret;
}

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function(file, index){
        var curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  function getArguments(t) {
    var args = [];
    var c = 0;
    var last = 0;
    for (var i = 0; i < t.length; i++) {
      if (c == 0 && t[i] === ',') {
        args.push(t.substring(last, i).trim());
        last = i+1;
      } else if (t[i] === '>') {
        ++c;
      } else if (t[i] === '<') {
        --c;
      }
    }
    if(last<t.length){
        args.push(t.substring(last).trim());
    }
       
    return args;
  }
  