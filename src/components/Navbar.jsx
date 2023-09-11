import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state)=> state)

  return (
    <div>
      <nav className='flex justify-between py-4 items-center max-w-6xl mx-auto'>

        <NavLink to="/"><div><img src="./logo.png" alt="logo" className='ml-3 h-14' /></div></NavLink>


        <div className='flex gap-4 text-slate-100  font-semibold items-center'>

          <NavLink to="/" >Home</NavLink>

          <NavLink to="/cart">
            <div className="hover:text-green-500 relative" >
              <FaShoppingCart className='text-xl'/>
              {
                cart.length > 0 && 
                <span className='absolute -top-2 -right-2 bg-green-500 text-[10px] w-4 h-4 flex justify-center items-center animate-bounce rounded-full  text-white font-semibold'>{cart.length}</span>
              }
            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
