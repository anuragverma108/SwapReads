let rate1 = document.querySelectorAll('.rate1');
let rate2 = document.querySelectorAll('.rate2');
let rate3 = document.querySelectorAll('.rate3');
let rate4 = document.querySelectorAll('.rate4');
let rate5 = document.querySelectorAll('.rate5');

let arr = [rate1, rate2, rate3, rate4, rate5];

Array.from(arr).forEach((rate) => {

    Array.from(rate).forEach((e) => {
        e.addEventListener('click', () => {
            Array.from(rate).forEach((ele) => {
                ele.style.color = "red";
            })

            Array.from(arr).forEach((r) => {
                if (r != rate) {
                    Array.from(r).forEach((ele) => {
                        ele.style.color = "black";
                    })
                }
            })
        })
    })
})



let submit = document.querySelector('.button');

let result;
submit.addEventListener('click', (e) => {
    Array.from(arr).forEach((rate) => {
        Array.from(rate).forEach((e) => {
            if (e.style.color == "red") {
                if (e.innerText) result = e.innerText;
            }
        })
    })

    if (result != undefined) {
        console.log(result);
        alert("FeedBack Submitted Successfully !");
        Array.from(arr).forEach((rate) => {
            Array.from(rate).forEach((e) => {
                e.style.color = "black";
            })
        })
    }
    else
        alert("Feedback submitted successfully !");
})