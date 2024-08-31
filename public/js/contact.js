const contactForm = document.getElementById('contactForm');
const nameTxt = document.getElementById('nameTxt');
const emailTxt = document.getElementById('emailTxt');
const msgTxt = document.getElementById('msgTxt');
const submitBtn = document.getElementById('submitBtn');

//!FORM VALIDATIONS
const error = (input) => {
    input.className = 'form-control is-invalid';
};

const success = (input) => {
    input.className = 'form-control is-valid'
}

const checkRequired = (inputs) => {
    let allValid = true;
    inputs.forEach(input => {
        if(input.value === '') {
            error(input)
            input.style.display = 'block'
            allValid = false;
        } else {
            success(input)
            input.style.display = 'none'
        }
    });

    return allValid;
}

const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input)
        return true;
    } else {
        error(input)
        return false;
    }
};

const displayMode = (inputs, mode) => {
    inputs.forEach(input => {
        input.style.display = mode
    });
};

contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    const loaderWrapper = document.querySelector('.loader-wrapper');
    const inputsValid = checkRequired([nameTxt, emailTxt, msgTxt]);
    const emailValid = checkEmail(emailTxt)

    if(inputsValid && emailValid) {
        submitBtn.style.display = 'none';
        loaderWrapper.classList.add('active')
        contactForm.classList.add('active')

        setTimeout(() => {
            loaderWrapper.classList.remove('active')
            contactForm.classList.remove('active')
            document.querySelector('.check').classList.add('active')
        }, 2000);
    } else {
        displayMode([nameTxt, emailTxt, msgTxt], 'block')
    }
});

let frequentlyOpen = document.querySelectorAll('.frequentlyOpen').forEach(frequently => {
    frequently.addEventListener('click', () => {
        document.querySelectorAll('.frequently-text.open').forEach(text =>  {
            if(text !== frequently.nextElementSibling) {
                text.classList.remove('open');
            }
        });

        frequently.nextElementSibling.classList.toggle('open')
    });
});