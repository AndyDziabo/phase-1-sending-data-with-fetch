// const form = document.getElementById('userForm');
// form.addEventListener('submit', submitData);

function submitData(name, email){
    //console.log(name);
    //console.log(email);

    let obj = {
        name,
        email,
    }
    //console.log(obj);
    // e.preventDefault();
    // const user = {
    //     name: document.getElementById('name'),
    //     email: document.getElementById('email'),
    // };
    // console.log(user.name.value);
    // console.log(user.email.value);
    const element = document.createElement('h1');
    
    return fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
         },
         body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => document.body.append(element.textContent = data.id))
    .catch(error => document.body.append(element.textContent = error))    
}
submitData("dave","email");