//Window Scroll
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');

    }
});


$(document).ready(function () {
    //Typed animation
    new Typed('#type-it', {
        strings: ['Oussama', 'Frontend Developer', 'UI Designer'],
        typeSpeed: 50,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });


    //Page Scroll
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70         // offste (in px) for fixed top navigation
    });

});

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const messege = document.getElementById("message");

function SendEmail()
{
    const bodyMessage = `name: ${name.value}<br> email: ${email.value}<br> message: ${messege.value}`;
    Email.send({
        SecureToken :"848c5ffa-1442-4f44-bdb3-d602d55bd842",
        //Host : "smtp.elasticemail.com",
        //Username : "oussamakhaidoune74@gmail.com",
        //Password : "53E1249F9A7F3F72F673E1D716F610CC0E94",
        To : 'oussamakhaidoune74@gmail.com',
        From : "oussamakhaidoune74@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        messege => {
            if(messege == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Your Message sent successefully!",
                    icon: "success"
                  });
            }
        }
    );
}

function checkInputs()
{
    const items = document.querySelectorAll(".item");
    for(const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () =>{
            if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail()
{
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector(".error-text.email");

    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "") {
            errorTextEmail.innerText = "Enter a valid email address";
        }else{
            errorTextEmail.innerText = "Enter address can't be blank";
        }
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!name.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !messege.classList.contains("error")) {
        SendEmail();

        form.reset();
        return false;
    } 
});