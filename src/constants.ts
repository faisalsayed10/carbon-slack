import { Deta } from "deta";
import Stump from "stump.js";

export const stump = new Stump(['Debug', 'Timestamp']);

export const installationStore = Deta(process.env.DETA_PROJECT_KEY).Base("carbon_workspaces");

export const FONTS = [
  {
    text: { type: "plain_text", text: "Anonymous Pro" },
    value: "Anonymous Pro",
  },
  {
    text: { type: "plain_text", text: "Droid Sans Mono" },
    value: "Droid Sans Mono",
  },
  {
    text: { type: "plain_text", text: "Fantasque Sans Mono" },
    value: "Fantasque Sans Mono",
  },
  { text: { type: "plain_text", text: "Fira Code" }, value: "Fira Code" },
  { text: { type: "plain_text", text: "Hack" }, value: "Hack" },
  {
    text: { type: "plain_text", text: "IBM Plex Mono" },
    value: "IBM Plex Mono",
  },
  { text: { type: "plain_text", text: "Inconsolata" }, value: "Inconsolata" },
  { text: { type: "plain_text", text: "Iosevka" }, value: "Iosevka" },
  {
    text: { type: "plain_text", text: "JetBrains Mono" },
    value: "JetBrains Mono",
  },
  { text: { type: "plain_text", text: "Monoid" }, value: "Monoid" },
  {
    text: { type: "plain_text", text: "Source Code Pro" },
    value: "Source Code Pro",
  },
  { text: { type: "plain_text", text: "Space Mono" }, value: "Space Mono" },
  { text: { type: "plain_text", text: "Ubuntu Mono" }, value: "Ubuntu Mono" },
];

export const THEMES = [
  {
    text: { type: "plain_text", text: "3024 Night" },
    value: "3024-night",
  },
  {
    text: { type: "plain_text", text: "A11y Dark" },
    value: "a11y-dark",
  },
  {
    text: { type: "plain_text", text: "Blackboard" },
    value: "blackboard",
  },
  {
    text: { type: "plain_text", text: "Base 16 (Dark)" },
    value: "base16-dark",
  },
  {
    text: { type: "plain_text", text: "Base 16 (Light)" },
    value: "base16-light",
  },
  { text: { type: "plain_text", text: "Cobalt" }, value: "cobalt" },
  { text: { type: "plain_text", text: "Dracula" }, value: "dracula" },
  { text: { type: "plain_text", text: "Duotone" }, value: "duotone-dark" },
  { text: { type: "plain_text", text: "Hopscotch" }, value: "hopscotch" },
  { text: { type: "plain_text", text: "Lucario" }, value: "lucario" },
  { text: { type: "plain_text", text: "Material" }, value: "material" },
  { text: { type: "plain_text", text: "Monokai" }, value: "monokai" },
  { text: { type: "plain_text", text: "Night Owl" }, value: "night-owl" },
  { text: { type: "plain_text", text: "Nord" }, value: "nord" },
  { text: { type: "plain_text", text: "Oceanic Next" }, value: "oceanic-next" },
  {
    text: {
      type: "plain_text",
      text: "One Light",
    },
    value: "one-light",
  },
  { text: { type: "plain_text", text: "One Dark" }, value: "one-dark" },
  { text: { type: "plain_text", text: "Panda" }, value: "panda-syntax" },
  { text: { type: "plain_text", text: "Paraiso" }, value: "paraiso-dark" },
  { text: { type: "plain_text", text: "Seti" }, value: "seti" },
  {
    text: {
      type: "plain_text",
      text: "Shades of Purple ",
    },
    value: "shades-of-purple",
  },
  {
    text: {
      type: "plain_text",
      text: "Solarized (Dark)",
    },
    value: "solarized dark",
  },
  {
    text: {
      type: "plain_text",
      text: "Solarized (Light)",
    },
    value: "solarized light",
  },
  {
    text: {
      type: "plain_text",
      text: "SynthWave '84",
    },
    value: "synthwave-84",
  },
  {
    text: {
      type: "plain_text",
      text: "Twilight",
    },
    value: "twilight",
  },
  { text: { type: "plain_text", text: "Verminal" }, value: "verminal" },
  { text: { type: "plain_text", text: "VSCode" }, value: "vscode" },
  { text: { type: "plain_text", text: "Yeti" }, value: "yeti" },
  { text: { type: "plain_text", text: "Zenburn" }, value: "zenburn" },
];

// needs refactoring
export const LANGUAGES = [
  {
    text: {
      type: "plain_text",
      text: "Auto",
    },
    value: "auto",
  },
  {
    text: {
      type: "plain_text",
      text: "Apache",
    },
    value: "apache",
  },
  {
    text: {
      type: "plain_text",
      text: "Bash",
    },
    value: "shell",
  },
  {
    text: {
      type: "plain_text",
      text: "Plain Text",
    },
    value: "text",
  },
  {
    text: {
      type: "plain_text",
      text: "C",
    },
    value: "c",
  },
  {
    text: {
      type: "plain_text",
      text: "C++",
    },
    value: "clike",
  },
  {
    text: {
      type: "plain_text",
      text: "C#",
    },
    value: "clike",
  },
  {
    text: {
      type: "plain_text",
      text: "Clojure",
    },
    value: "clojure",
  },
  {
    text: {
      type: "plain_text",
      text: "COBOL",
    },
    value: "cobol",
  },
  {
    text: {
      type: "plain_text",
      text: "CoffeeScript",
    },
    value: "coffeescript",
  },
  {
    text: {
      type: "plain_text",
      text: "Crystal",
    },
    value: "crystal",
  },
  {
    text: {
      type: "plain_text",
      text: "CSS",
    },
    value: "css",
  },
  {
    text: {
      type: "plain_text",
      text: "D",
    },
    value: "d",
  },
  {
    text: {
      type: "plain_text",
      text: "Dart",
    },
    value: "dart",
  },
  {
    text: {
      type: "plain_text",
      text: "Diff",
    },
    value: "diff",
  },
  {
    text: {
      type: "plain_text",
      text: "Django",
    },
    value: "django",
  },
  {
    text: {
      type: "plain_text",
      text: "Docker",
    },
    value: "dockerfile",
  },
  {
    text: {
      type: "plain_text",
      text: "Elixir",
    },
    value: "elixir",
  },
  {
    text: {
      type: "plain_text",
      text: "Elm",
    },
    value: "elm",
  },
  {
    text: {
      type: "plain_text",
      text: "Erlang",
    },
    value: "erlang",
  },
  {
    text: {
      type: "plain_text",
      text: "Fortran",
    },
    value: "fortran",
  },
  {
    text: {
      type: "plain_text",
      text: "Gherkin",
    },
    value: "gherkin",
  },
  {
    text: {
      type: "plain_text",
      text: "GraphQL",
    },
    value: "graphql",
  },
  {
    text: {
      type: "plain_text",
      text: "Go",
    },
    value: "go",
  },
  {
    text: {
      type: "plain_text",
      text: "Groovy",
    },
    value: "groovy",
  },
  {
    text: {
      type: "plain_text",
      text: "Handlebars",
    },
    value: "handlebars",
  },
  {
    text: {
      type: "plain_text",
      text: "Haskell",
    },
    value: "haskell",
  },
  {
    text: {
      type: "plain_text",
      text: "HTML/XML",
    },
    value: "htmlmixed",
  },
  {
    text: {
      type: "plain_text",
      text: "Java",
    },
    value: "java",
  },
  {
    text: {
      type: "plain_text",
      text: "JavaScript",
    },
    value: "javascript",
  },
  {
    text: {
      type: "plain_text",
      text: "JSON",
    },
    value: "javascript",
  },
  {
    text: {
      type: "plain_text",
      text: "JSX",
    },
    value: "jsx",
  },
  {
    text: {
      type: "plain_text",
      text: "Julia",
    },
    value: "julia",
  },
  {
    text: {
      type: "plain_text",
      text: "Kotlin",
    },
    value: "kotlin",
  },
  {
    text: {
      type: "plain_text",
      text: "LaTeX",
    },
    value: "stex",
  },
  {
    text: {
      type: "plain_text",
      text: "Lisp",
    },
    value: "commonlisp",
  },
  {
    text: {
      type: "plain_text",
      text: "Lua",
    },
    value: "lua",
  },
  {
    text: {
      type: "plain_text",
      text: "Markdown",
    },
    value: "markdown",
  },
  {
    text: {
      type: "plain_text",
      text: "Mathematica",
    },
    value: "mathematica",
  },
  {
    text: {
      type: "plain_text",
      text: "MATLAB/Octave",
    },
    value: "octave",
  },
  {
    text: {
      type: "plain_text",
      text: "MySQL",
    },
    value: "sql",
  },
  {
    text: {
      type: "plain_text",
      text: "N-Triples",
    },
    value: "ntriples",
  },
  {
    text: {
      type: "plain_text",
      text: "NGINX",
    },
    value: "nginx",
  },
  {
    text: {
      type: "plain_text",
      text: "Nim",
    },
    value: "nim",
  },
  {
    text: {
      type: "plain_text",
      text: "Objective C",
    },
    value: "objectivec",
  },
  {
    text: {
      type: "plain_text",
      text: "OCaml/F#",
    },
    value: "mllike",
  },
  {
    text: {
      type: "plain_text",
      text: "Pascal",
    },
    value: "pascal",
  },
  {
    text: {
      type: "plain_text",
      text: "Perl",
    },
    value: "perl",
  },
  {
    text: {
      type: "plain_text",
      text: "PHP",
    },
    value: "php",
  },
  {
    text: {
      type: "plain_text",
      text: "PowerShell",
    },
    value: "powershell",
  },
  {
    text: {
      type: "plain_text",
      text: "Python",
    },
    value: "python",
  },
  {
    text: {
      type: "plain_text",
      text: "R",
    },
    value: "r",
  },
  {
    text: {
      type: "plain_text",
      text: "RISC-V",
    },
    value: "riscv",
  },
  {
    text: {
      type: "plain_text",
      text: "Ruby",
    },
    value: "ruby",
  },
  {
    text: {
      type: "plain_text",
      text: "Rust",
    },
    value: "rust",
  },
  {
    text: {
      type: "plain_text",
      text: "Sass",
    },
    value: "sass",
  },
  {
    text: {
      type: "plain_text",
      text: "Scala",
    },
    value: "scala",
  },
  {
    text: {
      type: "plain_text",
      text: "Smalltalk",
    },
    value: "smalltalk",
  },
  {
    text: {
      type: "plain_text",
      text: "Solidity",
    },
    value: "solidity",
  },
  {
    text: {
      type: "plain_text",
      text: "SPARQL",
    },
    value: "sparql",
  },
  {
    text: {
      type: "plain_text",
      text: "SQL",
    },
    value: "sql",
  },
  {
    text: {
      type: "plain_text",
      text: "Stylus",
    },
    value: "stylus",
  },
  {
    text: {
      type: "plain_text",
      text: "Swift",
    },
    value: "swift",
  },
  {
    text: {
      type: "plain_text",
      text: "TCL",
    },
    value: "tcl",
  },
  {
    text: {
      type: "plain_text",
      text: "TOML",
    },
    value: "toml",
  },
  {
    text: {
      type: "plain_text",
      text: "Turtle",
    },
    value: "turtle",
  },
  {
    text: {
      type: "plain_text",
      text: "TypeScript",
    },
    value: "javascript",
  },
  {
    text: {
      type: "plain_text",
      text: "TSX",
    },
    value: "jsx",
  },
  {
    text: {
      type: "plain_text",
      text: "Twig",
    },
    value: "twig",
  },
  {
    text: {
      type: "plain_text",
      text: "VB.NET",
    },
    value: "vb",
  },
  {
    text: {
      type: "plain_text",
      text: "Verilog",
    },
    value: "verilog",
  },
  {
    text: {
      type: "plain_text",
      text: "VHDL",
    },
    value: "vhdl",
  },
  {
    text: {
      type: "plain_text",
      text: "Vue",
    },
    value: "vue",
  },
  {
    text: {
      type: "plain_text",
      text: "XQuery",
    },
    value: "xquery",
  },
  {
    text: {
      type: "plain_text",
      text: "YAML",
    },
    value: "yaml",
  },
];
