function foo () {

}

function bar () {
    function inner1 () {

    }

    function inner2 () {
        var inner3 = function () {
            var test = 1;
        };

        inner3();
    }

    inner2();
    inner1();
}

function baz () {

}

bar();
baz();
foo();