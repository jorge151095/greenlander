import { useForm } from 'react-hook-form';
import './checkout.styles.scss';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button/Button';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';

const Checkout = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { register, handleSubmit } = useForm();
    const [ payActive, setPayActive ]= useState(false);
    const [ modalOpen, setModalOpen ]= useState(false);
    const [ data, setData ] = useState({} as any);
    const [ ticket, setTicket ] = useState({} as any);

    const onSubmit = async (dataForm: any) => {
        setData(dataForm);
        setPayActive(true);
    }

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units:[{
                description: "Chamarras de piel",
                amount: {
                    currency_code: "MXN",
                    value: 0.1,
                }

            }]
        }).then ((orderId: any)=> {
            setModalOpen(true);
            setTicket(orderId);
            return orderId;
        }); 
    };


    const onError = (data: any) => {
        toast.error("Error con tu metodo de pago");
    };

    return <div className='checkout'>
        <h1>Finaliza la compra</h1>
        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Datos de envío</h2>
            <label>Nombre completo</label>
            <input type="text" {...register("name")} required/>
            <label>Calle</label>
            <input type="text" {...register("street")} required/>
            <label>Código Postal</label>
            <input type="text" {...register("postalCode")} required/>
            <label>Colonia</label>
            <input type="text" {...register("colony")} required/>
            <label>Municipio</label>
            <input type="text" {...register("town")} required/>
            <label>Estado</label>
            <input type="text" {...register("state")} required/>
            <label>Número de teléfono</label>
            <input type="number" {...register("phoneNumber")} required/>
            {   
                payActive ?
                    <PayPalButtons  
                    createOrder={createOrder}
                    onError={onError}
                    className='paypal'
                    /> : 
                    <Button type="submit" label="Continuar compra" className="dark"/>
            }
            
        </form>
        <Modal isOpen={modalOpen}>
            <div className='checkout-modal'>
                <h2>Compra exitosa</h2>
                <h3>Fecha {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                <h3>Numero de ticket: {ticket}</h3>
                <h3>Datos  de compra </h3>
                <label>Nombre: {data.name}</label>
                <label>Calle: {data.street}</label>
                <label>Codigo Postal: {data.postalCode}</label>
                <label>Numero telefonico: {data.phoneNumber}</label>

                {
                    productList.map((product: ProductCardProps) => {
                        return <div className='checkout-modal-product'>
                            <div className='checkout-modal-product-image'>
                                <img src={product.imagesUrl[0]} alt="" />
                            </div>
                            <label>{product.description}</label>
                            <label>Cantidad: {product.quantity}</label>
                            <label>Precio: ${product.quantity! * product.price}</label>
                        </div>
                    })
                }

            </div>
        </Modal>
        <ToastContainer/>
    </div>
}

export { Checkout };
