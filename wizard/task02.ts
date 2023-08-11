import messagebox from './messagebox.ts';
import { task } from './tasks.ts';

export default {
  condition: (d) =>
    (d.querySelector("h1") as HTMLHeadingElement)?.textContent === "My biggest dreams",
  showMessage(d) {
    messagebox({
      html: `
<p>Hello ${(d.querySelector("head meta[name=author]") as HTMLMetaElement)?.content},</p>
<p>you've successfully done the first task. That's fine.</p>
<p>The next step is to fix the heading. Read the comment and find the proper tag.</p>
<p>Save the file after fixing it.</p>`,
    });
  },
} as task;