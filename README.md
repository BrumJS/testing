# JavaScript Testing

A project to demonstrate JavaScript testing.

## Getting Started

    npm install
    npm test

## Running Tests Continuously

The `npm test` command runs the all the tests once then exits.
This is ideal for running in a build server but not for development.

You can run the tests in continuous mode and make changes to files to 
have the tests automatically re-run. To do this, run the following:

    ./node_modules/karma/bin/karma start
