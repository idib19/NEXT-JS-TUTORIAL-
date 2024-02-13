import NavBar from "@/components/navbar";

export default function Home() {
  return (

    <div className="flex flex-col justify-center items-center h-screen ">
      <NavBar />
      <div className="flex flex-1 justify-center items-center">
        <div className=" text-center border-2 border-rose-500">
          BIENVENUE SUR VOTRE APPLICATION
        </div>
      </div>
    </div>

  );
}
