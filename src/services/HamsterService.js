import axios from 'axios';

export default {
  async postData(currenstStep, inputData, profileId, questionId) {
    // TODO may needed to be moved into next component that are instantiated after household
    let res;
    if (currenstStep === 'household') {
      res = await axios.post('http://localhost:3000/profiles', {
        nofPersons: this.getDataFromStep('household', inputData),
        zip: '8615', // TODO later
        emailAddress: 'toto@toto.ch', // TODO later
      });
    } else if (currenstStep === 'poop-style') {
      res = await axios.post('http://localhost:3000/toilet/questions', {
        durationQuarantineInDays: this.getDataFromStep('quarantine-length', inputData),
        nofToiletRolls: this.getDataFromStep('paper-stock', inputData),
        nofSheetsPerUse: this.getDataFromStep('poop-style', inputData),
        profileId,
      });
    } else if (currenstStep === 'results') {
      res = await axios.post(`http://localhost:3000/toilet/questions/${questionId}/answer`, {
      });
    }
    return res.data;
  },
  getDataFromStep(currentStep, inputData) {
    let i = 0;
    while (i < inputData.length) {
      if (inputData[i].stepName === currentStep) {
        return inputData[i].value;
      }
      // eslint-disable-next-line no-plusplus
      i++;
    }
    return '';
  },
};
