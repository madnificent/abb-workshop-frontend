import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('example-pie-chart', 'Integration | Component | example pie chart', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{example-pie-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#example-pie-chart}}
      template block text
    {{/example-pie-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
