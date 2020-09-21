function getLastCommit (username) {
    let url = ("https://api.github.com/users/" + username + "/events/public");
    fetch(url, {headers: {'Authorization': 'token b5dc99563baece3d245c9f3d77c758155e8fbe5f'}})
        .then(response => response.json()
            .then(events => {
                for(let i = 0; i < events.length; i++) {
                    if(events[i].type === "PushEvent") {
                        console.log("The last commit was made: ", events[i].created_at);
                        break;
                    }
                }
            })
        )
}

getLastCommit("alexandrahamner");

///users/:username/events/public

//created_at: "2020-09-18T18:52:45Z"