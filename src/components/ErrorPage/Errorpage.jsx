import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Errorpage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-[100vh] flex items-center text-center justify-center">
        <div className="space-y-7">
            <h1 className="font-black text-9xl"> 404 </h1>
            <p className="text-4xl ">Sorry, an unexpected error has occurred.</p>
                <div>
                    {
                        error.status===404 && <div>
                        <h3>
                        
                            {error.message}
                        </h3>
                        <Link to='/' className="btn bg-black text-white">Home</Link>
                        </div>
                    }
            </div>
        </div>
      
      
      
    </div>
  );
}