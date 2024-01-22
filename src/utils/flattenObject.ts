import { assign, cloneDeep, isArray, isObject, transform } from 'lodash';

// eslint-disable-next-line @typescript-eslint/ban-types
type NotArrayOrObjectType = string | number | boolean | null | undefined | symbol | Function;
type FlattenedObjectType = Record<string, NotArrayOrObjectType>;

export function flattenObject<TOutput extends FlattenedObjectType = FlattenedObjectType>(
    obj: object,
    prefix: string = '',
): TOutput {
    return transform(
        cloneDeep(obj),
        (result: FlattenedObjectType, value, key) => {
            let newKey: string;

            if (isArray(obj)) {
                newKey = `${prefix}[${key}]`;
            } else {
                newKey = prefix ? `${prefix}.${key}` : key;
            }

            if (!isObject(value)) {
                result[newKey] = value as NotArrayOrObjectType;

                return;
            }

            assign(result, flattenObject(value, newKey));
        },
        {},
    ) as TOutput;
}
