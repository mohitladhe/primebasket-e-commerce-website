import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Orders from "../components/profile/Orders";
import Addresses from "../components/profile/Addresses";

import {
  FiUser,
  FiMapPin,
  FiBox,
  FiLogOut,
  FiEdit2,
  FiSave,
  FiUpload,
} from "react-icons/fi";

function Profile() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    phone: "",
    avatar_url: "",
  });

  const [editing, setEditing] = useState(false);

  // ---------------- FETCH PROFILE ----------------

  const fetchProfile = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.log("User not found", userError);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.log("Profile fetch error:", error);
      return;
    }

    if (data) {
      setProfile({
        full_name: data.full_name || "",
        email: data.email || user.email,
        phone: data.phone || "",
        avatar_url: data.avatar_url || "",
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ---------------- UPDATE PROFILE ----------------

  const updateProfile = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        phone: profile.phone,
        avatar_url: profile.avatar_url,
      })
      .eq("id", user.id);

    if (!error) {
      setEditing(false);
      alert("Profile updated");
    }
  };

  // ---------------- IMAGE UPLOAD ----------------

  const uploadAvatar = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const filePath = `${user.id}/${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);

    if (error) {
      alert("Upload failed");
      return;
    }

    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

    setProfile({
      ...profile,
      avatar_url: data.publicUrl,
    });
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}

          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Account</h1>

              <p className="text-gray-500">
                Manage your orders, addresses and profile
              </p>
            </div>

            <button
              onClick={async () => {
                await supabase.auth.signOut();
                location.href = "/login";
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <FiLogOut />
              Sign Out
            </button>
          </div>

          {/* TABS */}

          <div className="bg-white rounded-xl shadow p-2 flex gap-2 mb-6">
            <Tab
              icon={<FiUser />}
              text="Profile"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />

            <Tab
              icon={<FiMapPin />}
              text="Addresses"
              active={activeTab === "addresses"}
              onClick={() => setActiveTab("addresses")}
            />

            <Tab
              icon={<FiBox />}
              text="Orders"
              active={activeTab === "orders"}
              onClick={() => setActiveTab("orders")}
            />
          </div>

          {/* CONTENT */}

          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* PROFILE CARD */}

              <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={
                        profile.avatar_url ||
                        "https://randomuser.me/api/portraits/men/32.jpg"
                      }
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    {editing && (
                      <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow">
                        <FiUpload size={14} />
                        <input type="file" hidden onChange={uploadAvatar} />
                      </label>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {profile.full_name}
                    </h2>

                    <p className="text-gray-500 text-sm">Member since 2026</p>
                  </div>
                </div>

                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
                  >
                    <FiEdit2 />
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={updateProfile}
                    className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
                  >
                    <FiSave />
                    Save Changes
                  </button>
                )}
              </div>

              {/* PROFILE FORM */}

              <div className="bg-white rounded-xl shadow p-6 space-y-6">
                <Field
                  label="Full Name"
                  name="full_name"
                  value={profile.full_name}
                  editing={editing}
                  onChange={handleChange}
                />

                <Field
                  label="Email Address"
                  name="email"
                  value={profile.email}
                  editing={false}
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  value={profile.phone}
                  editing={editing}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {activeTab === "addresses" && <Addresses />}

          {activeTab === "orders" && <Orders />}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;

function Tab({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 rounded-lg transition ${
        active ? "bg-gray-100 font-medium" : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {icon}
      {text}
    </button>
  );
}

function Field({ label, name, value, editing, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-500 uppercase">{label}</label>

      {editing ? (
        <input
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full border rounded-lg p-3 mt-1 focus:border-green-500 outline-none"
        />
      ) : (
        <p className="mt-1 text-gray-800 font-medium">{value || "Not set"}</p>
      )}
    </div>
  );
}
