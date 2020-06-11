import React from 'react';
import { RegEx } from '../constants';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      embedObject: {}
    };
  }

  generateJSON() {
    let form = document.getElementById('embed-builder');

    let embedObject = {};

    // Color
    let color = form.elements['color'].value;
    if (color) {
      embedObject.color = parseInt(color, 10);
    }
    // Author
    let author_name = form.elements['author:name'].value;
    if (author_name) {
      if (!embedObject.hasOwnProperty('author')) {
        embedObject.author = {}
      }
      embedObject.author.name = author_name;

      let author_url = form.elements['author:url'].value;
      if (author_url && RegEx.URL.test(author_url)) {
        embedObject.author.url = author_url;
      }

      let author_icon_url = form.elements['author:icon_url'].value;
      if (author_icon_url && RegEx.imageURL.test(author_icon_url)) {
        embedObject.author.icon_url = author_icon_url;
      }
    }
    // Title
    let title = form.elements['title'].value;
    if (title) {
      embedObject.title = title;
    }
    // URL
    let url = form.elements['url'].value;
    if (url && RegEx.URL.test(url)) {
      embedObject.url = url;
    }
    // Description
    let description = form.elements['description'].value;
    if (description) {
      embedObject.description = description;
    }
    // Fields
    let fields = document.getElementById('fields').children;
    if (fields.length) {
      if (!embedObject.hasOwnProperty('fields')) {
        embedObject.fields = [];
      }

      for (let i = 0; i < fields.length; i++) {
        let field_name = form.elements[`field-${i}:name`].value;
        let field_value = form.elements[`field-${i}:value`].value;
        let field_inline = form.elements[`field-${i}:inline`].checked;

        if (field_name && field_value) {
          embedObject.fields.push({
            name: field_name,
            value: field_value,
            inline: field_inline
          });
        }
      }
    }
    // Thumbnail
    let thumbnail = form.elements['thumbnail:url'].value;
    if (thumbnail && RegEx.imageURL.test(thumbnail)) {
      embedObject.thumbnail = thumbnail;
    }
    // Image
    let image = form.elements['image:url'].value;
    if (image && RegEx.imageURL.test(image)) {
      embedObject.image = image;
    }

    // Video
    // let video = form.elements['video'].value;
    // if (video) {
    //   if (!embedObject.hasOwnProperty('video')) {
    //     embedObject.video = {}
    //   }
    //   embedObject.video.url = video;
    // }

    // Timestamp
    let timestamp = form.elements['timestamp'].checked;
    if (timestamp) {
      embedObject.timestamp = new Date();
    }

    document.getElementById('json-output').innerHTML = JSON.stringify(embedObject, null, '  ');

    // Code highlighter
    let jsonOutput = document.getElementById('json-output').innerHTML;
    jsonOutput = jsonOutput.replace(/"([\w]*)":/g, '<span class="highlight key">"$1"</span>:');
    jsonOutput = jsonOutput.replace(/(\d*),/g, '<span class="highlight number">$1</span>,');
    jsonOutput = jsonOutput.replace(/: (true|false)/g, ': <span class="highlight boolean">$1</span>');
    jsonOutput = jsonOutput.replace(/: "(.*?)"/g, ': <span class="highlight string">"$1"</span>');
    document.getElementById('json-output').innerHTML = jsonOutput;
  }

  copyJSON() {
    let element = document.getElementById('json-output');
    if (document.selections) {
      let range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select().createTextRange();
      document.execCommand('Copy');
    }
    else if (window.getSelection) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().addRange(range);
      document.execCommand('Copy');
    }
    else {
      console.error('Unable to automatically copy the output, please copy it manually and report the issue on GitHub: https://github.com/TheBastionBot/embedbuilder/issues/new?title=The+copy+button+is+not+working');
    }
  }

  render() {
    return(
      <div className = "cell">
        <div id = "output-container">
          <div className = "controller">
            <button onClick = {() => this.generateJSON()}>
              <span role="img" aria-label="Gear Emoji">⚙</span>&ensp;Generate JSON
            </button>
            <button onClick = {() => this.copyJSON()}>
              <span role="img" aria-label="Copy Emoji">🔗</span>&ensp;Copy JSON
            </button>
          </div>
          <div className="output">
            <pre><div id="json-output" readOnly>{JSON.stringify(this.state.embedObject, null, 2)}</div></pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
