import { helper } from '@ember/component/helper';

export function errorLength(params/*, hash*/) {
  return params[0].length;
}

export default helper(errorLength);
