<p align="center">
  <a href="https://list.community/">
    <img alt="Octomonkey welcomes you!" src="public/octomonkey.svg" width="190" height="190">
  </a>
</p>

<p align="center">
  List.community is an easy way to browse curated lists on GitHub.
</p>

---

### Found a bug or have feedback?

Please open an [issue here](https://github.com/listcommunity/support).
Feel free to submit pull requests too.

### How do I add a list?

Please add your list [to this file](https://github.com/listcommunity/support/blob/master/src/lists.js)
and submit a pull request. Please follow this format and indentation:

```js
"sorrycc/awesome-javascript": { // The GitHub user and repo names
  slug: "javascript", // A slug used for short URLs (like https://list.community/javascript)
  label: "JavaScript", // The label displayed in the homepage and in the page title
  shortDescription: // Description shown in the homepage
    "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
  logo: "https://avatars.githubusercontent.com/tc39", // (optional) Ideally a GitHub avatar so that we can pass a `size` param
  color: "#f7df1e", // (optional) Color used in the topbar
  category: "Programming Languages", // Ideally, one of the categories from https://github.com/sindresorhus/awesome
}
```

### Contributors

This project is only possible thanks to the [Awesome List](https://github.com/sindresorhus/awesome)
and [GitHub Explore](https://github.com/github/explore) projects and thanks to all the people who maintain
these lists and contribute to them.
