#!/bin/bash
for i in {1..66}
do
    echo "Change $i" >> file.txt       # Modify or create a file
    git add file.txt                  # Stage the changes
    git commit -m "Commit #$i"       # Commit with a message
done
