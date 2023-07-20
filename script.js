 // 1st question code ///
 function firstQuestion(){
    
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
}


//2nd question code//
function secondquestion(){
        let count = 0;
    (function () {
    if (count === 0) {
        let count = 1;
        console.log(count); 
    }
    console.log(count);
    })();
}

// 3rd question code ///
 function thirdquestion(){
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); 
        }, 1000);
    }
 }

 // 4th question code ///
 function fourthquestion(){
    function Rectangle(length){
        function Area(breath){
            return length*breath;
        }
        return Area;
    }
    const lengthArea = Rectangle(11);
    console.log(lengthArea(5));
 }

 //5th question code //
 function fifthquestion(){
    function createCounter() {
        let counter = 0;
    
        function incrementCounter() {
            counter++;
            console.log('Counter value:', counter);
        }
        return incrementCounter;
    }
    const counter = createCounter();
    counter(); 
    counter(); 
    counter();
 }

 // 6th question code //
function sixthquestion(){
    var a = 12;
    (function () {
      alert(a);
    })();
}


 // 7th question code //
function seventhquestion(){
    var a = 10;
    var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    };
    })();
    x();
}


 // 8th question code //
function eightquestion(){
    var globalVar = "xyz";

    (function outerFunc(outerArg) {
        var outerVar = 'a';
        
        (function innerFunc(innerArg) {
        var innerVar = 'b';
        
        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);
        
        })(456);
    })(123);
}
