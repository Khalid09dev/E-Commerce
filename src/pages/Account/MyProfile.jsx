
const MyProfile = () => {
    return (
        <div>
            <div className="border px-16 py-10  shadow-lg rounded">
                <h3 className="text-[#DB4444] text-xl font-medium poppins pb-6">Edit Your Profile</h3>
                <div className="grid grid-cols-2 gap-5 mb-7">
                    <div><label>First Name</label> <br />
                    <input type="text" name="" id="" placeholder="John" className="bg-[#F5F5F5] mt-1 mr-7 py-2.5 pl-2 rounded w-full"/></div>
                    <div><label>Last Name</label> <br />
                    <input type="text" name="" id="" placeholder="Doe" className="bg-[#F5F5F5] mt-1 py-2.5 pl-2 rounded w-full"/></div>
                    <div><label>Email</label> <br />
                    <input type="email" name="" id="" placeholder="john@doe.com" className="bg-[#F5F5F5] mt-1 mr-7 py-2.5 pl-2 rounded w-full"/></div>
                    <div><label>Address</label> <br />
                    <input type="text" name="" id="" placeholder="Washington DC, USA" className="bg-[#F5F5F5] mt-1 py-2.5 pl-2 rounded w-full"/></div>
                </div>
                <label>Password Changes</label> <br />
                <input type="password" name="" id="" placeholder="Current Password" className="bg-[#F5F5F5] mt-1 mb-4 py-2.5 pl-2 rounded w-full"/> <br />
                <input type="password" name="" id="" placeholder="New Password" className="bg-[#F5F5F5] mb-4 py-2.5 pl-2 rounded w-full"/> <br />
                <input type="password" name="" id="" placeholder="Confirm New Password" className="bg-[#F5F5F5] mb-4 py-2.5 pl-2 rounded w-full"/>
                <div className="flex justify-end gap-6">
                    <button className="poppins text-base font-normal text-[#000]">Cancel</button>
                    <button className="text-white bg-[#DB4444] py-3 px-9 rounded" type="submit">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;