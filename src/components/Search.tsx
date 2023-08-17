import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
   loadUser: (username: string) => Promise<void>;
}

export const Search = ({ loadUser }: Props) => {
   const [username, setUsername] = useState("");

   return (
      <div>
         <h2>Search for a user</h2>
         <p>Know your best repositories</p>
         <div>
            <input
               type="text"
               placeholder="Enter the username"
               onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => loadUser(username)}>
               <BsSearch />
            </button>
         </div>
      </div>
   );
};
