import getProductUpdates from './index';

describe('Testing "getProductUpdates" lambda configuration', () => {
  it('should create "getProductUpdates" lambda configuration', () => {
    expect(getProductUpdates).toMatchSnapshot();
  });
});
