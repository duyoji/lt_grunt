var App = App || {};

(function (App) {
    function TestC() {
    }

    TestC.prototype.className = 'TestC';

    TestC.prototype.say = function () {
        console.log('this is TestC!');
    };

    App.TestC = TestC;
})(App);
