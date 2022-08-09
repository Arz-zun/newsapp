import React from 'react'
import './Gallery.css'

export const Gallery = () => {
  const article=
  [
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
  ]
  return (
    <section className=' container gallary_container'>

{
           article.map(({title,urlToImage,author,description,publishedAt,url})=>{
               return(
                <article className='gallary' key={url}>
                <img src={urlToImage} alt=""  />
               
            </article>
               )
           }
           ) 
        }

    </section>
  )
}
