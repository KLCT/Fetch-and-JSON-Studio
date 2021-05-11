window.addEventListener("load", function(){
    const getAstro = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    getAstro.then(function(response){
        const astroData = response.json();
        const div = document.getElementById("container");
        astroData.then(function(arr){
            arr = arr.sort((ele1, ele2)=>{return ele2.hoursInSpace - ele1.hoursInSpace});
            for(let i=0; i<arr.length; i++){
                let li = document.getElementById("activity");
                //doesn't change proper element text green
                if(arr[i].active === true){
                    li.style.color = "green";
                }        
                div.innerHTML += `
                        <div class="astronaut">Count: ${i}
                            <div class="bio">
                                <h3>${arr[i].firstName +" "+ arr[i].lastName}</h3>
                                <ul>
                                    <li>Hours in Space: ${arr[i].hoursInSpace}</li>
                                    <li id="activity">Active: ${arr[i].active}</li>
                                    <li>Skills: ${arr[i].skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${arr[i].picture}">
                        </div>`;
            }
            
        })
    })
});