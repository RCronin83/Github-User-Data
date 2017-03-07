let fetch = (require('node-fetch'));

let promise1 = fetch(
  'https://api.github.com/users/' + process.argv[2],
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[3]
    },
    body: '...'
  } );

promise1.then(function responseHandler(response){
  if (response.status > 199 && response.status < 300){
    response.json().then(function printName_Location(githubUserData){
      console.log(githubUserData.name, githubUserData.location);
    });
  } else {
    console.log('There was a problem, responseObj.status');
    }
  } );

let promise2 = fetch(
  'https://api.github.com/users/' + process.argv[2] + '/repos',
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[3]
    },
    body: '...'
  } );
  promise2.then(function responseHandler(response){
    if (response.status > 199 && response.status < 300){
      response.json().then(function printData(githubUserData2){
        let maxCount = 0;
        let maxRepoName = '';
      githubUserData2.forEach(function printNumStargazers(repo){
        let stargazersCount = repo.stargazers_count;
        if (maxCount < stargazersCount){
          maxCount = stargazersCount;
          maxRepoName = repo.name;
        }
      } );
      console.log(maxRepoName);
    } );

  } else {
    console.log('There was a problem', responseObj.status);

  }
});

// }
// }
//
// );
