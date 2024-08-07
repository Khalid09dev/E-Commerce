import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { TfiPackage } from "react-icons/tfi";
import { GiCancel } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import PropTypes from 'prop-types';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);     
    const axiosSecure = useAxiosSecure();

    const { data: carts = [], refetch } = useQuery({
        queryKey: ["carts"],
        queryFn: async () => {
        const res = await axiosSecure.get(`users/userProductCarts/${user.email}`, {
            headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
        });
        return res.data;
        },
    });

    const handleLogout = () => {
        logOut()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <nav className="flex items-center justify-around pt-10 border-b pb-5"> 
                <Link to="/"><h1 className="text-[#000] text-2xl font-semibold">DashDeals</h1></Link>
                <ul className="flex gap-12 items-center">
                    <Link to="/" className="text-[#000] text-base font-medium"><li href="#">Home</li></Link>
                    <Link to="/contact" className="text-[#000] text-base font-medium"><li href="#">Contact</li></Link>
                    <Link to="/about" className="text-[#000] text-base font-medium"><li href="#">About</li></Link>
                    <Link to="/signup" className="text-[#000] text-base font-medium"><li href="#">Signup</li></Link>
                </ul>
                <div className="flex items-center gap-6">
                    <div className="flex relative"><input className="bg-[#F5F5F5] py-2.5 pl-4 pr-10 rounded focus:outline-none" type="text" name="" id="" placeholder="What are you looking for?"/>
                    <CiSearch className="absolute right-4 top-2.5 text-2xl font-medium placeholder:text-[10px] placeholder:font-normal"/></div>
                    <Link to="/wishlist"><FaRegHeart className="text-2xl"/></Link>
                    <div className="relative">
                        <Link to="/carts"><BsCart3 className="text-2xl"/></Link>
                        {carts.length > 0 && <span className="absolute bottom-3 left-4 bg-red-100 px-[7px] rounded-full">{carts.length}</span>}
                    </div>

                    {user &&
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL}/>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black bg-opacity-35 backdrop-blur-sm rounded-box w-52">
                            <li className="pb-1">
                            <Link to="/account/manageMyAccount" className="justify-between">
                                <FiUser className="text-white text-xl"/>
                                <p className="text-white">Manage My Account</p>
                            </Link>
                            </li>
                            <li className="pb-1"><Link to="/myorders"><TfiPackage className="text-white text-xl"/><span className="text-white">My Order</span></Link></li>
                            <li className="pb-1"><a><GiCancel className="text-xl text-white"/><span className="text-white">My Cancellations</span></a></li>
                            <li className="pb-1"><a><FaRegStar className="text-xl text-white"/><span className="text-white">My Reviews</span></a></li>
                            <li onClick={handleLogout} className="pb-1"><a><SlLogout className="text-xl text-white"/><span className="text-white">Logout</span></a></li>
                        </ul>
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
};

// Navbar.propTypes = {
//     products: PropTypes.array.isRequired
// };

export default Navbar;