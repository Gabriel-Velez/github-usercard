import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
    .get(`https://api.github.com/users/Gabriel-Velez`)
    .then((res) => {
        console.log(res.data);
        const gabeCard = cardMaker(res.data);
        document.querySelector(".cards").appendChild(gabeCard);
    })
    .catch((err) => console.error(err));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach((person) => {
    axios
        .get(`https://api.github.com/users/${person}`)
        .then((res) => {
            //console.log(res.data);
            const newCard = cardMaker(res.data);
            document.querySelector(".cards").appendChild(newCard);
        })
        .catch((err) => console.error(err));
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(props) {
    //elements
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardInfo = document.createElement("div");
    const cardInfoName = document.createElement("h3");
    const cardInfoUsername = document.createElement("p");
    const cardInfoLocation = document.createElement("p");
    const cardInfoProfile = document.createElement("p");
    const cardInfoProfileLink = document.createElement("a");
    const cardInfoFollowers = document.createElement("p");
    const cardInfoFollowing = document.createElement("p");
    const cardInfoBio = document.createElement("p");

    //structure
    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(cardInfoName);
    cardInfo.appendChild(cardInfoUsername);
    cardInfo.appendChild(cardInfoLocation);
    cardInfo.appendChild(cardInfoProfile);
    cardInfoProfile.appendChild(cardInfoProfileLink);
    cardInfo.appendChild(cardInfoFollowers);
    cardInfo.appendChild(cardInfoFollowing);
    cardInfo.appendChild(cardInfoBio);

    //classes
    card.classList.add("card");
    cardInfo.classList.add("card-info");
    cardInfoName.classList.add("name");
    cardInfoUsername.classList.add("username");

    //content
    cardImg.src = props.avatar_url;
    cardInfoName.innerHTML = props.name;
    cardInfoUsername.innerHTML = props.login;
    cardInfoLocation.innerHTML = `Location: ${props.location}`;
    cardInfoProfile.innerHTML = "Profile:";
    cardInfoProfileLink.innerHTML = props.url;
    cardInfoFollowers.innerHTML = `Followers: ${props.following}`;
    cardInfoFollowing.innerHTML = `Following: ${props.followers}`;
    cardInfoBio.innerHTML = `Bio: ${props.bio}`;

    //return
    return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/