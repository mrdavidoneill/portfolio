const filmhelper = {
  title: "React front-end and DRF REST API for rating films",
  images: ["/images/filmhelper001.png", "/images/filmhelper002.png"],
  // proposal:
  //   "A personal project to store my film ratings and add films I want to watch to a "watch later" list",
  solution:
    "Front-end was built using React, NextJS and TypeScript.  A REST API to store watchlists and ratings was built using Django and Django REST Framework (DRF), with external data fetched using OMDb API.  React testing was used for unit tests and snapshots, and Django testing for API unit testing.  Docker and Docker-Compose was used to containerise the project.",
  tech: [
    "React",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "Python",
    "Django",
    "DRF",
    "Docker",
    "Docker-Compose",
    "Jenkins",
    "Linux",
    "Git",
  ],
  links: [
    { href: "https://github.com/mrdavidoneill/filmhelper", label: "GitHub" },
  ],
};

const kithub = {
  title: "REST API for DIY kit inventory manager",
  images: ["/images/kithub001.png", "/images/kithub002.png"],
  // proposal:
  //   "A client with a large Amazon business wanted a web app that could convert the default A4 shipping labels given by Amazon to a format that could be printed using a thermal label printer.",
  solution:
    "A REST API was built using Django and Django REST Framework (DRF), to provide back-end functionality and a front-end web browsable API.  Jenkins was used to automate CI/CD, using Cucumber for acceptance testing and Ansible for deploying on to their private Raspberry Pi server running Ubuntu, using Docker and Docker-Compose.",
  tech: [
    "Python",
    "Django",
    "DRF",
    "Docker",
    "Docker-Compose",
    "Jenkins",
    "Cucumber",
    "Ansible",
    "Raspberry Pi",
    "Linux",
    "Git",
  ],
  links: [{ href: "https://github.com/mrdavidoneill/kithub", label: "GitHub" }],
};

const labelchopper = {
  title: "Amazon PDF converter for thermal printers",
  images: ["/images/labelchopper001.png", "/images/labelchopper002.png"],
  // proposal:
  //   "A client with a large Amazon business wanted a web app that could convert the default A4 shipping labels given by Amazon to a format that could be printed using a thermal label printer.",
  solution:
    "A back-end was built using Python and Flask to accept user registration and log-in; PDF processing on the server; and SocketIO to display file progress.",
  tech: [
    "Python",
    "Flask",
    "Socket.IO",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Linux",
  ],
  links: [
    { href: "https://github.com/mrdavidoneill/labelchopper", label: "GitHub" },
  ],
};

const lawnmanager = {
  title: "Irrigation controller",
  images: ["/images/lawnmanager001.png", "/images/lawnmanager002.png"],
  // proposal:
  //   "A client wanted an irrigation system with autonomous operation, Wi-Fi control, Home Assistant integration, seasonal adjustment, and daily weather adjustment according to how much it had rained.  Two modes were needed: clock mode – to set days and times for lawn watering; and interval mode – to water on intervals, for seed germination.",
  solution:
    "The system was programmed using C++ and an ESP8266 was utilised to interface with an 8-way relay board to power the irrigation solenoid valves.  Platform.IO was used to facilitate debugging and deployment.",
  tech: ["C++", "ESP8266", "Arduino", "PlatformIO"],
  links: [
    { href: "https://github.com/mrdavidoneill/lawnduino", label: "GitHub" },
  ],
};

export const projects = [filmhelper, kithub, labelchopper, lawnmanager];
