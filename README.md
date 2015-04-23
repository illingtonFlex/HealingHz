# [![HealingHz]

## Building HealingHz

To build HealingHz, use the following command from the project root directory:

    $ npm install
    
This will install all dependencies and tools required to build the project. 
This command may take a few minutes.

Once the depencies and development tools have been installed, build the project
using the following command:

    $ gulp

This will execute the Gulp build process, as well as execute all tests. This 
process will continue to run, watching the source files. As source files are 
altered, Gulp will execute tests, minify the contents of the scripts directory, 
and copy the compiled and tested project into a directory named "dist", also in 
the project root.

The dist directory contains the app as it would exist on a production web server.

## Testing HealingHz

All HealingHz test fixtures are contained in a directory named "test" in the 
project root. These fixtures are Qunit HTML files. These files are executed as 
a suite by the Gulp process, or individually by a web browser.