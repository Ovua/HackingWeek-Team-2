fetch ('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => res.json())
     .then(data => {
        const articles = data.forEach(article => {
        const img = (article.imageUrl)
        const title = (article.title)
        const url = (article.url)
        const date = (article.publishedAt)
        const author = (article.newsSite)

        
        //scrivi qua le tue funzioni 
    
    })
    });





