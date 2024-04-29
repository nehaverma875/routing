import React from 'react';
import Sidebar from "../Components/Sidebar";

export default function Home() {
  // const isLoggedIn = useSelector(state=>state.login.isLoggedIn)

  return (
    <main className="w-40 flex">
      <Sidebar />
      <section>home</section>
    </main>
  );
}
