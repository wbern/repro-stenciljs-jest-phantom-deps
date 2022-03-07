import { newSpecPage } from '@stencil/core/testing';
import { SomeComponent } from '../some-component';

describe('some-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SomeComponent],
      html: `<some-component></some-component>`,
    });
    expect(page.root).toEqualHtml(`
      <some-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </some-component>
    `);
  });
});
