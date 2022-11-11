let containerCriminale = document.querySelector(".containerCrim");

for (let i = 1; i < 101; i++){

    if(i % 3 === 0){

        document.getElementById(".containerCrim").innerHTML = '<div class="square"><p>Fizz</p></div>';

    } else if(i % 5 === 0){

        document.getElementById(".containerCrim").innerHTML = '<div class="square"><p>Buzz</p></div>';

    } else if(i % 3 === 0 && i % 5 === 0){

        document.getElementById(".containerCrim").innerHTML = '<div class="square"><p>FizzBuzz</p></div>';

    }
    
}