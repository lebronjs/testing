let _fn = curry(function (a, b, c, d, e) {
    console.log(a + b + c + d + e);
});
_fn(1, 2, 3, 4, 5); //15
_fn(1, 2)(3, 4)(5); //15
_fn(1)(2)(3)(4)(5); //15

function curry(fn, len = fn.length) {
    return _curry.call(this, fn, len);
}

/** 方法一 */
// function _curry(fn, len, ...args) {
//     return function (...params) {
//         if (params.length === len) {
//             return fn(...params);
//         } else {
//             return _curry(fn, len, ...args).bind(this, ...[...args, ...params]);
//         }
//     };
// }

/** 方二 */
function _curry(fn, len, ...args) {
    return function (...params) {
        const _args = [...params, ...args];
        if (_args.length >= len) {
            return fn(..._args);
        } else {
            return _curry.call(this, fn, len, ..._args);
        }
    };
}
