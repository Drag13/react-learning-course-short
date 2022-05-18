import React, { memo, PureComponent, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useForm } from 'react-hook-form';

import { BaseSchema, InferType, object, string } from 'yup';

const validationSchema = object({
  email: string().required().email(),
  password: string().required().min(6).max(12),
});

type FormData = InferType<typeof validationSchema>;

const useYup = <T extends {}>(schema: BaseSchema<T>) => {
  return useCallback(
    async (data: T) => {
      try {
        const values = await schema.validate(data, { abortEarly: false });
        return { values, errors: {} };
      } catch (yupErrors: any) {
        const errors = yupErrors.inner.reduce(
          (acc, v: { message: string; path: string; type: string }) => {
            acc[v.path] = { type: v.type ?? 'validation', message: v.message };
            return acc;
          },
          {} as Record<string, {}>
        );
        return { values: {}, errors };
      }
    },
    [schema]
  );
};

const MyForm = memo(() => {
  const validations = useYup(validationSchema);
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: validations,
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))} name="myform">
      <h1>My form</h1>
      <input type="text" {...register('email')} />
      {errors?.email && errors?.email?.message}
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
});

class App extends PureComponent {
  render() {
    return (
      <>
        <MyForm />
      </>
    );
  }
}

const container = document.getElementById('root');
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
