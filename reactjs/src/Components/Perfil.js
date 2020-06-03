import React from "react";

const Perfil = ({ dados }) => {
  const {
    avatar_url,
    login,
    name,
    location,
    bio,
    public_repos,
    followers,
    following,
    html_url,
  } = dados;
  return (
    <div className="card-container">
      <div className="upper-container">
        <div className="image-container">
          <img src={avatar_url} alt="avatar" />
        </div>
      </div>

      <div className="lower-container">
        <div>
          <h3>Usuário: {login}</h3>
          {name && <h4>Nome: {name}</h4>}
          {location && <p>Localização: {location}</p>}
          {bio && <p>Bio: {bio}</p>}
        </div>

        <ul>
          <li>
            <a
              href={`${html_url}/repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {public_repos} Repositórios
            </a>
          </li>

          <li>
            <a
              href={`${html_url}/following`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {following} Seguindo
            </a>
          </li>

          <li>
            <a
              href={`${html_url}/followers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {followers} Seguidores
            </a>
          </li>
        </ul>

        <hr />

        <a href={html_url} className="btn">
          Ver Perfil Completo
        </a>
      </div>
    </div>
  );
};

export default Perfil;
