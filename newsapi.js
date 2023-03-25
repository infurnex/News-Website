

const button = document.getElementsByClassName('btn')[0];
const nav = document.getElementsByClassName('navbar')[0];
const body = document.getElementsByTagName('body')[0];
const news = document.getElementsByClassName('news')[0];
const title = document.getElementsByClassName('title')[0];




button.addEventListener('click' , ()=>{
    if(button.innerHTML == 'Dark Mode'){
        nav.className = 'newnavbar';
        button.className = 'newbtn';
        button.innerHTML = 'White Mode';
        body.className = 'newbody';
        news.className = 'newnews';
        title.className = "newtitle";
    }
    else{
        nav.className = 'navbar';
        button.className = 'btn';
        button.innerHTML = 'Dark Mode'; 
        body.className = 'body';     
        news.className = 'news';
        title.className = "title";
    }
})

window.onload = async function() {
    const api_key = 'a2d72bd22d0a4ef5a214ab6b4a91f193'
    const api = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api_key
    const response = await axios.get(api);
    console.log(response) 
    console.log('hi')
    const articles =  response.data.articles 
    console.log(articles);

    for(let i = 0 ; i <  articles.length ; i++){
        const heading = limitwords(50, articles[i].title , '....')
        const dis = limitwords(150 , articles[i].description , '...read more')
        listrendering(articles[i].urlToImage , heading , dis  , articles[i].author)

    }
    
};

const listrendering = (image , headline , discription , authorr) =>{
    const newsbox = document.createElement('div');
    newsbox.className = 'newsbox';

    const img = document.createElement('img');
    img.className = 'nb-img';
    img.setAttribute('src' , image);

    const heading = document.createElement('div');
    heading.className = 'nb-heading';
    heading.innerHTML = headline;

    const discr = document.createElement('div');
    discr.className = 'nb-discrip';
    discr.innerHTML = discription;

    const author = document.createElement('div');
    author.className = 'nb-author';
    author.innerHTML = authorr;

    newsbox.appendChild(img);
    newsbox.appendChild(heading);
    newsbox.appendChild(discr);
    newsbox.appendChild(author);
    news.appendChild(newsbox);
}

const limitwords = (limit , paragraph , msg)=>{
    if(paragraph){
        const para = paragraph.slice(0, limit);
        const response = para+msg;
        return response;
    }
    else{
        return paragraph;
    }
}
