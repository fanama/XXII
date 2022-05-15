import * as dotenv from "dotenv";
import { server } from "./src/interface";
dotenv.config();

const { PORT, MODE } = process.env;

// server.use("/mp4", exress.static("./videos"));

server.listen(PORT || 3000, () => {
  console.log({ MODE, PORT });
  console.log("Sql node is on " + PORT || 3000);
});
