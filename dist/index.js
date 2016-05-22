(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var isValidString =
  function ( param ) { return typeof param === 'string' && param.length > 0; }

var startsWith =
  function (string, start) { return string[0] === start; }

var isSelector =
  function ( param ) { return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#')); }

var TAGS = {
  btn: 'button.btn',
  btnPrimary: 'button.btn.btn-primary',
  btnSecondary: 'button.btn.btn-secondary',
  btnSuccess: 'button.btn.btn-success',
  btnWarning: 'button.btn.btn-warning',
  btnInfo: 'button.btn.btn-info',
  btnDanger: 'button.btn.btn-danger',
  btnLink: 'button.btn.btn-link',
  btnOPrimary: 'button.btn.btn-outline-primary',
  btnOSecondary: 'button.btn.btn-outline-secondary',
  btnOSuccess: 'button.btn.btn-outline-success',
  btnOWarning: 'button.btn.btn-outline-warning',
  btnOInfo: 'button.btn.btn-outline-info',
  btnODanger: 'button.btn.btn-outline-danger',
  btnOLink: 'button.btn.btn-outline-link',
  btnGroup: 'div.btn-group',
  btnToolbar: 'div.btn-toolbar',
  btnGroupVertical: 'div.btn-group-vertical',
  dropdownMenu: 'div.dropdown-menu',
  dropdownItem: 'div.dropdown-item',
  dropdownDivider: 'div.dropdown-divider',
  form: 'form',
  formInline: 'form.form-inline',
  formGroup: 'fieldset.form-group',
  label: 'label',
  formInput: 'input.form-control',
  small: 'small',
  formSelect: 'select.form-control',
  option: 'option',
  formTextarea: 'textarea.form-control',
  inputGroup: 'div.input-group',
  inputGroupAddon: 'div.input-group-addon',
  inputGroupBtn: 'span.input-group-btn',
  jumbotron: 'div.jumbotron',
  jumbotronFluid: 'div.jumbotron.jumbotron-fluid',
  bsLabel: 'span.label.label-default',
  bsLabelPrimary: 'span.label.label-primary',
  bsLabelInfo: 'span.label.label-info',
  bsLabelWarning: 'span.label.label-warning',
  bsLabelDanger: 'span.label.label-danger',
  pill: 'span.label.label-pill.label-default',
  pillPrimary: 'span.label.label-pill.label-primary',
  pillInfo: 'span.label.label-pill.label-info',
  pillWarning: 'span.label.label-pill.label-warning',
  pillDanger: 'span.label.label-pill.label-danger',
  pillSuccess: 'span.label.label-pill.label-success',
  alertSuccess: 'div.alert.alert-success',
  alertWarning: 'div.alert.alert-warning',
  alertInfo: 'div.alert.alert-info',
  alertDanger: 'div.alert.alert-danger',
  alertLink: 'a.alert-link',
  card: 'div.card',
  cardImageTop: 'img.card-img-top',
  cardImageBtm: 'img.card-img-bottom',
  cardBlock: 'div.card-block',
  cardTitle: 'div.card-title',
  cardText: 'div.card-text',
  listGroup: 'ul.list-group',
  listGroupItem: 'li.list-group-item',
  cardLink: 'a.card-link',
  cardSubTitle: 'h6.card-subtitle',
  cardHeader: 'div.card-header',
  cardFooter: 'div.card-footer',
  cardGroup: 'div.card-group',
  cardDeckWrapper: 'div.card-deck-wrapper',
  cardDeck: 'div.card-deck',
  cardColumns: 'div.card-columns',
  nav: 'nav.nav',
  navInline: 'nav.nav.nav-inline',
  navLink: 'a.nav-link',
  navList: 'ul.nav',
  navItem: 'li.nav-item',
  tabs: 'ul.nav.nav-tabs',
  pills: 'ul.nav.nav-pills',
  pillsStacked: 'ul.nav.nav-pills.nav-stacked',
  navbar: 'nav.navbar',
  brand: 'a.navbar-brand',
  navbarNav: 'ul.navbar-nav',
  navbarDark: 'nav.navbar.navbar-dark.bg-inverse',
  breadcrumb: 'ol.breadcrumb',
  pagination: 'ul.pagination',
  pageItem: 'li.page-item',
  pageLink: 'a.page-link',
  pager: 'ul.pager',
  pagerPrev: 'li.pager-prev',
  pagerNext: 'li.pager-next',
  progress: 'progress.progress',
  listGroupItemHeading: 'h4.list-group-item-heading',
  listGroupItemText: 'p.list-group-item-text',
  
  container: 'div.container',
  containerFluid: 'div.container-fluid',
  row: 'div.row',
  col_md_1: 'div.col-md-1',
  col_md_2: 'div.col-md-2',
  col_md_3: 'div.col-md-3',
  col_md_4: 'div.col-md-4',
  col_md_5: 'div.col-md-5',
  col_md_6: 'div.col-md-6',
  col_md_7: 'div.col-md-7',
  col_md_8: 'div.col-md-8'
}

var node = function ( h ) { return function ( tagName ) { return function (first) {
      var rest = [], len = arguments.length - 1;
      while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

      var tag = TAGS[tagName]
      if (isSelector(first)) {
        return h.apply(void 0, [ tag + first ].concat( rest ))
      } else {
        return h.apply(void 0, [ tag, first ].concat( rest ))
      }
    }; }; }


var bootstrapTags = function ( h ) {
  var createTag = node(h)
  var exported = { }
  Object.keys(TAGS).forEach(function ( n ) {
    exported[n] = createTag(n)
  })
  return exported
}

module.exports = bootstrapTags

// function UpgradeHook (){}
// UpgradeHook.prototype.hook = (node, propertyName, previousValue) => {
//   if (!componentHandler && console) {
//     return console.log('componentHander not found')
//   }
//   setTimeout(_ => componentHandler.upgradeElement(node), 0)
//
// }

},{}]},{},[1]);
