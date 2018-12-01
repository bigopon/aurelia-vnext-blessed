import { Widgets } from 'blessed';
import { Node } from '../basichtml';
import { BlessedDOM } from './blessed-dom';
import * as blessed from 'blessed';

(map => {
  const emptyOps = {};
  map('label', (node?: Element) => {
    const label = blessed.text(emptyOps);
    if (node && (node.textContent || node.getAttribute('label'))) {
      label.setText(node.getAttribute('label') || node.textContent);
    }
    return label;
  });
  map('button', (node?: Element) => {
    const btn = blessed.button({})
    if (node) {
      if (node.getAttribute('text')) {
        btn.setText(node.getAttribute('text'));
      }
      if (node.textContent) {
        btn.setText(node.getAttribute('text'));
      }
    }
    return btn;
  });
  map('textbox', (node?: Element) => {
    const textbox = blessed.textbox(emptyOps);
    if (node) {
      if (node.getAttribute('text')) {
        textbox.setText(node.getAttribute('text'));
      }
      if (node.textContent) {
        textbox.setText(node.getAttribute('text'));
      }
    }
    return textbox;
  });
  map('box', (node?: Element) => {
    const box = blessed.box({
      top: 'center',
      left: 'center',
      width: node && node.getAttribute('width') || '100%',
      height: node && node.getAttribute('height') || '100%',
      content: 'Hello {bold}world{/bold}!',
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'magenta',
        border: {
          fg: '#f0f0f0'
        },
        hover: {
          bg: 'green'
        }
      }
    });
    return box;
  });
  // map('ui-form', () => new UiForm());
  // map('ui-entry', () => new UiEntry());
  // map('ui-multiline-entry', () => new UiMultilineEntry());
  // map('ui-combobox', () => new UiCombobox());
  // map('ui-checkbox', () => new UiCheckbox());
  // map('ui-hbox', () => new UiHorizontalBox());
  // map('ui-vbox', () => new UiVerticalBox());
  // map('ui-slider', () => new UiSlider());
  // map('ui-tab', () => new UiTab());
})(BlessedDOM.map);
