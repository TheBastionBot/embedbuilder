import React from "react";

export default class Header extends React.PureComponent {
  render = () => (
    <header>
      <div id="back-to-home">
        <a href="https://bastion.traction.one">&larr;</a>
      </div>
      <div title="Graphically create Bastion Embed Objects, and use it with various commands of Bastion.">Bastion Embed Builder</div>
    </header>
  );
}
