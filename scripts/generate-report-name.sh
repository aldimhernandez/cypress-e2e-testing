#!/bin/bash

# Generate a timestamp in the format YYYYMMDDHHMMSS
timestamp=$(date +"%Y%m%d%H%M%S")

# Define the report name
report_name="${timestamp}-cucumber-report"

# Export the report name as an environment variable
echo "REPORT_NAME=${report_name}" >> $GITHUB_ENV