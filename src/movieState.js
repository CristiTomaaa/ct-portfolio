//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/portfolio/the-athlete",
      awards: [
        {
          title: "Technology Stack",
          description:
            "In order to built this project I have used HTML5, CSS3 and Vanilla JavaScript",
        },
        {
          title: "Project Story",
          description:
            "It is meant to be a simple and yet user friendly search engine for flight tickets and hotel rooms using a iframe from travelpayouts.com",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
