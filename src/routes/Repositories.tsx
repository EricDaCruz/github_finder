import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repositories.module.css";
import { ListRepos } from "../components/ListRepos";
import { ThreeDots } from "react-loader-spinner";
import { ReposProps } from "../types/repos";

export const Repositories = () => {
   const { username } = useParams();
   const [repos, setRepos] = useState<ReposProps[] | []>([]);
   const [loading, setLoading] = useState(false);

   const loadRepos = async (username: string | undefined) => {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      return data;
   };

   useEffect(() => {
      setLoading(true);

      async function getRepos() {
         const data = await loadRepos(username);

         const dataRepos = data.map((repo: any) => {
            const dataRepo: ReposProps = {
               name: repo.name,
               language: repo.language,
               html_url: repo.html_url,
               forks: repo.forks,
               stars: repo.stargazers_count,
            };

            return dataRepo;
         });

         setRepos(dataRepos);
         setLoading(false);
      }

      getRepos();
   }, []);

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
            <ListRepos repos={repos} />
         )}
      </div>
   );
};
