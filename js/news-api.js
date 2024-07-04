let rootElment = document.getElementById('root');

fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3cbf93ca943744a2bc449cbeae047c6b')
.then(response => response.json())
.then(arrayOfNews=>{

    let articles = arrayOfNews.articles;
    
    for (const iterator of articles) {

        rootElment.insertAdjacentHTML('afterbegin', `
        <div class="news-card">
                    <div class="news-card-image">
                        <img src="${iterator.urlToImage}" class="width-100" alt="${iterator.title}">
                    </div>
                    <div class="news-card-detials">
                        <h2><a href='${iterator.url}' target='_blank'>${iterator.title}</a></h2>
                        <h6>${iterator.publishedAt}</h6>
                        <p>
                            ${iterator.description ?? 'Not Avaliable'}
                        </p>
                    </div>
                </div>
        `);
    }
}).catch((error)=>{
    console.log(error);
})