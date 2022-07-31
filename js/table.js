// Ivan - fetch tramite chiamata su API e forEach
export const getTable = () => 
fetch ('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => res.json())
     .then(data => {
        const articles = data.forEach(article => {
        const img = (article.imageUrl)
        const title = (article.title)
        const url = (article.url)
        const date = (article.publishedAt)
    

// Alice -- Start




    })
});

 //Alice -- End 