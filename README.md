<div align="center">

  <h2><b>Blog API</b></h2>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠️ Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Blog API <a name="about-project"></a>

**Blog API** is an application built for demonstration that allows users to browse blogs comment on them. this application is built using node js with express server and mongoDB.

## 🛠️ Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Node js</summary>
  <ul>
    <li><a href="https://nodejs.org/en">Node JS</a></li>
  </ul>
</details>

<details>
  <summary>Express</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express JS</a></li>
  </ul>
</details>

<details>
  <summary>MongoDB</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">Mongo DB</a></li>
  </ul>
</details>

### Key Features

- **display blogs**
- **View and comment on blogs.**
- **manage users**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
## 💻 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- node js
- mongodb server
- any code editor but mostly use Vs Code and Sublime Text.

### Setup

Clone this repository to your desired folder:

```sh
  cd blog-api

  git clone https://github.com/habitoz/blog.git

```

### Install

Install this project with:

```sh
 npm install
```

### Usage

To run the project check the configuration files in config folder , execute the following command:

```sh
  npm run start
```

use the following credentials that are seeded to the app.

- admin email ==> admin@retink.com password ==> 123456
- author email ==> author@retink.com password ==> 123456

### End points

- the system has 3 users author,admin and members. to create a blog you have to use a user with author role and to manage users you have to use a user with admin role.
- Authorization Mechanism => Bearer token

- User
  - Get All Users
    - method => Get
    - url => /v1/api/user
  - Signin
    - method => POST
    - url => /v1/api/user/signin
    - body => email,password
  - Add User
    - method => POST
    - url => /v1/api/user/addUser
    - body => fullname,email,role,password
  - Signup
    - method => POST
    - url => /v1/api/user/signup
    - body => fullname,email,role,password
  - Delete User
    - method => DELETE
    - url => /v1/api/user/:userId
    - info => delet user
- Blog
  - Add Blog
    - method => POST
    - url => /v1/api/blog
    - body => title,subTitle,content
  - Get All Blogs
    - method => GET
    - url => /v1/api/blog
    - info => get all blogs
  - Get Active Blogs
    - method => GET
    - url => /v1/api/blog/active
    - info => get active blogs
  - View Blog
    - method => GET
    - url => /v1/api/blog/view/:blogId
    - info => read blog
  - Like Blog
    - method => PUT
    - url => /v1/api/blog/like/:blogId
    - info => like blog
  - Update Blog
    - method => PUT
    - url => /v1/api/blog/:blogId
    - body => title,subTitle,content
    - info => update blog
  - Change Status of Blog
    - method => PUT
    - url => /v1/api/blog/status/:blogId
    - body => status
    - info => update status of a blog into Inactive or Active
  - Delete Blog
    - method => DELETE
    - url => /v1/api/blog/:blogId
    - info => delete blog
  - Signup
    - method => POST
    - url => /v1/api/user/signup
    - body => fullname,email,role,password
- Comment
  - Add Comment
    - method => POST
    - url => /v1/api/comment/:blogId
    - body => comment, parent(if it is replay)
    - info => add blog comment
  - Get ALL Comments
    - method => GET
    - url => /v1/api/comment/all/:blogId
    - info => get all comments of a blog including the inactive ones
  - Get Active Comments
    - method => GET
    - url => /v1/api/comment/active/:blogId
    - info => get comments of a blog only the inactive ones
  - Update Comment
    - method => PUT
    - url => /v1/api/comment/:commentId
    - body => comment
    - info => update blog comment
  - Change Comment Status
    - method => PUT
    - url => /v1/api/comment/status/:commentId
    - body => status
    - info => update status of a comment into Inactive or Active
  - Delete Comment
    - method => DELETE
    - url => /v1/api/comment/:commentId
    - info => delete a comment

### Run tests

To run tests, run the following command:

```sh
  npm run test
```

### Run Linter Tests

To run linter tests, run the following command:

```sh
  npx eslint .
```

## 👥 Authors <a name="authors"></a>

👤 **Haben Mehari**

- GitHub: [@habitoz](https://github.com/habitoz)
- Twitter: [@habitoz](https://twitter.com/habitoz)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/habitoz/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- _Adding Gallery Module_
- _Improve Algorithm used for Like and View_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project give a star

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank retink for giving me this opportunity

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
