import axios from 'axios';

export default {
  apiEndpoint() {
    return 'http://localhost:3000';
    // return 'https://selfishhamster.disruptr.ch';
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
  async createFoodProfile(nofAdults, nofKidsUnder12) {
    // eslint-disable-next-line no-console
    console.log(`call createFoodProfile with number of adults ${nofAdults} nofKidsUnder12 ${nofKidsUnder12}`);
    const res = await axios.post(`${this.apiEndpoint()}/api/profiles`, {
      nofAdults,
      nofKidsUnder12,
      zip: '8615', // TODO later
      emailAddress: 'toto@toto.ch', // TODO later
    });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
  async createEstimate(durationQuarantineInDays, profileId) {
    // eslint-disable-next-line no-console
    console.log(`call createEstimate with durationQuarantineInDays ${durationQuarantineInDays}`);
    const res = await axios.post(`${this.apiEndpoint()}/api/emergency-stock/questions`, {
      durationQuarantineInDays,
      categories: [
      ],
      profileId,
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
  async searchCharityPlaces(zip) {
    // eslint-disable-next-line no-console
    console.log('call searchCharityPlaces');
    const res = await axios.post(`${this.apiEndpoint()}/api/places/charity/search`,
      { zip: zip });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
  async getEmergencyStockAnswer(questionId) {
    // eslint-disable-next-line no-console
    console.log('call getEmergencyStockAnswer with questionId', questionId);
    const res = await axios.post(`${this.apiEndpoint()}/api/emergency-stock/questions/${questionId}/answer`,
      {
      });
    // eslint-disable-next-line no-console
    console.log('success ', res.data);
    return res.data;
  },
};
