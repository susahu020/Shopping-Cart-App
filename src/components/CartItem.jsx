import { toast } from 'react-hot-toast';
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/cartSlice'

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
    <div className='flex gap-14 p-10 justify-center items-center '>
      <div className='w-full max-w-[20%]'>
        <img src={item.image} alt="" />
      </div>
      <div className='flex flex-col gap-3 self-start space-y-5 ml-10'>
        <p className='text-xl font-semibold text-slate-700'>{item.title}</p>
        <p className='text-base font-medium text-slate-700 '>{item.description}</p>
        <div className='w-full flex justify-between'>
          <p className='text-green-700 font-semibold'>{item.price}</p>
          <div className=' flex justify-center items-center rounded-full cursor-pointer text-red-800 mr-8 text-2xl bg-red-300 w-10 h-10 ' onClick={removeFromCart}><AiFillDelete/></div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
