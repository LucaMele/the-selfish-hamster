import axios from "axios"

export default {
  async postData(currenstStep, inputData, profileId, questionId) {
    // TODO may needed to be moved into next component that are instantiated after household
    if (currenstStep === "household") {
      let res = await axios.post("http://localhost:3000/profiles", {
        "nofPersons": getDataFromStep("household", inputData),
        "zip": "8615",  // TODO later
        "emailAddress": "toto@toto.ch" // TODO later
      });
    } else if (currenstStep === 'poop-style') {
      let res = await axios.post("http://localhost:3000/toilet/questions", {
        "durationQuarantineInDays": getDataFromStep('quarantine-length', inputData),
        "nofToiletRolls": getDataFromStep('paper-stock', inputData),
        "nofSheetsPerUse": getDataFromStep('poop-style', inputData),
        "profileId": profileId
      });
    } else if (currenstStep === 'results') {
      let res = await axios.post("http://localhost:3000/toilet/questions/"+ questionId +"/answer", {
      });
    }

    return res.data;
  },
  getDataFromStep(currenstStep, inputData) {
    let i = 0;
    while (i < inputData.length) {
      if (inputData[i].stepName === currentStep) {
        return inputData[i].value;
      }
      // eslint-disable-next-line no-plusplus
      i++;
    }
  }
}
