const randomFolks = document.querySelector(".random-peeps");

const getData = async function() {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    // parse the data captured in usersRequest
    const data = await usersRequest.json();
    console.log(data);

    // array of objects
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};
getData();

const displayUsers = function(userResults){
    // clear
    randomFolks.innerHTML = ""; 
    // for each to loop over
    const country = data[location.country];
    const name = data[name.first];
    const imageUrl = data[picture.medium];
console.log(country);


}
