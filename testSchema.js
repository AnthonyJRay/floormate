[
  {
    user: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
      clients: [
        {
          firstName: "",
          lastName: "",
          address: "",
          phone: "",
          email: "",
        },
      ],
      estimates: [
        {
          no: "",
          date: "",
          client: "",
          lineItems: [
            {
              name: "",
              description: "",
              quantity: "",
              rate: "",
              total: "",
            },
          ],
          subtotal: "",
          tax: "",
          total: "",
          invoiced: false,
        },
      ],
      invoices: [
        {
          no: "",
          date: "",
          client: "",
          estimate: "",
          paid: false,
        },
      ],
      expenses: [
        {
          date: "",
          name: "",
          description,
          amount: "",
        },
      ],
      finances: {
        revenue: "",
        expenses: "",
        profit: "",
      },
    },
  },
];

// Use bCrypt to hash the password

// While registering a user, you can generate a hashed password using bcrypt.
// Let's call this password as P#1. Save this hashed password (P#1) in your database only, and not the salt.

// While logging in a user, generate hashed version of the password which the user sends, let's call it P#2.
// Now you just have to match P# and P#2. If they match, the user is authenticated.
// This way you can perform authentication without actually saving the salt in your database.
