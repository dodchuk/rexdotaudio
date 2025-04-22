#!/bin/bash

# Output file for CODEOWNERS
CODEOWNERS_FILE="CODEOWNERS"

# Clear previous CODEOWNERS file if it exists
> "$CODEOWNERS_FILE"

# Get all files in the repository
files=$(git ls-tree -r HEAD --name-only)

# Temporary file to store folder contributors
temp_file=$(mktemp)

# Iterate over each file to determine its top contributor
for file in $files; do
    # Extract the folder path (get first-level directory)
    folder=$(dirname "$file")

    # Get the top contributor (email) for this file
    email=$(git log --format='%aE' -- "$file" | sort | uniq -c | sort -nr | head -n 1 | awk '{print $2}')

    # If a contributor is found, append it to the temp file
    if [ ! -z "$email" ]; then
        echo "$folder $email" >> "$temp_file"
    fi
done

# Process folder ownerships
folders=$(cut -d ' ' -f1 "$temp_file" | sort -u)

# Find the longest folder name for alignment
max_length=$(awk '{print length, $0}' "$temp_file" | sort -nr | head -n 1 | awk '{print $1}')

> "$CODEOWNERS_FILE" # Clear file again before writing

for folder in $folders; do
    # Get the most frequent contributor for this folder
    top_contributor=$(grep "^$folder " "$temp_file" | awk '{print $2}' | sort | uniq -c | sort -nr | head -n 1 | awk '{print $2}')

    # Write folder and top contributor to CODEOWNERS
    if [ ! -z "$top_contributor" ]; then
        printf "%-${max_length}s %s\n" "$folder" "$top_contributor" >> "$CODEOWNERS_FILE"
    fi
done

# Clean up temporary file
rm "$temp_file"

echo "CODEOWNERS file generated with folder-level ownership."
