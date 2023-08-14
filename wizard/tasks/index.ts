import t01_authorname from "./t01_authorname.js";
import t02_h1 from "./t02_h1.js";
import t03_list from "./t03_list.js";
import t04_listitems from "./t04_listitems.js";
import t10_quote from "./t10_quote.js";
import t11_blockquote_in_p from "./t11_blockquote_in_p.js";
import t12_blockquote from "./t12_blockquote.js";
import t20_table from "./t20_table.js";
import t21_table_td from "./t21_table_td.js";
import t22_table_thtd from "./t22_table_thtd.js";
import t23_table_thtd from "./t23_table_thtd.js";
import t30_footer from "./t30_footer.js";
import t31_h2 from "./t31_h2.js";
import t32_b from "./t32_b.js";
import t33_strong from "./t33_strong.js";
import t99_final from "./t99_final.js";

export interface task {
  condition: (d: Document) => boolean;
  showMessage: (d: Document) => void;
  ignoreInCounting?: boolean;
}

const tasks: task[] = [
  t01_authorname,
  t02_h1,
  t03_list,
  t04_listitems,
  t10_quote,
  t11_blockquote_in_p,
  t12_blockquote,
  t20_table,
  t21_table_td,
  t22_table_thtd,
  t23_table_thtd,
  t30_footer,
  t31_h2,
  t32_b,
  t33_strong,
  t99_final
];

export default tasks;
