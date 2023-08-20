// // 주석은 ECMA 방식, 실제 작성된 것은 nodejs에서 쓰는 commonjs 방식
// // import autoprefixer from 'autoprefixer' 과 동일
// const autoprefixer = require('autoprefixer')

// // export {
// //     plugins: [
// //         autoprefixer
// //     ]
// // } 와 동일
// module.exports = {
//     plugins: [
//         autoprefixer
//     ]
// }

module.exports - {
    plugins: [
        require('autoprefixer')
    ]
}