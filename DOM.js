// let para = document.querySelector('h1');
// console.log('el:', para);



// var el = document.getElementById('middleSpan');
// console.log('el:', el);

// var el = document.getElementsByTagName('span');
// console.log('el:', el);

function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length==0)
    return alert(`name is required`)
   if (password.length<5)
    return alert(`password length should more than 5`)
   }