import messagebox from '../messagebox.js';
import { task } from './index.js';

export default {
  condition: (d) =>
  !!(
    d.querySelector("footer p strong") as HTMLHeadingElement
  )?.innerText.match(/The bigger, the better./),
showMessage(d) {
    messagebox({
      html: `
<p>You've found a way to write the text in bold letters, but there is another element, which better caries the meaning of these words.</p>
<p>Use the proper element.</p>`,
    });
  },
} as task;