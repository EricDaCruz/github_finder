import { Link } from "react-router-dom";
import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

export const User = ({
   avatar_url,
   login,
   location,
   following,
   followers,
}: UserProps) => {
   return (
      <div>
         <img src={avatar_url} alt={login} />
         <h2>{login}</h2>
         {location && (
            <p>
               <MdLocationPin />
               <span>{location}</span>
            </p>
         )}
         <div>
            <div>
               <p>Followers:</p>
               <p>{followers}</p>
            </div>
            <div>
               <p>Following:</p>
               <p>{following}</p>
            </div>

            <Link to={`/respos/${login}`}>See the best projects</Link>
         </div>
      </div>
   );
};
