import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repositories.module.css";
import { ListRepos } from "../components/ListRepos";
import { ThreeDots } from "react-loader-spinner";

export const Repositories = () => {
   const { username } = useParams();
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}/repos`)
         .then((res) => res.json())
         .then((data) => {
            setRepos(data);
            setLoading(false);
         });
   }, []);

   console.log(repos);

   return (
      <div>
         <h1 className={classes.title}>
            Explore user repositories: {username}
         </h1>
         {loading ? (
            <div className={classes.loading}>
               <ThreeDots
                  height="80"
                  width="80"
                  color="#fff"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
               />
            </div>
         ) : (
            <ListRepos />
         )}
      </div>
   );
};
