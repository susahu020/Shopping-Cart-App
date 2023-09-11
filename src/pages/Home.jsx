import { useEffect, useState } from "react";
import Product from '../components/Product'

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true)
    try{
      const res = await fetch(API_URL)
      const data = await res.json();
      setPosts(data)

    }catch(error){
      console.log("Error got")
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? 
        (<div className="flex justify-center items-center min-h-[80vh]">
          <div className="spinner"></div>
        </div>) :
        (
          posts.length > 0 ? 
          (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl mx-auto gap-2 space-y-10 mb-8 min-h-[80vh]">
           { posts.map((post)=>(
              <Product key={post.id} post = {post}/>
            ))}
          </div>) :
          (<div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div>)
        )
      }
    </div>
  )
};

export default Home;
