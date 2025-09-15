#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-gallery-viewer-18707-18716/recipe_gallery_ui_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

