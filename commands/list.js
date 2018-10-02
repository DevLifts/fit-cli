import colors from "colors";
import { exercises } from "../options";

export function list() {
  console.log("YOUR LOGS");
  console.log("------------------");

  exercises.forEach(exercise => {
    console.log("%s %s", colors.bold(exercise));
  });
}
