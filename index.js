import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(FileUpload());

app.listen(port, () => {
  console.log(`Server up and running...`);
});
