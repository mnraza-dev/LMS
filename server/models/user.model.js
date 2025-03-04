import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'instructor'],
      default: 'student',
    },
    enrolledCourses: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
      },
    ],
    photoUrl: {
      type: String,
      default:
        'https://res.cloudinary.com/dxayftnxb/image/upload/v1620389659/avatars/avatar1.png',
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model('User', userSchema);
