var App = App || {};

(function (App) {
    function TestA() {
    }

    TestA.prototype.className = 'TestA';

    TestA.prototype.say = function () {
        console.log('this is TestA!');
    };

    App.TestA = TestA;
})(App);
