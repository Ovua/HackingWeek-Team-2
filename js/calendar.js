// Ivan - fetch tramite chiamata su API e forEach
export const getCalendar = () =>
fetch ('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => res.json())
     .then(data => {
        const articles = data.forEach(article => {
        const title = (article.title)
        const date = (article.publishedAt)
     
        //Federico --start



        
    })
});
         //Federico -end


    





