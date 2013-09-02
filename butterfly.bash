#!/bin/bash
# Usage instructions:
# 1. Place script in root site directory
# 2. Create a header.btf, body.btf, and footer.btf in each
#    directory (including the root), these will be combined 
#    into your index.html
# 3. If header.btf or footer.btf is missing in a subdirectory
#    then the parent directory's members will be used

## Update the parent directory
rm index.html 2>/dev/null
touch index.html
cat general-head.btf >> index.html
cat specific-head.btf >> index.html
cat content-header.btf >> index.html
cat body.btf >> index.html
cat footer.btf >> index.html

## Update the child directories
ls_output=($(ls))
for item in ${ls_output[*]}
do
    # We only care about non-hidden directories and 
    # directories with a butterfly body file 
    if [[ -d $item && -e $item/body.btf ]]
    then
        cd $item    # Enter
        rm index.html 2>/dev/null
        touch index.html 
        # Put in the general header
        cat ../general-head.btf >> index.html

        # Use a local headaer if there is one
        if [[ -e specific-head.btf ]]
        then
            cat specific-head.btf >> index.html
        fi

        # Put in the content header
        cat ../content-header.btf >> index.html

        # Use the local body
        cat body.btf >> index.html

        # Use a local footer if there is one
        if [[ -e footer.btf ]]
        then
            cat footer.btf >> index.html
        else
            cat ../footer.btf >> index.html
        fi
        cd ..   # Exit
    fi
done

