/* Common app functionality */

var app = (function () {
    "use strict";
    var app = {};

    app.namespace = function (ns_string) {
        var parts = ns_string.split('.'), parent = app, i;

        if (parts[0] === "app") {
            parts = parts.slice(1);
        }

        for (i = 0; i < parts.length; i += 1) {
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];

        }
        return parent;
    };

    return app;
})();