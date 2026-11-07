// Code-block theme for the blog reader. A TextMate theme in the spirit of
// modern Neovim colorschemes (Tokyo Night / Cyberdream): deep blue-black
// canvas, neon cyan, violet, and magenta accents.
export const shikiTheme = {
  name: 'psy-nvim',
  type: 'dark',
  colors: {
    'editor.background': '#0a0d14',
    'editor.foreground': '#c0caf5',
  },
  settings: [
    { settings: { background: '#0a0d14', foreground: '#c0caf5' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#565f89', fontStyle: 'italic' } },
    { scope: ['keyword', 'storage.type', 'storage.modifier', 'keyword.operator.new', 'keyword.control'], settings: { foreground: '#bb9af7' } },
    { scope: ['keyword.operator', 'punctuation.separator.key-value', 'keyword.operator.assignment'], settings: { foreground: '#89ddff' } },
    { scope: ['string', 'punctuation.definition.string', 'string.template'], settings: { foreground: '#9ece6a' } },
    { scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other'], settings: { foreground: '#ff9e64' } },
    { scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable'], settings: { foreground: '#c0caf5' } },
    { scope: ['variable.parameter', 'meta.parameter'], settings: { foreground: '#e0af68' } },
    { scope: ['variable.other.property', 'support.variable.property', 'variable.other.object.property'], settings: { foreground: '#7dcfff' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call.generic'], settings: { foreground: '#7aa2f7' } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class', 'entity.other.inherited-class'], settings: { foreground: '#2ac3de' } },
    { scope: ['entity.name.tag', 'punctuation.definition.tag'], settings: { foreground: '#f7768e' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#bb9af7' } },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#a9b1d6' } },
    { scope: ['support.type.property-name', 'meta.object-literal.key', 'string.other.link'], settings: { foreground: '#73daca' } },
    { scope: ['entity.name.section', 'markup.heading'], settings: { foreground: '#7aa2f7', fontStyle: 'bold' } },
    { scope: ['markup.bold'], settings: { fontStyle: 'bold' } },
    { scope: ['markup.italic'], settings: { fontStyle: 'italic' } },
    { scope: ['markup.inline.raw', 'markup.raw'], settings: { foreground: '#9ece6a' } },
    { scope: ['markup.inserted'], settings: { foreground: '#9ece6a' } },
    { scope: ['markup.deleted'], settings: { foreground: '#f7768e' } },
    { scope: ['markup.changed'], settings: { foreground: '#ff9e64' } },
    { scope: ['invalid', 'invalid.illegal'], settings: { foreground: '#ff5370' } },
    { scope: ['meta.preprocessor', 'keyword.control.directive', 'entity.name.function.preprocessor'], settings: { foreground: '#ff9e64' } },
    { scope: ['source.shell variable.other', 'support.function.builtin.shell'], settings: { foreground: '#7dcfff' } },
    { scope: ['punctuation.definition.variable', 'variable.other.readwrite.shell'], settings: { foreground: '#c0caf5' } },
  ],
};
