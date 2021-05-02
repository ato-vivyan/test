import Vue from 'vue';
import { format } from 'date-fns';

Vue.mixin({
  methods: {
    // 日付表示
    shortDate(date) {
      return format(new Date(date), 'yyyy-MM-dd');
    }
  }
});
