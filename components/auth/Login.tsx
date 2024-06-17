'use client';
import { authenticate } from '@/database/actions';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import Card from '@mui/material/Card';
import GoogleButton from '../inputs/GoogleButton';
import meal from '@/assets/images/meal.jpg';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Button from '../inputs/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [errorMsg, dispatch] = useFormState(authenticate, '');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  if (session) router.replace('/');

  if (status === 'loading') return <h2>Loading...</h2>;
  if (status === 'authenticated') return null;

  return (
    <div className="flex items-center justify-center py-4 bg-slate-50">
      <Card>
        <div className="grid grid-cols-2 gap-3">
          <section className="h-full relative">
            <Image
              src={meal}
              width={400}
              className="h-full"
              // layout="responsive"
              // objectFit="contain"
              alt="Picture of the author"
            />
          </section>
          <section className="my-4 me-4 min-height">
            <div className="grid place-items-center">
              <GoogleButton />
            </div>
            <form action={dispatch} className="mt-4">
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
                <TextField
                  label="Email"
                  id="outlined-start-adornment"
                  // sx={{ m: 1, width: '25ch' }}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                />
                {/* <input
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Enter email id"
                /> */}
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <FormControl variant="outlined" sx={{ width: '100%' }}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    className="bg-gray-200 rounded  focus:outline-none w-full"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                {/* <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Password"
                /> */}
              </div>
              <Button label="login" className="w-full font-medium md:p-4" />
            </form>

            <span className="my-4">
              Don&apos;t have an account?
              <Link href="/signup" className="ml-2 underline">
                Sign up
              </Link>
            </span>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Login;
