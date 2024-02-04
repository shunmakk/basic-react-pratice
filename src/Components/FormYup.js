import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // yupResolver を名前付きエクスポートとしてインポート
import * as yup from 'yup';

const scheme = yup.object({
  name: yup
    .string()
    .label('名前')
    .required('名前は必須項目です')
    .max(20, '名前は20文字以内で入力してください'), // 変数 max を文字列として直接指定
  gender: yup
    .string()
    .label('性別')
    .required('性別は必須項目です'),
  email: yup
    .string()
    .label('メールアドレス')
    .required('メールアドレスは必須項目です')
    .email('メールアドレスの形式が不正です'),
  memo: yup
    .string()
    .label('備考')
    .required('備考は必須項目です')
    .min(10, '備考は10文字以上で入力してください'), // 変数 min を文字列として直接指定
});

const FormYup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '田中太郎',
      email: 'tanaka@example.com',
      gender: 'male',
      memo:  ''
    },
    resolver:  yupResolver(scheme),
  });

  const onSubmit = data => console.log(data);
  const onError = err =>  console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <div>
        <label htmlFor='name'>名前:</label><br/>
        <input id="name" type="text" {...register('name')} />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor='gender'>性別:</label><br/>
        <label>
          <input type="radio" value="male" {...register('gender')} />男性
        </label>
        <label>
          <input type="radio" value="female" {...register('gender')} />女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor='email'>メールアドレス:</label><br/>
        <input id="email" type="email" {...register('email')} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor='memo'>備考:</label><br/>
        <textarea id="memo" {...register('memo')} />
        <div>{errors.memo?.message}</div>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default FormYup;
