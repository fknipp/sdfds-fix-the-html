import messagebox from '../messagebox.js';
import { task } from './index.js';

export default {
  condition: (d) =>
    !!(d.querySelector("h2") as HTMLHeadingElement)?.innerText.match(/About me/),
  showMessage(d) {
    messagebox({
      html: `
<p>Well done.</p>
<p>Continue fixing the footer.</p>`,
    });
  },
} as task;