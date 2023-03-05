import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'; // thu vien giup resolver yup cho react-hook-form
import { useForm } from 'react-hook-form'; // thu vien dung de quan ly du lieu trong form
import * as yup from 'yup'; // thu vien dung de validation

const Form = () => {
    const schema = yup.object().shape({
        username: yup.string().required("Tên người dùng không được bỏ trống!"),
        age: yup.number().positive().integer().min(18).required("Tên người dùng không được bỏ trống!"),
        email: yup.string().email().required("Email không được bỏ trống!"),
        password: yup.string().min(3).max(24).required("Mật khẩu không được bỏ trống!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Mật khẩu không giống nhau!").required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="username" placeholder='Username...' {...register("username")} />
                    <p style={{ color: 'red', fontStyle: 'italic' }}>{errors.username?.message}</p>
                    <input type="number" name="age" placeholder='Age...' {...register("age")} />
                    <p style={{ color: 'red', fontStyle: 'italic' }}>{errors.age?.message}</p>
                    <input type="email" name="email" placeholder='Email...' {...register("email")} />
                    <p style={{ color: 'red', fontStyle: 'italic' }}>{errors.email?.message}</p>
                    <input type="password" name="password" placeholder='Password...' {...register("password")} />
                    <p style={{ color: 'red', fontStyle: 'italic' }}>{errors.password?.message}</p>
                    <input type="password" name="confirmPassword" placeholder='Confirm password...' {...register("confirmPassword")} />
                    <p style={{ color: 'red', fontStyle: 'italic' }}>{errors.confirmPassword?.message}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form