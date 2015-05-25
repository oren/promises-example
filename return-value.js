// Example for a function that returns a value (getContacts)
// run with: docker-compose run app return-value.js

function login(result) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('logged in.');
    }, 10);
  })
}

function getContacts(result) {
  return result + ' I am doing something sync.';
}

function getAttachments(result) {
  console.log(result + ' get attachments.');
}

function error(err) {
  console.error('error', err);
}

login().then(getContacts).then(getAttachments).catch(error);

// => logged in. I am doing something sync. get attachments

