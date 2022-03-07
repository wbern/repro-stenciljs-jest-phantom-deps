import { newE2EPage } from '@stencil/core/testing';

describe('some-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<some-component></some-component>');

    const element = await page.find('some-component');
    expect(element).toHaveClass('hydrated');
  });
});
