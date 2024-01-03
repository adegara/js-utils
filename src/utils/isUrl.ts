import { isString } from 'lodash';

export function isUrl(value: unknown): value is string {
    const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;

    return isString(value) && reg.test(value);
}
