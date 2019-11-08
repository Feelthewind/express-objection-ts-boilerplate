import initServer from "./server";
import { initDB } from "./db/helpers";

(async () => {
  await initDB();
  initServer();
})();
