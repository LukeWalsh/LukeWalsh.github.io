This is my personal website, hosted at lukewal.sh.

You can read about the reason I chose to organize it as a collection of simple static pages in the meta section.

I use the butterfly.bash script to build up the index.html files using a common header and nav section. With this workflow I simply run the script to update after I make any changes.

For local development the version of ruby already installed on mac works fine, test with Jekyll.

    sudo gem install github-pages
    jekyll build
    jekyll serve
