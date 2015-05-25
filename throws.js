// Example for a function that throws (getContacts)
// run with: docker-compose run app throwing.js

function login(result) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('logged in.');
    }, 10);
  })
}

function getContacts(result) {
  throw new Error('user logged out!');
}

function getAttachments(result) {
  console.log(result + ' get attachments.');
}

function error(err) {
  console.error('error', err);
}

login().then(getContacts).then(getAttachments).catch(error);

// => error [Error: user logged out!]

