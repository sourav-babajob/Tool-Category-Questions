const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

mongoose.Promise = global.Promise;
var conn      = mongoose.createConnection('mongodb://localhost/content');
var SchemaTypes = mongoose.Schema.Types;
const categorySchema = new mongoose.Schema({
  value: {
    id: { type: SchemaTypes.Double, default: 999.0 },
    name: { type: String, default: '' }
  }},{
    versionKey: false // You should be aware of the outcome after set to false
}
);

// /**
//  * Password hash middleware.
//  */
// userSchema.pre('save', function (next) {
//   const user = this;
//   if (!user.isModified('password')) { return next(); }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) { return next(err); }
//     bcrypt.hash(user.password, salt, null, (err, hash) => {
//       if (err) { return next(err); }
//       user.password = hash;
//       next();
//     });
//   });
// });


const Category = conn.model('Category', categorySchema);

module.exports = Category;