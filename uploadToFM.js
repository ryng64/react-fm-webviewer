import path from "path";
import { exec } from "child_process";
import fs from "fs";

function uploadToFM() {
  const fmFile = `webviewdeploy.fmp12`;
  const fmScript = `uploadHTMLFile`;
  let fmpURL = `fmp://$/${fmFile}?script=${fmScript}`;
  const command = `start ${fmpURL}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`);
  });
}

uploadToFM();
