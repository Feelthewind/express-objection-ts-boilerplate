import initServer from "./server";
import initDB from "./db/init";

(async () => {
  await initDB();
  initServer();
})();
