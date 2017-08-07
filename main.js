//get data

fetch('https://api.github.com/users/hannahhch')

  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      //examine the text in the response
      response.json().then(function(data) {
        let name = data.name;
        let url = data.html_url;
        let email = data.email;
        let company = data.company;
        let site = data.blog;
        let bio = data.bio;

        console.log(`My name is ${name}`);
        console.log(`My url is ${url}`);
        console.log(`My email is ${email}`);
        console.log(`I work at the ${company}`);
        console.log(`My website is ${site}`);
        console.log(`My bio is ${bio}`);

      })
    }
  )
