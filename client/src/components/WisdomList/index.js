import React from 'react';
import { Link } from 'react-router-dom';

const WisdomList = ({ wisdoms }) => {
  if (!wisdoms.length) {
    return <h3>No Wisdoms Yet</h3>;
  }

  return (
    <div>
      {/* <h3>{title}</h3> */}
      {wisdoms &&
        wisdoms.map(wisdom => (
          <div key={wisdom._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${wisdom.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {wisdom.username}
              </Link>{' '}
              {/* thought on {wisdom.createdAt} */}
            </p>
            <div className="card-body">
                <p>{wisdom.thoughtText}</p>
            </div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${wisdom.youTubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ))}
    </div>
  );
};

export default WisdomList;