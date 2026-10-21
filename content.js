/*
  EDIT THIS FILE to update your LinkedIn link, events, and event photos.
  You don't need to touch index.html for these.

  Rules that keep the site working:
  - Keep the quote marks around every piece of text.
  - Keep the comma after each } line, except you can leave it on the last one too.
  - To add a new line, copy an existing one and change the text.
*/

window.SITE = {
  linkedin: "https://www.linkedin.com/in/dhwani-badheka",

  // EVENTS you've worked on. Add as many as you like.
  // place, date, note and banner are optional: use "" to leave one out.
  // banner: upload the image next to index.html with this exact file name.
  // If your image is a .png, change .jpg to .png here.
  events: [
    { name: "Global B2B Brand Summit 2026", place: "New York", date: "", note: "Logistics, attendee outreach, live social coverage, and on-camera interviews with C-suite marketing leaders", banner: "banner-b2b-summit-2026.jpg" },
    { name: "Global Most Valuable B2B Brands Index 2026", place: "New York", date: "", note: "Presented with Brand Finance and the ANA. Logistics, outreach to our event community, and live social coverage", banner: "banner-brand-finance-2026.jpg" },
    { name: "Forecast 2026: The Year Ahead", place: "New York", date: "", note: "Logistics, outreach to our event community, and live social coverage", banner: "banner-forecast-2026.jpg" },
    { name: "Holiday Soiree 2025", place: "New York", date: "", note: "Logistics, outreach to our event community, and live social coverage", banner: "banner-holiday-soiree-2025.jpg" },
    // { name: "Event name", place: "New York", date: "March 2026", note: "What you did there", banner: "banner-name.jpg" },
  ],

  // CLASS PROJECTS. slides: images uploaded next to index.html. The first one shows on the page;
  // clicking it opens all of them full size. Add more file names to show more slides.
  projects: [
    {
      title: "Patek Philippe: The Fifth Hour",
      course: "Luxury Marketing, Fordham University, 2025",
      team: "Team project, 2 people",
      summary: "What if the world's most patient watchmaker made whiskey? A 25-year single malt released as five collectible bottles, each honoring one of Patek's decorative crafts, unveiled at a private evening in the Patek Philippe Museum and priced like an heirloom. Luxury that's whispered, not shouted.",
      role: "Creative strategy and presentation design.",
      slides: ["project-patek.jpg", "project-patek-2.jpg"]
    },
    {
      title: "Nike: Running Behind",
      course: "Data-Driven Marketing, Fordham University",
      team: "Team project, 4 people",
      summary: "Why are runners drifting away from Nike, and how do you win them back? Customer data was clustered into segments and mapped by zip code to find the highest-margin cities, then turned into personas with a campaign for each, from the budget-conscious young athlete to the prestige loyalist.",
      role: "Turned the team's segmentation analysis into insights, personas, and campaign ideas.",
      slides: ["project-nike.jpg", "project-nike-2.jpg"]
    },
    {
      title: "Netflix: Now Streaming",
      course: "Marketing Tech and Innovation, Fordham University, 2025",
      team: "Team project, 4 people",
      summary: "A 12-point audit of Netflix's mobile customer journey, from A/B-tested artwork and personalized notifications to opt-in rules and loyalty, ending with three ideas for what comes next, including an immersive Netflixverse.",
      role: "Creative strategy and presentation design.",
      slides: ["project-netflix.jpg", "project-netflix-2.jpg"]
    }
  ],

  // PHOTOS from events. First, upload the image into the images/events folder.
  // Then add a line here with its exact file name. The first photo shows largest.
  // A photo whose file isn't uploaded yet simply won't appear.
  eventPhotos: [
    { src: "images/events/event-1.jpg", caption: "Global B2B Brand Summit 2026, New York" },
    { src: "images/events/event-2.jpg", caption: "Interviewing marketing leaders at the summit" },
    { src: "images/events/event-3.jpg", caption: "Rising Marketing Leaders meetup" },
    // { src: "images/events/event-4.jpg", caption: "Your caption" },
  ]
};
