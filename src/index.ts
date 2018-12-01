import 'reflect-metadata';
import { init, Element, HTMLElement } from './basichtml';
import { DOM, Aurelia } from './runtime';

const doc = init().document;
DOM.setHtmlReference(doc as any, Element as any, HTMLElement as any, class SVGElement_ {} as any);

import { BasicConfiguration } from './jit';

import { customElement } from './runtime';

@customElement({
  name: 'app',
  template: 
	`<template>
		<box>
			<textbox value.two-way="firstName" />
			<textbox value.two-way="lastName" />
			<label text="\${firstName} \${lastName}" />
		</box>
  </template>`
})
export class App {

	firstName: string;
	lastName: string;
	showExample: boolean;

  constructor() {
		this.firstName = 'Adrea';
		this.lastName = 'Parodi';
		this.showExample = true;
  }
}

new Aurelia()
	.register(
		// DebugConfiguration,
		BasicConfiguration,
	)
	.app({
		component: App,
		screen: {
			
		}
	})
	.start();
