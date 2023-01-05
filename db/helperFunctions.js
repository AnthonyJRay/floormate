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

export function createNewUser(
  firstName,
  lastName,
  businessName,
  userAddress,
  phoneNumber,
  userEmail,
  userPassword
) {
  return pool.query(
    `
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
  `,
    [
      firstName,
      lastName,
      businessName,
      userAddress,
      phoneNumber,
      userEmail,
      userPassword,
    ]
  );
}

export function authUser(userEmail) {
  return pool.query(`SELECT * FROM users WHERE user_email = $1`, [userEmail]);
}

// User Login
export function userLogin(userEmail, userPassword) {
  return pool.query(
    `SELECT user_password FROM users WHERE ( user_email ) VALUES ($1)`,
    [userEmail]
  );
}
