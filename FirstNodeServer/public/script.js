window.addEventListener("load", () => {

    let input = document.getElementById("class-input");
    input.addEventListener("submit", (e) => {
        e.preventDefault();
        let major = document.getElementById("class-input-text").value;
        console.log(major);

        let url = "/majors?majorName="+major;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let extras = "";

            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    extras += '<li>' + key + ' is offered as a ' + data[key] + ' in NYUAD' + '</li>';
                }
            }

            document.getElementById('subjects').innerHTML = extras;

        })

    })
})