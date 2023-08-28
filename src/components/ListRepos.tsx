import { ReposProps } from "../types/repos";

interface ListReposProps {
   repos: ReposProps[] | [];
}

export const ListRepos = ({ repos }: ListReposProps) => {
   return (
      <div>
         {repos.map((repo: ReposProps) => (
            <div>
               <h1>{repo.name}</h1>
               <p>{repo.language}</p>
               <p>{repo.html_url}</p>
               <p>{repo.forks}</p>
               <p>{repo.stars}</p>
            </div>
         ))}
      </div>
   );
};
