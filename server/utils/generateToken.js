import jwt from 'jsonwebtoken';

export const generateToken = (res, user, message) => {
  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    },
  );
  return res
    .status(200)
    .cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      //   secure: process.env.NODE_ENV === 'production',
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
