/**
 * Generate JSON Button
 */
function generateJSON() {
  let form = document.getElementById('embed-builder');

  let embedObject = {};

  let regex = {
    url: /^(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/i,
    imageURL: /^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i
  };

  // Color
  let color = form.elements['color'].value;
  if (color) {
    embedObject.color = parseInt(color);
  }
  // Author
  let author_name = form.elements['author:name'].value;
  if (author_name) {
    if (!embedObject.hasOwnProperty('author')) {
      embedObject.author = {}
    }
    embedObject.author.name = author_name;

    let author_url = form.elements['author:url'].value;
    if (author_url && regex.url.test(author_url)) {
      embedObject.author.url = author_url;
    }

    let author_icon_url = form.elements['author:icon_url'].value;
    if (author_icon_url && regex.imageURL.test(author_icon_url)) {
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
  if (url && regex.url.test(url)) {
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
  if (thumbnail && regex.imageURL.test(thumbnail)) {
    if (!embedObject.hasOwnProperty('thumbnail')) {
      embedObject.thumbnail = {}
    }
    embedObject.thumbnail.url = thumbnail;
  }
  // Image
  let image = form.elements['image:url'].value;
  if (image && regex.imageURL.test(image)) {
    if (!embedObject.hasOwnProperty('image')) {
      embedObject.image = {}
    }
    embedObject.image.url = image;
  }
  // Video
  // let video = form.elements['video'].value;
  // if (video) {
  //   if (!embedObject.hasOwnProperty('video')) {
  //     embedObject.video = {}
  //   }
  //   embedObject.video.url = video;
  // }
  // Footer
  let footer_text = form.elements['footer:text'].value;
  if (footer_text) {
    if (!embedObject.hasOwnProperty('footer')) {
      embedObject.footer = {}
    }
    embedObject.footer.text = footer_text;

    let footer_icon_url = form.elements['footer:icon_url'].value;
    if (footer_icon_url && regex.imageURL.test(footer_icon_url)) {
      embedObject.footer.icon_url = footer_icon_url;
    }
  }

  // Timestamp
  let timestamp = form.elements['timestamp'].checked;
  if (timestamp) {
    embedObject.timestamp = new Date();
  }

  document.getElementById('json-output').innerHTML = JSON.stringify(embedObject, null, '  ');
}


/**
 * Activate color picker
 */
$('#color').ColorPicker({
  onChange: function (hsb, hex, rgb) {
    document.getElementById('builder-container').style['border-left'] = `5px solid #${hex}`;
    let color = document.getElementById('color');
    let rgbInt = 256 * 256 * Math.round(rgb.r) + 256 * Math.round(rgb.g) + Math.round(rgb.b);
    $(color).val(rgbInt);
  }
});


/**
 * Copy JSON Button
 */
 function copyJSON() {
   $('#json-output').select();
   document.execCommand('copy');
 }


/**
 * Toggle Input Groups
 */
// function toggleGroup(group) {
//   if (group.checked) {
//     document.getElementById(`group:${group.name}`).removeAttribute('hidden');
//   }
//   else {
//     document.getElementById(`group:${group.name}`).setAttribute('hidden', true);
//   }
// }

/**
 * Add Field
 */
function addField(button) {
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
           <input type="checkbox" name="field-${index}:inline" onChange="toggleInline(this)" checked />
           <span>Inline</span>
         </label>
       </div>
     </div>`);

  let removeBtn = document.getElementById('btn-removeField');
  removeBtn.removeAttribute('disabled');
}

/**
 * Remove Field
 */
function removeField(button) {
  let fields = document.getElementById('fields');
  let index = fields.children.length;

  if (index - 1) {
    button.removeAttribute('disabled');
  }
  else {
    button.setAttribute('disabled', true);
  }

  let field = document.getElementById(`field-${index - 1}`);
  field.parentNode.removeChild(field);

  let addBtn = document.getElementById('btn-addField');
  addBtn.removeAttribute('disabled');
}


function toggleInline(element) {
  let field = document.getElementById(element.name.replace(':inline', ''));
  if (!element.checked) {
    field.removeAttribute('style');
  }
  else {
    field.setAttribute('style', 'display: inline-block; margin-top: 0; width: 50%;');
  }
}
