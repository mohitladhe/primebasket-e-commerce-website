import { useAuth } from "../context/AuthContext";

function Profile(){

const { user } = useAuth();

return(

<div className="max-w-4xl mx-auto p-10">

<h1 className="text-2xl font-bold mb-6">Profile</h1>

<div className="bg-white shadow p-6 rounded-lg">

<p><b>Email:</b> {user?.email}</p>

</div>

</div>

)

}

export default Profile;