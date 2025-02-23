let currentQUery = "sports";
let currentPage = 1;

const fetchNews = async (page, q)=>{
console.log(`fetching news for ${q}, Page Number ${page} ...`)
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2025-02-22&' +
          'pageSize=20&' +
          'page=' +page+
          'language=en&' +
          'sortBy=popularity&' +
          'apiKey=e0fc14134ddd45ed8a5c11ebba34fc67';

var req = new Request(url);

let a = await fetch(req)
   let response =await a.json()
    // console.log(JSON.stringify(response))

// let response = {
//     "status": "ok",
//     "totalResults": 10,
//     "articles": [
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Pharaoh: Archaeologists may have found second Thutmose II tomb",
//         "description": "The potential find comes just days after the announcement of the discovery of King Thutmose II's tomb.",
//         "url": "https://www.bbc.co.uk/news/articles/cvg5elpzy9yo",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/f459/live/ba8c8c20-f19c-11ef-9e61-71ee71f26eb1.jpg",
//         "publishedAt": "2025-02-23T05:22:16.7905751Z",
//         "content": "Dr Litherland thinks the second tomb lies below a 23-metre (75 ft) man-made pile of limestone, ash, rubble and mud plaster..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Invisible Losses: Tens of thousands fighting for Russia are dying unnoticed on the frontline in Ukraine",
//         "description": "The Kremlin’s recruitment policy is shielding society from the true impact of war.",
//         "url": "https://www.bbc.co.uk/news/articles/cgkm7lly61do",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7fb8/live/d0bae4c0-f06f-11ef-8c03-7dfdbeeb2526.png",
//         "publishedAt": "2025-02-23T02:52:22.8054254Z",
//         "content": "Russia's actual losses are almost certainly substantially higher than open-source data can reveal..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Germans vote in high-stakes election watched closely by Europe and US",
//         "description": "Conservative Friedrich Merz is expected to win, but the far-right AfD is set for a strong second place.",
//         "url": "https://www.bbc.co.uk/news/articles/cwyj93lz2kxo",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ad82/live/7b96bca0-f162-11ef-896e-d7e7fb1719a4.jpg",
//         "publishedAt": "2025-02-23T02:52:20.5091219Z",
//         "content": "On the eve of the vote, Merz was adamant there would be no deal with the far-right Alternative for Germany (AfD)..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Paris: Paul Varry dreamed of a cycling revolution. Then an SUV crushed him",
//         "description": "Parisians are divided over their city's dramatic expansion of cycle infrastructure after Paul Varry's death.",
//         "url": "https://www.bbc.co.uk/news/articles/c9deyw95xzzo",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5734/live/90ac5e20-f139-11ef-896e-d7e7fb1719a4.jpg",
//         "publishedAt": "2025-02-23T01:22:20.1027877Z",
//         "content": "Paris is navigating the challenges of its cycling revolution as European capitals are under pressure to curb carbon emissions..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Claerwen Reservoir: Mystery of body in a wetsuit puzzles police",
//         "description": "Police continue to investigate how a body of a man in a wetsuit was found in a Welsh reservoir.",
//         "url": "https://www.bbc.co.uk/news/articles/c86q971epx7o",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2269/live/36d8b670-f065-11ef-9e61-71ee71f26eb1.jpg",
//         "publishedAt": "2025-02-23T00:37:25.8536736Z",
//         "content": "Even in the height of summer, when police think the man in the wetsuit might have died, locals say visitors to this reservoir are few and far between..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Peak District: 'I learned the hard way about parking near beauty spot'",
//         "description": "Chelsea Coltart - whose car got damaged and was fined in the Peak District - wants to warn others.",
//         "url": "https://www.bbc.co.uk/news/articles/cz7ezg8lv25o",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/99f5/live/54df7910-ea11-11ef-a363-2145dd9e78c5.jpg",
//         "publishedAt": "2025-02-23T00:37:23.729201Z",
//         "content": "A spokesperson for the Peak District National Park Authority said: 'Dangerous or disruptive parking can affect not only locals but also emergency access...'"
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Newspaper headlines: 'PM lays down peace demand' and 'New breed of danger dogs'",
//         "description": "A mix of stories lead Sunday's papers, with a focus on the prime minister's upcoming trip to the US.",
//         "url": "https://www.bbc.co.uk/news/articles/cewk2724g79o",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ebe2/live/e200fa70-f174-11ef-896e-d7e7fb1719a4.png",
//         "publishedAt": "2025-02-23T00:37:23.1512197Z",
//         "content": "The Prince and Princess of Wales are 'very popular' with the Australian public, the Sunday Express reports..."
//       },
//       {
//         "source": {
//           "id": "bbc-news",
//           "name": "BBC News"
//         },
//         "author": "BBC News",
//         "title": "Document work or resign, Doge says to US federal workers in email",
//         "description": "The email comes as Elon Musk leads an effort to aggressively curtail the government workforce.",
//         "url": "https://www.bbc.co.uk/news/articles/cr72n1yyj30o",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/22f2/live/fb0530e0-f16f-11ef-9ab6-a9bb2296f4f9.jpg",
//         "publishedAt": "2025-02-23T00:07:22.8833565Z",
//         "content": "The email arrived shortly after President Trump spoke at the Conservative Political Action Conference (CPAC)..."
//       }
//     ]
//   }
  
//   console.log(response)



    let str = "";
    resultCount.innerHTML = response.totalResults;
    for (let item of response.articles) {
        str += `
        <div class="card my-4 mx-2" style="width: 18rem;">
          <img src="${item.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="${item.url}" target = "_blank" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    
`
    }
    document.querySelector('.cards-container').innerHTML = str
}
fetchNews(1, "sports");
// const searchInput = document.querySelector("#search-input");
// const search = document.querySelector(".search");

search.addEventListener("click", (e)=>{
    e.preventDefault()
    let query = searchInput.value;
    currentQUery = query;
    fetchNews(1, query)
})

prev.addEventListener("click", (e)=>{
    e.preventDefault()
    if(currentPage>1){
        currentPage--;
        let query = searchInput.value;
    currentQUery = query;
        fetchNews(currentPage, currentQUery)
    }
    
})

next.addEventListener("click", (e)=>{
    e.preventDefault()
    currentPage++;
    let query = searchInput.value;
    currentQUery = query;
    fetchNews(currentPage, currentQUery)
})