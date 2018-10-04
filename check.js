fetch("https://api.github.com/repos/joinpursuit/git_assignment/pulls?page=2")
  .then(res => {
    return res.json();
  })
  .then(res => console.log(res));
fetch("https://api.github.com/repos/joinpursuit/git_assignment/pulls?page=1")
  .then(res => {
    return res.json();
  })
  .then(res => console.log(res));
