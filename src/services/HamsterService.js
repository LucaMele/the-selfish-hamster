import axios from 'axios';

export default {
  apiEndpoint() {
    return 'http://localhost:3000';
    //return 'https://selfishhamster.disruptr.ch';
  },
  async createProfile(nofPersons) {
    // eslint-disable-next-line no-console
    console.log('call createProfile with number of persons', nofPersons);
    const res = await axios.post(`${this.apiEndpoint()}/api/profiles`, {
      nofPersons,
      zip: '8615', // TODO later
      emailAddress: 'toto@toto.ch', // TODO later
    });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
  async createQuestions(profileId, durationQuarantineInDays, nofToiletRolls, nofSheetsPerUse) {
    // eslint-disable-next-line no-console
    console.log('call createQuestions with profileId', profileId);
    const res = await axios.post(`${this.apiEndpoint()}/api/toilet/questions`, {
      durationQuarantineInDays,
      nofToiletRolls,
      nofSheetsPerUse,
      profileId,
    });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
  async getAnswer(questionId) {
    // eslint-disable-next-line no-console
    console.log('call getAnswer with questionId', questionId);
    const res = await axios.post(`${this.apiEndpoint()}/api/toilet/questions/${questionId}/answer`,
      {
      });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
};
