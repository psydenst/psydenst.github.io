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

// AstroNvim's `astrodark` (astrotheme): syntax palette and treesitter mapping.
export const astrodarkTheme = {
  name: 'astrodark',
  type: 'dark',
  colors: {
    'editor.background': '#16181d',
    'editor.foreground': '#adb0bb',
  },
  settings: [
    { settings: { background: '#16181d', foreground: '#adb0bb' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#696c76', fontStyle: 'italic' } },
    { scope: ['string', 'punctuation.definition.string', 'string.template'], settings: { foreground: '#87c05f' } },
    { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#f5983a' } },
    { scope: ['constant', 'constant.other', 'constant.character', 'support.constant'], settings: { foreground: '#dfab25' } },
    { scope: ['keyword', 'keyword.control', 'storage.modifier', 'keyword.operator.new', 'keyword.control.import', 'entity.name.namespace'], settings: { foreground: '#dd97f1' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call.generic', 'entity.name.type', 'support.type', 'storage.type', 'entity.name.class', 'support.class'], settings: { foreground: '#5eb7ff' } },
    { scope: ['support.type.builtin', 'support.type.primitive', 'entity.other.attribute', 'meta.decorator', 'meta.preprocessor'], settings: { foreground: '#dfab25' } },
    { scope: ['variable.other.property', 'support.variable.property', 'variable.other.object.property', 'support.type.property-name', 'meta.object-literal.key', 'entity.name.tag'], settings: { foreground: '#ff838b' } },
    { scope: ['variable.parameter', 'meta.parameter'], settings: { foreground: '#f5983a' } },
    { scope: ['variable.language', 'support.function.builtin', 'entity.other.attribute-name', 'markup.underline.link'], settings: { foreground: '#4ac2b8' } },
    { scope: ['constant.character.escape'], settings: { foreground: '#ff838b' } },
    { scope: ['punctuation', 'meta.brace', 'keyword.operator'], settings: { foreground: '#adb0bb' } },
    { scope: ['entity.name.section', 'markup.heading'], settings: { foreground: '#adb0bb', fontStyle: 'bold' } },
    { scope: ['markup.bold'], settings: { fontStyle: 'bold' } },
    { scope: ['markup.italic'], settings: { fontStyle: 'italic' } },
    { scope: ['markup.inserted'], settings: { foreground: '#87c05f' } },
    { scope: ['markup.deleted'], settings: { foreground: '#ff838b' } },
    { scope: ['invalid', 'invalid.illegal'], settings: { foreground: '#f8747e' } },
    { scope: ['source.shell variable.other', 'support.function.builtin.shell'], settings: { foreground: '#4ac2b8' } },
  ],
};

// Light mode: Vim's `peachpuff` colorscheme (Normal, Comment, Constant,
// Identifier, Statement, PreProc, Type, Special, Title groups).
export const peachpuffTheme = {
  name: 'peachpuff',
  type: 'light',
  colors: {
    'editor.background': '#ffdab9',
    'editor.foreground': '#000000',
  },
  settings: [
    { settings: { background: '#ffdab9', foreground: '#000000' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#406090' } },
    { scope: ['string', 'punctuation.definition.string', 'string.template', 'constant', 'constant.numeric', 'constant.language', 'constant.character', 'constant.other'], settings: { foreground: '#c00058' } },
    { scope: ['keyword', 'keyword.control', 'keyword.operator.new', 'storage.modifier'], settings: { foreground: '#a52a2a', fontStyle: 'bold' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call.generic', 'variable.other.property', 'support.type.property-name', 'meta.object-literal.key'], settings: { foreground: '#008b8b' } },
    { scope: ['storage.type', 'entity.name.type', 'entity.name.class', 'support.type', 'support.class', 'entity.other.inherited-class'], settings: { foreground: '#2e8b57', fontStyle: 'bold' } },
    { scope: ['meta.preprocessor', 'keyword.control.directive', 'keyword.control.import', 'entity.name.function.preprocessor', 'entity.name.tag'], settings: { foreground: '#cd00cd' } },
    { scope: ['constant.character.escape', 'string.regexp', 'entity.other.attribute-name', 'punctuation.definition.template-expression', 'string.other.link', 'variable.parameter'], settings: { foreground: '#6a5acd' } },
    { scope: ['entity.name.section', 'markup.heading'], settings: { foreground: '#cd00cd', fontStyle: 'bold' } },
    { scope: ['markup.bold'], settings: { fontStyle: 'bold' } },
    { scope: ['markup.italic'], settings: { fontStyle: 'italic' } },
    { scope: ['markup.inserted'], settings: { foreground: '#2e8b57' } },
    { scope: ['markup.deleted'], settings: { foreground: '#cd0000' } },
    { scope: ['invalid', 'invalid.illegal'], settings: { foreground: '#ff0000' } },
    { scope: ['source.shell variable.other', 'support.function.builtin.shell'], settings: { foreground: '#008b8b' } },
  ],
};
