import json
from glob import glob
import os
import shutil

import nbformat
from nbconvert import HTMLExporter
from nbconvert.writers import FilesWriter

NOTEBOOK_FOLDERS_PATTERN = '/Users/antoniospapadopoulos/Development/freya-pid-notebooks-showcase/src/content/pidgraph-notebooks-python/user-story*'
NOTEBOOK_SUFFIX_PATTERN = '*-inline.ipynb'

folders = glob(NOTEBOOK_FOLDERS_PATTERN)

for folder in folders:
    print(f'Extracting folder {folder}...')

    nb = glob(f'{folder}/{NOTEBOOK_SUFFIX_PATTERN}')[0]
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
    print(f'-- Notebook {nb} extracted.')

source = '/Users/antoniospapadopoulos/Development/freya-pid-notebooks-showcase/src/content'
destination = '/Users/antoniospapadopoulos/Development/freya-pid-notebooks-showcase/static'
shutil.copytree(source,destination)
