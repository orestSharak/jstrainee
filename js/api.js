function getData() {
    fetch('https://gist.githubusercontent.com/orestSharak/901bad8e713b6aade71d67ce2fa636c9/raw/5805f562c8e634fd0b54ef7191182bae6f5357cb/myDatasFile.json')
        .then((res) => res.json())
        .then((data) => {
            let posts = data.datas;
            return posts.map(function (post) {
                let output = `
             <img class="image-full-width" src= "${post.img}"/>
            <div class="col-lg-8  offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-12 offset-0 position-relative wrapper ">
                <span class="date-block">${post.date}</span>
                <h1>${post.title}</h1>
                <p>${post.description}</p>

                <!--  suppose to be video, I guess :) -->

                <div class="position-relative">
                    <img class="img-fluid image-video" src="${post.img}"/>
                     <i class="far fa-play-circle play-img"></i>
                </div>
            </div>
            `;
                document.getElementById('app').innerHTML += output;
            })
        })
        .catch(error => (console.log('fetch failed', error)))
}

getData();