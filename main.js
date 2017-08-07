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
              <div class = 'the-basics-text'>
                <p>Name: ${name}<p>
                <p>GitHub URL: <a href = '${url}'>${login}</a></p>
                <p>Email: hannah.hch@gmail.com </p>
                <p>Company: ${company}</p>
                <p>Website: <a href = '${site}'>LinkedIn</a></p>
                </div>
            </div>
          <div class = 'the-bio'>
            <h2>The Bio</h2>
            <div class = 'bio-info'>
            <p>${bio}</p>
            <img id = 'circle' src = ${photo}>
            </div>
          </div>
        </div>
        `

        document.querySelector('.wrapper').innerHTML = markup;

      })
    }
  )
