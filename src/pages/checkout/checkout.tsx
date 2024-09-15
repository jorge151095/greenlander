import { useForm } from 'react-hook-form';
import './checkout.styles.scss';

const Checkout = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)
    }

    return <div className='checkout'>
        <h1>Finaliza la compra</h1>
        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Datos de envío</h2>
            <label>Nombre completo</label>
            <input type="text" {...register("name")}/>
            <label>Calle</label>
            <input type="text" {...register("street")}/>
            <label>Código Postal</label>
            <input type="text" {...register("postalCode")}/>
            <label>Colonia</label>
            <input type="text" {...register("colony")}/>
            <label>Municipio</label>
            <input type="text" {...register("town")}/>
            <label>Estado</label>
            <input type="text" {...register("state")}/>
            <label>Número de teléfono</label>
            <input type="number" {...register("phoneNumber")}/>
            <button type='submit'>Continuar compra</button>
        </form>
    </div>
}

export { Checkout };
