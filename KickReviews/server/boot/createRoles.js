/**
 * Created by asiddiqui on 3/21/16.
 */

module.exports = function (app) {
 var async = require('async');

 var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;

 var roleInSystem = [
   'Admin',
   'Reviewer'
 ];

 async.forEach(roleInSystem, function (role, cb) {
   Role.find({where: {name: role}}, function (err, foundRole) {
     if (err) {
       return cb(err);
     }

     if (foundRole && foundRole.length > 0) {
       return cb();
     }

     Role.create({name: role}, function (err, createdRole) {
       if (err) {
         return cb(err);
       }

       console.log('Roles: Role %s created', role);

       cb();
     });
   });
 }, function (err) {
   if (err) {
     return console.log(err);
   }
 });
};
