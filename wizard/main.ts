import messagebox from "./messagebox.ts";
import tasks from "./tasks.ts";

import "./style.css";

const done = tasks.filter((task) => task.condition(document)).length;
const length = tasks.length - 1;

messagebox({ text: `Done: ${done}/${length}` });
