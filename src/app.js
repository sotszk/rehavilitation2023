import Typed from "typed.js";
import "~/src/js/helloworld";
import add from "~/src/js/add";

console.log("20 + 40 は？", add(20, 40));

new Typed(".typed", {
  strings: ["Hi,", "I'm Sota Suzuki."],
  typeSpeed: 40,
  showCursor: false,
});
