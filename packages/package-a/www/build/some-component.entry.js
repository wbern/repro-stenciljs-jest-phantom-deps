import { r as registerInstance, h, e as Host } from './index-57b42d0e.js';

const someComponentCss = ":host{display:block}";

let SomeComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
SomeComponent.style = someComponentCss;

export { SomeComponent as some_component };
