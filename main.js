let classList = {
  "isa alvarado": true,
  "jonathan andrade": true,
  "dawn annichiarico": true,
  "christian anselm": true,
  "erick arellano": true,
  "jonelle bain": true,
  "jonathan bayne": true,
  "treagan birbal": true,
  "andres cabrera": true,
  "jonathan erquinigo": true,
  "evgeniya ezhova": true,
  "abid hussain": true,
  "jung rae jang": true,
  "morteza khaki": true,
  "andrew kil": true,
  "kelly liang": true,
  "nicolle loayza": true,
  "huandan lu": true,
  "jean max mezalon": true,
  "crispina muriel": true,
  "mateo navarrete": true,
  "jacky ong": true,
  "deyvi ortiz": true,
  "tyson pan": true,
  "alex park": true,
  "thomas perez": true,
  "wynter reid": true,
  "muna sharma": true,
  "t'keya stevens": true,
  "carina taveras": true,
  "michell tejada": true,
  "nielene thomas": true,
  "rinat tregerman": true,
  "channing tyner": true,
  "elisandra cardona": true,
  "diana gaona": true
};

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let assignment = document.querySelector("input").value;
  let lookup =
    "https://api.github.com/repos/joinpursuit/" + assignment + "/pulls?page=2";
  let lookup2 =
    "https://api.github.com/repos/joinpursuit/" + assignment + "/pulls?page=1";
  Promise.all([
    fetch(lookup).then(res => {
      return res.json();
    }),
    fetch(lookup2).then(res => {
      return res.json();
    })
  ])
    .then(res => {
      let output = res[0].concat(res[1]);
      output.forEach(obj => {
        //console.log(classList[obj.title.toLowerCase()], obj.title.toLowerCase(), obj.title.toLowerCase().trim());
        if (classList[obj.title.toLowerCase().trim()]) {
          delete classList[obj.title.toLowerCase().trim()];
        }
      });
    })
    .then(() => {
      let ol = document.querySelector("ol");
      Object.keys(classList).map(student => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(student));
        ol.appendChild(li);
      });
    });
});
