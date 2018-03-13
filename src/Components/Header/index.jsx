import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="back-to-home">
          <a href="https://bastionbot.org"><img src="https://bastionbot.org/assets/image/arrow_left.png" alt="" /></a>
        </div>
        <div title="Graphically create JSON for Discord message embeds, and use it with various bots/applications based on Discord API.">Embed Builder</div>
      </header>
    );
  }
}

export default Header;
