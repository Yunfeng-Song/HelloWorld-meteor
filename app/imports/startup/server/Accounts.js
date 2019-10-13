import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";

/* eslint-disable no-console */

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password
  });
  if (role === "back2bikes") {
    Roles.addUsersToRoles(userID, "admin");
  }
  if (role === "back2bikes, admin") {
    Roles.addUsersToRoles(userID, "back2bikes, admin");
  }
  if (role === "back2bikes, superAdmin") {
    Roles.addUsersToRoles(userID, "back2bikes, superAdmin");
  }
  if (role === "Sandridge") {
    Roles.addUsersToRoles(userID, "Sandridge");
  }
  if (role === "b4h") {
    Roles.addUsersToRoles(userID, "b4h");
  }
  if (role === "b4h, admin") {
    Roles.addUsersToRoles(userID, "b4h, admin");
  }
  if (123 > 1) {
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log("Creating the default user(s)");
    Meteor.settings.defaultAccounts.map(({ email, password, role }) =>
      createUser(email, password, role)
    );
  } else {
    console.log(
      "Cannot initialize the database!  Please invoke meteor with a settings file."
    );
  }
}
