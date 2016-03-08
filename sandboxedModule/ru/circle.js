var PI = 3.14

module.exports = function ( r ) {
 return PI * r * r
}

module.exports.circumference = function ( r ) {
 return 2 * PI * r
}