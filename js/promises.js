function getLastCommit (username) {
    let url = ("https://api.github.com/users/" + username + "/events/public");
    return fetch(url, {headers: {'Authorization': githubToken}})
        .then((response) => response.json())
            .then(events => {
                for(let i = 0; i < events.length; i++) {
                    if(events[i].type === "PushEvent") {
                       return events[i].created_at
                    }
                }
            });
}

getLastCommit("alexandrahamner");

document.querySelector("#getUsername").addEventListener("click", function (e) {
    e.preventDefault();
    const userInput = document.querySelector("#username").value;
    getLastCommit(userInput).then((date) => {
        const div = document.querySelector("#commit-container");
        div.innerHTML = "Your last commit was on: " + date.substring(5,10) + "-" + date.substring(0,4);
    })
})

///users/:username/events/public

//created_at: "2020-09-18T18:52:45Z"