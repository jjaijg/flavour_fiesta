import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { authConfig } from '../login/auth.config';
import dbConnect from '@/database/db';
import Role from '@/database/model/role.model';
import User from '@/database/model/user.model';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await dbConnect();

    const userRole = await Role.findOne({ name: 'user' });

    const newUser = await authConfig.adapter.createUser!({
      username,
      email,
      password: hashPassword,
      emailVerified: null,
    });

    const user = await User.findById(newUser.id).select('-password');
    user.roles.push(userRole);
    await user.save();

    return NextResponse.json({
      status: 201,
      data: user,
      message: 'User registered successfully',
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'error' });
  }
}
