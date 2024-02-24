


export default function Home() {

  // here we need to check user auth satus 

  // if (authenticated) : -> {give access to the application}

  // if (!authenticated) : -> {redirect to sign-in} 

  return (

    <div className="flex flex-col justify-center items-center h-screen ">

      <div className="flex flex-1 justify-center items-center">
        <div className=" text-center border-2 border-rose-500">
          BIENVENUE SUR VOTRE APPLICATION
        </div>
      </div>
    </div>

  );
}
