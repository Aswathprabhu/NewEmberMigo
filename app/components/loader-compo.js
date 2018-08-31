import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didRender() {
      this._super(...arguments);

      let $ppc = $('.progress-pie-chart').eq(this.get('index'));
      let deg = 360 * this.get('percent') / 100;

      if (this.get('percent') > 50) {
         $ppc.addClass('gt-50');
      }
       $('.ppc-progress-fill').eq(this.get('index')).css('transform', 'rotate(' + deg + 'deg)');
       $('.ppc-percents span').eq(this.get('index')).html(this.get('percent') + '%');

      }
});
