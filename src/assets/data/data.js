import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    icon: <SiOpenaigym />,
    title: "Program One",
    info: "This is the day One that the lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    icon: <SiOpenaigym />,
    title: "Program Two",
    info: "This is the day Two that the lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    icon: <SiOpenaigym />,
    title: "Program Three",
    info: "This is the day Three that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    icon: <SiOpenaigym />,
    title: "Program Four",
    info: "This is the day Four that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    question: "How often should I exercise?",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    question: "What time of day is best to work out?",
    answer:
      "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.",
  },
  {
    question: "How long should my workouts be?",
    answer:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    question: "Do I need to warm up before my workouts?",
    answer:
      "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!",
  },
  {
    question: "Should I do strength training, cardio or both?",
    answer:
      "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.",
  },
  {
    question: "Should I lift weights for strength training?",
    answer:
      "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.",
  },
];

export const testimonials = [
  {
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: require("../images/avatar1.jpg"),
  },
  {
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: require("../images/avatar2.jpg"),
  },
  {
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: require("../images/avatar3.jpg"),
  },
  {
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: require("../images/avatar4.jpg"),
  },
  {
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: require("../images/avatar5.jpg"),
  },
];

export const plans = [
  {
    name: "Silver Package for you",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    name: "Gold Package for you",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    name: "Platinum Package for you",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

const Trainer1 = require("../images/trainer1.jpg");
const Trainer2 = require("../images/trainer2.jpg");
const Trainer3 = require("../images/trainer3.jpg");
const Trainer4 = require("../images/trainer4.jpg");
const Trainer5 = require("../images/trainer5.jpg");
const Trainer6 = require("../images/trainer6.jpg");

export const trainers = [
  {
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];

const About1 = require("../images/about1.jpg");
const About2 = require("../images/about2.jpg");
const About3 = require("../images/about3.jpg");

export const aboutData = [
  {
    title: 'Our Story',
    image: About1,
    sectionClass: 'about__story',
    containerClass: 'about__story-container',
    text: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in odio reprehenderit, praesentium, omnis rerum asperiores expedita hic quod eligendi ipsam dolore quidem? Odit, harum nemo in quibusdam a ratione.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime assumenda, amet eligendi quisquam ducimus rerum perspiciatis delectus. Culpa, cupiditate?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis.'
    ],
  },
  {
    title: 'Our Vision',
    image: About2,
    sectionClass: 'about__vision',
    containerClass: 'about__vision-container',
    text: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in odio reprehenderit, praesentium, omnis rerum asperiores expedita hic quod eligendi ipsam dolore quidem? Odit, harum nemo in quibusdam a ratione.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime assumenda, amet eligendi quisquam ducimus rerum perspiciatis delectus. Culpa, cupiditate?'
    ],
  },
  {
    title: 'Our Mission',
    image: About3,
    sectionClass: 'about__mission',
    containerClass: 'about__mission-container',
    text: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in odio reprehenderit, praesentium, omnis rerum asperiores expedita hic quod eligendi ipsam dolore quidem? Odit, harum nemo in quibusdam a ratione.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime assumenda, amet eligendi quisquam ducimus rerum perspiciatis delectus. Culpa, cupiditate?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis.'
    ],
  },
]