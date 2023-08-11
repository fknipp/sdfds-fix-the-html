import messagebox from "./messagebox.ts";

interface task {
  condition: (d: Document) => boolean;
  showMessage: () => void;
}

const tasks: task[] = [
  {
    condition: (d) => !!d.querySelector('head meta[name=author]'),
    showMessage() {
      messagebox({ text: "Please enter your name." });
    },
  },
  {
    condition(d) {
      return false;
    },
    showMessage() {
      messagebox({ text: "Congrats! You've solved all tasks." });
    },
  },
];

export default tasks;
