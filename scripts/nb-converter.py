import json
from glob import glob
from pathlib import Path

import nbformat
from nbconvert import HTMLExporter
from nbconvert.writers import FilesWriter

NOTEBOOK_FOLDERS_PATTERN = '/Users/iliaskoutsakis/projects/pidgraph-notebooks-python/'
NOTEBOOK_SUFFIX_PATTERN = '*.ipynb'

for path in Path(NOTEBOOK_FOLDERS_PATTERN).rglob(NOTEBOOK_SUFFIX_PATTERN):
    print(f'Extracting folder {path.absolute()}...')
    with open(path) as nb_json:
        nb_node = nbformat.read(nb_json, as_version=4)
    
    # export html
    exporter = HTMLExporter()
    body, resources = exporter.from_notebook_node(nb_node)

    # save html
    writer = FilesWriter()
    writer.write(output=body,
                 resources=resources,
                 notebook_name=str(path))
    print(f'-- Notebook {path} extracted.')
