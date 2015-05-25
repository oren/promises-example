// Example for a function that returns a promise (getContacts)
// run with: docker-compose run app return-promise.js

function login(result) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('logged in.');
    }, 10);
  })
}

function getContacts(result) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(result + ' get contacts.');
    }, 10);
  })
}

function getAttachments(result) {
  console.log(result + ' get attachments.');
}

function error(err) {
  console.error('error', err);
}

login().then(getContacts).then(getAttachments).catch(error);

// => logged in. get contacts. get attachments.

