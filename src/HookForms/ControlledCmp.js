import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    // mode: 'onValidate',
    // defaultValues: {
    //   name: 'Faouzi',
    //   phoneNumber: '07522522432',
    //   email: 'faouzi@natwest.com',
    // },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed"
      style={{ height: '100vh' }}>
      <div
        className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col"
        style={{ height: '375px' }}>
        <h2 className="text-center font-medium text-2xl mb-4">
          React Hook Form
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-evenly">
          {/* NAME FIELD */}
          <input
            className="border-2 outline-none p-2 rounded-md"
            {...register('name', {
              required: 'The name cannot be empty',
            })}
          />
          <span className="text-sm text-red-700">{errors?.name?.message}</span>
          {/* NAME FIELD */}

          {/* PHONE NUMBER FIELD */}
          <input
            className="border-2 outline-none p-2 rounded-md"
            {...register('phoneNumber', {
              required: 'This phone number cannot be empty',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a number',
              },
            })}
          />
          <span className="text-sm text-red-700">
            {errors?.phoneNumber?.message}
          </span>
          {/* PHONE NUMBER FIELD */}

          {/* EMAIL FIELD */}
          <input
            className="border-2 outline-none p-2 rounded-md"
            {...register('email', {
              required: 'Your email is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please check your email',
              },
            })}
          />
          <span className="text-sm text-red-700">{errors?.email?.message}</span>
          {/* EMAIL FIELD */}

          {/* SUBMIT BUTTON */}
          <button
            className="flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type="submit"
            disabled={!isValid}>
            <span>Submit</span>
          </button>
          {/* SUBMIT BUTTON */}
        </form>
      </div>
    </div>
  );
};

export default App;
