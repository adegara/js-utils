import { set, transform } from 'lodash';

export function unflattenObject<TOutput extends object = object>(
    flattenedObj: Record<string, unknown>,
): TOutput {
    return transform<unknown, TOutput>(
        flattenedObj,
        (result: object, value: unknown, key: string) => {
            set(result, key, value);
        },
    );
}
