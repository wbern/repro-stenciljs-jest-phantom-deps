import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'some-component',
  styleUrl: 'some-component.css',
  shadow: true,
})
export class SomeComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
