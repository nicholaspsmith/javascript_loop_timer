Loop Timer
========


Testing the performance of the for loop vs array.forEach in javascript

Here is a sample of the output:

    foreach took: 322 milliseconds
    for loop took: 1183 milliseconds
    foreach was faster by 861 milliseconds
    (function(){}()) took: 487 // Crockford's preffered method
    (function(){})() took: 410
    var i = function(){}(); took: 415
    0, function(){}(); took: 422
    !function(){}(); took: 408
    ~function(){}(); took: 430

Note: Crockford's preferred is consistently slower than the version immediately following it.
