import React, { useState, useEffect } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem"; // Assuming this component exists

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const getDashboardData = () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const plan = user?.publicMetadata?.plan || "Free";

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
          <div className="text-slate-700">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {creations.length}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex items-center justify-center">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
          <div className="text-slate-700">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {plan}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex items-center justify-center">
            <Gem className="w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-3">
        <p className="mt-6 mb-4 text-slate-600 font-medium">Recent Creations</p>
        {creations.length === 0 ? (
          <p className="text-gray-500">No creations found.</p>
        ) : (
          creations.map((item) => <CreationItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;