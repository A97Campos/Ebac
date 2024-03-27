import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${idGitHUb}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [])

    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <p>
                        <b>Nome:</b> {repositorio.name}
                    </p>
                    <p><b>Linguagem:</b> {repositorio.language}</p>
                    <p>
                        <b>Url:</b><a href={repositorio.html_url} target="_blank">Visitar no GitHub</a>
                    </p>
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