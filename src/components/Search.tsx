import { KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

interface Props {
   loadUser: (username: string) => Promise<void>;
}

export const Search = ({ loadUser }: Props) => {
   const [username, setUsername] = useState("");

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
         loadUser(username);
      }
   };

   return (
      <div className={classes.search}>
         <h2>Search for a user</h2>
         <p>Know your best repositories</p>
         <div className={classes.search_container}>
            <input
               type="text"
               placeholder="Enter the username"
               onChange={(e) => setUsername(e.target.value)}
               onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(username)}>
               <BsSearch />
            </button>
         </div>
      </div>
   );
};
