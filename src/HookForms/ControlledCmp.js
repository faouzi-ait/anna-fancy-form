import { useForm, Controller } from 'react-hook-form';
import Input from '../ui/Input';

import * as util from '../utils';

const App = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    // mode: 'onValidate',
    defaultValues: util.defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed"
      style={{ height: '100vh' }}>
      <div className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col form-container">
        <h2 className="text-center font-medium text-2xl mb-4">
          React Hook Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Your name is required' }}
            render={({ field: { ref, ...field } }) => (
              <Input
                {...field}
                label="Name"
                type="text"
                name="name"
                aria-invalid={!!errors?.name}
                labelClassName="label-style"
                className={util.inputStyle}
                style={util.setErrorStyle(errors?.name)}
                errorMessage={errors?.name?.message}
                placeholder="Your Firstname"
              />
            )}
          />

          <Controller
            name="surname"
            control={control}
            rules={{ required: 'Your surname is required' }}
            render={({ field: { ref, ...field } }) => (
              <Input
                {...field}
                label="Surname"
                type="text"
                name="surname"
                aria-invalid={!!errors?.surname}
                labelClassName="label-style"
                className={util.inputStyle}
                style={util.setErrorStyle(errors?.surname)}
                errorMessage={errors?.surname?.message}
                placeholder="Your Lastname"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={util.emailFormPattern}
            render={({ field: { ref, ...field } }) => (
              <Input
                {...field}
                label="Email"
                type="email"
                name="email"
                aria-invalid={!!errors?.email}
                labelClassName="label-style"
                className={util.inputStyle}
                style={util.setErrorStyle(errors?.email)}
                placeholder="your-email@somewhere.com"
                errorMessage={errors?.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: 'You must specify a password',
              minLength: {
                value: 5,
                message: 'Passwords must have at least 6 characters',
              },
              maxLength: {
                value: 10,
                message: 'Passwords must have 10 characters at most',
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <Input
                {...field}
                type="password"
                name="password"
                label="Password"
                aria-invalid={!!errors.password}
                labelClassName="label-style"
                className={util.inputStyle}
                style={util.setErrorStyle(errors?.password)}
                placeholder="Please enter your password"
                errorMessage={errors?.password?.message}
              />
            )}
          />

          <button
            className="flex justify-center p-2 rounded-md w-full self-center bg-gray-900  text-white hover:bg-gray-800 margin"
            type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
