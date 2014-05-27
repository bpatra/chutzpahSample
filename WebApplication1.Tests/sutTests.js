/// <reference path="~/../WebApplication1/app/app.js" />
/// <reference path="~/../WebApplication1/app/sut.js" />
/// <reference path="~/lib/jasmine-2.0.0/jasmine.js" />
/// <reference path="~/lib/jasmine-2.0.0/jasmine-html.js" />

describe("sut Tests and factorial function", function () {
    it("should return 1 with 0", function () {
        expect(app.sut.factorial(0)).toBe(1);
    });

    it("should return 1 with 1", function () {
        expect(app.sut.factorial(0)).toBe(1);
    });

    it("should return 120 with 5", function () {
        expect(app.sut.factorial(5)).toBe(120);
    });

    it("should throw exception with non postive value", function () {
        expect(function () { app.sut.factorial(-2);}).toThrow();
    });
});