#!/bin/bash

# Render the main project
quarto render .

# Render the notes subdirectory
quarto render ./work

# Ensure assets consistency
cp assets/* ./docs/assets/
