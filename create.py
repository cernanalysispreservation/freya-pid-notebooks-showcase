import json
from glob import glob
import os
import shutil

import nbformat
from nbconvert import HTMLExporter
from nbconvert.writers import FilesWriter

NOTEBOOK_FOLDERS_PATTERN = './src/content/pidgraph-notebooks-python/user-story*'
NOTEBOOK_SUFFIX_PATTERN = '*-inline.ipynb'

folders = glob(NOTEBOOK_FOLDERS_PATTERN)

for folder in folders:
    # print(f'Extracting folder {folder}...')

    nb = glob(folder+"/"+NOTEBOOK_SUFFIX_PATTERN)[0]
    with open(nb) as nb_json:
        nb_node = nbformat.read(nb_json, as_version=4)
    
    # export html
    exporter = HTMLExporter()
    body, resources = exporter.from_notebook_node(nb_node)

    # save html
    writer = FilesWriter()
    writer.write(output=body,
                 resources=resources,
                 notebook_name=nb)
    print('-- Notebook extracted.', nb)

source = './src/content'
destination = './static/content'
shutil.copytree(source,destination)


# import json
#  from glob import glob
#  from pathlib import Path

#   import nbformat
#  from nbconvert import HTMLExporter
#  from nbconvert.writers import FilesWriter

#   NOTEBOOK_FOLDERS_PATTERN = '/Users/iliaskoutsakis/projects/pidgraph-notebooks-python/'
#  NOTEBOOK_SUFFIX_PATTERN = '*.ipynb'

#   for path in Path(NOTEBOOK_FOLDERS_PATTERN).rglob(NOTEBOOK_SUFFIX_PATTERN):
#      print(f'Extracting folder {path.absolute()}...')
#      with open(path) as nb_json:
#          nb_node = nbformat.read(nb_json, as_version=4)

#       # export html
#      exporter = HTMLExporter()
#      body, resources = exporter.from_notebook_node(nb_node)

#       # save html
#      writer = FilesWriter()
#      writer.write(output=body,
#                   resources=resources,
#                   notebook_name=str(path))
#      print(f'-- Notebook {path} extracted.')