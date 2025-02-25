describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Parcel Native App'))).toBeVisible();
  });

  it('should increment counter on button press', async () => {
    await element(by.text('Incrementar')).tap();
    await expect(element(by.text('1'))).toBeVisible();
  });
});
