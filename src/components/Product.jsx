import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from '../redux/Slices/cartSlice'


const Product = ({post}) => {
  
  const {cart} = useSelector((state)=>state)
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(post))
    toast.success("Item added to cart")
  }

  function removeFromCart(){
    dispatch(remove(post.id))
    toast.error("Item removed from cart")
  }


  return (
    <div className="flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4  mt-10 ml-5 rounded-lg">
      <div>
        <p className="text-gray-700 truncate text-base text-left font-semibold">{post.title.split(" ").slice(0,2).join(" ")+ "..."}</p>
      </div>
      <div className="text-xs">
        <p className="w-45 text-gray-400 text-left font-normal text-[10px]">{post.description.split(" ").slice(0, 10).join(" ")+ "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="w-full h-full" alt="product-img" />
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-green-600 text-sm font-semibold">${post.price}</p>
        <div>
          {
            cart.some((p)=>p.id === post.id) ?
            (<button className="text-gray-700 border-2 border-gray-700 text-sm uppercase font-semibold px-4 py-1 rounded-2xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>
              Remove Item
            </button>):
            (<button className="text-gray-700 border-2 border-gray-700 text-sm uppercase font-semibold px-4 py-1 rounded-2xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>
              Add to Cart
            </button>)
          }
        </div>
      </div>
    </div>
  )
};

export default Product;
