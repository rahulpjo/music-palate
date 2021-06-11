# Project Overview

## Project Name

Music Palate

## Project Description

This app will allow users to input a musical artist they like and return a list of other artists that might like with pictures.

## API

The primary API I'm choosing to use is Tastedive. Essentially the API returns similar artists to any artist submitted by a search query. The one downside to this API is that it doesn't return a picture (it only returns the artist's Wikipedia page and a YouTube Video), but I might look into adding in the Genius API for more information such as a picture or the artist's most popular songs.

## API Snippet

Sample URL: https://tastedive.com/api/similar?q=lauryn+hill&info=1

```JSON
{
Similar: {
Info: [
{
  Name: "Lauryn Hill",
  Type: "music",
  wTeaser: "Lauryn Noelle Hill (born May 26, 1975) is an American singer, songwriter, rapper, and record producer. She is often regarded as one of the greatest rappers of all time, as well as being one of the most influential singers of her generation. Hill is credited for breaking barriers for female rappers, popularizing melodic rapping and for bringing hip hop and neo soul to popular music. She is known for being a member of Fugees and her solo album The Miseducation of Lauryn Hill, which became one of the best-selling albums of all-time. Hill has won many awards, including eight Grammy Awards, the most for a female rapper.Raised mostly in South Orange, New Jersey, Hill began singing with her music-oriented family during her childhood. She appeared in the 1993 film Sister Act 2: Back in the Habit alongside Whoopi Goldberg. In high school, Hill was approached by Pras Michel for a band he started, which his cousin Wyclef Jean soon joined. They renamed themselves the Fugees and released the albums Blunted on Reality (1994) and the Grammy Award-winning The Score (1996), which sold seven million copies in the U.S. Hill rose to prominence for her African-American and Caribbean music influences on her rapping and singing as well as her performance on the Fugees version of "Killing Me Softly". She began to focus on solo projects, writing and producing "A Rose Is Still a Rose" by Aretha Franklin, then featuring on the Grammy Award-nominated songs "If I Ruled the World (Imagine That)" by Nas and Guantanamera by Wyclef Jean. Her tumultuous romantic relationship with Jean led to the split of the band in 1997, after which she began work on her solo album.",
  wUrl: "http://en.wikipedia.org/wiki/Lauryn_Hill",
  yUrl: "https://www.youtube-nocookie.com/embed/cE-bnWqLqxE",
  yID: "cE-bnWqLqxE"
}
],
Results: [
{
  Name: "Erykah Badu",
  Type: "music",
  wTeaser: "Erica Abi Wright (born February 26, 1971), known professionally as Erykah Badu (), is an American singer-songwriter, record producer and actress. Influenced by R&B, 1970s soul, and 1980s hip hop, Badu became associated with the neo soul subgenre in the 1990s and 2000s along with artists like D'Angelo. She has been called the Queen of Neo soul. Badu's career began after she opened a show for D'Angelo in 1994 in Fort Worth; record label executive Kedar Massenburg was highly impressed with her performance and signed her to Kedar Entertainment. Her first album, Baduizm, was released in February 1997. It spawned four singles: "On & On", "Appletree", "Next Lifetime" and "Otherside of the Game". The album was certified triple Platinum by the Recording Industry Association of America (RIAA). Her first live album, Live, was released in November 1997 and was certified double Platinum by the RIAA.",
  wUrl: "http://en.wikipedia.org/wiki/Erikah_badu",
  yUrl: "https://www.youtube-nocookie.com/embed/-CPCs7vVz6s",
  yID: "-CPCs7vVz6s"
},
{
  Name: "Fugees",
  Type: "music",
  wTeaser: "Fugees (; sometimes The Fugees) was an American hip hop group who rose to fame in the mid-1990s. Their repertoire included elements of hip hop, soul and Caribbean music, particularly reggae. The members of the group were Wyclef Jean, Lauryn Hill, and Pras Michel. Deriving their name from a shortening of the word "refugees", Jean and Michel are Haitian while Hill is American.Before disbanding in 1997, the group recorded two albums, one of which, The Score (1996), was a multi-Platinum and Grammy-winning success and contains their hit single "Killing Me Softly". Hill and Jean each went on to successful solo recording careers; Michel focused on soundtrack recordings and acting, though he found commercial success with his song "Ghetto Supastar". In 2007, MTV ranked them the ninth greatest hip-hop group of all time.",
  wUrl: "http://en.wikipedia.org/wiki/The_Fugees_(band)",
  yUrl: "https://www.youtube-nocookie.com/embed/aIXyKmElvv8",
  yID: "aIXyKmElvv8"
},
{
  Name: "India.Arie",
  Type: "music",
  wTeaser: "India Arie Simpson (born October 3, 1975), also known as India.Arie (sometimes styled as india.arie), is an American singer and songwriter. She has sold over 3.3 million records in the US and 10 million worldwide. She has won four Grammy Awards from her 23 nominations, including Best R&B Album.She was born in Denver, Colorado, the daughter of Joyce and Ralph Simpson. Her musical skills were encouraged by both parents in her younger years. Her mother is a former singer (she was signed to Motown as a teenager and opened for Stevie Wonder and Al Green) and is now her stylist. She has an older brother named J'On and younger sister Mary A Martin of Philadelphia, PA. Arie is African-American, and according to a DNA analysis, she descends from the Mende people of Sierra Leone, the Kru people of Liberia and the Fula people of Guinea-Bissau.",
  wUrl: "http://en.wikipedia.org/wiki/India.Arie",
  yUrl: "https://www.youtube-nocookie.com/embed/0ZwJqaeK9js",
  yID: "0ZwJqaeK9js"
}

]
}
}
```

## Wireframes

![Wireframe 1](https://res.cloudinary.com/dszox5xnw/image/upload/c_scale,h_552/v1623158491/MusicPalate/MusicPalate-01_bhqnur.png "Wireframe 1")

![Wireframe 2](https://res.cloudinary.com/dszox5xnw/image/upload/c_scale,h_1230/v1623158491/MusicPalate/MusicPalate-02_btiarc.png "Wireframe 2")

### MVP

- Create HTML/CSS/JavaScript for user interface to query search and display results
- Axios call on Tastedive API
- Display newly found artists and some information on page using Flexbox
- Implement responsive design (possibly using Flexbox)
- Clear earlier query results when creating a new search

#### Post-MVP

- Second API call for more information about artist via Genius API
- Implement simple animations to enhance user interaction
- Attempt to create dropdown area for each artist that contains the additional info

## Project Schedule

| Day       | Deliverable                          | Status     |
| --------- | ------------------------------------ | ---------- |
| Jun 7-8   | Project Pitch Creation/Wireframes    | Complete   |
| Jun 8     | Project Approval                     | Complete   |
| Jun 9     | Basic HTML/CSS/JS Skeleton           | Complete   |
| Jun 10    | Axios Calls/Rendering/Responsiveness | Complete   |
| Jun 11    | MVP/Project Deployment               | Incomplete |
| Jun 12-13 | Post-MVP/Final Touchups              | Incomplete |
| Jun 14    | Presentations/Project Submission     | Incomplete |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dszox5xnw/image/upload/c_scale,h_416/v1623158491/MusicPalate/PriorityMatrix_adghcf.png "Priority Matrix")

## Timeframes

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Initial HTML           |    M     |      3hrs      |     3hrs      |             |
| Axios Call             |    H     |      3hrs      |     4hrs      |             |
| Rendering              |    H     |      3hrs      |     3hrs      |             |
| JS Event Listeners     |    H     |      3hrs      |     2hrs      |             |
| General CSS            |    M     |      3hrs      |     3hrs      |             |
| Responsive CSS         |    H     |      3hrs      |     1.5hr     |             |
| Image/Video Formatting |    M     |      3hrs      |      1hr      |             |
| Debugging/Clearing     |    M     |     2.5hrs     |     2hrs      |             |
| Dropdown               |    L     |      3hrs      |    2.5hrs     |             |
| 2nd API Implementation |    L     |      3hrs      |      1hr      |             |
| Animation              |    L     |      3hrs      |               |             |
| Deployment             |    H     |      2hrs      |      1hr      |             |
| About Page HTML        |    L     |      3hrs      |      1hr      |             |
| About Page CSS         |    L     |     2.5hrs     |     2hrs      |             |
| Total                  |    H     |     40hrs      |     27hrs     |             |
