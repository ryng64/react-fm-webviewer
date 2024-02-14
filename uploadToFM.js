import { exec } from "child_process";

function uploadToFM() {
  const fmFile = `webviewdeploy.fmp12`;
  const fmScript = `uploadHTMLFile`;
  /*   
        (default) only run when file in FM is open - fmp://$/ 
        always run and open file in fm - fmp://~/
    */
  let fmpURL = `fmp://$/${fmFile}?script=${fmScript}`;
  const command = `start ${fmpURL}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return;
    }
  });
}

uploadToFM();
