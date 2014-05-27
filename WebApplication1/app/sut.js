/// <reference path="./app.js" />

app.namespace("app.sut");

app.sut = (function () {
    "use strict";

    var sut = {};
    var factorial = function (n) {
        if (n < 0) throw new Exception("Cannot compute factorial for non postive value");
        if (n <= 1) return 1;

        return n*factorial(n - 1);
    }
    sut.factorial = factorial;

    return sut;
})();