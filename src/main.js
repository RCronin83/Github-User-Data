let fetch = (require('node-fetch'));

let promise1 = fetch(
  'https://api.github.com/users/' + process.argv[2],
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[3]
    },
    body: '...'
  }
);

promise1.then(function responseHandler(response){
  if (response.status > 199 && response.status < 300){
    response.json().then(function printName_Location(githubUserData){
      console.log(githubUserData.name, githubUserData.location);
    });
  } else {
    console.log('There was a problem, responseObj.status');
    }
  } 
);
//   }
// }
//
// );
