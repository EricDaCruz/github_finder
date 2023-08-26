import { Link } from "react-router-dom";
import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

import classes from "./User.module.css";

export const User = ({
   avatar_url,
   login,
   location,
   following,
   followers,
}: UserProps) => {
   return (
      <div className={classes.user}>
         <img src={avatar_url} alt={login} />
         <h2>{login}</h2>
         {location && (
            <p className={classes.location}>
               <MdLocationPin />
               <span>{location}</span>
            </p>
         )}
         <div className={classes.stats}>
            <div>
               <p>Followers:</p>
               <p className={classes.num}>{followers}</p>
            </div>
            <div>
               <p>Following:</p>
               <p className={classes.num}>{following}</p>
            </div>
         </div>
         <Link to={`/repos/${login}`}>See the best projects</Link>
      </div>
   );
};
