[![csivit][csivitu-shield]][csivitu-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/csivitu/leaderboard">
    <img src="https://csivit.com/images/favicon.png" alt="Logo" width="80">
  </a>

  <h3 align="center">leaderboard</h3>

  <p align="center">
    A library to determine and maintain leaderboard ranking on the basis of user-defined sorting parameters during real-time competitions. 
    <br />
    <a href="https://github.com/csivitu/leaderboard"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/csivitu/leaderboard">View Demo</a>
    ·
    <a href="https://github.com/csivitu/leaderboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/csivitu/leaderboard/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

**leaderboard** is a Node.js library built for the purpose of dynamically computing and maintaining leaderboard ranking on the basis of user-defined sorting parameters, that can be used for real-time competitive events.
<br />

**leaderboard** allows you to define the hierarchy of the parameters, along with the order (ascending/descending) of each parameter, against which you want to sort the leaderboard and pass these parameter values, as well as other information to be stored in the leaderboard, to it.
<br />

Every new submission data is passed into a function which treats this information as a job and adds it to a queue so that it can be processed sequentially. 

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Node](https://nodejs.org/en/)
* [Bull](https://optimalbits.github.io/bull/)
* [Redis](https://redis.io/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [npm](https://www.npmjs.com/)
- [redis](https://redis.io/)

### Installation
 
You can install **leaderboard** using `npm`. You also need to be running a `redis` instance of your own.


<!-- USAGE EXAMPLES -->

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/csivitu/leaderboard/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[csivitu-shield]: https://img.shields.io/badge/csivitu-csivitu-blue
[csivitu-url]: https://csivit.com
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/csivitu/repo/issues
