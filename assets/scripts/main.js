/**
 * Generate JSON Button
 */
function generateJSON() {
  let form = document.getElementById('embed-builder');

  // let embedObject = {
  //   author: {
  //     name: '',
  //     url: '',
  //     icon_url: ''
  //   },
  //   fields: [],
  //   footer: {
  //     text: '',
  //     icon_url: ''
  //   }
  //   timestamp: new Date()
  // };

  let embedObject = {};

  // Color
  let color = form.elements['color'].value;
  if (color) {
    embedObject.color = parseInt(color);
  }
  // Title
  let title = form.elements['title'].value;
  if (title) {
    embedObject.title = title;
  }
  // URL
  let url = form.elements['url'].value;
  if (url) {
    embedObject.url = url;
  }
  // Description
  let description = form.elements['description'].value;
  if (description) {
    embedObject.description = description;
  }
  // Thumbnail
  let thumbnail = form.elements['thumbnail'].value;
  if (thumbnail) {
    if (!embedObject.hasOwnProperty('thumbnail')) {
      embedObject.thumbnail = {}
    }
    embedObject.thumbnail.url = thumbnail;
  }
  // Image
  let image = form.elements['image'].value;
  if (image) {
    if (!embedObject.hasOwnProperty('image')) {
      embedObject.image = {}
    }
    embedObject.image.url = image;
  }
  // Video
  let video = form.elements['video'].value;
  if (video) {
    if (!embedObject.hasOwnProperty('video')) {
      embedObject.video = {}
    }
    embedObject.video.url = video;
  }

  document.getElementById('json-output').innerHTML = JSON.stringify(embedObject, null, '  ');
}


/**
 * Activate color picker
 */
$('#color').ColorPicker({
  onChange: function (hsb, hex, rgb) {
    document.getElementById('output').style['border-left'] = `5px solid #${hex}`;
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
