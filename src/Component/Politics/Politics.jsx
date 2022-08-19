import React, { useState, useEffect } from "react";
import axios from "axios";


export const Politics = () => {
    // const article= [
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Andrew Jeong",
    //         "title": "Osprey military aircraft carrying five Marines crashes in California - The Washington Post",
    //         "description": "The 3rd Marine Aircraft Wing did not comment on potential fatalities and denied speculation that the MV-22B Osprey had been carrying nuclear material.",
    //         "url": "https://www.washingtonpost.com/national-security/2022/06/08/osprey-military-plane-crash-california/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DCGW3VHHPYI6ZJBCCG53SHNTBM.jpg&w=1440",
    //         "publishedAt": "2022-06-09T08:18:08Z",
    //         "content": "Placeholder while article actions load\r\nAn Osprey aircraft carrying five Marines crashed near Glamis, Calif., located just north of the Mexican border, at about 12:25 p.m. local time on Wednesday.\r\nA… [+2342 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "'Brutal' battle for Ukraine's Sievierodonetsk will determine fate of Donbas, president says - Reuters.com",
    //         "description": "The battle for the Ukrainian city of Sievierodonetsk is brutal and will determine the fate of the Donbas region, the country's president said, as Russian troops lay waste to the city in an assault aimed at controlling eastern Ukraine.",
    //         "url": "https://www.reuters.com/world/europe/ukraine-fighters-hold-out-eastern-city-russia-presses-assault-2022-06-09/",
    //         "urlToImage": "https://www.reuters.com/resizer/gmIoD3-vTnCS9OJn3EgDyqu1I_s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQ6Y3KASQZLRPDZWH2SBL3CVCA.jpg",
    //         "publishedAt": "2022-06-09T06:05:00Z",
    //         "content": "KYIV/SLOVIANSK, Ukraine, June 9 (Reuters) - The battle for the Ukrainian city of Sievierodonetsk is brutal and will determine the fate of the Donbas region, the country's president said, as Russian t… [+5951 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "Joel Corry",
    //         "title": "Agent's Take: Kyler Murray, DK Metcalf, Deebo Samuel headline nine NFL stars seeking a big deal or trade - CBS Sports",
    //         "description": "These superstars are taking different approaches when it comes to their happiness",
    //         "url": "https://www.cbssports.com/nfl/news/agents-take-kyler-murray-dk-metcalf-deebo-samuel-headline-nine-nfl-stars-seeking-a-big-deal-or-trade/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/08/5f623296-255c-4560-9f1e-354a1ded8ab1/thumbnail/1200x675/f02f4cf0dd1a3b29d1ee6ea5ca19c93b/gettyimages-1188983851.jpg",
    //         "publishedAt": "2022-06-09T05:38:00Z",
    //         "content": "Player dissatisfaction with existing contracts and frustration with the negotiation of new contracts regularly occurs every offseason. There are different ways to handle contract unhappiness. Some pl… [+13891 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": "Kendra Andrews",
    //         "title": "Golden State Warriors in wait-and-see mode after Stephen Curry caught up in scrum in Game 3 loss - ESPN",
    //         "description": "Stephen Curry expressed optimism, but even he had to admit the Warriors will have to see how his latest injury responds after he got caught up in a scrum in Golden State's loss to the Celtics on Wednesday night.",
    //         "url": "https://www.espn.com/nba/story/_/id/34062256/golden-state-warriors-wait-see-mode-stephen-curry-caught-scrum-game-3-loss",
    //         "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0609%2Fr1022914_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-06-09T05:04:00Z",
    //         "content": "BOSTON -- There was a lot for the Golden State Warriors to digest following their 116-100 loss to the Celtics on Wednesday night in Game 3 of the NBA Finals. But on the top of their minds after falli… [+5978 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "independent",
    //             "name": "Independent"
    //         },
    //         "author": "Andrew Feinberg",
    //         "title": "‘Trump will lose his mind’: The 6 Jan hearings vow to ‘change history’. Here’s what to expect - The Independent",
    //         "description": "The panel’s first hearing in prime time will feature a filmmaker who captured footage of a meeting between Proud Boys leader Enrique Tarrio and Oath Keepers founder Elmer Stewart Rhodes, Eric Garcia and Andrew Feinberg report",
    //         "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-jan-6-hearings-proud-boys-testify-b2097111.html",
    //         "urlToImage": "https://static.independent.co.uk/2022/06/08/17/JANUARY%206TH.jpg?quality=75&width=1200&auto=webp",
    //         "publishedAt": "2022-06-09T04:54:22Z",
    //         "content": "When the House 6 January select committee convenes its first hearing to examine the worst attack on the US Capitol since 1814, the nine-member panel and the two witnesses who will testify Thursday wi… [+9569 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Alex Horton",
    //         "title": "Brookings think tank sidelines retired general amid federal probe - The Washington Post",
    //         "description": "John R. Allen, president of the Brookings Institute since 2017, was put on administration leave as authorities scrutinize his activities on behalf of the Qatari government.",
    //         "url": "https://www.washingtonpost.com/national-security/2022/06/08/john-allen-brookings-qatar/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZKRM4GHHM4I6ZJBCCG53SHNTBM.jpg&w=1440",
    //         "publishedAt": "2022-06-09T04:39:00Z",
    //         "content": "Placeholder while article actions load\r\nThe Brookings Institution, an esteemed D.C. research firm, on Wednesday placed its president, retired Marine Gen. John R. Allen, on administrative leave amid a… [+4521 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "SciTechDaily"
    //         },
    //         "author": null,
    //         "title": "NASA’s $10 Billion Webb Space Telescope Struck by Micrometeoroid - SciTechDaily",
    //         "description": "NASA’s James Webb Space Telescope sustained an impact to one of its primary mirror segments between May 23 and 25. Micrometeoroid strikes are an unavoidable aspect of operating any spacecraft, which routinely sustain many impacts over the course of long and p…",
    //         "url": "https://scitechdaily.com/nasas-10-billion-webb-space-telescope-struck-by-micrometeoroid/",
    //         "urlToImage": "https://scitechdaily.com/images/James-Webb-Space-Telescope-in-Space-Artists-Conception.jpg",
    //         "publishedAt": "2022-06-09T04:36:48Z",
    //         "content": "ByThaddeus Cesari, NASA Goddard Space Flight CenterJune 8, 2022\r\nThis artists conception shows the fully unfolded James Webb Space Telescope in space. Credit: Adriana Manrique Gutierrez, NASA Animato… [+5943 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Holly Ellyatt",
    //         "title": "European markets head for negative open ahead of ECB decision - CNBC",
    //         "description": "European stocks are expected to open lower ahead of the latest interest rate decision from the European Central Bank on Thursday.",
    //         "url": "https://www.cnbc.com/2022/06/09/european-markets-open-to-close-data-ecb-decision.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107072159-1654612804938-gettyimages-1240891252-DAVOS_WEF_2022.jpeg?v=1654612931&w=1920&h=1080",
    //         "publishedAt": "2022-06-09T04:19:48Z",
    //         "content": "LONDON European stocks are expected to open lower ahead of the latest interest rate decision from the European Central Bank on Thursday.\r\nThe U.K.'s FTSE index is seen opening 32 points lower at 7,55… [+1392 chars]"
    //     }
    // ]
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=a5e5026a79674a2086ffa13d58a3d269"
        )
        .then((res) => {
          console.log(res.data.articles);
          setPlanets(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
    <h1>Politics News</h1>
    <section className=' container news_container'>
      {planets.map((item, index) => {
        // return <div>{item.title}</div>

        return(
          <article className='news_article' key={item.url}>
          <img src={item.urlToImage} alt="" className='news_image' />
          <h3>1.{item.title}</h3>
          <h5>2.{item.description}</h5>
          <h5>3.{item.publishedAt}</h5>
          <h4>4.{item.author}</h4>
      </article>
         )
      })}
     </section>
     </>
  )
}
