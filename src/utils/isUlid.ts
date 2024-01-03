import { isString } from 'lodash';

export function isUlid(value: unknown): value is string {
    const reg = /^[0-9A-HJKMNP-TV-Z]{26}$/;

    return isString(value) && reg.test(value);
}
