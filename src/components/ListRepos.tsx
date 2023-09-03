import { ReposProps } from "../types/repos";

import classes from "./ListRepos.module.css";

import { BsCodeSlash, BsStar } from "react-icons/bs";
import { AiOutlineFork } from "react-icons/ai";
import { FaRegFileCode } from "react-icons/fa";

interface ListReposProps {
   repos: ReposProps[] | [];
}
export const ListRepos = ({ repos }: ListReposProps) => {
   return (
      <div className={classes.container}>
         {repos.map((repo: ReposProps) => (
            <div className={classes.repo}>
               <p className={classes.title}>{repo.name}</p>
               <p className={classes.language}>
                  <BsCodeSlash /> {repo.language}
               </p>
               <div className={classes.interactions}>
                  <div>
                     <span>
                        <BsStar />
                     </span>
                     <p>{repo.stars}</p>
                  </div>
                  <div>
                     <span>
                        <AiOutlineFork />
                     </span>
                     <p>{repo.forks}</p>  
                  </div>
               </div>
               <div className={classes.link}>
                  <a href={repo.html_url} target="_blank">
                     See code <FaRegFileCode />
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};
