var App = App || {};

(function (App) {
    function TestB() {
    }

    TestB.prototype.className = 'TestB';

    TestB.prototype.say = function () {
        console.log('this is TestB!');
    };

    App.TestB = TestB;
})(App);
