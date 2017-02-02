var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active">
              Timer
            </IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active">
              Count Down
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/bkdev98" target="_blank">Quoc Khanh</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
