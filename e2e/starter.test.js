describe('Example', () => {
  console.log('debug >>>> ', device)
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('First Test', async () => {
    element(by.id('cart2'));
    element(by.id('title-text'));
    element(by.text('Parcel Native App'));

    await element(by.id('increment-button')).tap();
  })
});
