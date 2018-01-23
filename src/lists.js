import { hide } from "./helpers";

export default {
  "sorrycc/awesome-javascript": {
    slug: "javascript",
    label: "JavaScript",
    shortDescription:
      "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
    logo: "https://avatars.githubusercontent.com/tc39",
    color: "#f7df1e",
    category: "Programming Languages",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "vinta/awesome-python": {
    slug: "python",
    label: "Python",
    shortDescription: "Python is a dynamically typed programming language.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/python/python.png",
    color: "#3572a5",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "h4cc/awesome-elixir": {
    slug: "elixir",
    label: "Elixir",
    shortDescription:
      "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
    logo: "https://avatars.githubusercontent.com/elixir-lang",
    color: "#4e2a8e",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "razum2um/awesome-clojure": {
    slug: "clojure",
    label: "Clojure",
    shortDescription:
      "Clojure is a functional, dynamic, general-purpose programming language.",
    logo: "https://avatars.githubusercontent.com/clojure",
    color: "#26324b",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "avelino/awesome-go": {
    slug: "go",
    label: "Go",
    shortDescription:
      "Go is a programming language built to resemble a simplified version of the C programming language.",
    logo: "https://avatars.githubusercontent.com/golang",
    color: "#375eab",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
      hide("#toc-contributing");
      hide(
        "#toc-if-you-see-a-package-or-project-here-that-is-no-longer-maintained-or-is-not-a-good-fit-please-submit-a-pull-request-to-improve-this-file-thank-you"
      );
    },
  },
  "markets/awesome-ruby": {
    slug: "ruby",
    label: "Ruby",
    shortDescription:
      "Ruby is a scripting language designed for simplified object-oriented programming.",
    logo: "https://avatars.githubusercontent.com/ruby",
    color: "#cc342d",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      const h = document.getElementById("toc-awesome-ruby");
      if (h != null) h.className = h.className.replace("h3", "h1");
    },
  },
  "matteocrippa/awesome-swift": {
    slug: "swift",
    label: "Swift",
    shortDescription:
      "Swift is a modern programming language focused on safety, performance and expressivity.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/swift/swift.png",
    color: "#ef5138",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "uraimo/Awesome-Swift-Playgrounds": {
    slug: "swift-playgrounds",
    label: "Swift Playgrounds",
    shortDescription:
      "Swift Playgrounds make learning the Swift programming language interactive and fun.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/swift/swift.png",
    color: "#ef5138",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "isRuslan/awesome-elm": {
    slug: "elm",
    label: "Elm",
    shortDescription:
      "Elm is a programming language for declaratively creating web browser-based graphical user interfaces.",
    logo: "https://avatars.githubusercontent.com/elm-lang",
    color: "#60b5cc",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "akullpp/awesome-java": {
    slug: "java",
    label: "Java",
    shortDescription:
      "Java is an object-oriented programming language used mainly for desktop and mobile applications.",
    logo: "/logos/java.png",
    favicon: "/favicons/java.png",
    color: "#5382a1",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "rizo/awesome-ocaml": {
    slug: "ocaml",
    label: "OCaml",
    shortDescription:
      "OCaml is an industrial strength programming language supporting functional, imperative and object-oriented styles.",
    logo: "https://avatars.githubusercontent.com/ocaml",
    color: "#c97928",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "ziadoz/awesome-php": {
    slug: "php",
    label: "PHP",
    shortDescription:
      "PHP is a scripting language that works particularly well for server-side web development.",
    logo: "https://avatars.githubusercontent.com/php",
    color: "#4f5d95",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "veelenga/awesome-crystal": {
    slug: "crystal",
    label: "Crystal",
    shortDescription: "Crystal is a self-hosted, general purpose programming language.",
    logo: "https://avatars.githubusercontent.com/crystal-lang",
    color: "#222222",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "qinwf/awesome-R": {
    slug: "r",
    label: "R",
    shortDescription:
      "R is a free programming language and software environment for statistical computing and graphics.",
    logo: "https://raw.githubusercontent.com/github/explore/master/topics/r/r.png",
    color: "#198ce7",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "parro-it/awesome-micro-npm-packages": {
    slug: "micro-npm",
    label: "Micro npm Packages",
    shortDescription:
      "A curated list of small, focused npm packages. npm is a package manager for JavaScript included with Node.js.",
    logo: "https://avatars.githubusercontent.com/npm",
    color: "#cb3837",
    category: "Programming Languages",
  },
  "dustinspecker/awesome-eslint": {
    slug: "eslint",
    label: "ESLint",
    shortDescription:
      "ESLint is an extensible static-analysis tool for JavaScript and related languages that helps catch errors.",
    logo: "https://avatars.githubusercontent.com/eslint",
    color: "#463fd4",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "fffaraz/awesome-cpp": {
    slug: "cpp",
    label: "C and C++",
    shortDescription:
      "C++ is a general purpose and object-oriented programming language. It was designed as an extension of the C language.",
    logo: "https://avatars.githubusercontent.com/isocpp",
    color: "#00589c",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "hachiojipm/awesome-perl": {
    slug: "perl",
    label: "Perl",
    shortDescription:
      "Perl is a highly capable and feature-rich programming language with over 29 years of development.",
    logo: "https://avatars.githubusercontent.com/Perl",
    color: "#0073a1",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "rust-unofficial/awesome-rust": {
    slug: "rust",
    label: "Rust",
    shortDescription:
      "Rust is a systems programming language. It is designed for improved memory safety without sacrificing performance.",
    logo: "https://avatars.githubusercontent.com/rust-lang",
    color: "#428bca",
    category: "Programming Languages",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
      document.querySelectorAll("li img").forEach(h => (h.style.verticalAlign = "-4px"));
    },
  },
  "enaqx/awesome-react": {
    slug: "react",
    label: "React",
    shortDescription:
      "React is an open source JavaScript library used for designing user interfaces.",
    logo: "https://avatars.githubusercontent.com/react-community",
    color: "#61dafb",
    category: "Front-End Development",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      const h = document.getElementsByClassName("toc")[0];
      if (h != null) h.style.marginLeft = "-32px";
    },
  },
  "Granze/awesome-polymer": {
    slug: "polymer",
    label: "Polymer",
    shortDescription:
      "Polymer is an open source JavaScript library for building web applications using Web Components.",
    logo: "https://avatars.githubusercontent.com/Polymer",
    color: "#e8345a",
    category: "Front-End Development",
  },
  "gdi2290/awesome-angular": {
    slug: "angular",
    label: "Angular",
    shortDescription:
      "Angular is an open source JavaScript-based framework for building web applications.",
    logo: "https://avatars.githubusercontent.com/angular",
    color: "#dd0031",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > p:first-of-type");
      hide("#toc-current-angular-version");
      hide("#toc-current-browser-support-for-angular");
      hide("#toc-awesome-angular--");
      const h = document.getElementsByClassName("toc")[0];
      if (h != null) h.style.marginLeft = "-16px";
    },
  },
  "vuejs/awesome-vue": {
    slug: "vue",
    label: "Vue.js",
    shortDescription: "Vue.js is a JavaScript framework for building interactive web applications.",
    logo: "https://avatars.githubusercontent.com/vuejs",
    color: "#4fc08d",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > p:first-of-type");
      hide("#toc-awesome-vuejs-");
    },
  },
  "webpack-contrib/awesome-webpack": {
    slug: "webpack",
    label: "Webpack",
    shortDescription:
      "Webpack is a bundler that takes modules with dependencies and creates static assets.",
    logo: "https://avatars.githubusercontent.com/webpack",
    color: "#2b3a42",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "chentsulin/awesome-graphql": {
    slug: "graphql",
    label: "GraphQL & Relay",
    shortDescription:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    logo: "/logos/graphql.svg",
    favicon: "/favicons/graphql.png",
    color: "#d64292",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "Famolus/awesome-sass": {
    slug: "sass",
    label: "Sass",
    shortDescription:
      "Sass is an extension of CSS, adding nested rules, variables, selector inheritance and more.",
    logo: "https://avatars.githubusercontent.com/sass",
    color: "#c6538c",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "unicodeveloper/awesome-nextjs": {
    slug: "next",
    label: "Next.js",
    shortDescription:
      "Next.js is a framework for server-rendered or statically-exported React apps.",
    logo: "https://avatars.githubusercontent.com/zeit",
    color: "#222",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "hyperapp/awesome": {
    slug: "hyperapp",
    label: "Hyperapp",
    shortDescription: "Hyperapp is a 1 KB JavaScript library for building frontend applications.",
    logo: "https://avatars.githubusercontent.com/hyperapp",
    color: "#00bbff",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "Urigo/awesome-meteor": {
    slug: "meteor",
    label: "Meteor",
    shortDescription:
      "Meteor is an open source platform for developing web, mobile and desktop applications.",
    logo: "/logos/meteor.png",
    favicon: "/favicons/meteor.png",
    color: "#de4f4f",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "wbkd/awesome-d3": {
    slug: "d3js",
    label: "D3.js",
    shortDescription:
      "D3.js is a JavaScript library for manipulating documents based on data. D3 brings data to life using HTML, SVG and CSS.",
    logo: "https://avatars.githubusercontent.com/d3",
    color: "#f79045",
    category: "Front-End Development",
    mutate() {
      hide("#toc-third-party");
      hide("#toc-third-party-1");
    },
  },
  "addyosmani/es6-tools": {
    slug: "es6-tools",
    label: "ECMAScript 6 Tools",
    shortDescription:
      "An aggregation of tooling for using ES6 today. EcmaScript 6 is the sixth release of the ECMAScript language.",
    logo: "https://avatars.githubusercontent.com/tc39",
    color: "#f7df1e",
    category: "Front-End Development",
    invertTextColor: true,
  },
  "babel/awesome-babel": {
    slug: "babel",
    label: "Babel",
    shortDescription: "Babel is a compiler for writing next generation JavaScript, today.",
    logo: "https://avatars.githubusercontent.com/babel",
    color: "#f5da55",
    category: "Front-End Development",
    invertTextColor: true,
  },
  "mateusortiz/webcomponents-the-right-way": {
    slug: "webcomponents",
    label: "Web Components",
    shortDescription:
      "Web Components are a set of features that allow for the creation of reusable components in web applications.",
    logo: "https://avatars.githubusercontent.com/webcomponents",
    color: "#e6e6e6",
    category: "Front-End Development",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "sotayamashita/awesome-css": {
    slug: "css",
    label: "CSS",
    shortDescription:
      "Cascading Style Sheets (CSS) is a language used most often to style and improve upon the appearance of views.",
    logo: "https://avatars.githubusercontent.com/css",
    color: "#256bdc",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "afonsopacifer/awesome-flexbox": {
    slug: "flexbox",
    label: "Flexbox",
    shortDescription:
      "The CSS Flexible Box Module is a layout model and method that offers powerful space distribution and alignment capabilities.",
    logo: "https://avatars.githubusercontent.com/css",
    color: "#256bdc",
    category: "Front-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "ChromeDevTools/awesome-chrome-devtools": {
    slug: "chrome-devtools",
    label: "Chrome DevTools",
    shortDescription:
      "Chrome DevTools is a set of authoring, debugging, and profiling tools built into Google Chrome.",
    logo: "https://avatars.githubusercontent.com/ChromeDevTools",
    color: "#307eff",
    category: "Front-End Development",
  },
  "rosarior/awesome-django": {
    slug: "django",
    label: "Django",
    shortDescription:
      "Django is a web application framework for Python. It is meant to prioritize reusability and rapid development.",
    logo: "https://avatars.githubusercontent.com/django",
    color: "#0c4b33",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "ekremkaraca/awesome-rails": {
    slug: "rails",
    label: "Rails",
    shortDescription:
      "Ruby on Rails is a web application framework written in Ruby. It is meant to help simplify the building of complex websites.",
    logo: "https://avatars.githubusercontent.com/rails",
    color: "#cc342d",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "hothero/awesome-rails-gem": {
    slug: "rails-gems",
    label: "Rails Gems",
    shortDescription:
      "A collection of Ruby Gems for Rails development. The goal is to help developers build awesome applications.",
    logo: "https://avatars.githubusercontent.com/rails",
    color: "#cc342d",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "chiraggude/awesome-laravel": {
    slug: "laravel",
    label: "Laravel",
    shortDescription:
      "Laravel is a popular PHP framework, used for the development of MVC web applications.",
    logo: "https://avatars.githubusercontent.com/laravel",
    color: "#e74430",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
      document
        .querySelectorAll(".toc-h5, .toc-h4")
        .forEach(h => (h.className = h.className.replace(/h[54]/, "h3")));
    },
  },
  "veggiemonk/awesome-docker": {
    slug: "docker",
    label: "Docker",
    shortDescription: "Docker is a platform built for developers to build and run applications.",
    logo: "https://avatars.githubusercontent.com/docker",
    color: "#066da5",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
      hide(
        "#toc-if-you-see-a-link-here-that-is-not-any-longer-a-good-fit-you-can-fix-it-by-submitting-a-pull-request-to-improve-this-file-thank-you"
      );
    },
  },
  "jdauphant/awesome-ansible": {
    slug: "ansible",
    label: "Ansible",
    shortDescription:
      "Ansible is a powerful automation engine used for configuration management, application deployment and task automation.",
    logo: "/logos/ansible.svg",
    favicon: "/favicons/ansible.png",
    color: "#333333",
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme strong:first-of-type");
    },
  },
  "anaibol/awesome-serverless": {
    slug: "serverless",
    label: "Serverless",
    shortDescription:
      "Serverless refers to apps that depend on third-party services (backend as a service) or custom code (functions as a service).",
    color: "#ffffff",
    invertTextColor: true,
    category: "Back-End Development",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
      hide(
        "#toc-a-curated-list-of-awesome-services-solutions-and-resources-for-serverless--nobackend-applications"
      );
    },
  },
  "JStumpp/awesome-android": {
    slug: "android",
    label: "Android",
    shortDescription:
      "Android is an operating system built by Google designed for mobile applications.",
    logo: "https://avatars.githubusercontent.com/android",
    color: "#6ab344",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "vsouza/awesome-ios": {
    slug: "ios",
    label: "iOS",
    shortDescription: "iOS is the operating system for all of Apple’s mobile products.",
    logo: "https://avatars.githubusercontent.com/apple",
    color: "#ef5138",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:nth-of-type(3)");
      hide("#user-content-content", { parent: true });
      hide("#toc-content");
      hide("#toc-weve-launched-our-newsletter-");
    },
  },
  "jondot/awesome-react-native": {
    slug: "react-native",
    label: "React Native",
    shortDescription: "React Native is a JavaScript mobile framework developed by Facebook.",
    logo: "https://avatars.githubusercontent.com/react-community",
    color: "#61dafb",
    category: "Platforms",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "sindresorhus/awesome-electron": {
    slug: "electron",
    label: "Electron",
    shortDescription:
      "Electron is a framework for building cross-platform desktop applications with web technology.",
    logo: "https://avatars.githubusercontent.com/electron",
    color: "#2f3241",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
      document
        .querySelectorAll(".toc-h6")
        .forEach(h => (h.className = h.className.replace(/h6/, "h4")));
    },
  },
  "sindresorhus/awesome-nodejs": {
    slug: "nodejs",
    label: "Node.js",
    shortDescription: "Node.js is a tool for executing JavaScript in a variety of environments.",
    logo: "https://avatars.githubusercontent.com/nodejs",
    color: "#43853d",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "iCHAIT/awesome-macOS": {
    slug: "macos",
    label: "macOS",
    shortDescription:
      "macOS is the operating system for Mac computers. It was designed by Apple and is meant specifically for their hardware.",
    logo: "https://avatars.githubusercontent.com/apple",
    color: "#ffffff",
    invertTextColor: true,
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "Awesome-Windows/Awesome": {
    slug: "windows",
    label: "Windows",
    shortDescription: "Windows is Microsoft's GUI-based operating system.",
    logo: "https://avatars.githubusercontent.com/Microsoft",
    color: "#e6e6e6",
    invertTextColor: true,
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > h1:nth-of-type(2)");
    },
  },
  "benoitjadinon/awesome-xamarin": {
    slug: "xamarin",
    label: "Xamarin",
    shortDescription: "Xamarin is a platform for developing iOS and Android applications.",
    logo: "https://avatars.githubusercontent.com/xamarin",
    color: "#2c3e50",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "deephacks/awesome-jvm": {
    slug: "jvm",
    label: "JVM",
    shortDescription:
      "A curated list of low-level, performance and non-framework related resources for the Java virtual machine.",
    logo: "/logos/java.png",
    favicon: "/favicons/java.png",
    color: "#5382a1",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "donnemartin/awesome-aws": {
    slug: "aws",
    label: "AWS",
    shortDescription:
      "Amazon Web Services provides on-demand cloud computing platforms on a subscription basis.",
    logo: "https://avatars.githubusercontent.com/aws",
    color: "#ffa93f",
    invertTextColor: true,
    category: "Platforms",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-index", { parent: true });
      hide("#toc-index");
      hide("#toc-awesome-aws-python-module");
    },
  },
  "ianstormtaylor/awesome-heroku": {
    slug: "heroku",
    label: "Heroku",
    shortDescription:
      "Heroku is a cloud platform as a service supporting several programming languages that is used as a deployment model.",
    logo: "https://avatars.githubusercontent.com/heroku",
    color: "#624eaf",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "ipfs/awesome-ipfs": {
    slug: "ipfs",
    label: "IPFS",
    shortDescription:
      "IPFS is a peer-to-peer protocol for content-addressed sharing of data via a distributed file system.",
    logo: "/logos/ipfs.svg",
    favicon: "/favicons/ipfs.png",
    color: "#6acad1",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "thibmaek/awesome-raspberry-pi": {
    slug: "raspberry-pi",
    label: "Raspberry Pi",
    shortDescription:
      "A Raspberry Pi is a popular piece of hardware called a micro-controller. Its use ranges from robotics to home automation.",
    logo: "https://avatars.githubusercontent.com/raspberrypi",
    color: "#d6264f",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "Lembed/Awesome-arduino": {
    slug: "arduino",
    label: "Arduino",
    shortDescription:
      "Arduino is an open source hardware and software company and maker community.",
    logo: "https://avatars.githubusercontent.com/arduino",
    color: "#00979d",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "JesseTG/awesome-qt": {
    slug: "qt",
    label: "Qt",
    shortDescription:
      "Qt is a powerful cross-platform application development framework, for use primarily (but not exclusively) in C++.",
    logo: "https://avatars.githubusercontent.com/qt",
    color: "#41cd52",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "Kazhnuz/awesome-gnome": {
    slug: "gnome",
    label: "GNOME",
    shortDescription:
      "GNOME is a desktop environment composed of free and open-source software that runs on Linux and most BSD derivatives.",
    logo: "https://avatars.githubusercontent.com/GNOME",
    color: "#4a86cf",
    category: "Platforms",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "mehcode/awesome-atom": {
    slug: "atom",
    label: "Atom",
    shortDescription:
      "Atom is a text editor developed by GitHub. It is designed to be approachable out of the box yet highly customizable.",
    logo: "https://avatars.githubusercontent.com/atom",
    color: "#5fb57d",
    category: "Editors",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-content", { parent: true });
      hide("#toc-table-of-content");
    },
  },
  "dhamaniasad/awesome-postgres": {
    slug: "postgresql",
    label: "PostgreSQL",
    shortDescription:
      "PostgreSQL is an open source database management system that is object-relational.",
    logo: "https://avatars.githubusercontent.com/postgres",
    color: "#336791",
    category: "Databases",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "ramnes/awesome-mongodb": {
    slug: "mongodb",
    label: "MongoDB",
    shortDescription:
      "MongoDB is a NoSQL cross-platform database. It is designed for scalability and performance.",
    logo: "https://avatars.githubusercontent.com/mongodb",
    color: "#218e38",
    category: "Databases",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "emacs-tw/awesome-emacs": {
    slug: "emacs",
    label: "Emacs",
    shortDescription:
      "Emacs is an extensible, customizable, free text editor and computing environment.",
    logo: "https://avatars.githubusercontent.com/emacs",
    color: "#7f5ab6",
    category: "Editors",
    mutate() {
      hide("#readme > blockquote:first-of-type");
    },
  },
  "viatsko/awesome-vscode": {
    slug: "vscode",
    label: "VS Code",
    shortDescription:
      "VS Code is a customizable code editor. It includes support for Git, intelligent code completion, code refactoring and more.",
    logo: "/logos/vscode.png",
    favicon: "/favicons/vscode.png",
    color: "#0077c8",
    category: "Editors",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "dreikanter/sublime-bookmarks": {
    slug: "sublime-text",
    label: "Sublime Text",
    shortDescription:
      "Sublime Text is a customizable proprietary cross-platform source code editor.",
    logo: "https://avatars.githubusercontent.com/SublimeText",
    color: "#ff8100",
    category: "Editors",
  },
  "akrawchyk/awesome-vim": {
    slug: "vim",
    label: "Vim",
    shortDescription:
      "Vim is a console-run text editor program. Bram Moolenaar is credited with the development, which began in 1988.",
    logo: "https://avatars.githubusercontent.com/vim",
    color: "#199f4b",
    category: "Editors",
    mutate() {
      hide("#readme > ol:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "awesome-lists/awesome-bash": {
    slug: "bash",
    label: "Bash",
    shortDescription:
      "Bash is a shell and command language interpreter for the GNU operating system.",
    logo: "/logos/bash.svg",
    favicon: "/favicons/bash.png",
    color: "#2f3a43",
    category: "Development Environment",
  },
  "unixorn/awesome-zsh-plugins": {
    slug: "zsh",
    label: "Zsh",
    shortDescription:
      "Zsh is a shell designed for interactive use, although it is also a powerful scripting language.",
    logo: "https://avatars.githubusercontent.com/zsh-users",
    color: "#000000",
    category: "Development Environment",
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > p:nth-of-type(4)");
    },
  },
  "alebcay/awesome-shell": {
    slug: "shell",
    label: "Shell",
    shortDescription:
      "A shell is a text-based terminal, used for manipulating programs and files. Shell scripts typically manage program execution.",
    color: "#000000",
    category: "Development Environment",
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "sobolevn/awesome-cryptography": {
    slug: "cryptography",
    label: "Cryptography",
    shortDescription:
      "Cryptography is the practice and study of techniques for secure communication in the presence of third parties.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "jbhuang0604/awesome-computer-vision": {
    slug: "computer-vision",
    label: "Computer Vision",
    shortDescription:
      "Computer vision deals with the extraction, analysis and understanding of information from images and videos.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "ChristosChristofidis/awesome-deep-learning": {
    slug: "deep-learning",
    label: "Deep Learning",
    shortDescription:
      "Deep Learning is an AI function and subset of machine learning, used for processing large amounts of complex data.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "josephmisiti/awesome-machine-learning": {
    slug: "machine-learning",
    label: "Machine Learning",
    shortDescription:
      "Machine learning is a way of modeling and interpreting data that allows a piece of software to respond intelligently.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:nth-of-type(3)");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "mre/awesome-static-analysis": {
    slug: "static-analysis",
    label: "Static Analysis",
    shortDescription:
      "Static program analysis is the analysis of computer software that is performed without actually executing programs.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "bulutyazilim/awesome-datascience": {
    slug: "data-science",
    label: "Data Science",
    shortDescription:
      "Data Science applies scientific methods, processes, and systems to extract knowledge and insights from data.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "tayllan/awesome-algorithms": {
    slug: "algorithms",
    label: "Algorithms",
    shortDescription: "Algorithms are self-contained sequences that carry out a variety of tasks.",
    color: "#ffffff",
    category: "Computer Science",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
    },
  },
  "monostable/awesome-electronics": {
    slug: "electronics",
    label: "Electronics",
    shortDescription:
      "Electronic engineering is the practice of understanding, designing and building electronic circuits.",
    color: "#ffffff",
    category: "Hardware",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "phodal/awesome-iot": {
    slug: "iot",
    label: "IoT",
    shortDescription:
      "IoT refers to the network of physical devices embedded in everyday objects, enabling them to send and receive data.",
    color: "#ffffff",
    category: "Hardware",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:nth-of-type(2)");
      hide("#user-content-toc", { parent: true });
      hide("#toc-toc");
    },
  },
  "awesomedata/awesome-public-datasets": {
    slug: "public-datasets",
    label: "Public Datasets",
    shortDescription:
      "A topic-centric list of high-quality open datasets in public domains. By everyone, for everyone!",
    color: "#ffffff",
    category: "APIs and Datasets",
    invertTextColor: true,
    mutate() {
      hide("#user-content-table-of-contents");
    },
  },
  "abhishekbanthia/Public-APIs": {
    slug: "public-apis-2",
    label: "Public APIs",
    shortDescription:
      "An attempt to categorize different APIs scoured from the web which make their resources available for consumption.",
    color: "#ffffff",
    category: "APIs and Datasets",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "toddmotto/public-apis": {
    slug: "public-apis",
    label: "Public APIs",
    shortDescription: "A collective list of free and public APIs for use in web development.",
    color: "#ffffff",
    category: "APIs and Datasets",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-index", { parent: true });
      hide("#toc-index");
    },
  },
  "fasouto/awesome-dataviz": {
    slug: "data-visualization",
    label: "Data Visualization",
    shortDescription:
      "Data Visualization is the visual depiction of data through the use of graphs, plots, and informational graphics.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "mfornos/awesome-microservices": {
    slug: "microservices",
    label: "Microservices",
    shortDescription:
      "Microservices is an architecture that structures an application as a collection of loosely coupled services.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme strong:first-of-type");
    },
  },
  "Kickball/awesome-selfhosted": {
    slug: "self-hosted",
    label: "Self-Hosted",
    shortDescription:
      "Self-hosting is the process of locally hosting and managing applications instead of renting from SaaS providers.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > hr:first-of-type");
    },
  },
  "folkswhocode/awesome-diversity": {
    slug: "diversity",
    label: "Diversity",
    shortDescription:
      "A curated list of amazingly awesome articles, websites and resources about diversity in technology.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
  "cristianoliveira/awesome4girls": {
    slug: "for-girls",
    label: "For Girls",
    shortDescription:
      "A curated list of inclusive events, projects and initiatives for women in the tech area.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#readme > hr:first-of-type");
      hide("#user-content-table-of-contents", { parent: true });
      hide("#toc-table-of-contents");
    },
  },
  "mislavcimpersak/awesome-dev-fun": {
    slug: "dev-fun",
    label: "Dev Fun",
    shortDescription:
      "A list of libraries, packages and languages that have no real purpose but to make a developer chuckle.",
    color: "#ffffff",
    category: "Miscellaneous",
    invertTextColor: true,
    mutate() {
      hide("#readme > ul:first-of-type");
      hide("#user-content-contents", { parent: true });
      hide("#toc-contents");
    },
  },
};
