import React from 'react';

class Fields extends React.Component {
  addField(button) {
    let fields = document.getElementById('fields');
    let index = fields.children.length;


    if (index >= 24) {
      button.setAttribute('disabled', true);
    }
    else {
      button.removeAttribute('disabled');
    }

    fields.insertAdjacentHTML('beforeend',
      `<div id="field-${index}" class="embed-group" style="display: inline-block; margin-top: 0; width: 50%">
         <div class="field">
           <input type="text" name="field-${index}:name" maxlength="256" placeholder="Field ${index + 1} Name" />
           <textarea name="field-${index}:value" maxlength="1024" rows="2" placeholder="Field ${index +1} Description"></textarea>
           <label>
             <input type="checkbox" name="field-${index}:inline" onChange="let field = document.getElementById(this.name.replace(':inline', '')); this.checked ? field.setAttribute('style', 'display: inline-block; margin-top: 0; width: 50%;') : field.removeAttribute('style')"} checked />
             <span>Inline</span>
           </label>
         </div>
       </div>`);

    let removeBtn = document.getElementById('btn-removeField');
    removeBtn.removeAttribute('disabled');
  }

  removeField(button) {
    let fields = document.getElementById('fields');
    let index = fields.children.length;

    if (index - 1) {
      button.removeAttribute('disabled');
    }
    else {
      button.setAttribute('disabled', true);
    }

    let field = document.getElementById(`field-${index - 1}`);
    if (field) {
      field.parentNode.removeChild(field);
    }

    let addBtn = document.getElementById('btn-addField');
    addBtn.removeAttribute('disabled');
  }

  render() {
    return(
      <div className = "embed-group embed-fields">
        <div id = "fields"></div>
        <div className = "embed-group-controls">
          <button
            id = "btn-addField"
            type = "button"
            onClick = {event => this.addField(event.target)}
          >
            <span role = "img" aria-label = "Add Emoji">➕</span>&ensp;
            Add Field
          </button>
          <button
            id = "btn-removeField"
            type = "button"
            onClick = {event => this.removeField(event.target)}
          >
            <span role = "img" aria-label = "Remove Emoji">➖</span>&ensp;
            Remove Field
          </button>
        </div>
      </div>
    );
  }
}

export default Fields;
