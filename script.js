const fetchNews = async (page)=>{
console.log('fetching news')
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2025-02-22&' +
          'pageSize=20&' +
          'page=' +page+
          'sortBy=popularity&' +
          'apiKey=e0fc14134ddd45ed8a5c11ebba34fc67';

var req = new Request(url);

// let a = await fetch(req)
//    let response =await a.json()
//     console.log(JSON.stringify(response))

let response = {}

    let str = `
        <div class="card my-4 mx-2" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    `

}
fetchNews(1)