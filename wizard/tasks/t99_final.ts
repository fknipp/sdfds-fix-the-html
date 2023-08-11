import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition() {
    return false;
  },
  showMessage() {
    messagebox({ text: "Congrats! You've solved all tasks." });
  },
  ignoreInCounting: true,
} as task;
