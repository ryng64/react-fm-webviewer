import path from "path";
import { exec } from "child_process";
import fs from "fs";

function uploadToFM() {
  const fmFile = `webviewdeploy.fmp12`;
  const fmScript = `uploadHTMLFile`;
  let filePath = "";
  let fmpURL = "";
  fs.readdir("dist/", (err, files) => {
    files.forEach((file) => {
      if (path.extname(file) == ".html") {
        console.log(path.resolve(`dist/${file}`));
        // filePath = path.resolve(`dist/${file}`).replace(path.extname(file), "");
        fmpURL = `fmp://$/${fmFile}?script=${fmScript}`;

        if (fmpURL == "") return;
        const command = `start ${fmpURL}`;
        console.log(command);
        exec(command, (err, stdout, stderr) => {
          if (err) {
            return;
          }
          // console.log(`stdout: ${stdout}`);
          // console.log(`stderr: ${stderr}`);
        });
      }
    });
  });
}

uploadToFM();
