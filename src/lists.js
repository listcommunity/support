export default {
  "sorrycc/awesome-javascript": {
    slug: "javascript",
    label: "JavaScript",
    description:
      "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
    logo:
      "https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png",
    color: "#f7df1e",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "vinta/awesome-python": {
    slug: "python",
    label: "Python",
    description: "Python is a dynamically typed programming language.",
    logo: "/logos/python.png",
    favicon: "/favicons/python.png",
    color: "#3572a5",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "h4cc/awesome-elixir": {
    slug: "elixir",
    label: "Elixir",
    description:
      "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
    logo: "https://avatars.githubusercontent.com/elixir-lang",
    color: "#4e2a8e",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "razum2um/awesome-clojure": {
    slug: "clojure",
    label: "Clojure",
    description: "Clojure is a functional, dynamic, general-purpose programming language.",
    logo: "https://avatars.githubusercontent.com/clojure",
    color: "#26324b",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "hantuzun/awesome-clojurescript": {
    slug: "clojurescript",
    label: "ClojureScript",
    description:
      "ClojureScript is a compiler for the Clojure programming language that targets JavaScript.",
    logo: "https://avatars.githubusercontent.com/cljsinfo",
    color: "#26324b",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > hr:first-of-type").style.display = "none";
    },
    mutateTOC() {
      this.querySelector(
        "#toc-a-community-driven-list-of-clojurescript-frameworks-libraries-and-wrappers"
      ).style.display =
        "none";
    },
  },
  "fsprojects/awesome-fsharp": {
    slug: "fsharp",
    label: "F#",
    description:
      "F# is an open source cross-platform functional-first programming language built on the .NET Framework.",
    logo: "https://avatars.githubusercontent.com/fsharp",
    color: "#378bba",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "avelino/awesome-go": {
    slug: "go",
    label: "Go",
    description:
      "Go is a programming language built to resemble a simplified version of the C programming language.",
    logo: "https://avatars.githubusercontent.com/golang",
    color: "#375eab",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
      this.querySelector("#toc-contributing").style.display = "none";
      const selector =
        "#toc-if-you-see-a-package-or-project-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-file-thank-you";
      this.querySelector(selector).style.display = "none";
    },
  },
  "markets/awesome-ruby": {
    slug: "ruby",
    label: "Ruby",
    description:
      "Ruby is a scripting language designed for simplified object-oriented programming.",
    logo: "https://avatars.githubusercontent.com/ruby",
    color: "#cc342d",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
    mutateTOC() {
      const h = this.querySelector("#toc-awesome-ruby");
      h.className = h.className.replace("h3", "h1");
    },
  },
  "matteocrippa/awesome-swift": {
    slug: "swift",
    label: "Swift",
    description:
      "Swift is a modern programming language focused on safety, performance and expressivity.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/swift/swift.png",
    color: "#ef5138",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "uraimo/Awesome-Swift-Playgrounds": {
    slug: "swift-playgrounds",
    label: "Swift Playgrounds",
    description:
      "Swift Playgrounds make learning the Swift programming language interactive and fun.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/swift/swift.png",
    color: "#ef5138",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "isRuslan/awesome-elm": {
    slug: "elm",
    label: "Elm",
    description:
      "Elm is a programming language for declaratively creating web browser-based graphical user interfaces.",
    logo: "https://avatars.githubusercontent.com/elm-lang",
    color: "#60b5cc",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "vramana/awesome-reasonml": {
    slug: "reason",
    label: "Reason",
    description:
      "Reason is a new syntax and toolchain powered by the OCaml language that can be compiled to JavaScript.",
    logo: "https://avatars.githubusercontent.com/reasonml",
    color: "#db4d3f",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "akullpp/awesome-java": {
    slug: "java",
    label: "Java",
    description:
      "Java is an object-oriented programming language used mainly for desktop and mobile applications.",
    logo: "/logos/java.png",
    favicon: "/favicons/java.png",
    color: "#5382a1",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "rizo/awesome-ocaml": {
    slug: "ocaml",
    label: "OCaml",
    description:
      "OCaml is an industrial strength programming language supporting functional, imperative and object-oriented styles.",
    logo: "https://avatars.githubusercontent.com/ocaml",
    color: "#c97928",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "ziadoz/awesome-php": {
    slug: "php",
    label: "PHP",
    description:
      "PHP is a scripting language that works particularly well for server-side web development.",
    logo: "https://avatars.githubusercontent.com/php",
    color: "#4f5d95",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "veelenga/awesome-crystal": {
    slug: "crystal",
    label: "Crystal",
    description: "Crystal is a self-hosted, general purpose programming language.",
    logo: "https://avatars.githubusercontent.com/crystal-lang",
    color: "#222222",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "qinwf/awesome-R": {
    slug: "r",
    label: "R",
    description:
      "R is a free programming language and software environment for statistical computing and graphics.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/r/r.png",
    color: "#198ce7",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "parro-it/awesome-micro-npm-packages": {
    slug: "micro-npm",
    label: "Micro npm Packages",
    description:
      "A curated list of small, focused npm packages. npm is a package manager for JavaScript included with Node.js.",
    logo: "https://avatars.githubusercontent.com/npm",
    color: "#cb3837",
    category: "Programming Languages",
  },
  "dustinspecker/awesome-eslint": {
    slug: "eslint",
    label: "ESLint",
    description:
      "ESLint is an extensible static-analysis tool for JavaScript and related languages that helps catch errors.",
    logo: "https://avatars.githubusercontent.com/eslint",
    color: "#463fd4",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "fffaraz/awesome-cpp": {
    slug: "cpp",
    label: "C and C++",
    description:
      "C++ is a general purpose and object-oriented programming language. It was designed as an extension of the C language.",
    logo: "https://avatars.githubusercontent.com/isocpp",
    color: "#00589c",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "hachiojipm/awesome-perl": {
    slug: "perl",
    label: "Perl",
    description:
      "Perl is a highly capable and feature-rich programming language with over 29 years of development.",
    logo: "https://avatars.githubusercontent.com/Perl",
    color: "#0073a1",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "rust-unofficial/awesome-rust": {
    slug: "rust",
    label: "Rust",
    description:
      "Rust is a systems programming language. It is designed for improved memory safety without sacrificing performance.",
    logo: "https://avatars.githubusercontent.com/rust-lang",
    color: "#428bca",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
      this.querySelectorAll("li img").forEach(h => (h.style.verticalAlign = "-4px"));
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "drobakowski/awesome-erlang": {
    slug: "erlang",
    label: "Erlang",
    description: "Erlang is a general-purpose, concurrent, functional programming language.",
    logo: "/logos/erlang.png",
    favicon: "/favicons/erlang.png",
    color: "#a2003e",
    category: "Programming Languages",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "enaqx/awesome-react": {
    slug: "react",
    label: "React",
    description: "React is an open source JavaScript library used for designing user interfaces.",
    logo: "https://avatars.githubusercontent.com/react-community",
    color: "#61dafb",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
    mutateTOC() {
      this.style.marginLeft = "-16px";
    },
  },
  "Granze/awesome-polymer": {
    slug: "polymer",
    label: "Polymer",
    description:
      "Polymer is an open source JavaScript library for building web applications using Web Components.",
    logo: "https://avatars.githubusercontent.com/Polymer",
    color: "#e8345a",
    category: "Front-End Development",
  },
  "PatrickJS/awesome-angular": {
    slug: "angular",
    label: "Angular",
    description:
      "Angular is an open source JavaScript-based framework for building web applications.",
    logo: "https://avatars.githubusercontent.com/angular",
    color: "#dd0031",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > p:first-of-type").style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-current-angular-version").style.display = "none";
      this.querySelector("#toc-current-browser-support-for-angular").style.display = "none";
      this.querySelector("#toc-awesome-angular--").style.display = "none";
      this.style.marginLeft = "-16px";
    },
  },
  "vuejs/awesome-vue": {
    slug: "vue",
    label: "Vue.js",
    description: "Vue.js is a JavaScript framework for building interactive web applications.",
    logo: "https://avatars.githubusercontent.com/vuejs",
    color: "#4fc08d",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > p:first-of-type").style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-awesome-vuejs-").style.display = "none";
    },
  },
  "webpack-contrib/awesome-webpack": {
    slug: "webpack",
    label: "Webpack",
    description:
      "Webpack is a bundler that takes modules with dependencies and creates static assets.",
    logo: "https://avatars.githubusercontent.com/webpack",
    color: "#2b3a42",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-").style.display = "none";
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "chentsulin/awesome-graphql": {
    slug: "graphql",
    label: "GraphQL & Relay",
    description:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    logo: "/logos/graphql.png",
    favicon: "/favicons/graphql.png",
    color: "#d64292",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "Famolus/awesome-sass": {
    slug: "sass",
    label: "Sass",
    description:
      "Sass is an extension of CSS, adding nested rules, variables, selector inheritance and more.",
    logo: "https://avatars.githubusercontent.com/sass",
    color: "#c6538c",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "unicodeveloper/awesome-nextjs": {
    slug: "next",
    label: "Next.js",
    description: "Next.js is a framework for server-rendered or statically-exported React apps.",
    logo: "https://avatars.githubusercontent.com/zeit",
    color: "#222",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "hyperapp/awesome": {
    slug: "hyperapp",
    label: "Hyperapp",
    description: "Hyperapp is a 1 KB JavaScript library for building frontend applications.",
    logo: "https://avatars.githubusercontent.com/hyperapp",
    color: "#00bbff",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "Urigo/awesome-meteor": {
    slug: "meteor",
    label: "Meteor",
    description:
      "Meteor is an open source platform for developing web, mobile and desktop applications.",
    logo: "/logos/meteor.png",
    favicon: "/favicons/meteor.png",
    color: "#de4f4f",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "wbkd/awesome-d3": {
    slug: "d3js",
    label: "D3.js",
    description:
      "D3.js is a JavaScript library for manipulating documents based on data. D3 brings data to life using HTML, SVG and CSS.",
    logo: "https://avatars.githubusercontent.com/d3",
    color: "#f79045",
    category: "Front-End Development",
    mutateTOC() {
      this.querySelector("#toc-third-party").style.display = "none";
      this.querySelector("#toc-third-party-1").style.display = "none";
    },
  },
  "addyosmani/es6-tools": {
    slug: "es6-tools",
    label: "ECMAScript 6 Tools",
    description:
      "An aggregation of tooling for using ES6 today. EcmaScript 6 is the sixth release of the ECMAScript language.",
    logo:
      "https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png",
    color: "#f7df1e",
    category: "Front-End Development",
  },
  "babel/awesome-babel": {
    slug: "babel",
    label: "Babel",
    description: "Babel is a compiler for writing next generation JavaScript, today.",
    logo: "https://avatars.githubusercontent.com/babel",
    color: "#f5da55",
    category: "Front-End Development",
  },
  "mateusortiz/webcomponents-the-right-way": {
    slug: "webcomponents",
    label: "Web Components",
    description:
      "Web Components are a set of features that allow for the creation of reusable components in web applications.",
    logo: "https://avatars.githubusercontent.com/webcomponents",
    color: "#e6e6e6",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "sotayamashita/awesome-css": {
    slug: "css",
    label: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a language used most often to style and improve upon the appearance of views.",
    logo: "https://avatars.githubusercontent.com/css",
    color: "#256bdc",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "afonsopacifer/awesome-flexbox": {
    slug: "flexbox",
    label: "Flexbox",
    description:
      "The CSS Flexible Box Module is a layout model and method that offers powerful space distribution and alignment capabilities.",
    logo: "https://avatars.githubusercontent.com/css",
    color: "#256bdc",
    category: "Front-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "ChromeDevTools/awesome-chrome-devtools": {
    slug: "chrome-devtools",
    label: "Chrome DevTools",
    description:
      "Chrome DevTools is a set of authoring, debugging, and profiling tools built into Google Chrome.",
    logo: "https://avatars.githubusercontent.com/ChromeDevTools",
    color: "#307eff",
    category: "Front-End Development",
  },
  "shahraizali/awesome-django": {
    slug: "django",
    label: "Django",
    description:
      "Django is a web application framework for Python. It is meant to prioritize reusability and rapid development.",
    logo: "https://avatars.githubusercontent.com/django",
    color: "#0c4b33",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "humiaozuzu/awesome-flask": {
    slug: "flask",
    label: "Flask",
    description:
      "Flask is a micro web framework written in Python and based on the Werkzeug toolkit and Jinja2 template engine.",
    logo: "https://raw.githubusercontent.com/pallets/flask/master/docs/_static/flask-icon.png",
    color: "#ffffff",
    category: "Back-End Development",
  },
  "ekremkaraca/awesome-rails": {
    slug: "rails",
    label: "Rails",
    description:
      "Ruby on Rails is a web application framework written in Ruby. It is meant to help simplify the building of complex websites.",
    logo: "https://avatars.githubusercontent.com/rails",
    color: "#cc342d",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "hothero/awesome-rails-gem": {
    slug: "rails-gems",
    label: "Rails Gems",
    description:
      "A collection of Ruby Gems for Rails development. The goal is to help developers build awesome applications.",
    logo: "https://avatars.githubusercontent.com/rails",
    color: "#cc342d",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "chiraggude/awesome-laravel": {
    slug: "laravel",
    label: "Laravel",
    description:
      "Laravel is a popular PHP framework, used for the development of MVC web applications.",
    logo: "https://avatars.githubusercontent.com/laravel",
    color: "#e74430",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
      this.querySelectorAll(".toc-h5, .toc-h4").forEach(
        h => (h.className = h.className.replace(/h[54]/, "h3"))
      );
    },
  },
  "veggiemonk/awesome-docker": {
    slug: "docker",
    label: "Docker",
    description: "Docker is a platform built for developers to build and run applications.",
    logo: "https://avatars.githubusercontent.com/docker",
    color: "#066da5",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
      const selector =
        "#toc-if-you-see-a-link-here-that-is-not-any-longer-a-good-fit-you-can-fix-it-by-submitting-a-pull-request-to-improve-this-file-thank-you";
      this.querySelector(selector).style.display = "none";
    },
  },
  "ramitsurana/awesome-kubernetes": {
    slug: "kubernetes",
    label: "Kubernetes",
    description:
      "Kubernetes is a system for automating deployment, scaling and management of containerized applications.",
    logo: "https://avatars.githubusercontent.com/kubernetes",
    color: "#2754e0",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > hr:first-of-type").style.display = "none";
      this.querySelector("#user-content-menu").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-menu").style.display = "none";
    },
  },
  "jdauphant/awesome-ansible": {
    slug: "ansible",
    label: "Ansible",
    description:
      "Ansible is a powerful automation engine used for configuration management, application deployment and task automation.",
    logo: "/logos/ansible.png",
    favicon: "/favicons/ansible.png",
    color: "#333333",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("strong:first-of-type").style.display = "none";
    },
  },
  "anaibol/awesome-serverless": {
    slug: "serverless",
    label: "Serverless",
    description:
      "Serverless refers to apps that depend on third-party services (backend as a service) or custom code (functions as a service).",
    category: "Back-End Development",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
      const selector =
        "#toc-a-curated-list-of-awesome-services-solutions-and-resources-for-serverless--nobackend-applications";
      this.querySelector(selector).style.display = "none";
    },
  },
  "JStumpp/awesome-android": {
    slug: "android",
    label: "Android",
    description: "Android is an operating system built by Google designed for mobile applications.",
    logo: "https://avatars.githubusercontent.com/android",
    color: "#6ab344",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "vsouza/awesome-ios": {
    slug: "ios",
    label: "iOS",
    description: "iOS is the operating system for all of Apple’s mobile products.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/ios/ios.png",
    color: "#ef5138",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-content").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-content").style.display = "none";
    },
  },
  "jondot/awesome-react-native": {
    slug: "react-native",
    label: "React Native",
    description: "React Native is a JavaScript mobile framework developed by Facebook.",
    logo: "https://avatars.githubusercontent.com/react-community",
    color: "#61dafb",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "sindresorhus/awesome-electron": {
    slug: "electron",
    label: "Electron",
    description:
      "Electron is a framework for building cross-platform desktop applications with web technology.",
    logo: "https://avatars.githubusercontent.com/electron",
    color: "#2f3241",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
      this.querySelectorAll(".toc-h6").forEach(
        h => (h.className = h.className.replace(/h6/, "h4"))
      );
    },
  },
  "sindresorhus/awesome-nodejs": {
    slug: "nodejs",
    label: "Node.js",
    description: "Node.js is a tool for executing JavaScript in a variety of environments.",
    logo: "https://avatars.githubusercontent.com/nodejs",
    color: "#43853d",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "iCHAIT/awesome-macOS": {
    slug: "macos",
    label: "macOS",
    description:
      "macOS is the operating system for Mac computers. It was designed by Apple and is meant specifically for their hardware.",
    logo: "https://avatars.githubusercontent.com/apple",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "Awesome-Windows/Awesome": {
    slug: "windows",
    label: "Windows",
    description: "Windows is Microsoft's GUI-based operating system.",
    logo: "https://avatars.githubusercontent.com/Microsoft",
    color: "#e6e6e6",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > h1:nth-of-type(2)").style.display = "none";
    },
  },
  "aleksandar-todorovic/awesome-linux": {
    slug: "linux",
    label: "Linux",
    description:
      "Linux is an open source operating system modeled after UNIX. Widely used, it is known for its efficiency and reliability.",
    logo: "/logos/linux.png",
    favicon: "/favicons/linux.png",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-content").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-content").style.display = "none";
    },
  },
  "benoitjadinon/awesome-xamarin": {
    slug: "xamarin",
    label: "Xamarin",
    description: "Xamarin is a platform for developing iOS and Android applications.",
    logo: "https://avatars.githubusercontent.com/xamarin",
    color: "#2c3e50",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "deephacks/awesome-jvm": {
    slug: "jvm",
    label: "JVM",
    description:
      "A curated list of low-level, performance and non-framework related resources for the Java virtual machine.",
    logo: "/logos/java.png",
    favicon: "/favicons/java.png",
    color: "#5382a1",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "donnemartin/awesome-aws": {
    slug: "aws",
    label: "AWS",
    description:
      "Amazon Web Services provides on-demand cloud computing platforms on a subscription basis.",
    logo: "https://avatars.githubusercontent.com/aws",
    color: "#ffa93f",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-index").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-index").style.display = "none";
      this.querySelector("#toc-awesome-aws-python-module").style.display = "none";
    },
  },
  "ianstormtaylor/awesome-heroku": {
    slug: "heroku",
    label: "Heroku",
    description:
      "Heroku is a cloud platform as a service supporting several programming languages that is used as a deployment model.",
    logo: "https://avatars.githubusercontent.com/heroku",
    color: "#624eaf",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "ipfs/awesome-ipfs": {
    slug: "ipfs",
    label: "IPFS",
    description:
      "IPFS is a peer-to-peer protocol for content-addressed sharing of data via a distributed file system.",
    logo: "/logos/ipfs.png",
    favicon: "/favicons/ipfs.png",
    color: "#6acad1",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "thibmaek/awesome-raspberry-pi": {
    slug: "raspberry-pi",
    label: "Raspberry Pi",
    description:
      "A Raspberry Pi is a popular piece of hardware called a micro-controller. Its use ranges from robotics to home automation.",
    logo: "https://avatars.githubusercontent.com/raspberrypi",
    color: "#d6264f",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "Lembed/Awesome-arduino": {
    slug: "arduino",
    label: "Arduino",
    description: "Arduino is an open source hardware and software company and maker community.",
    logo: "https://avatars.githubusercontent.com/arduino",
    color: "#00979d",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "JesseTG/awesome-qt": {
    slug: "qt",
    label: "Qt",
    description:
      "Qt is a powerful cross-platform application development framework, for use primarily (but not exclusively) in C++.",
    logo: "https://avatars.githubusercontent.com/qt",
    color: "#41cd52",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "Kazhnuz/awesome-gnome": {
    slug: "gnome",
    label: "GNOME",
    description:
      "GNOME is a desktop environment composed of free and open-source software that runs on Linux and most BSD derivatives.",
    logo: "https://avatars.githubusercontent.com/GNOME",
    color: "#4a86cf",
    category: "Platforms",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "mehcode/awesome-atom": {
    slug: "atom",
    label: "Atom",
    description:
      "Atom is a text editor developed by GitHub. It is designed to be approachable out of the box yet highly customizable.",
    logo: "https://avatars.githubusercontent.com/atom",
    color: "#5fb57d",
    category: "Editors",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-content").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-content").style.display = "none";
    },
  },
  "dhamaniasad/awesome-postgres": {
    slug: "postgresql",
    label: "PostgreSQL",
    description:
      "PostgreSQL is an open source database management system that is object-relational.",
    logo: "https://avatars.githubusercontent.com/postgres",
    color: "#336791",
    category: "Databases",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "ramnes/awesome-mongodb": {
    slug: "mongodb",
    label: "MongoDB",
    description:
      "MongoDB is a NoSQL cross-platform database. It is designed for scalability and performance.",
    logo: "https://avatars.githubusercontent.com/mongodb",
    color: "#218e38",
    category: "Databases",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "emacs-tw/awesome-emacs": {
    slug: "emacs",
    label: "Emacs",
    description:
      "Emacs is an extensible, customizable, free text editor and computing environment.",
    logo: "https://avatars.githubusercontent.com/emacs",
    color: "#7f5ab6",
    category: "Editors",
    mutateContent() {
      this.querySelector(":scope > blockquote:first-of-type").style.display = "none";
    },
  },
  "viatsko/awesome-vscode": {
    slug: "vscode",
    label: "VS Code",
    description:
      "VS Code is a customizable code editor. It includes support for Git, intelligent code completion, code refactoring and more.",
    logo: "/logos/vscode.png",
    favicon: "/favicons/vscode.png",
    color: "#0077c8",
    category: "Editors",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "dreikanter/sublime-bookmarks": {
    slug: "sublime-text",
    label: "Sublime Text",
    description: "Sublime Text is a customizable proprietary cross-platform source code editor.",
    logo: "https://avatars.githubusercontent.com/SublimeText",
    color: "#ff8100",
    category: "Editors",
  },
  "akrawchyk/awesome-vim": {
    slug: "vim",
    label: "Vim",
    description:
      "Vim is a console-run text editor program. Bram Moolenaar is credited with the development, which began in 1988.",
    logo: "https://avatars.githubusercontent.com/vim",
    color: "#199f4b",
    category: "Editors",
    mutateContent() {
      this.querySelector(":scope > ol:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "awesome-lists/awesome-bash": {
    slug: "bash",
    label: "Bash",
    description: "Bash is a shell and command language interpreter for the GNU operating system.",
    logo: "/logos/bash.png",
    favicon: "/favicons/bash.png",
    color: "#2f3a43",
    category: "Development Environment",
  },
  "unixorn/awesome-zsh-plugins": {
    slug: "zsh",
    label: "Zsh",
    description:
      "Zsh is a shell designed for interactive use, although it is also a powerful scripting language.",
    logo: "https://avatars.githubusercontent.com/zsh-users",
    color: "#000000",
    category: "Development Environment",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > p:nth-of-type(4)").style.display = "none";
    },
  },
  "alebcay/awesome-shell": {
    slug: "shell",
    label: "Shell",
    description:
      "A shell is a text-based terminal, used for manipulating programs and files. Shell scripts typically manage program execution.",
    color: "#000000",
    category: "Development Environment",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "prakhar1989/awesome-courses": {
    slug: "university-courses",
    label: "University Courses",
    description:
      "Assignments, lectures, notes, readings and examinations available online for free from Computer Science courses.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "sobolevn/awesome-cryptography": {
    slug: "cryptography",
    label: "Cryptography",
    description:
      "Cryptography is the practice and study of techniques for secure communication in the presence of third parties.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "jbhuang0604/awesome-computer-vision": {
    slug: "computer-vision",
    label: "Computer Vision",
    description:
      "Computer vision deals with the extraction, analysis and understanding of information from images and videos.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "ChristosChristofidis/awesome-deep-learning": {
    slug: "deep-learning",
    label: "Deep Learning",
    description:
      "Deep Learning is an AI function and subset of machine learning, used for processing large amounts of complex data.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "josephmisiti/awesome-machine-learning": {
    slug: "machine-learning",
    label: "Machine Learning",
    description:
      "Machine learning is a way of modeling and interpreting data that allows a piece of software to respond intelligently.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(3)").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "owainlewis/awesome-artificial-intelligence": {
    slug: "artificial-intelligence",
    label: "Artificial Intelligence",
    description:
      "Artificial Intelligence is the simulation of human intelligence by machines, especially computer systems.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ol:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "mre/awesome-static-analysis": {
    slug: "static-analysis",
    label: "Static Analysis",
    description:
      "Static program analysis is the analysis of computer software that is performed without actually executing programs.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "bulutyazilim/awesome-datascience": {
    slug: "data-science",
    label: "Data Science",
    description:
      "Data Science applies scientific methods, processes, and systems to extract knowledge and insights from data.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "tayllan/awesome-algorithms": {
    slug: "algorithms",
    label: "Algorithms",
    description: "Algorithms are self-contained sequences that carry out a variety of tasks.",
    category: "Computer Science",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
    },
  },
  "monostable/awesome-electronics": {
    slug: "electronics",
    label: "Electronics",
    description:
      "Electronic engineering is the practice of understanding, designing and building electronic circuits.",
    category: "Hardware",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "phodal/awesome-iot": {
    slug: "iot",
    label: "IoT",
    description:
      "IoT refers to the network of physical devices embedded in everyday objects, enabling them to send and receive data.",
    category: "Hardware",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(2)").style.display = "none";
      this.querySelector("#user-content-toc").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-toc").style.display = "none";
    },
  },
  "awesomedata/awesome-public-datasets": {
    slug: "public-datasets",
    label: "Public Datasets",
    description:
      "A topic-centric list of high-quality open datasets in public domains. By everyone, for everyone!",
    category: "APIs and Datasets",
    mutateContent() {
      this.querySelector("#user-content-table-of-contents").style.display = "none";
    },
  },
  "abhishekbanthia/Public-APIs": {
    slug: "public-apis-2",
    label: "Public APIs",
    description:
      "An attempt to categorize different APIs scoured from the web which make their resources available for consumption.",
    category: "APIs and Datasets",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "toddmotto/public-apis": {
    slug: "public-apis",
    label: "Public APIs",
    description: "A collective list of free and public APIs for use in web development.",
    category: "APIs and Datasets",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-index").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-index").style.display = "none";
    },
  },
  "fasouto/awesome-dataviz": {
    slug: "data-visualization",
    label: "Data Visualization",
    description:
      "Data Visualization is the visual depiction of data through the use of graphs, plots, and informational graphics.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "mfornos/awesome-microservices": {
    slug: "microservices",
    label: "Microservices",
    description:
      "Microservices is an architecture that structures an application as a collection of loosely coupled services.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("strong:first-of-type").style.display = "none";
    },
  },
  "Kickball/awesome-selfhosted": {
    slug: "self-hosted",
    label: "Self-Hosted",
    description:
      "Self-hosting is the process of locally hosting and managing applications instead of renting from SaaS providers.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > hr:first-of-type").style.display = "none";
    },
  },
  "folkswhocode/awesome-diversity": {
    slug: "diversity",
    label: "Diversity",
    description:
      "A curated list of amazingly awesome articles, websites and resources about diversity in technology.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "cristianoliveira/awesome4girls": {
    slug: "for-girls",
    label: "For Girls",
    description:
      "A curated list of inclusive events, projects and initiatives for women in the tech area.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector(":scope > hr:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
    },
  },
  "mislavcimpersak/awesome-dev-fun": {
    slug: "dev-fun",
    label: "Dev Fun",
    description:
      "A list of libraries, packages and languages that have no real purpose but to make a developer chuckle.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "GetStoryline/awesome-bots": {
    slug: "bots",
    label: "Bots",
    description:
      "Tools, newsletters and other resources about bots, applications that runs automated tasks over the internet.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-table-of-contents").style.display = "none";
      const selector =
        "#toc-we-also-run-one-of-the-most-active-facebook-communities-900-members-and-telegram-channel-1500-members-about-bots";
      this.querySelector(selector).style.display = "none";
    },
  },
  "coinpride/CryptoList": {
    slug: "cryptocurrency",
    label: "Cryptocurrency",
    description:
      "A cryptocurrency is a digital asset designed to work as a medium of exchange that uses cryptography.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:first-of-type").style.display = "none";
      this.querySelector("#user-content-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc-contents").style.display = "none";
    },
  },
  "LisaDziuba/Marketing-for-Engineers": {
    slug: "marketing",
    label: "Marketing",
    description: "Hand-picked collection of resources for solving practical marketing tasks.",
    category: "Miscellaneous",
    mutateContent() {
      this.querySelector(":scope > ul:nth-of-type(3)").style.display = "none";
      this.querySelector("#user-content--table-of-contents").parentNode.style.display = "none";
    },
    mutateTOC() {
      this.querySelector("#toc--table-of-contents").style.display = "none";
    },
  },
};
