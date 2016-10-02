/**
 * Created by asiddiqui on 3/23/16.
 */

module.exports = function(app) {
 var User = app.models.reviewer;
 var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;
 //var Team = app.models.Team;

  User.find({where: {email: "asim@kr.com"}}, function (err, foundUser) {
    if (err) {
      throw err;
    }

    if (foundUser && foundUser.length > 0) {
      return;
    }

    User.create([
      {username: 'krAdmin', email: 'asim@kr.com', password: '12345', roles:["Admin"]}
    ], function (err, users) {
      if (err) throw err;

      console.log('Created users:', users);

      //find the sa roleID
      Role.find({
        where: {name: "Admin"}
      }, function (err, role) {
        if (err) throw err;

        console.log('Found role:', role);

        //make a super admin role mapping to zenAdmin1
        RoleMapping.create({
          principalType: RoleMapping.USER,
          principalId: users[0].id,
          roleId: role[0].id
        }, function (err, principal) {
          if (err) throw err;

          console.log('Created principal:', principal);
          //});
        });
      });
    });
  });
};
