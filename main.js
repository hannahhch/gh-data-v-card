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
        let login = data.login;
        let photo = data.avatar_url;

        let markup = `
          <div class = 'header'>
            <h1>${name}</h1>
            </div>
            <div class = 'info-wrapper'>
              <div class = 'the-basics'>
              <h2>The Basics</h2>
              <h4>Name: ${name}</h4>
              <h4>GitHub URL: <a href = '${url}'>${login}</a></h4>
              <h4>Email: ${email}</h4>
              <h4>Company: ${company}</h4>
              <h4>Website: <a href = '${site}'>LinkedIn</a></h4>
            </div>
          <div class = 'the-bio'>
            <h2>The Bio</h2>
            <p>${bio}</p>
            <img src = ${photo}>
          </div>
        </div>

        `

        document.querySelector('.wrapper').innerHTML = markup;

      })
    }
  )
