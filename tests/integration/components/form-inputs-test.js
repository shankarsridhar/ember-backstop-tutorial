import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import backstop from 'ember-backstop/test-support/backstop';

module('Integration | Component | form-inputs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<FormInputs />`);
    await backstop(assert);
  });
});
