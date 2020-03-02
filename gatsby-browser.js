require('prism-themes/themes/prism-atom-dark.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

function onInitialClientRender() {
  require('typeface-nunito');
}

module.exports = {
  onInitialClientRender,
};
