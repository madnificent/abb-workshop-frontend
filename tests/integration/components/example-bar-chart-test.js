import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('example-bar-chart', 'Integration | Component | example bar chart', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{example-bar-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#example-bar-chart}}
      template block text
    {{/example-bar-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
