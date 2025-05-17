    var inputs = document.querySelectorAll('.contact-inp');
    var faqsContainer = document.querySelector('.faqs-container');
    var faqsContainerSection = document.querySelector('.faqs-container section');
    var body = document.body;
    var faqButton = document.querySelectorAll('.faqs-btn');
    var faqs = [
        {
            question: 'DO I NEED TO RESERVE A TABLE?',
            answer: 'We recommend reserving a table to make sure you get the spot you want. You can book easily through our website <a href="">here</a> or give us a call or message on WhatsApp at +995 593 78 77 45.'
        },
        {
            question: 'HOW DO I BOOK A TABLE?',
            answer: 'The easiest way to book is through our website <a href="">here</a>. If you’d rather speak to someone, feel free to call or message on WhatsApp at +995 593 78 77 45, and well sort it out for you.'
        },
        {
            question: 'DO YOU ACCOMMODATE GROUP BOOKINGS/LARGE PARTIES?',
            answer: 'Yes, we do! Let us know in advance, and well make sure your group is taken care of.'
        },
        {
            question: 'DO YOU SERVE KHINKALI?',
            answer: 'No, we don’t serve Khinkali, but we do offer all other famous traditional Georgian dishes. Come and try them out!'
        },
        {
            question: 'DO YOU ALLOW PETS?',
            answer: 'Unfortunately, we don’t allow pets in the restaurant.'
        },
        {
            question: 'CAN YOU CATER FOR MY ALLERGIES?',
            answer: 'Absolutely! If you have any allergies or dietary requirements, just let our team know before you order, and we’ll do our best to accommodate you.'
        },
        {
            question: 'DO YOU HAVE PARKING FACILITIES?',
            answer: 'Yes, we do have parking available for our guests.'
        },
        {
            question: 'DO YOU HAVE HALAL FOOD?',
            answer: 'Yes, we have some halal options. Just let us know when you arrive, and we’ll guide you through the choices.'
        },
        {
            question: 'DO YOU HAVE AN OUTDOOR SEATING AREA?',
            answer: 'Yes, we have a lovely outdoor seating area! It’s open from spring to early autumn, depending on the weather. Please note that outdoor tables are available on a first-come, first-served basis and can’t be reserved in advance.'
        },
        {
            question: 'DO YOU HAVE MUSIC?',
            answer: 'Yes, we play music in the restaurant to create a cozy vibe, but we don’t have live music or a DJ.'
        },
        {
            question: 'DO YOU ACCEPT CASH?',
            answer: 'Yes, we’re happy to accept cash payments.'
        },
        {
            question: 'DO YOU ACCEPT CREDIT CARDS?',
            answer: 'Yes, we accept credit cards: Visa & Mastercard.'
        },
        {
            question: 'DO YOU DO TAKEAWAY?',
            answer: 'Yes, we offer takeaway options. Just let us know what you’d like!'
        },
        {
            question: 'DO YOU OFFER DELIVERY SERVICE?',
            answer: 'No, we don’t offer delivery service. '
        },
    ]

    for (var faq of faqs) {
        faqsContainerSection.innerHTML += `
                            <div class="faq">
                                <div class="question">
                                    <div class="plus-minus">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 16px; height: 16px;">
                                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="move-line" viewBox="0 0 448 512" style="width: 16px; height: 16px;">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                    </div>
                                    <h3>${faq.question}</h3>
                                </div>
                                <div class="answer">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>`;
    }

    inputs.forEach(inp => {
        inp.addEventListener('focus', () => {
            inp.parentNode.classList.add('focus')
            inp.parentNode.classList.add('not-empty')
        });
        inp.addEventListener('blur', () => {
            if (inp.value == "") {
                inp.parentNode.classList.remove('not-empty')
            }
            inp.parentNode.classList.remove('focus')
        });
    });

    var faqs = document.querySelectorAll('.faq')

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            if (!faq.classList.contains('active')) {
                faqs.forEach(item => item.classList.remove('active'));
            }
            faq.classList.toggle('active');
        });
    });

    faqButton.forEach(faqButton => {
        faqButton.addEventListener('click', () => {
            faqsContainer.classList.toggle('focus');
            faqsContainer.parentNode.style.top = (window.scrollY + 10) + 'px';
            faqsContainer.parentNode.classList.toggle('focus');
            body.classList.toggle('no-scroll');
            faqsContainer.parentNode.classList.toggle('up');
        });
    });



    window.addEventListener('click', (e) => {
        let isClickInsideFaqButton = false;

        faqButton.forEach(button => {
            if (button.contains(e.target)) {
                isClickInsideFaqButton = true;
            }
        });

        if (!isClickInsideFaqButton && !faqsContainer.contains(e.target)) {
            faqsContainer.parentNode.classList.toggle('up');
            faqsContainer.parentNode.style.top = '0px';
            faqsContainer.classList.remove('focus');
            faqsContainer.parentNode.classList.remove('focus');
            body.classList.remove('no-scroll');
        }
    });

    document.getElementById('scrollToMap').addEventListener('click', function () {
        var mapElement = document.getElementById('map');
        var offset = -195;
        var elementPosition = mapElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition + offset,
            behavior: 'smooth'
        });
    });

    var fonts = ["cursive", "sans-serif", "serif", "monospace"];
    var captchaValue = "";

    function generateCaptcha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var preview = document.getElementById('preview');
        preview.innerHTML = "";
        var captchaCharacters = "";

        for (var i = 0; i < 6; i++) {
            var character = document.createElement('span');
            var randomChar = possible.charAt(Math.floor(Math.random() * possible.length));

            if (i == 0 || !captchaCharacters.includes(randomChar)) {
                character.innerText = randomChar;
                character.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                character.style.fontSize = Math.floor(Math.random() * 25) + 15 + 'px';
                character.style.display = "inline-block";
                character.style.transform = `rotate(${Math.floor(Math.random() * 30) - 15}deg)`;
                character.style.margin = "0 5px";
                preview.appendChild(character);

                captchaCharacters += randomChar;
                text += randomChar;
            } else {
                i--;
            }
        }

        captchaValue = text;
    }

    generateCaptcha();

    document.querySelector('.captcha-refresh').addEventListener('click', function (event) {
        event.preventDefault();
        generateCaptcha();
    });

    //* send mail

    var form = document.querySelector('form');
    var userCaptchaInp = document.querySelector('input[name="userCaptcha"]')
    var error = document.querySelector('.error-message');


    userCaptchaInp.addEventListener('keyup', function () {
        var userCaptchaValue = userCaptchaInp.value;
        if (userCaptchaValue == '') {
            if (error.classList.contains('valid')) {
                error.classList.remove('valid')
            }
            if (error.classList.contains('invalid')){
                error.classList.remove('invalid')
            }
        }
        else if (userCaptchaValue === captchaValue) {
            if (error.classList.contains('invalid')) {
                error.classList.remove('invalid')
            }
            error.classList.add('valid')
        }
        else {
            if (error.classList.contains('valid')) {
                error.classList.remove('valid')
            }
            error.classList.add('invalid')
        }
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var parameters = {
            name: form.firstName.value + ' ' + form.lastName.value,
            subject: form.subject.value,
            email: form.email.value,
            message: form.message.value,
            userCaptcha: form.userCaptcha.value,
        }

        if (parameters.userCaptcha == captchaValue) {
            emailjs.send("service_otlmlxr", "template_xb75caj", parameters).then(alert("Email Sent"))
            form.reset();
        }
        else {
            alert("Incorrect captcha!");
        }
    });