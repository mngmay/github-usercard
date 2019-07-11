/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/mngmay")
  .then(data => {
    console.log("Get user data check", data.data);
    const user = data.data;
    const newUser = createCard(user);
    cards.appendChild(newUser);
  })
  .catch(error => {
    console.log("ERROR:", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tommycoleman87",
  "kevintou",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//grabbing element to add our cards to
const cards = document.querySelector(".cards");

//https://api.github.com/users/mngmay

const follower = followersArray.forEach(user => {
  console.log(user);
  console.log(`https://api.github.com/users/${user}`);
  return `https://api.github.com/users/${user}`;
});

axios
  .get(follower)
  .then(data => {
    console.log("Get user data check", data.data);
    const user = data.data;
    const newUser = createCard(user);
    cards.appendChild(newUser);
  })
  .catch(error => {
    console.log("ERROR:", error);
  });

function createCard(user) {
  //create elements
  const card = document.createElement("div");
  const avatar = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //add classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  //add content
  avatar.src = user.avatar_url;
  name.textContent = user.name;
  userName.textContent = user.login;
  location.textContent = user.location;
  profile.textContent = `Profile: ${profileLink}`;
  profileLink.textContent = user.html_url;
  profileLink.href = user.html_url;
  followers.textContent = `Following: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = user.bio;

  //set structure
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
