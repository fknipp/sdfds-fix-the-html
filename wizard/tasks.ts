import messagebox from "./messagebox.ts";

import task01 from "./task01.ts";
import task02 from "./task02.ts";

export interface task {
  condition: (d: Document) => boolean;
  showMessage: (d: Document) => void;
  ignoreInCounting?: boolean;
}

const tasks: task[] = [
  task01,
  task02,
  {
    condition() {
      return false;
    },
    showMessage() {
      messagebox({ text: "Congrats! You've solved all tasks." });
    },
    ignoreInCounting: true,
  },
];

export default tasks;
