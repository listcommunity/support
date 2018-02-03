<p align="center">
  <a href="https://list.community/">
    <img alt="Octomonkey says thanks!" src="../public/octomonkey.svg" width="256" height="256">
  </a>
</p>

<p align="center">
  Thank you for taking the time to contribute!
</p>

## How do I add a list?

Please add your list [to this file](../src/lists.js) and submit a pull request. Here's an example:

```js
"sorrycc/awesome-javascript": {
  slug: "javascript",
  label: "JavaScript",
  description:
    "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
  logo: "https://avatars.githubusercontent.com/tc39",
  color: "#f7df1e",
  category: "Programming Languages",
},
```

The following is an explanation of the required fields:

* **owner/name**: The object key is the GitHub user and repo names of the list.
* **slug**: Used for short URLs. For eg the slug `javascript` will generate this route: https://list.community/javascript.
* **label**: Short title. Displayed in the homepage and in the page title.
* **description**: Short description. Displayed in the homepage. Preferably less than 140 characters long.
* **category**: Preferably one of the existing categories or a new one from https://github.com/sindresorhus/awesome.

The following fields are optional:

* **logo**: URL to an image. Preferably a GitHub avatar such as "https://avatars.githubusercontent.com/username" so that we can pass a `size` param. If not available, it can be a file from the GitHub Explore project, such as "https://raw.githubusercontent.com/github/explore/master/topics/ios/ios.png". It can also be a local path to a 128x128 png file with transparent background inside the `/public/logos` folder.
* **favicon**: Local path to a 32x32 png file with transparent background inside the `/public/favicons` folder.
* **color**: 6 digit hexadecimal color code for the topbar that reflects the topic's brand. Defaults to `#ffffff`.
* **mutateContent**: Allows to manipulate the rendered content, such as hiding a table of contents.
* **mutateTOC**: Allows to manipulate the rendered table of contents in the sidebar, such as hiding an item.

## How do I provide feedback, report a bug or make a feature request?

Please open an [issue here](https://github.com/listcommunity/support/issues).
Feel free to submit pull requests too.
