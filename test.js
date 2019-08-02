for (let adam = 1; adam <= 100; adam++){
    if(adam % 3 == 0 && adam % 5 == 0){
        console.log("FizzBuzz")
    } else{
        if(adam % 3 == 0){
            console.log("Fizz")
        } else{
            if(adam % 5 == 0){
                console.log("Buzz")
            } else{
                console.log(adam)
            }
        }
    }
}
