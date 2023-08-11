import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d.querySelector("ul,ol")?.textContent?.match(/Celebrating/),
  showMessage() {
    messagebox({
      html: `
<p>This looks better now.</p>
<p>You'll find some kind of list. Create a proper HTML list with this content!</p>
<p>Save the file after fixing it.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
