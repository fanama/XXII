import * as dotenv from "dotenv";
import { server, expressStatic as express } from "./src/interface";
dotenv.config();
import { connect } from "./src/infra/repo/connect";
const { PORT, MODE } = process.env;
connect();
// server.use("/mp4", exress.static("./videos"));
server.use("/mp4", express.static("./videos"));
server.listen(PORT || 3000, () => {
  console.log({ MODE, PORT });
  console.log("Sql node is on " + PORT || 3000);
});
