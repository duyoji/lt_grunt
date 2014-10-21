var App = App || {};

(function (App) {
    function TestC(name) {
        this._name = name || 'no name';
    }

    TestC.prototype.className = 'TestC';

    TestC.prototype.say = function () {
        console.log('this is TestC!');
    };

    TestC.prototype.sayMyName = function () {
        console.log('my name is ' + this._name);
    };

    App.TestC = TestC;
})(App);
