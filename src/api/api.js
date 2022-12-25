import testPool from "pg";
const Pool = testPool.Pool;

const pool = new Pool({
  user: "postgres",
  password: "gres@!21",
  port: 5432,
  database: "floormate_db",
});

export function getTestData() {
  return pool.query("SELECT * FROM addstuff");
}

export function getEstimatesData() {
  return pool.query("SELECT * FROM Estimates;");
}

// Create User
// const insertSQL = `
//   INSERT INTO Users (
//     user_firstname,
//     user_lastname,
//     user_business_name,
//     user_address,
//     user_phone,
//     user_email,
//     user_password
//   ) VALUES ( $1, $2, $3, $4, $5, $6, $7)`;

//   const createNewUser = (insertSQL, userfirstName, userlastName, userbusinessName, userAddress, userPhone, userEmail, userPassword) => {

//   }

export function createNewUser(
  firstName,
  lastName,
  businessName,
  userAddress,
  phoneNumber,
  userEmail,
  userPassword
) {
  return pool.query(`
    INSERT INTO users (
      user_firstname,
      user_lastname,
      user_business_name,
      user_address,
      user_phone,
      user_email,
      user_password
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    )
  `);
}

// User Login
export function userLogin(userEmail, userPassword) {
  return pool.query();
}
