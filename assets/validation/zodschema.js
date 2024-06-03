const zod = require('zod');

const RegisterSchema = zod.object({
  username: zod
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid Email Address' })
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, { message: 'Email must be a Gmail address ending with @gmail.com' })
    .min(3, { message: 'Email should be at least 3 characters' })
    .max(255, { message: 'Email can be at most 255 characters' }),
  password: zod
    .string({ required_error: 'Password is required' })
    .trim()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(1024, { message: 'Password must be at most 1024 characters' })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[!@#$%^&*]/, {
      message:
        'Password must contain at least one special character (!@#$%^&*)',
    }),
});

module.exports = RegisterSchema;
