import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/a97campos/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [])

    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <div><b>Nome:</b>{repositorio.name}</div>
                    <div><b>Url:</b><a href={repositorio.html_url} target="_blank">Visitar no GitHub</a></div>
                </li>
            ))}
        </ul>
        /* <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        */
    )
}

export default ReposList;