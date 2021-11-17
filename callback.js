function sayHello(name, cb) {
  cb(`Hello ${name}`);
  //   showGreeting(`Hello ${name}`);
}

function showGreeting(quote) {
  console.log(quote);
  console.log("");
}

function postAnnouncement(quote) {
  console.log(quote);
  console.log("Besok kita ada Daily Standup\n");
}

sayHello("Web 4", showGreeting);
sayHello("Web 4", postAnnouncement);
sayHello("Web 4", function (text) {
  const newText = text.replace("Hello", "Welcome");
  console.log(newText);
});
