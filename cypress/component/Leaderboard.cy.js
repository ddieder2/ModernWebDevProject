import Profile from '../../src/Components/Profile/Profile';
import {initializeParse} from '@parse/react';
const parseSetUp = () => {
  initializeParse(
    'https://modernwebdev-td.b4a.io', // e.g. YOUR_APP_NAME.b4a.io
    'vmhk69ASXetFNV66CXRxN4zZlSgQ7HeR53jaoeAV', // This is your Application ID
    '9zPzMSb6SdBr5o3NqjFIlsLPLEo1ORJ48gW0D1Mc' // This is your Javascript key
  );
}

const mockCloseProfile = () => {
  return true;
}

describe('Profile.cy.js', () => {
  it('playground', () => {
    parseSetUp();
    cy.mount(<Leaderboard otherUser={true} providedUsername={'bob@bob.com'} closeProfile={mockCloseProfile}/>)
    
    
  })
})