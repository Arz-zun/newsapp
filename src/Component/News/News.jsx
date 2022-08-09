
import './News.css'
import React from 'react'
// import { Sports } from '../Sports/Sports'
// import axios from 'axios'

// const News = () => { 
//   const [person, setPerson] = useState([])
 

//   useEffect(() => {
   
//     const url='https://newsapi.org/v2/everything?q=apple&from=2022-06-05&to=2022-06-05&sortBy=popularity&apiKey=a5e5026a79674a2086ffa13d58a3d269';
//     fetch(url).then(res=>res.json())
//     .then(res=>setPerson(res))
        
    
// }, [])

 const News = () => {  
    const article=[
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Asia shares lifted by U.S. futures, oil climbs - Reuters.com",
            "description": "Asian shares joined U.S. stock futures in making cautious gains on Monday ahead of U.S. inflation data this week, while the euro touched a seven-year top against the yen amid wagers on European Central Bank tightening.",
            "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-pix-2022-06-06/",
            "urlToImage": "https://www.reuters.com/resizer/TGfvt9jHEmidf0GBSn8ConPDfEs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4C5QMX6DENMBRHDX6NSQVCOLTE.jpg",
            "publishedAt": "2022-06-06T05:56:00Z",
            "content": "SYDNEY, June 6 (Reuters) - Asian shares joined U.S. stock futures in making cautious gains on Monday ahead of U.S. inflation data this week, while the euro touched a seven-year top against the yen am… [+4188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Landon Mion",
            "title": "Autonomous Mayflower arrives in North America - Fox Business",
            "description": "A crewless robotic ship trying to take the route of the Mayflower's 1620 sea voyage has landed in North America, but this time in Canada instead of Massachusetts.",
            "url": "https://www.foxbusiness.com/technology/autonomous-mayflower-arrives-north-america",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/06/0/0/AP22154739738868.jpg?ve=1&tl=1",
            "publishedAt": "2022-06-06T03:51:21Z",
            "content": "A crewless autonomous boat attempting to take the route of the Mayflower's 1620 sea voyage has finally arrived at the shores of North America, but on the coast of Canada instead of Massachusetts, whe… [+2473 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": null,
            "title": "What is Web3? Silicon Valley's favorite new buzzword explained - CNBC",
            "description": "Some crypto enthusiasts want a new kind of internet that yanks power away from Big Tech and hands it to people. Can they succeed?",
            "url": "https://www.cnbc.com/video/2022/06/06/what-is-web3-silicon-valleys-favorite-new-buzzword-explained.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107071290-GettyImages-1354808056.jpg?v=1654481187&w=1920&h=1080",
            "publishedAt": "2022-06-06T03:33:59Z",
            "content": "Remember AOL chatrooms and downloading songs through Napster? The internet has come a long way.Today, it's dominated by Meta, Google and a handful of other tech giants whose services have made it eas… [+823 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "James Rubin, Damanick Dantes",
            "title": "First Mover Asia: Bitcoin and Other Cryptos Tick Up in Weekend Trading - CoinDesk",
            "description": "Ether and other major altcoins are slightly in the green as investors continue to look for clarity on the direction of the global economy; stablecoins face increasing scrutiny.",
            "url": "https://www.coindesk.com/markets/2022/06/06/first-mover-asia-bitcoin-and-other-cryptos-tick-up-in-weekend-trading/",
            "urlToImage": "https://www.coindesk.com/resizer/OlxhgerMkAtZystydyj5DtMvS7M=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/FJGJBYCWBVCIRCAZ777ZOV4FFQ.jpg",
            "publishedAt": "2022-06-06T01:11:00Z",
            "content": "Good morning. Heres whats happening:\r\nPrices: Bitcoin and other major cryptos trade rise slightly.\r\nInsights: Stablecoins face increasing scrutiny.\r\nTechnician's take: Bitcoin is weighed down by resi… [+9485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": null,
            "title": "2022 Tesla prices: How much does your favorite model cost? - Electrek.co",
            "description": "An updated guide walking you through the current and ever-evolving Tesla prices for 2022, including current models as well as upcoming EVs.",
            "url": "https://electrek.co/2022/06/05/2022-tesla-prices-how-much-does-your-favorite-model-cost/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/05/2022-Tesla-prices.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2022-06-06T00:58:00Z",
            "content": "Electrek is brought to you by Autonomy, the cheapest, fastest, easiest way to get a Tesla Model 3. If you have a credit card, you can reserve a Tesla now. Learn more and get $500 off for a limited ti… [+9512 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Oil jumps after Saudi Arabia hikes crude prices - Reuters.com",
            "description": "Oil prices rose more than $2 in early trade on Monday after Saudi Arabia raised prices sharply for its crude sales in July, an indicator of how tight supply is even after OPEC+ agreed to accelerate its output increases over the next two months.",
            "url": "https://www.reuters.com/markets/commodities/oil-jumps-after-saudi-arabia-hikes-crude-prices-2022-06-05/",
            "urlToImage": "https://www.reuters.com/resizer/WmD6mLzQLkl9tMenvmg9Dis0EW4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/32NJYMK4DJN47EEWFAGEKOW64Q.jpg",
            "publishedAt": "2022-06-05T23:51:00Z",
            "content": "MELBOURNE, June 6 (Reuters) - Oil prices rose more than $2 in early trade on Monday after Saudi Arabia raised prices sharply for its crude sales in July, an indicator of how tight supply is even afte… [+2170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Eustance Huang",
            "title": "Asia-Pacific stocks mixed; private survey shows Chinese services activity contracted in May - CNBC",
            "description": "China's Caixin Services PMI released Monday came in at 41.4, an improvement over April's reading of 36.2 but still in contraction territory.",
            "url": "https://www.cnbc.com/2022/06/06/asia-markets-caixin-services-pmi-china-economy-currencies-oil.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107007807-1643337444460-gettyimages-1267455437-vcg111295937601.jpeg?v=1654488726&w=1920&h=1080",
            "publishedAt": "2022-06-05T23:46:19Z",
            "content": "SINGAPORE Shares in Asia-Pacific were mixed in Monday trade, as a private survey showed another contraction in China's service sector activity for May.\r\nChinese stocks led gains among the region's ma… [+2288 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Flight cancellations: Children and teachers stranded abroad as school starts - BBC",
            "description": "Thousands of holiday-makers are thought to be stuck in Europe after the weekend's flight cancellations.",
            "url": "https://www.bbc.com/news/business-61699071",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CE5C/production/_125282825_mediaitem125282824.jpg",
            "publishedAt": "2022-06-05T23:34:58Z",
            "content": "By Lucy HookerBusiness reporter, BBC News\r\nImage caption, Ben (right) has been at Disneyland Paris with his brother and their extended family\r\nBen, 17, was due home on Saturday in plenty of time to t… [+6138 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Dow Jones Futures: Market Rally Looks To Rebound; Apple News On Tap - Investor's Business Daily",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtbWFya2V0LXJhbGx5LWxvb2tzLXRvLXJlYm91bmQtYXBwbGUtd3dkYy1uZXdzLWxvb21zL9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-06-05T22:53:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Hodl"
            },
            "author": "Daily Hodl Staff",
            "title": "Here’s How Bitcoin Could Perform in Coming Weeks As BTC Impersonates June 2021 Price Action: Top Analyst - The Daily Hodl",
            "description": "A widely followed crypto strategist is predicting how Bitcoin could trade in the coming weeks as he says BTC is currently following its June 2021 price action.",
            "url": "https://dailyhodl.com/2022/06/05/heres-how-bitcoin-could-perform-in-coming-weeks-as-btc-impersonates-june-2021-price-action-top-analyst/",
            "urlToImage": "https://dailyhodl.com/wp-content/uploads/2022/03/change-launch-bitcoin.jpg",
            "publishedAt": "2022-06-05T22:06:13Z",
            "content": "A widely followed crypto strategist is predicting how Bitcoin could trade in the coming weeks as he says BTC is currently following its June 2021 price action.\r\nAnalyst Justin Bennett tells his 100,9… [+1572 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Vivian Giang",
            "title": "The Office Monsters Are Trying to Claw Their Way Back to 2019 - The New York Times",
            "description": "Some corporate leaders are grasping at whatever they can to get back to the way things were. But they might find themselves fighting a culture shift beyond their control.",
            "url": "https://www.nytimes.com/2022/06/04/business/dealbook/companies-return-to-office.html",
            "urlToImage": "https://static01.nyt.com/images/2022/06/06/business/04subDB-workdevotion-print/04DB-workdevotion-facebookJumbo.jpg",
            "publishedAt": "2022-06-05T21:27:00Z",
            "content": "Im trying to fill up office buildings, and Im telling JPMorgan, Goldman Sachs, Im telling all of them, Listen, I need your people back into office so we can build the ecosystem, Mayor Eric Adams of N… [+2301 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Coinbase freezes hiring and rescinds accepted job offers - The Verge",
            "description": "As the cryptocurrency market falters, Coinbase is putting a pause on hiring indefinitely, and is also rescinding some job offers already accepted by prospective employees.",
            "url": "https://www.theverge.com/2022/6/5/23155442/crypto-winter-coinbase-in-trouble-hiring-freeze-rescinded-job-offers",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Sj_8PVWggITIsmi0QWkzxdplYBQ=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937279/acastro_170726_1777_0007_v3.jpg",
            "publishedAt": "2022-06-05T21:06:18Z",
            "content": "Coinbase is extending its hiring freeze indefinitely\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nCoin… [+4364 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Team Transitory Is Back Warning Big Rate Hikes Are a Big Mistake - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=272b2cbd-e544-11ec-9439-7741544a7274&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNi0wNS90ZWFtLXRyYW5zaXRvcnktaXMtYmFjay13YXJuaW5nLWJpZy1yYXRlLWhpa2VzLWFyZS1hLWJpZy1taXN0YWtl",
            "urlToImage": null,
            "publishedAt": "2022-06-05T21:00:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Rakesh Upadhyay",
            "title": "Top 5 cryptocurrencies to watch this week: BTC, ADA, XLM, XMR, MANA - Cointelegraph",
            "description": "BTC appears to be in the early stage of a recovery this week, and ADA, XLM, XMR and MANA could follow.",
            "url": "https://cointelegraph.com/news/top-5-cryptocurrencies-to-watch-this-week-btc-ada-xlm-xmr-mana",
            "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDYvMDdmOWFkZGEtMTg5MC00NjVjLWE3MDMtMzE5ZmEzNjZkYjAxLmpwZw==.jpg",
            "publishedAt": "2022-06-05T19:24:51Z",
            "content": "The bears are trying to extend Bitcoins (BTC) record of nine consecutive red weekly candles to ten weeks, but the bulls are trying to avert this negative occurrence. Although sentiment remains negati… [+8259 chars]"
        
    }
    ] 
  
  return (
    <>
    <h1>All News</h1>

     <section className=' container news_container'>      
      
           {
           article.map(({title,urlToImage,author,description,publishedAt,url})=>{
               return(
                <article className='news_article' key={url}>
                <img src={urlToImage} alt="" className='news_image' />
                <h3>{title}</h3>
                <h5>{description}</h5>
                <h5>{publishedAt}</h5>
                <h4>{author}</h4>
            </article>
               )
           }
           ) 
        }
    </section>
        {/* <article className='news_container_side'><Sports/></article> */}
    
    </>
  )
}
export default News