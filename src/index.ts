import app from "./app";
import logger from "./utils/helpers/logger";
//todo: remove  ||5000 in below line
// console.log(process.env.PORT);

const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
