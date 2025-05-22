#!/bin/bash

# Render the main project
quarto render .

# Render the notes subdirectory
quarto render ./notes
