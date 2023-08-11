import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition() {
    return false;
  },
  showMessage(d) {
    messagebox({
      html: `
    <p>Dear ${
      (d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content
    },</p>
    <p>congratulations! You've solved all tasks.</p>
    <p>You're on a good way to become a real HTML wizard.</p>
    <p>Have much fun with HTML!</p>
    <p>Kind regards, Holly.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
