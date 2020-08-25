var finder = require('findit')
var fs = require('fs')
var path = require('path')

const NOTEBOOKS_LOCATION = "./src/content"
const TEXT_TO_REMOVE = "![FREYA Logo](https://github.com/datacite/pidgraph-notebooks-python/blob/master/images/freya_200x121.png?raw=true) |"

finder = finder(NOTEBOOKS_LOCATION);

//This listens for directories found
// finder.on('directory', function (dir) {
//   console.log('Directory: ' + dir + '/');
// });

//This listens for files found
finder.on('file', function (file) {
    if (path.extname(file) == ".ipynb") {
        console.log('File: ' + file);
        let file_with_output = file.replace(".ipynb", "-with-output.ipynb")
        updateFile(file);
        try {
            if (fs.existsSync(file_with_output)) {
                console.log('SIBLING EXISTS --> RENAMING');
                fs.renameSync(file, file+"_")
                //file exists
            }
        } catch (err) {
            console.error(err)
        }
    }
});


let updateFile = filepath => {
    var data = fs.readFileSync(filepath, 'utf-8');

    var newValue = data.replace(TEXT_TO_REMOVE, '');
    fs.writeFileSync(filepath, newValue, 'utf-8');
}