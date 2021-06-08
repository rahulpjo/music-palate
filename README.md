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
},

{
  Name: "Tlc",
  Type: "music",
  wTeaser: "TLC is an American girl group whose original line-up consisted of Tionne "T-Boz" Watkins, Lisa "Left Eye" Lopes, and Crystal Jones. Formed in Atlanta, Georgia in 1991, the group enjoyed success during the 1990s. After the addition of Rozonda "Chilli" Thomas, they scored nine top-ten hits on the Billboard Hot 100, including four number-one singles "Creep", "Waterfalls", "No Scrubs", and "Unpretty". The group also recorded four multi-platinum albums, including CrazySexyCool (1994), which received a diamond certification from the Recording Industry Association of America (RIAA). TLC also became the first R&B group in history to receive the Million certification from the Recording Industry Association of Japan (RIAJ) for FanMail (1999).",
  wUrl: "http://en.wikipedia.org/wiki/TLC_(band)",
  yUrl: "https://www.youtube-nocookie.com/embed/FrLequ6dUdM",
  yID: "FrLequ6dUdM"
},
{
  Name: "Marvin Gaye",
  Type: "music",
  wTeaser: "Marvin Gaye (born Marvin Pentz Gay Jr.; April 2, 1939 – April 1, 1984) was an American singer, songwriter, and record producer. He helped to shape the sound of Motown in the 1960s, first as an in-house session player and later as a solo artist with a string of hits, earning him the nicknames "Prince of Motown" and "Prince of Soul".Gaye's Motown hits include "Ain't That Peculiar", "How Sweet It Is (To Be Loved By You)", and "I Heard It Through the Grapevine". Gaye also recorded duets with Mary Wells, Kim Weston, Tammi Terrell, and Diana Ross. During the 1970s, Gaye recorded the albums What's Going On and Let's Get It On and became one of the first artists in Motown to break away from the reins of a production company. His later recordings influenced several contemporary R&B subgenres, such as quiet storm and neo soul. He was a tax exile in Europe in the early 1980s; he released "Sexual Healing" the 1982 hit which won his first two Grammy Awards on the album Midnight Love. Gaye's last televised appearances were at the 1983 NBA All-Star Game, where he sang "The Star-Spangled Banner"; Motown 25: Yesterday, Today, Forever; and Soul Train.",
  wUrl: "https://en.wikipedia.org/wiki/Marvin_Gaye",
  yUrl: "https://www.youtube-nocookie.com/embed/x6QZn9xiuOE",
  yID: "x6QZn9xiuOE"
},
{
  Name: "Aretha Franklin",
  Type: "music",
  wTeaser: "Aretha Louise Franklin (March 25, 1942 – August 16, 2018) was an American singer, songwriter, actress, pianist, and civil rights activist. Franklin began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was a minister. At the age of 18, she embarked on a secular-music career as a recording artist for Columbia Records. While Franklin's career did not immediately flourish, she found acclaim and commercial success after signing with Atlantic Records in 1966. Hit songs such as "I Never Loved a Man (The Way I Love You)", "Respect", "(You Make Me Feel Like) A Natural Woman", "Chain of Fools", "Think", and "I Say a Little Prayer" propelled her past her musical peers. By the end of the 1960s, Aretha Franklin had come to be known as the "Queen of Soul".",
  wUrl: "http://en.wikipedia.org/wiki/Aretha_Franklin",
  yUrl: "https://www.youtube-nocookie.com/embed/XHsnZT7Z2yQ",
  yID: "XHsnZT7Z2yQ"
},

{
  Name: "Outkast",
  Type: "music",
  wTeaser: "Outkast (sometimes written as OutKast) was an American hip hop duo formed in 1992 in East Point, Georgia, consisting of Atlanta-based rappers André "3000" Benjamin (formerly known as Dré) and Antwan "Big Boi" Patton. Widely recognized for their intricate lyricism, memorable melodies and positive messages, Outkast is often regarded as one of the greatest and most influential hip hop acts of all time. The duo achieved both critical acclaim and commercial success from the mid-1990s to the early 2000s, helping to popularize Southern hip hop while experimenting with diverse genres such as funk, psychedelia, jazz, and techno.Benjamin and Patton formed the group as high school students in 1992. Outkast released their debut album Southernplayalisticadillacmuzik in 1994, which gained popularity after the single "Player's Ball" reached number one on the Billboard Hot Rap Tracks chart. With successive releases including ATLiens (1996) and Aquemini (1998), the duo further developed their sound, experimenting with a variety of styles and achieving commercial success. In 2000, Outkast released the critically acclaimed Stankonia, which included the singles "Ms. Jackson" and "B.O.B."",
  wUrl: "http://en.wikipedia.org/wiki/Outkast_(band)",
  yUrl: "https://www.youtube-nocookie.com/embed/PWgvGjAhvIw",
  yID: "PWgvGjAhvIw"
},

{
  Name: "Aaliyah",
  Type: "music",
  wTeaser: "Aaliyah Dana Haughton (; January 16, 1979 – August 25, 2001) was an American singer, actress and model. She has been credited for helping to redefine contemporary R&B, pop and hip hop, earning her the nicknames the "Princess of R&B" and "Queen of Urban Pop".Born in Brooklyn and raised in Detroit, she first gained recognition at the age of 10, when she appeared on the television show Star Search and performed in concert alongside Gladys Knight. At the age of 12, Aaliyah signed with Jive Records and her uncle Barry Hankerson's Blackground Records. Hankerson introduced her to R. Kelly, who became her mentor, as well as lead songwriter and producer of her debut album, Age Ain't Nothing but a Number. The album sold three million copies in the United States and was certified double platinum by the Recording Industry Association of America (RIAA). After facing allegations of an illegal marriage with Kelly, Aaliyah ended her contract with Jive and signed with Atlantic Records.",
  wUrl: "http://en.wikipedia.org/wiki/Aaliya",
  yUrl: "https://www.youtube-nocookie.com/embed/VKbWF1jwMhE",
  yID: "VKbWF1jwMhE"
},
{
  Name: "Prince",
  Type: "music",
  wTeaser: "Prince Rogers Nelson (June 7, 1958 – April 21, 2016) was an American singer-songwriter, musician, record producer, dancer, and actor. He is widely regarded as one of the greatest musicians of his generation. A multi-instrumentalist who was considered a guitar virtuoso, he was well known for his eclectic work across multiple genres, flamboyant and androgynous persona, and wide vocal range which included a far-reaching falsetto and high-pitched screams.Prince's innovative music integrated a wide variety of styles, including funk, R&B, Latin, country, rock, new wave, classical, soul, synth-pop, psychedelia, pop, jazz, industrial, and hip hop. He pioneered the Minneapolis sound, a funk rock subgenre that emerged in the late 1970s. He was also known for his prolific output, releasing 39 albums during his life, with a vast array of unreleased projects left in a vault at his home after his death; it is believed that the vault contains dozens of fully produced albums and over 50 music videos that have never been released, along with various other media. He released hundreds of songs both under his own name and multiple pseudonyms during his life, as well as writing songs that were made famous by other musicians, such as "Nothing Compares 2 U" and "Manic Monday". Estimates of the complete number of songs written by Prince range anywhere from 500 to well over 1,000.",
  wUrl: "http://en.wikipedia.org/wiki/Prince_(musician)",
  yUrl: "https://www.youtube-nocookie.com/embed/UG3VcCAlUgE",
  yID: "UG3VcCAlUgE"
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
- Display newly found artists and some information on page using Grid
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
| Jun 9     | Basic HTML/CSS/JS Skeleton           | Incomplete |
| Jun 10    | Axios Calls/Rendering/Responsiveness | Incomplete |
| Jun 11    | MVP/Project Deployment               | Incomplete |
| Jun 12-13 | Post-MVP/Final Touchups              | Incomplete |
| Jun 14    | Presentations/Project Submission     | Incomplete |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dszox5xnw/image/upload/c_scale,h_416/v1623158491/MusicPalate/PriorityMatrix_adghcf.png "Priority Matrix")

## Timeframes

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Initial HTML           |    M     |      3hrs      |               |             |
| Axios Call             |    H     |      3hrs      |               |             |
| Rendering              |    H     |      3hrs      |               |             |
| JS Event Listeners     |    H     |      3hrs      |               |             |
| General CSS            |    M     |      3hrs      |               |             |
| Responsive CSS         |    H     |      3hrs      |               |             |
| Image/Video Formatting |    M     |      3hrs      |               |             |
| Debugging/Clearing     |    M     |     2.5hrs     |               |             |
| Dropdown               |    L     |      3hrs      |               |             |
| 2nd API Implementation |    L     |      3hrs      |               |             |
| Animation              |    L     |      3hrs      |               |             |
| Deployment             |    H     |      2hrs      |               |             |
| About Page HTML        |    L     |      3hrs      |               |             |
| About Page CSS         |    L     |     2.5hrs     |               |             |
| Total                  |    H     |     40hrs      |               |             |
