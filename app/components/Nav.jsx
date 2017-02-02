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
            <IndexLink to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
              Timer
            </IndexLink>
          </li>
          <li>
            <IndexLink to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
              Count Down
            </IndexLink>
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
