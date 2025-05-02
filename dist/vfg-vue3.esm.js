/** 
 * vfg-vue3
 * A schema-based form generator component for Vue.js 3
 * v1.00.0
 * @license MIT License
 */
!function(){"use strict";try{if("undefined"!=typeof document){var e=document.createElement("style");e.appendChild(document.createTextNode('.vue-form-generator .field-checkbox input{margin-left:12px}.vue-form-generator .field-checklist .list-selected{margin:15px 0}.vue-form-generator .field-checklist .list-selected .item-selected{margin-right:4px;margin-bottom:5px;padding:4px 8px;border:1px solid #ddd;border-radius:8px}.vue-form-generator .field-checklist .listbox,.vue-form-generator .field-checklist .dropList{height:auto;max-height:150px;overflow:auto}.vue-form-generator .field-checklist .listbox .list-row label,.vue-form-generator .field-checklist .dropList .list-row label{font-weight:400;font-weight:initial}.vue-form-generator .field-checklist .listbox .list-row input,.vue-form-generator .field-checklist .dropList .list-row input{margin-right:.3em}.vue-form-generator .field-checklist .combobox{width:auto!important;min-width:0;display:table;height:auto;height:initial;overflow:hidden}.vue-form-generator .field-checklist .combobox .mainRow{cursor:pointer;position:relative;padding-right:10px}.vue-form-generator .field-checklist .combobox .mainRow .arrow{position:absolute;right:-9px;top:3px;width:16px;height:16px;transform:rotate(0);transition:transform .5s;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGdJREFUOI3tzjsOwjAURNGDUqSgTxU5K2AVrJtswjUsgHSR0qdxAZZFPrS+3ZvRzBsqf9MUtBtazJk+oMe0VTriiZCFX8nbpENMgfARjsn74vKj5IFruhfc8d6zIF9S/Hyk5HS4spMVeFcOjszaOwMAAAAASUVORK5CYII=);background-repeat:no-repeat}.vue-form-generator .field-checklist .combobox .mainRow.expanded .arrow{transform:rotate(-180deg)}.vue-form-generator .field-checklist .combobox .dropList{transition:height .5s}.vue-form-generator .field-input .wrapper,.vue-form-generator .field-input input[type=radio]{width:100%}.vue-form-generator .field-input input[type=color]{width:60px}.vue-form-generator .field-input input[type=range]{padding:0}.vue-form-generator .field-label .wrapper{display:block;width:100%;margin-left:12px}.vue-form-generator .field-radios .radio-list label{display:block}.vue-form-generator .field-radios .radio-list label input[type=radio]{margin-right:5px}.vue-form-generator .field-submit input{color:#fff!important;background-color:#337ab7!important;border-color:#2e6da4!important}.vue-form-generator .field-input .wrapper{width:100%}.vue-form-generator .field-input .helper{margin:auto .5em}.vue-form-generator .field-image .wrapper{width:100%}.vue-form-generator .field-image .preview{position:relative;margin-top:5px;height:100px;background-repeat:no-repeat;background-size:contain;background-position:center center;border:1px solid #ccc;border-radius:3px;box-shadow:inset 0 1px 1px #00000013}.vue-form-generator .field-image .preview .remove{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR42u2SwQoAIAhD88vVLy8KBlaS0i1oJwP3piGVg0Skmpq8HjqZrWl9uwCbGAmwKYGZs/6iqgMyAdJuM8W2QmYKpLt/0AG9ASCv/oAnANd3AEjmAlFT1BypAV+PnRH5YehvAAAAAElFTkSuQmCC);width:16px;height:16px;font-size:1.2em;position:absolute;right:.2em;bottom:.2em;opacity:.7}.vue-form-generator .field-image .preview .remove:hover{opacity:1;cursor:pointer}.vue-form-generator .field-noUiSlider .field-wrap{display:block}.vue-form-generator .field-noUiSlider .contain-pips{margin-bottom:30px}.vue-form-generator .field-noUiSlider .contain-tooltip{margin-top:30px}.vue-form-generator .field-noUiSlider .noUi-vertical{height:200px;margin:10px 0}.vue-form-generator .field-rangeSlider .irs{width:100%}.vue-form-generator .field-selectEx .bootstrap-select .dropdown-menu li.selected .text{font-weight:700}.vue-form-generator .field-staticMap img{display:block;width:auto;max-width:100%}.vue-form-generator .field-switch .field-wrap label{position:relative;display:block;width:120px;height:30px;padding:0;margin:0 10px 10px 0;border-radius:15px;box-shadow:inset 0 -1px #fff,inset 0 1px 1px #0000000d;cursor:pointer}.vue-form-generator .field-switch input{position:absolute;top:0;left:0;opacity:0}.vue-form-generator .field-switch .label{position:relative;display:block;height:inherit;font-size:10px;text-transform:uppercase;background:#eceeef;border-radius:inherit;box-shadow:inset 0 1px 2px #0000001f,inset 0 0 2px #00000026}.vue-form-generator .field-switch .label:before,.vue-form-generator .field-switch .label:after{position:absolute;top:50%;margin-top:-.5em;line-height:1;transition:inherit}.vue-form-generator .field-switch .label:before{content:attr(data-off);right:11px;color:#aaa;text-shadow:0 1px rgba(255,255,255,.5)}.vue-form-generator .field-switch .label:after{content:attr(data-on);left:11px;color:#fff;text-shadow:0 1px rgba(0,0,0,.2);opacity:0}.vue-form-generator .field-switch input:checked~.label{background:#e1b42b;box-shadow:inset 0 1px 2px #00000026,inset 0 0 3px #0003}.vue-form-generator .field-switch input:checked~.label:before{opacity:0}.vue-form-generator .field-switch input:checked~.label:after{opacity:1}.vue-form-generator .field-switch .handle{position:absolute;top:1px;left:1px;width:28px;height:28px;background:linear-gradient(to bottom,#fff 40%,#f0f0f0);background-image:-webkit-linear-gradient(top,#ffffff 40%,#f0f0f0);border-radius:100%;box-shadow:1px 1px 5px #0003}.vue-form-generator .field-switch .handle:before{content:"";position:absolute;top:50%;left:50%;margin:-6px 0 0 -6px;width:12px;height:12px;background:linear-gradient(to bottom,#eee,#fff);background-image:-webkit-linear-gradient(top,#eeeeee,#ffffff);border-radius:6px;box-shadow:inset 0 1px #00000005}.vue-form-generator .field-switch input:checked~.handle{left:91px;left:calc(100% - 29px);box-shadow:-1px 1px 5px #0003}.vue-form-generator .field-switch .label,.vue-form-generator .field-switch .handle{transition:all .3s ease}.form-group:not([class*=" col-"]){width:100%}.form-group{display:inline-block;vertical-align:top;margin-bottom:1rem}.form-group label{font-weight:400}.form-group label>:first-child{display:inline-block}.form-group.featured>label{font-weight:700}.form-group.required>label:after{content:"*";font-weight:400;color:red;padding-left:.2em;font-size:1em}.form-group.disabled>label{color:#666;font-style:italic}.form-group.error input:not([type=checkbox]),.form-group.error textarea,.form-group.error select{border:1px solid #f00;background-color:#ff000026}.form-group.error .errors{color:red;font-size:.8em}.form-group.error .errors span{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVR4Xt2TMQoCQQxF3xdhu72MpZU3GU/meBFLOztPYrVWsQmEWSaMsIXgK8P8RyYkMjO2sAN+K9gTIAmDAlzoUzE7p4IFytvDCQWJKSStYB2efcAvqZFM0BcstMx5naSDYFzfLhh/4SmRM+6Agw/xIX0tKEDFufeDNRUc4XqLRz3qabVIf3BMHwl6Ktexn3nmAAAAAElFTkSuQmCC);background-repeat:no-repeat;padding-left:17px;padding-top:0;margin-top:.2em;font-weight:600}.form-group .success{color:#080;font-size:.8em}.form-group .success span{display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAABVklEQVQ4T62Sv0oDQRCHd2ZPfBEbS8FOTaLF3WEZLlEU/JPKQiVgZWuvgoXaqI2ickdscxElF5EgwRfwCezTmMvtjOzhxXgSMOC2+/u+2ZlZEEMeGDIvBgH4JaK08AeQcc1lBFFmARM6yAyvLOjwqVC7ScAekHGtE4m4kTYSkxIKjoOF6ra+iwFtligv02FmeldhZMkRYw8lXD3mq24M5DyzBSAn+wEd7oSd2eZS/S3jmhcCYKzh+FMawKxnhcDcJoCKBCylwxLlimIKG44/+g0IsVl3/NOsa++G3Y87bc559jkArOrK/YDIuPYLCh5njqyg+NDUVXOefQYAa8kzmdVz3alNxz3MuOaigfKaidpdVvMGyBIirvf3RCrKB8X7u95Ys7f2ERqwpZhIAiaLixliOggcf6c31sQ0V7ELEXFZCBFPDAW3mHhfm38t7q9/6t8+38CCnxD8mxFtcSSxAAAAAElFTkSuQmCC);background-repeat:no-repeat;padding-left:17px;padding-top:0;margin-top:.2em;font-weight:600}.vue-form-generator *{box-sizing:border-box}.vue-form-generator .form-control{display:block;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px #00000013;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.vue-form-generator .form-control:not([class*=" col-"]){width:100%}.vue-form-generator span.help{margin-left:.3em;position:relative}.vue-form-generator span.help .icon{display:inline-block;width:16px;height:14px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA+UlEQVQ4ja3TS0oDQRAG4C8+lq7ceICICoLGK7iXuNBbeAMJuPVOIm7cqmDiIncIggg+cMZFaqCnZyYKWtB0df31V1VXdfNH6S2wD9CP8xT3KH8T9BiTcE7XBMOfyBcogvCFO9ziLWwFRosyV+QxthNsA9dJkEYlvazsQdi3sBv6Ol6TBLX+HWT3fcQZ3vGM5fBLk+ynAU41m1biCXvhs4OPBDuBpa6GxF0P8YAj3GA1d1qJfdoS4DOIcIm1DK9x8iaWeDF/SP3QU6zRROpjLDFLsFlibx1jJaMkSIGrWKntvItcyTBKzCcybsvc9ZmYz3kz9Ooz/b98A8yvW13B3ch6AAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position:center center}.vue-form-generator span.help .helpText{background-color:#444;bottom:30px;color:#fff;display:block;left:0;opacity:0;padding:20px;pointer-events:none;position:absolute;text-align:justify;width:300px;transition:all .25s ease-out;box-shadow:2px 2px 6px #00000080;border-radius:6px}.vue-form-generator span.help .helpText a{font-weight:700;text-decoration:underline}.vue-form-generator span.help .helpText:before{bottom:-20px;content:" ";display:block;height:20px;left:0;position:absolute;width:100%}.vue-form-generator span.help:hover .helpText{opacity:1;pointer-events:auto;transform:translateY(0)}.vue-form-generator .field-wrap{display:flex}.vue-form-generator .field-wrap .buttons{white-space:nowrap;margin-left:4px}.vue-form-generator .field-wrap button,.vue-form-generator .field-wrap input[type=submit]{display:inline-block;padding:6px 12px;margin:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#333;background-color:#fff;border:1px solid #ccc;border-radius:4px}.vue-form-generator .field-wrap button:not(:last-child),.vue-form-generator .field-wrap input[type=submit]:not(:last-child){margin-right:4px}.vue-form-generator .field-wrap button:hover,.vue-form-generator .field-wrap input[type=submit]:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.vue-form-generator .field-wrap button:active,.vue-form-generator .field-wrap input[type=submit]:active{color:#333;background-color:#d4d4d4;border-color:#8c8c8c;outline:0;box-shadow:inset 0 3px 5px #00000020}.vue-form-generator .field-wrap button:disabled,.vue-form-generator .field-wrap input[type=submit]:disabled{opacity:.6;cursor:not-allowed}.vue-form-generator .hint{font-style:italic;font-size:.8em}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}}();
import { isNil, isArray, isString, get, isNumber, isInteger, isFinite, each, set, isFunction, isObject, cloneDeep, uniqueId, debounce, forEach, uniq, clone, find, isEmpty, defaults, camelCase } from "lodash";
import fecha from "fecha";
import { defineComponent, resolveDirective, createElementBlock, openBlock, withDirectives, createTextVNode, createElementVNode, normalizeClass, vModelCheckbox, Fragment, toDisplayString, createCommentVNode, renderList, vModelSelect, vModelText, vShow, normalizeStyle, resolveComponent, createBlock, withCtx, resolveDynamicComponent } from "vue";
let _app$1;
const resources = {
  fieldIsRequired: "{field} is required!",
  invalidFormat: "Invalid format!",
  numberTooSmall: "The number is too small! Minimum: {min}",
  numberTooBig: "The number is too big! Maximum: {max}",
  invalidNumber: "Invalid number",
  invalidInteger: "The value is not an integer",
  needAvailabilityCheck: "{field} availability needs to be checked",
  textIsNotSameAs: "{field} must be same with {reference}",
  textTooSmall: "The length of text is too small! Current: {current}, Minimum: {min}",
  textTooBig: "The length of text is too big! Current: {current}, Maximum: {max}",
  thisNotText: "This is not a text!",
  thisNotArray: "This is not an array!",
  selectMinItems: "Select minimum {min} items!",
  selectMaxItems: "Select maximum {max} items!",
  invalidDate: "Invalid date!",
  dateIsEarly: "The date is too early! Current: {current}, Minimum: {min}",
  dateIsLate: "The date is too late! Current: {current}, Maximum: {max}",
  invalidEmail: "Invalid e-mail address!",
  invalidURL: "Invalid URL!",
  invalidCard: "Invalid card format!",
  invalidCardNumber: "Invalid card number!",
  invalidTextContainNumber: "Invalid text! Cannot contains numbers or special characters",
  invalidTextContainSpec: "Invalid text! Cannot contains special characters"
};
function msg(text, args = {}) {
  return text ? text.replace(/{(.*?)}/g, (m, c) => args[c.trim().toLowerCase()]) : text;
}
function translate(key, args, res) {
  res = resources ? Object.assign(resources, res) : resources;
  const i18n = _app$1 && "__VUE_I18N__" in _app$1 ? _app$1["__VUE_I18N__"].global : null;
  if (args) {
    if ("field" in args) {
      if (!("min" in args) && "min" in args.field) args.min = args.field.min;
      if (!("max" in args) && "max" in args.field) args.max = args.field.max;
      args.fieldName = args.field.name || args.field.label;
    }
    if ("refField" in args) {
      args.refFieldName = args.refField.name || args.refField.label;
    }
  }
  args = {
    ...args,
    get field() {
      return this.fieldName ? (i18n == null ? void 0 : i18n.te(this.fieldName)) ? i18n == null ? void 0 : i18n.tm(this.fieldName) : this.fieldName : "";
    },
    get reference() {
      return this.refFieldName ? (i18n == null ? void 0 : i18n.te(this.refFieldName)) ? i18n == null ? void 0 : i18n.tm(this.refFieldName) : this.refFieldName : "";
    }
  };
  return i18n ? {
    key: "vfg." + key,
    args,
    message: msg(res[key], args)
  } : msg(res[key], args);
}
function checkEmpty(field, value, required, form) {
  return isNil(value) || value === "" || value == false ? required ? [translate("fieldIsRequired", { field, value }, form.resources)] : [] : null;
}
const validators$1 = {
  required(value, field, model, form) {
    return checkEmpty(field, value, field.required, form);
  },
  number(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let err = [];
    if (isFinite(value)) {
      if (!isNil(field.min) && value < field.min) {
        err.push(
          translate("numberTooSmall", { field, value }, form.resources)
        );
      }
      if (!isNil(field.max) && value > field.max) {
        err.push(translate("numberTooBig", { field, value }, form.resources));
      }
    } else {
      err.push(translate("invalidNumber", { field, value }, form.resources));
    }
    return err;
  },
  integer(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let errs = validators$1.number(value, field, model, form);
    if (!isInteger(value)) {
      errs.push(translate("invalidInteger", { field, value }, form.resources));
    }
    return errs;
  },
  double(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    if (!isNumber(value) || isNaN(value)) {
      return [translate("invalidNumber", { field, value }, form.resources)];
    }
  },
  string(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let err = [];
    if (isString(value)) {
      if (!isNil(field.min) && value.length < field.min) {
        err.push(
          translate("textTooSmall", {
            field,
            value,
            current: value.length
          }, form.resources)
        );
      }
      if (!isNil(field.max) && value.length > field.max) {
        err.push(
          translate("textTooBig", {
            field,
            value,
            current: value.length
          }, form.resources)
        );
      }
      if ("reference" in field) {
        var reference = get(form.record, field.reference);
        if (reference !== value)
          err.push(
            translate("textIsNotSameAs", {
              field,
              refField: form.fields[field.reference],
              value,
              current: value.length
            }, form.resources)
          );
      }
    } else {
      err.push(translate("thisNotText", { field, value, refere }, form.resources));
    }
    return err;
  },
  array(value, field, model, form) {
    if (field.required) {
      if (!isArray(value)) {
        return [translate("thisNotArray", { field, value }, form.resources)];
      }
      if (value.length === 0) {
        return [
          translate("fieldIsRequired", { field, value }, form.resources)
        ];
      }
    }
    if (!isNil(value)) {
      if (!isNil(field.min) && value.length < field.min) {
        return [translate("selectMinItems", { field, value }, form.resources)];
      }
      if (!isNil(field.max) && value.length > field.max) {
        return [translate("selectMaxItems", { field, value }, form.resources)];
      }
    }
  },
  date(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let m = new Date(value);
    if (isNaN(m.getDate())) {
      return [translate("invalidDate", { field, value }, form.resources)];
    }
    let err = [];
    if (!isNil(field.min)) {
      let min = new Date(field.min);
      if (m.valueOf() < min.valueOf()) {
        err.push(
          translate("dateIsEarly", {
            field,
            value,
            current: fecha.format(m),
            min: fecha.format(min)
          }, form.resources)
        );
      }
    }
    if (!isNil(field.max)) {
      let max = new Date(field.max);
      if (m.valueOf() > max.valueOf()) {
        err.push(
          translate("dateIsLate", {
            field,
            value,
            current: fecha.format(m),
            max: fecha.format(max)
          }, form.resources)
        );
      }
    }
    return err;
  },
  regexp(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    if (!isNil(field.pattern)) {
      let re = new RegExp(field.pattern);
      if (!re.test(value)) {
        return [translate("invalidFormat", { field, value }, form.resources)];
      }
    }
  },
  availability(value, field, model, form) {
    if (value && field.unavailable)
      return [translate("needAvailabilityCheck", { field, value }, form.resources)];
  },
  email(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(value)) {
      return [translate("invalidEmail", { field, value }, form.resources)];
    }
  },
  url(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (!re.test(value)) {
      return [translate("invalidURL", { field, value }, form.resources)];
    }
  },
  creditCard(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    const sanitized = value.replace(/[^0-9]+/g, "");
    if (!creditCard.test(sanitized)) {
      return [translate("invalidCard", { field, value }, form.resources)];
    }
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }
    if (!(sum % 10 === 0 ? sanitized : false)) {
      return [
        translate("invalidCardNumber", { field, value }, form.resources)
      ];
    }
  },
  alpha(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let re = /^[a-zA-Z]*$/;
    if (!re.test(value)) {
      return [
        translate("invalidTextContainNumber", {
          field,
          value
        }, form.resources)
      ];
    }
  },
  alphaNumeric(value, field, model, form) {
    let res = checkEmpty(field, value, field.required, form);
    if (res != null) return res;
    let re = /^[a-zA-Z0-9]*$/;
    if (!re.test(value)) {
      return [
        translate("invalidTextContainSpec", { field, value }, form.resources)
      ];
    }
  },
  init(app) {
    _app$1 = app;
  }
};
let _validators = {};
Object.keys(validators$1).forEach((name) => {
  _validators[name] = validators$1[name];
});
const createDefaultObject = (schema2, obj = {}) => {
  each(schema2.fields, (field) => {
    if (get(obj, field.model) === void 0 && field.default !== void 0) {
      if (isFunction(field.default)) {
        set(obj, field.model, field.default(field, schema2, obj));
      } else if (isObject(field.default) || isArray(field.default)) {
        set(obj, field.model, cloneDeep(field.default));
      } else set(obj, field.model, field.default);
    }
  });
  return obj;
};
const getMultipleFields = (schema2) => {
  let res = [];
  each(schema2.fields, (field) => {
    if (field.multi === true) res.push(field);
  });
  return res;
};
const mergeMultiObjectFields = (schema2, objs) => {
  let model = {};
  let fields = getMultipleFields(schema2);
  each(fields, (field) => {
    let mergedValue;
    let notSet = true;
    let path = field.model;
    each(objs, (obj) => {
      let v = get(obj, path);
      if (notSet) {
        mergedValue = v;
        notSet = false;
      } else if (mergedValue !== v) {
        mergedValue = void 0;
      }
    });
    set(model, path, mergedValue);
  });
  return model;
};
const slugifyFormID = (schema2, prefix = "") => {
  if (typeof schema2.id !== "undefined") {
    return prefix + schema2.id;
  } else {
    return prefix + (schema2.inputName || schema2.label || schema2.model || "").toString().trim().toLowerCase().replace(/ |_/g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/([^a-zA-Z0-9-]+)/g, "");
  }
};
const slugify = (name = "") => {
  return name.toString().trim().replace(/ /g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/([^a-zA-Z0-9-_/./:]+)/g, "");
};
let _fieldComponents = {};
const fieldComponents$1 = _fieldComponents;
const schema = {
  createDefaultObject,
  getMultipleFields,
  mergeMultiObjectFields,
  slugifyFormID,
  slugify,
  fieldComponents: fieldComponents$1
};
function convertValidator(validator) {
  if (isString(validator)) {
    if (_validators[validator] != null) return _validators[validator];
    else {
      console.warn(`'${validator}' is not a validator function!`);
      return null;
    }
  }
  return validator;
}
function attributesDirective(el, binding) {
  let attrs = get(binding.instance, "schema.attributes", {});
  let container = binding.value || "input";
  if (isString(container)) {
    attrs = get(attrs, container) || attrs;
  }
  forEach(attrs, (val, key) => {
    el.setAttribute(key, val);
  });
}
const abstractField = {
  directives: {
    attributes: {
      beforeMount: attributesDirective,
      updated: attributesDirective
    }
  },
  props: {
    "vfg": { type: Object, default: void 0 },
    "model": { type: Object, default: void 0 },
    "schema": { type: Object, default: void 0 },
    "formOptions": { type: Object, default: void 0 },
    "disabled": { type: Boolean, default: false }
  },
  emits: ["validated", "model-updated"],
  data() {
    return {
      errors: [],
      debouncedValidateFunc: null,
      debouncedFormatFunc: null
    };
  },
  computed: {
    value: {
      cache: false,
      get() {
        let val;
        if (isFunction(get(this.schema, "get"))) {
          val = this.schema.get(this.model);
        } else {
          val = get(this.model, this.schema.model);
        }
        return this.formatValueToField(val);
      },
      set(newValue) {
        let oldValue = this.value;
        newValue = this.formatValueToModel(newValue);
        if (isFunction(newValue)) {
          newValue(newValue, oldValue);
        } else {
          this.updateModelValue(newValue, oldValue);
        }
      }
    }
  },
  methods: {
    validate(calledParent) {
      this.clearValidationErrors();
      let validateAsync = get(this.formOptions, "validateAsync", false);
      let results = [];
      if (!this.schema.validator && this.schema.required) {
        this.schema.validator = _validators.required;
      }
      if (this.schema.validator && this.schema.readonly !== true && this.disabled !== true) {
        let validators2 = [];
        if (!isArray(this.schema.validator)) {
          validators2.push(convertValidator(this.schema.validator).bind(this));
        } else {
          forEach(this.schema.validator, (validator) => {
            validators2.push(convertValidator(validator).bind(this));
          });
        }
        forEach(validators2, (validator) => {
          if (validateAsync) {
            results.push(validator(this.value, this.schema, this.model, this.formOptions.formData));
          } else {
            let result = validator(this.value, this.schema, this.model, this.formOptions.formData);
            if (result && isFunction(result.then)) {
              result.then((err) => {
                if (err) {
                  this.errors = this.errors.concat(err);
                }
                let isValid = this.errors.length === 0;
                this.$emit("validated", isValid, this.errors, this);
              });
            } else if (result) {
              results = results.concat(result);
            }
          }
        });
      }
      let handleErrors = (errors) => {
        let fieldErrors = [];
        forEach(uniq(errors), (err) => {
          if (isArray(err) && err.length > 0) {
            fieldErrors = fieldErrors.concat(err);
          } else if (isString(err)) {
            fieldErrors.push(err);
          }
        });
        if (isFunction(this.schema.onValidated)) {
          this.schema.onValidated.call(this, this.model, fieldErrors, this.schema);
        }
        let isValid = fieldErrors.length === 0;
        if (!calledParent) {
          this.$emit("validated", isValid, fieldErrors, this);
        }
        this.errors = fieldErrors;
        return fieldErrors;
      };
      if (!validateAsync) {
        return handleErrors(results);
      }
      return Promise.all(results).then(handleErrors);
    },
    debouncedValidate() {
      if (!isFunction(this.debouncedValidateFunc)) {
        this.debouncedValidateFunc = debounce(
          this.validate.bind(this),
          get(this.schema, "validateDebounceTime", get(this.formOptions, "validateDebounceTime", 500))
        );
      }
      this.debouncedValidateFunc();
    },
    updateModelValue(newValue, oldValue) {
      let changed = false;
      if (isFunction(this.schema.set)) {
        this.schema.set(this.model, newValue);
        changed = true;
      } else if (this.schema.model) {
        this.setModelValueByPath(this.schema.model, newValue);
        changed = true;
      }
      if (changed) {
        this.$emit("model-updated", newValue, this.schema.model);
        if (isFunction(this.schema.onChanged)) {
          this.schema.onChanged.call(this, this.model, newValue, oldValue, this.schema);
        }
        if (get(this.formOptions, "validateAfterChanged", false) === true) {
          if (get(this.schema, "validateDebounceTime", get(this.formOptions, "validateDebounceTime", 0)) > 0) {
            this.debouncedValidate();
          } else {
            this.validate();
          }
        }
      }
    },
    clearValidationErrors() {
      this.errors.splice(0);
    },
    setModelValueByPath(path, value) {
      let s = path.replace(/\[(\w+)\]/g, ".$1");
      s = s.replace(/^\./, "");
      let o = this.model;
      const a = s.split(".");
      let i = 0;
      const n = a.length;
      while (i < n) {
        let k = a[i];
        if (i < n - 1)
          if (o[k] !== void 0) {
            o = o[k];
          } else {
            o = o[k];
          }
        else {
          o[k] = value;
          return;
        }
        ++i;
      }
    },
    getFieldID(schema2, unique = false) {
      const idPrefix = get(this.formOptions, "fieldIdPrefix", "");
      return slugifyFormID(schema2, idPrefix) + (unique ? "-" + uniqueId() : "");
    },
    getFieldClasses() {
      return get(this.schema, "fieldClasses", []);
    },
    formatValueToField(value) {
      return value;
    },
    formatValueToModel(value) {
      return value;
    }
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = defineComponent({
  mixins: [abstractField]
});
const _hoisted_1$m = ["id", "autocomplete", "disabled", "name", "required"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createElementVNode("input", {
      id: _ctx.getFieldID(_ctx.schema),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      type: "checkbox",
      autocomplete: _ctx.schema.autocomplete,
      disabled: _ctx.disabled,
      name: _ctx.schema.inputName,
      class: normalizeClass(_ctx.schema.fieldClasses),
      required: _ctx.schema.required
    }, null, 10, _hoisted_1$m), [
      [vModelCheckbox, _ctx.value],
      [_directive_attributes, "input"]
    ]),
    _cache[1] || (_cache[1] = createTextVNode("  ")),
    _ctx.formOptions.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createTextVNode(toDisplayString(_ctx.$te(_ctx.schema.text) ? _ctx.$t(_ctx.schema.text) : _ctx.schema.text), 1)
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createTextVNode(toDisplayString(_ctx.schema.text), 1)
    ], 64))
  ]);
}
const fieldCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const _sfc_main$m = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      comboExpanded: false
    };
  },
  computed: {
    items() {
      let values = this.schema.values;
      if (typeof values == "function") {
        return values.apply(this, [this.model, this.schema]);
      } else return values;
    },
    selectedCount() {
      if (this.value) return this.value.length;
      return 0;
    }
  },
  methods: {
    getInputName(item) {
      if (this.schema && this.schema.inputName && this.schema.inputName.length > 0) {
        return slugify(this.schema.inputName + "_" + this.getItemValue(item));
      }
      return slugify(this.getItemValue(item));
    },
    getItemValue(item) {
      if (isObject(item)) {
        if (typeof this.schema["checklistOptions"] !== "undefined" && typeof this.schema["checklistOptions"]["value"] !== "undefined") {
          return item[this.schema.checklistOptions.value];
        } else {
          if (typeof item["value"] !== "undefined") {
            return item.value;
          } else {
            throw "`value` is not defined. If you want to use another key name, add a `value` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values";
          }
        }
      } else {
        return item;
      }
    },
    getItemName(item) {
      if (isObject(item)) {
        if (typeof this.schema["checklistOptions"] !== "undefined" && typeof this.schema["checklistOptions"]["name"] !== "undefined") {
          return item[this.schema.checklistOptions.name];
        } else {
          if (typeof item["name"] !== "undefined") {
            return item.name;
          } else {
            throw "`name` is not defined. If you want to use another key name, add a `name` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values";
          }
        }
      } else {
        return item;
      }
    },
    isItemChecked(item) {
      return this.value && this.value.indexOf(this.getItemValue(item)) !== -1;
    },
    onChanged(event, item) {
      if (isNil(this.value) || !Array.isArray(this.value)) {
        this.value = [];
      }
      if (event.target.checked) {
        const arr = clone(this.value);
        arr.push(this.getItemValue(item));
        this.value = arr;
      } else {
        const arr = clone(this.value);
        arr.splice(this.value.indexOf(this.getItemValue(item)), 1);
        this.value = arr;
      }
    },
    onExpandCombo() {
      this.comboExpanded = !this.comboExpanded;
    }
  }
});
const _hoisted_1$l = { class: "wrapper" };
const _hoisted_2$b = { class: "list-selected" };
const _hoisted_3$6 = ["disabled"];
const _hoisted_4$2 = ["id", "checked", "disabled", "name", "onChange"];
const _hoisted_5$2 = ["disabled"];
const _hoisted_6$1 = { class: "info" };
const _hoisted_7$1 = { class: "dropList" };
const _hoisted_8$1 = ["id", "checked", "disabled", "name", "onChange"];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$l, [
    createElementVNode("div", _hoisted_2$b, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createElementBlock(Fragment, null, [
          _ctx.isItemChecked(item) ? (openBlock(), createElementBlock("span", {
            key: item,
            class: "item-selected"
          }, [
            _ctx.formOptions.i18n && _ctx.$te(_ctx.getItemName(item)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.$t(_ctx.getItemName(item))), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.getItemName(item)), 1)
            ], 64))
          ])) : createCommentVNode("", true)
        ], 64);
      }), 256))
    ]),
    _ctx.schema.listBox ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "listbox form-control",
      disabled: _ctx.disabled
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item,
          class: normalizeClass(["list-row", { "is-checked": _ctx.isItemChecked(item) }])
        }, [
          createElementVNode("label", null, [
            withDirectives(createElementVNode("input", {
              id: _ctx.getFieldID(_ctx.schema, true),
              type: "checkbox",
              checked: _ctx.isItemChecked(item),
              disabled: _ctx.disabled,
              name: _ctx.getInputName(item),
              onChange: ($event) => _ctx.onChanged($event, item)
            }, null, 40, _hoisted_4$2), [
              [_directive_attributes, "input"]
            ]),
            createTextVNode(toDisplayString(_ctx.getItemName(item)), 1)
          ])
        ], 2);
      }), 128))
    ], 8, _hoisted_3$6)) : createCommentVNode("", true),
    !_ctx.schema.listBox ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "combobox form-control",
      disabled: _ctx.disabled
    }, [
      createElementVNode("div", {
        class: normalizeClass(["mainRow", { expanded: _ctx.comboExpanded }]),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onExpandCombo && _ctx.onExpandCombo(...args))
      }, [
        createElementVNode("div", _hoisted_6$1, [
          _ctx.formOptions.i18n && _ctx.$te("vfg.selected") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.$t("vfg.selected", { count: _ctx.selectedCount })), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.selectedCount) + " selected ", 1)
          ], 64))
        ]),
        _cache[1] || (_cache[1] = createElementVNode("div", { class: "arrow" }, null, -1))
      ], 2),
      createElementVNode("div", _hoisted_7$1, [
        _ctx.comboExpanded ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: normalizeClass(["list-row", { "is-checked": _ctx.isItemChecked(item) }])
          }, [
            createElementVNode("label", null, [
              withDirectives(createElementVNode("input", {
                id: _ctx.getFieldID(_ctx.schema, true),
                type: "checkbox",
                checked: _ctx.isItemChecked(item),
                disabled: _ctx.disabled,
                name: _ctx.getInputName(item),
                onChange: ($event) => _ctx.onChanged($event, item)
              }, null, 40, _hoisted_8$1), [
                [_directive_attributes, "input"]
              ]),
              _ctx.formOptions.i18n && _ctx.$te(_ctx.getItemName(item)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.$t(_ctx.getItemName(item))), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(_ctx.getItemName(item)), 1)
              ], 64))
            ])
          ], 2);
        }), 128)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_5$2)) : createCommentVNode("", true)
  ])), [
    [_directive_attributes, "wrapper"]
  ]);
}
const fieldChecklist = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const DATETIME_FORMATS = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  "datetime-local": "YYYY-MM-DDTHH:mm:ss"
};
const _sfc_main$l = defineComponent({
  mixins: [abstractField],
  computed: {
    inputType() {
      if (this.schema && this.schema.inputType === "datetime") {
        return "datetime-local";
      }
      return this.schema.inputType;
    }
  },
  mounted() {
    switch (this.schema.inputType.toLowerCase()) {
      case "number":
      case "range":
        this.debouncedFormatFunc = debounce(
          (newValue, oldValue) => {
            this.formatNumberToModel(newValue, oldValue);
          },
          parseInt(get(this.schema, "debounceFormatTimeout", 1e3)),
          {
            trailing: true,
            leading: false
          }
        );
        break;
      case "date":
      case "datetime":
      case "datetime-local":
        this.debouncedFormatFunc = debounce(
          (newValue, oldValue) => {
            this.formatDatetimeToModel(newValue, oldValue);
          },
          parseInt(get(this.schema, "debounceFormatTimeout", 1e3)),
          {
            trailing: true,
            leading: false
          }
        );
        break;
    }
  },
  created() {
    if (this.schema.inputType.toLowerCase() === "file") {
      console.warn(
        "The 'file' type in input field is deprecated. Use 'file' field instead."
      );
    }
  },
  methods: {
    formatValueToModel(value) {
      if (value != null) {
        switch (this.schema.inputType.toLowerCase()) {
          case "date":
          case "datetime":
          case "datetime-local":
          case "number":
          case "range":
            return (newValue, oldValue) => {
              this.debouncedFormatFunc(value, oldValue);
            };
        }
      }
      return value;
    },
    formatValueToField(value) {
      switch (this.schema.inputType.toLowerCase()) {
        case "date":
        case "datetime":
        case "datetime-local":
          return this.formatDatetimeValueToField(value);
      }
      return value;
    },
    formatDatetimeToModel(newValue, oldValue) {
      let defaultFormat = DATETIME_FORMATS[this.schema.inputType.toLowerCase()];
      let m = fecha.parse(newValue, defaultFormat);
      if (m !== false) {
        if (this.schema.format) {
          newValue = fecha.format(m, this.schema.format);
        } else {
          newValue = m.valueOf();
        }
      }
      this.updateModelValue(newValue, oldValue);
    },
    formatDatetimeValueToField(value) {
      if (value === null || void 0 === value) {
        return null;
      }
      let defaultFormat = DATETIME_FORMATS[this.schema.inputType.toLowerCase()];
      let m = value;
      if (!isNumber(value)) {
        m = fecha.parse(value, defaultFormat);
      }
      if (m !== false) {
        return fecha.format(m, defaultFormat);
      }
      return value;
    },
    formatNumberToModel(newValue, oldValue) {
      if (!isNumber(newValue)) {
        newValue = NaN;
      }
      this.updateModelValue(newValue, oldValue);
    },
    onInput($event) {
      let value = $event.target.value;
      switch (this.schema.inputType.toLowerCase()) {
        case "number":
        case "range":
          if (isNumber(parseFloat($event.target.value))) {
            value = parseFloat($event.target.value);
          }
          break;
      }
      this.value = value;
    },
    onBlur() {
      if (isFunction(this.debouncedFormatFunc)) {
        this.debouncedFormatFunc.flush();
      }
    }
  }
});
const _hoisted_1$k = { class: "wrapper" };
const _hoisted_2$a = ["id", "type", "value", "disabled", "accept", "alt", "autocomplete", "checked", "dirname", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "width", "files"];
const _hoisted_3$5 = {
  key: 0,
  class: "helper"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$k, [
    withDirectives(createElementVNode("input", {
      id: _ctx.getFieldID(_ctx.schema),
      class: normalizeClass(["form-control", _ctx.schema.fieldClasses]),
      type: _ctx.inputType,
      value: _ctx.value,
      disabled: _ctx.disabled,
      accept: _ctx.schema.accept,
      alt: _ctx.schema.alt,
      autocomplete: _ctx.schema.autocomplete,
      checked: _ctx.schema.checked,
      dirname: _ctx.schema.dirname,
      formaction: _ctx.schema.formaction,
      formenctype: _ctx.schema.formenctype,
      formmethod: _ctx.schema.formmethod,
      formnovalidate: _ctx.schema.formnovalidate,
      formtarget: _ctx.schema.formtarget,
      height: _ctx.schema.height,
      list: _ctx.schema.list,
      max: _ctx.schema.max,
      maxlength: _ctx.schema.maxlength,
      min: _ctx.schema.min,
      minlength: _ctx.schema.minlength,
      multiple: _ctx.schema.multiple,
      name: _ctx.schema.inputName,
      pattern: _ctx.schema.pattern,
      placeholder: _ctx.schema.placeholder ? _ctx.formOptions.i18n ? _ctx.$te(_ctx.schema.placeholder) ? _ctx.$t(_ctx.schema.placeholder) : _ctx.schema.placeholder : _ctx.schema.placeholder : "",
      readonly: _ctx.schema.readonly,
      required: _ctx.schema.required,
      size: _ctx.schema.size || 20,
      src: _ctx.schema.src,
      step: _ctx.schema.step,
      width: _ctx.schema.width,
      files: _ctx.schema.files,
      onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onChange: _cache[2] || (_cache[2] = ($event) => _ctx.schema.onChange || null)
    }, null, 42, _hoisted_2$a), [
      [_directive_attributes, "input"]
    ]),
    _ctx.schema.inputType.toLowerCase() === "color" || _ctx.schema.inputType.toLowerCase() === "range" ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(_ctx.value), 1)) : createCommentVNode("", true)
  ])), [
    [_directive_attributes, "wrapper"]
  ]);
}
const fieldInput = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _sfc_main$k = defineComponent({
  mixins: [abstractField]
});
const _hoisted_1$j = { class: "wrapper" };
const _hoisted_2$9 = ["id", "innerHTML"];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$j, [
    withDirectives(createElementVNode("span", {
      id: _ctx.getFieldID(_ctx.schema),
      class: normalizeClass(_ctx.schema.fieldClasses),
      innerHTML: _ctx.schema.text || _ctx.value
    }, null, 10, _hoisted_2$9), [
      [_directive_attributes, "label"]
    ])
  ])), [
    [_directive_attributes, "wrapper"]
  ]);
}
const fieldLabel = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const _sfc_main$j = defineComponent({
  mixins: [abstractField],
  computed: {
    items() {
      let values = this.schema.values;
      if (typeof values == "function") {
        return values.apply(this, [this.model, this.schema]);
      } else {
        return values;
      }
    },
    id() {
      return this.schema.model;
    }
  },
  methods: {
    getItemValue(item) {
      if (isObject(item)) {
        if (typeof this.schema["radiosOptions"] !== "undefined" && typeof this.schema["radiosOptions"]["value"] !== "undefined") {
          return item[this.schema.radiosOptions.value];
        } else {
          if (typeof item["value"] !== "undefined") {
            return item.value;
          } else {
            throw "`value` is not defined. If you want to use another key name, add a `value` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values";
          }
        }
      } else {
        return item;
      }
    },
    getItemName(item) {
      if (isObject(item)) {
        if (typeof this.schema["radiosOptions"] !== "undefined" && typeof this.schema["radiosOptions"]["name"] !== "undefined") {
          return item[this.schema.radiosOptions.name];
        } else {
          if (typeof item["name"] !== "undefined") {
            return item.name;
          } else {
            throw "`name` is not defined. If you want to use another key name, add a `name` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values";
          }
        }
      } else {
        return item;
      }
    },
    getItemCssClasses(item) {
      return {
        "is-checked": this.isItemChecked(item),
        "is-disabled": this.isItemDisabled(item)
      };
    },
    onSelection(item) {
      this.value = this.getItemValue(item);
    },
    isItemChecked(item) {
      let currentValue = this.getItemValue(item);
      return currentValue === this.value;
    },
    isItemDisabled(item) {
      if (this.disabled) {
        return true;
      }
      let disabled = get(item, "disabled", false);
      if (isFunction(disabled)) {
        return disabled(this.model);
      }
      return disabled;
    }
  }
});
const _hoisted_1$i = ["disabled"];
const _hoisted_2$8 = ["id", "disabled", "name", "value", "checked", "required", "onClick"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "radio-list",
    disabled: _ctx.disabled
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
      return withDirectives((openBlock(), createElementBlock("label", {
        key: item,
        class: normalizeClass(_ctx.getItemCssClasses(item))
      }, [
        withDirectives(createElementVNode("input", {
          id: _ctx.getFieldID(_ctx.schema, true),
          type: "radio",
          disabled: _ctx.isItemDisabled(item),
          name: _ctx.id,
          value: _ctx.getItemValue(item),
          checked: _ctx.isItemChecked(item),
          class: normalizeClass(_ctx.schema.fieldClasses),
          required: _ctx.schema.required,
          onClick: ($event) => _ctx.onSelection(item)
        }, null, 10, _hoisted_2$8), [
          [_directive_attributes, "input"]
        ]),
        createTextVNode(" " + toDisplayString(_ctx.getItemName(item)), 1)
      ], 2)), [
        [_directive_attributes, "label"]
      ]);
    }), 128))
  ], 8, _hoisted_1$i)), [
    [_directive_attributes, "wrapper"]
  ]);
}
const fieldRadios = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const _sfc_main$i = defineComponent({
  mixins: [abstractField],
  computed: {
    selectOptions() {
      return this.schema.selectOptions || {};
    },
    items() {
      let values = this.schema.values;
      if (typeof values == "function") {
        return this.groupValues(values.apply(this, [this.model, this.schema]));
      } else return this.groupValues(values);
    }
  },
  methods: {
    formatValueToField(value) {
      if (isNil(value)) {
        return null;
      }
      return value;
    },
    groupValues(values) {
      let array = [];
      let arrayElement = {};
      values.forEach((item) => {
        arrayElement = null;
        if (item.group && isObject(item)) {
          arrayElement = find(array, (i) => i.group === item.group);
          if (arrayElement) {
            arrayElement.ops.push({
              id: item.id,
              name: item.name
            });
          } else {
            arrayElement = {
              group: "",
              ops: []
            };
            arrayElement.group = item.group;
            arrayElement.ops.push({
              id: item.id,
              name: item.name
            });
            array.push(arrayElement);
          }
        } else {
          array.push(item);
        }
      });
      return array;
    },
    getGroupName(item) {
      if (item && item.group) {
        return item.group;
      }
      throw "Group name is missing! https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
    },
    getItemValue(item) {
      if (isObject(item)) {
        if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["value"] !== "undefined") {
          return item[this.schema.selectOptions.value];
        } else {
          if (typeof item["id"] !== "undefined") {
            return item.id;
          } else {
            throw "`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
          }
        }
      } else {
        return item;
      }
    },
    getItemName(item) {
      if (isObject(item)) {
        if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["name"] !== "undefined") {
          return item[this.schema.selectOptions.name];
        } else {
          if (typeof item["name"] !== "undefined") {
            return item.name;
          } else {
            throw "`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
          }
        }
      } else {
        return item;
      }
    }
  }
});
const _hoisted_1$h = ["id", "disabled", "name"];
const _hoisted_2$7 = ["disabled"];
const _hoisted_3$4 = ["label"];
const _hoisted_4$1 = ["value"];
const _hoisted_5$1 = ["value"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("select", {
    id: _ctx.getFieldID(_ctx.schema),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: normalizeClass(["form-control", _ctx.schema.fieldClasses]),
    disabled: _ctx.disabled,
    name: _ctx.schema.inputName
  }, [
    !_ctx.selectOptions.hideNoneSelectedText ? (openBlock(), createElementBlock("option", {
      key: 0,
      disabled: _ctx.schema.required,
      value: null
    }, [
      _ctx.selectOptions.noneSelectedText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.formOptions.i18n && _ctx.$te(_ctx.selectOptions.noneSelectedText) ? _ctx.$t(_ctx.selectOptions.noneSelectedText) : _ctx.selectOptions.noneSelectedText), 1)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(" <Nothing selected> ")
      ], 64))
    ], 8, _hoisted_2$7)) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index2) => {
      return openBlock(), createElementBlock(Fragment, null, [
        item.group ? (openBlock(), createElementBlock("optgroup", {
          key: index2 + "_optgroup",
          label: _ctx.getGroupName(item)
        }, [
          item.ops ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(item.ops, (i) => {
            return openBlock(), createElementBlock("option", {
              key: i,
              value: _ctx.getItemValue(i)
            }, [
              _ctx.formOptions.i18n && _ctx.$te(_ctx.getItemName(i)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.$t(_ctx.getItemName(i))), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(_ctx.getItemName(i)), 1)
              ], 64))
            ], 8, _hoisted_4$1);
          }), 128)) : createCommentVNode("", true)
        ], 8, _hoisted_3$4)) : !item.group ? (openBlock(), createElementBlock("option", {
          key: index2 + "_option",
          value: _ctx.getItemValue(item)
        }, [
          _ctx.formOptions.i18n && _ctx.$te(_ctx.getItemName(item)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.$t(_ctx.getItemName(item))), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.getItemName(item)), 1)
          ], 64)),
          createTextVNode(" " + toDisplayString(), 1)
        ], 8, _hoisted_5$1)) : createCommentVNode("", true)
      ], 64);
    }), 256))
  ], 10, _hoisted_1$h)), [
    [vModelSelect, _ctx.value],
    [_directive_attributes, "input"]
  ]);
}
const fieldSelect = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const _sfc_main$h = defineComponent({
  mixins: [abstractField],
  methods: {
    onClick($event) {
      if (this.schema.validateBeforeSubmit === true) {
        $event.preventDefault();
        let validateAsync = get(this.formOptions, "validateAsync", false);
        let errors = this.vfg.validate();
        let handleErrors = (errors2) => {
          if (validateAsync && !isEmpty(errors2) || !validateAsync && !errors2) {
            if (isFunction(this.schema.onValidationError)) {
              this.schema.onValidationError(
                this.model,
                this.schema,
                errors2,
                $event
              );
            }
          } else if (isFunction(this.schema.onSubmit)) {
            this.schema.onSubmit(this.model, this.schema, $event);
          }
        };
        if (errors && isFunction(errors.then)) {
          errors.then(handleErrors);
        } else {
          handleErrors(errors);
        }
      } else if (isFunction(this.schema.onSubmit)) {
        this.schema.onSubmit(this.model, this.schema, $event);
      }
    }
  }
});
const _hoisted_1$g = ["id", "value", "name", "disabled"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("input", {
    id: _ctx.getFieldID(_ctx.schema),
    type: "submit",
    value: _ctx.$te(_ctx.schema.buttonText) ? _ctx.$t(_ctx.schema.buttonText) : _ctx.schema.buttonText,
    name: _ctx.schema.inputName,
    disabled: _ctx.disabled,
    class: normalizeClass(_ctx.schema.fieldClasses),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, null, 10, _hoisted_1$g)), [
    [_directive_attributes, "input"]
  ]);
}
const fieldSubmit = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = defineComponent({
  mixins: [abstractField]
});
const _hoisted_1$f = ["id", "disabled", "maxlength", "minlength", "placeholder", "readonly", "required", "rows", "name"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("textarea", {
    id: _ctx.getFieldID(_ctx.schema),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: normalizeClass(["form-control", _ctx.schema.fieldClasses]),
    disabled: _ctx.disabled,
    maxlength: _ctx.schema.max,
    minlength: _ctx.schema.min,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    required: _ctx.schema.required,
    rows: _ctx.schema.rows || 2,
    name: _ctx.schema.inputName
  }, null, 10, _hoisted_1$f)), [
    [vModelText, _ctx.value],
    [_directive_attributes, "input"]
  ]);
}
const fieldTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = defineComponent({
  mixins: [abstractField],
  methods: {
    onChange($event) {
      if (isFunction(this.schema.onChanged)) {
        this.schema.onChanged.call(this, this.model, this.schema, $event, this);
      }
    }
  }
});
const _hoisted_1$e = { class: "wrapper" };
const _hoisted_2$6 = ["id", "name", "accept", "multiple", "placeholder", "readonly", "required", "disabled"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_attributes = resolveDirective("attributes");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$e, [
    withDirectives(createElementVNode("input", {
      id: _ctx.getFieldID(_ctx.schema),
      class: "form-control",
      type: "file",
      name: _ctx.schema.inputName,
      accept: _ctx.schema.accept,
      multiple: _ctx.schema.multiple,
      placeholder: _ctx.schema.placeholder,
      readonly: _ctx.schema.readonly,
      required: _ctx.schema.required,
      disabled: _ctx.disabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
    }, null, 40, _hoisted_2$6), [
      [_directive_attributes, "input"]
    ])
  ])), [
    [_directive_attributes, "wrapper"]
  ]);
}
const fieldUpload = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      cleave: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      if (window.Cleave) {
        this.cleave = new window.Cleave(
          this.$el,
          defaults(this.schema.cleaveOptions || {}, {
            // Credit Card
            creditCard: false,
            // onCreditCardTypeChanged: onCreditCardTypeChanged.bind(this),
            // Phone
            phone: false,
            phoneRegionCode: "AU",
            // Date
            date: false,
            datePattern: ["d", "m", "Y"],
            // Numerals
            numeral: false,
            numeralThousandsGroupStyle: "thousand",
            numeralDecimalScale: 2,
            numeralDecimalMark: ".",
            // General
            blocks: [],
            delimiter: " ",
            prefix: null,
            numericOnly: false,
            uppercase: false,
            lowercase: false,
            maxLength: 0
          })
        );
        if (this.cleave.properties && "result" in this.cleave.properties) {
          this.$watch("cleave.properties.result", () => {
            this.value = this.cleave.properties.result;
          });
        } else {
          this.$el.addEventListener("input", this.inputChange);
        }
      } else {
        console.warn(
          "Cleave is missing. Please download from https://github.com/nosir/cleave.js/ and load the script in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (this.cleave) {
      this.cleave.destroy();
      this.$el.removeEventListener("input", this.inputChange);
    }
  },
  methods: {
    inputChange() {
      this.value = this.$el.value;
    }
  }
});
const _hoisted_1$d = ["id", "value", "autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    id: _ctx.getFieldID(_ctx.schema),
    class: "form-control",
    type: "text",
    value: _ctx.value,
    autocomplete: _ctx.schema.autocomplete,
    disabled: _ctx.disabled,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName
  }, null, 8, _hoisted_1$d);
}
const fieldCleave = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const dateFieldHelper = {
  formatValueToField(value) {
    if (value != null) {
      let dt = this.schema.format ? fecha.parse(value, this.schema.format) : new Date(value);
      return fecha.format(dt, this.getDateFormat());
    }
    return value;
  },
  formatValueToModel(value) {
    if (value != null) {
      let m = fecha.parse(value, this.getDateFormat());
      if (this.schema.format) {
        value = fecha.format(m, this.schema.format);
      } else {
        value = m.valueOf();
      }
    }
    return value;
  }
};
let inputFormat$1 = "YYYY-MM-DD HH:mm:ss";
const _sfc_main$d = defineComponent({
  mixins: [abstractField],
  mounted() {
    this.$nextTick(function() {
      if (window.$ && window.$.fn.datetimepicker) {
        let input = this.$el.querySelector(".form-control");
        $(this.$el).datetimepicker(
          defaults(this.schema.dateTimePickerOptions || {}, {
            format: inputFormat$1
          })
        ).on("dp.change", () => {
          this.value = input.value;
        });
      } else {
        console.warn(
          "Bootstrap datetimepicker library is missing. Please download from https://eonasdan.github.io/bootstrap-datetimepicker/ and load the script and CSS in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (window.$ && window.$.fn.datetimepicker) {
      $(this.$el).data("DateTimePicker").destroy();
    }
  },
  methods: {
    getDateFormat() {
      if (this.schema.dateTimePickerOptions && this.schema.dateTimePickerOptions.format)
        return this.schema.dateTimePickerOptions.format;
      else return inputFormat$1;
    },
    ...dateFieldHelper
  }
});
const _hoisted_1$c = { class: "input-group date" };
const _hoisted_2$5 = ["id", "autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    withDirectives(createElementVNode("input", {
      id: _ctx.getFieldID(_ctx.schema),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      class: "form-control",
      type: "text",
      autocomplete: _ctx.schema.autocomplete,
      disabled: _ctx.disabled,
      placeholder: _ctx.schema.placeholder,
      readonly: _ctx.schema.readonly,
      name: _ctx.schema.inputName
    }, null, 8, _hoisted_2$5), [
      [vModelText, _ctx.value]
    ]),
    _cache[1] || (_cache[1] = createElementVNode("span", { class: "input-group-addon" }, [
      createElementVNode("span", { class: "glyphicon glyphicon-calendar" })
    ], -1))
  ]);
}
const fieldDateTimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _sfc_main$c = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      // google autocomplete object
      autocomplete: "",
      // google inputs retrieved
      inputs: {
        street_number: "long_name",
        route: "long_name",
        country: "long_name",
        administrative_area_level_1: "long_name",
        administrative_area_level_2: "long_name",
        locality: "long_name",
        postal_code: "short_name"
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (window.google && window.google.maps && window.google.maps.places && window.google.maps.places.Autocomplete) {
        this.autocomplete = new google.maps.places.Autocomplete(this.$el, {
          types: ["geocode"]
        });
        this.autocomplete.addListener("place_changed", this.pipeAddress);
      } else {
        console.warn(
          "Google Maps API is missing. Please add https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places script in the HTML head section!"
        );
      }
    });
  },
  methods: {
    /**
     * Look up places and dispatch an event.
     * @return void
     */
    pipeAddress() {
      let place = this.autocomplete.getPlace();
      if (place) {
        this.value = place.formatted_address;
        let data = {};
        if (place.address_components !== void 0) {
          for (let i = 0; i < place.address_components.length; i++) {
            let input = place.address_components[i].types[0];
            if (this.inputs[input]) {
              data[input] = place.address_components[i][this.inputs[input]];
            }
          }
        }
        if (isFunction(this.schema.onPlaceChanged))
          this.schema.onPlaceChanged(
            this.value,
            data,
            place,
            this.model,
            this.schema
          );
      }
    },
    /**
     * Get the user location.
     * @return void
     */
    geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          let circle = new window.google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          this.autocomplete.setBounds(circle.getBounds());
        });
      }
    }
  }
});
const _hoisted_1$b = ["id", "autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    id: _ctx.getFieldID(_ctx.schema),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: "form-control",
    type: "text",
    autocomplete: _ctx.schema.autocomplete,
    disabled: _ctx.disabled,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName,
    debounce: "500",
    onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.geolocate())
  }, null, 40, _hoisted_1$b)), [
    [vModelText, _ctx.value]
  ]);
}
const fieldGoogleAddress = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = defineComponent({
  mixins: [abstractField],
  computed: {
    previewStyle() {
      if (this.schema.preview !== false) {
        return {
          display: "block",
          "background-image": this.value != null ? "url(" + this.value + ")" : "none"
        };
      } else {
        return {
          display: "none"
        };
      }
    },
    wrappedValue: {
      get() {
        if (this.value && this.value.indexOf("data") === 0)
          return "<inline base64 image>";
        else return this.value;
      },
      set(newValue) {
        if (newValue && newValue.indexOf("http") === 0) {
          this.value = newValue;
        }
      }
    }
  },
  watch: {
    model() {
      let el = this.$el.querySelector("input.file");
      if (el) {
        el.value = "";
      }
    }
  },
  methods: {
    remove() {
      this.value = "";
    },
    fileChanged(event) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.value = e.target.result;
      };
      if (event.target.files && event.target.files.length > 0) {
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
});
const _hoisted_1$a = { class: "wrapper" };
const _hoisted_2$4 = ["autocomplete", "disabled", "placeholder", "readonly"];
const _hoisted_3$3 = ["disabled", "name"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.wrappedValue = $event),
      class: "form-control link",
      type: "text",
      autocomplete: _ctx.schema.autocomplete,
      disabled: _ctx.disabled,
      placeholder: _ctx.schema.placeholder,
      readonly: _ctx.schema.readonly
    }, null, 8, _hoisted_2$4), [
      [vShow, _ctx.schema.hideInput !== true],
      [vModelText, _ctx.wrappedValue]
    ]),
    _ctx.schema.browse !== false ? (openBlock(), createElementBlock("input", {
      key: 0,
      class: "form-control file",
      type: "file",
      disabled: _ctx.disabled,
      name: _ctx.schema.inputName,
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.fileChanged && _ctx.fileChanged(...args))
    }, null, 40, _hoisted_3$3)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: "preview",
      style: normalizeStyle(_ctx.previewStyle)
    }, [
      createElementVNode("div", {
        class: "remove",
        title: "Remove image",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.remove && _ctx.remove(...args))
      })
    ], 4)
  ]);
}
const fieldImage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = defineComponent({
  mixins: [abstractField],
  mounted() {
    this.$nextTick(function() {
      if (window.$ && window.$.fn.mask) {
        $(this.$el).unmask().mask(this.schema.mask, this.schema.maskOptions);
      } else {
        console.warn(
          "JQuery MaskedInput library is missing. Please download from https://github.com/digitalBush/jquery.maskedinput and load the script in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (window.$ && window.$.fn.mask) $(this.$el).unmask();
  }
});
const _hoisted_1$9 = ["id", "autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    id: _ctx.getFieldID(_ctx.schema),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: "form-control",
    type: "text",
    autocomplete: _ctx.schema.autocomplete,
    disabled: _ctx.disabled,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName
  }, null, 8, _hoisted_1$9)), [
    [vModelText, _ctx.value]
  ]);
}
const fieldMasked = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      slider: null
    };
  },
  computed: {
    containPips() {
      return this.schema.noUiSliderOptions && typeof this.schema.noUiSliderOptions.pips !== "undefined";
    },
    containTooltip() {
      return this.schema.noUiSliderOptions && this.schema.noUiSliderOptions.tooltips;
    }
  },
  watch: {
    model: function() {
      if (window.noUiSlider && this.slider && this.slider.noUiSlider) {
        this.slider.noUiSlider.set(this.value);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (window.noUiSlider) {
        this.slider = this.$el;
        window.noUiSlider.create(
          this.slider,
          defaults(this.schema.noUiSliderOptions || {}, {
            start: this.getStartValue(),
            range: {
              min: this.schema.min,
              max: this.schema.max
            }
          })
        );
        this.slider.noUiSlider.on("change", this.onChange.bind(this));
      } else {
        console.warn(
          "noUiSlider is missing. Please download from https://github.com/leongersen/noUiSlider and load the script and CSS in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (this.slider) this.slider.noUiSlider.off("change");
  },
  methods: {
    onChange(value) {
      if (isArray(value)) {
        this.value = [parseFloat(value[0]), parseFloat(value[1])];
      } else {
        this.value = parseFloat(value);
      }
    },
    formatValueToField(value) {
      if (this.slider !== null && typeof this.slider.noUiSlider !== "undefined") {
        this.slider.noUiSlider.set(value);
      }
    },
    formatValueToModel(val) {
      if (typeof this.slider.noUiSlider !== "undefined") {
        if (val instanceof Array) {
          return [Number(val[0]), Number(val[1])];
        } else {
          return Number(val);
        }
      }
    },
    getStartValue() {
      if (this.value != null) {
        return this.value;
      } else {
        if (typeof this.schema.noUiSliderOptions !== "undefined" && this.schema.noUiSliderOptions.double) {
          return [this.schema.min, this.schema.min];
        } else {
          return this.schema.min;
        }
      }
    }
  }
});
const _hoisted_1$8 = ["disabled"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["slider", { "contain-pips": _ctx.containPips, "contain-tooltip": _ctx.containTooltip }]),
    disabled: _ctx.disabled
  }, null, 10, _hoisted_1$8);
}
const fieldNoUiSlider = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
let inputFormat = "YYYY-MM-DD";
const _sfc_main$8 = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      picker: null,
      options: null
    };
  },
  mounted() {
    this.initialize(get(this.schema, "pikadayOptions", {}));
  },
  beforeUnmount() {
    if (this.picker) {
      this.picker.destroy();
    }
  },
  methods: {
    getDateFormat() {
      return get(this.schema, "pikadayOptions.format", inputFormat);
    },
    ...dateFieldHelper,
    initialize(options) {
      if (this.picker && this.picker.destroy) {
        this.picker.destroy();
      }
      this.$nextTick(() => {
        if (window.Pikaday) {
          this.options = defaults({}, options, {
            field: this.$el,
            // bind the datepicker to a form field
            onSelect: () => {
              this.value = this.picker.toString();
            }
            // trigger: , // use a different element to trigger opening the datepicker, see [trigger example][] (default to `field`)
          });
          this.picker = new window.Pikaday(this.options);
        } else {
          console.warn(
            "Pikaday is missing. Please download from https://github.com/dbushell/Pikaday/ and load the script and CSS in the HTML head section!"
          );
        }
      });
    }
  }
});
const _hoisted_1$7 = ["autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: "form-control",
    type: "text",
    autocomplete: _ctx.schema.autocomplete,
    disabled: _ctx.disabled,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName
  }, null, 8, _hoisted_1$7)), [
    [vModelText, _ctx.value]
  ]);
}
const fieldPikaday = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      slider: null
    };
  },
  watch: {
    model: function() {
      if (window.$ && window.$.fn.ionRangeSlider) {
        let valueFrom, valueTo;
        if (isArray(this.value)) {
          [valueFrom, valueTo] = this.value;
        } else valueFrom = this.value;
        if (this.slider) {
          this.slider.update({
            from: valueFrom,
            to: valueTo
          });
        }
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (window.$ && window.$.fn.ionRangeSlider) {
        let valueFrom, valueTo;
        if (isArray(this.value)) {
          [valueFrom, valueTo] = this.value;
        } else valueFrom = this.value;
        let self = this;
        $(this.$el).ionRangeSlider(
          defaults(this.schema.rangeSliderOptions || {}, {
            type: "single",
            grid: true,
            hide_min_max: true,
            from: valueFrom,
            to: valueTo,
            onChange(slider) {
              if (self.slider.options.type === "double") {
                self.value = [slider.from, slider.to];
              } else {
                self.value = slider.from;
              }
            }
          })
        );
        this.slider = $(this.$el).data("ionRangeSlider");
      } else {
        console.warn(
          "ion.rangeSlider library is missing. Please download from https://github.com/IonDen/ion.rangeSlider and load the script and CSS in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (this.slider) this.slider.destroy();
  }
});
const _hoisted_1$6 = ["autocomplete", "data-disable", "data-max", "data-min", "data-step", "placeholder", "readonly", "name"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    type: "text",
    autocomplete: _ctx.schema.autocomplete,
    "data-disable": _ctx.disabled,
    "data-max": _ctx.schema.max,
    "data-min": _ctx.schema.min,
    "data-step": _ctx.schema.step,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName
  }, null, 8, _hoisted_1$6);
}
const fieldRangeSlider = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = defineComponent({
  mixins: [abstractField],
  computed: {
    items() {
      let values = this.schema.values;
      if (typeof values == "function") {
        return values.apply(this, [this.model, this.schema]);
      } else return values;
    }
  },
  watch: {
    model: function() {
      if ($.fn.selectpicker) $(this.$el).selectpicker("refresh");
    }
  },
  mounted() {
    this.$nextTick(function() {
      if ($.fn.selectpicker) {
        $(this.$el).selectpicker("destroy").selectpicker(this.schema.selectOptions);
      } else {
        console.warn(
          "Bootstrap-select library is missing. Please download from https://silviomoreto.github.io/bootstrap-select/ and load the script and CSS in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if ($.fn.selectpicker) $(this.$el).selectpicker("destroy");
  },
  methods: {
    getItemValue(item) {
      if (isObject(item)) {
        if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["value"] !== "undefined") {
          return item[this.schema.selectOptions.value];
        } else {
          if (typeof item["id"] !== "undefined") {
            return item.id;
          } else {
            throw "`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
          }
        }
      } else {
        return item;
      }
    },
    getItemName(item) {
      if (isObject(item)) {
        if (typeof this.schema["selectOptions"] !== "undefined" && typeof this.schema["selectOptions"]["name"] !== "undefined") {
          return item[this.schema.selectOptions.name];
        } else {
          if (typeof item["name"] !== "undefined") {
            return item.name;
          } else {
            throw "`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items";
          }
        }
      } else {
        return item;
      }
    }
  }
});
const _hoisted_1$5 = ["disabled", "multiple", "title", "name"];
const _hoisted_2$3 = ["disabled", "selected"];
const _hoisted_3$2 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    class: "selectpicker",
    disabled: _ctx.disabled,
    multiple: _ctx.schema.multiSelect,
    title: _ctx.schema.placeholder,
    "data-width": "100%",
    name: _ctx.schema.inputName
  }, [
    _ctx.schema.multiSelect !== true ? (openBlock(), createElementBlock("option", {
      key: 0,
      disabled: _ctx.schema.required,
      value: null,
      selected: _ctx.value == void 0
    }, null, 8, _hoisted_2$3)) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
      return openBlock(), createElementBlock("option", {
        key: item,
        value: _ctx.getItemValue(item)
      }, toDisplayString(_ctx.getItemName(item)), 9, _hoisted_3$2);
    }), 128))
  ], 8, _hoisted_1$5)), [
    [vModelSelect, _ctx.value]
  ]);
}
const fieldSelectEx = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = defineComponent({
  mixins: [abstractField],
  data() {
    return {
      picker: null
    };
  },
  watch: {
    model() {
      if (window.$ && window.$.fn.spectrum) {
        this.picker.spectrum("set", this.value);
      }
    },
    disabled(val) {
      if (val) this.picker.spectrum("disable");
      else this.picker.spectrum("enable");
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (window.$ && window.$.fn.spectrum) {
        this.picker = $(this.$el).spectrum("destroy").spectrum(
          defaults(this.schema.colorOptions || {}, {
            showInput: true,
            showAlpha: true,
            disabled: this.schema.disabled,
            allowEmpty: !this.schema.required,
            preferredFormat: "hex",
            change: (color) => {
              this.value = color ? color.toString() : null;
            }
          })
        );
        this.picker.spectrum("set", this.value);
      } else {
        console.warn(
          "Spectrum color library is missing. Please download from http://bgrins.github.io/spectrum/ and load the script and CSS in the HTML head section!"
        );
      }
    });
  },
  beforeUnmount() {
    if (this.picker) this.picker.spectrum("destroy");
  }
});
const _hoisted_1$4 = ["id", "autocomplete", "disabled", "placeholder", "readonly", "name"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    id: _ctx.getFieldID(_ctx.schema),
    type: "text",
    autocomplete: _ctx.schema.autocomplete,
    disabled: _ctx.disabled,
    placeholder: _ctx.schema.placeholder,
    readonly: _ctx.schema.readonly,
    name: _ctx.schema.inputName
  }, null, 8, _hoisted_1$4);
}
const fieldSpectrum = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  mixins: [abstractField],
  computed: {
    mapLink() {
      if (this.value) {
        let lat, lng;
        let options = defaults(this.schema.staticMapOptions || {}, {
          lat: "lat",
          lng: "lng",
          zoom: 8,
          sizeX: 640,
          sizeY: 640
        });
        lat = this.value[options.lat];
        lng = this.value[options.lng];
        let url = `http://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${options.zoom}&size=${options.sizeX}x${options.sizeY}`;
        let props = [
          "scale",
          "format",
          "maptype",
          "language",
          "region",
          "markers",
          "path",
          "visible",
          "style",
          "key",
          "signature"
        ];
        for (let prop of props) {
          if (typeof options[prop] !== "undefined") {
            url += `&${prop}=${options[prop]}`;
          }
        }
        if (lat && lng) {
          return url;
        }
      }
      return "";
    }
  }
});
const _hoisted_1$3 = ["src"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: _ctx.mapLink || "data:,"
  }, null, 8, _hoisted_1$3);
}
const fieldStaticMap = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  mixins: [abstractField],
  methods: {
    formatValueToField(value) {
      if (value != null && this.schema.valueOn)
        return value === this.schema.valueOn;
      return value;
    },
    formatValueToModel(value) {
      if (value != null && this.schema.valueOn) {
        if (value) return this.schema.valueOn;
        else return this.schema.valueOff;
      }
      return value;
    }
  }
});
const _hoisted_1$2 = ["id", "autocomplete", "disabled", "name"];
const _hoisted_2$2 = ["data-on", "data-off", "for"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", null, [
    withDirectives(createElementVNode("input", {
      id: _ctx.getFieldID(_ctx.schema),
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      type: "checkbox",
      autocomplete: _ctx.schema.autocomplete,
      disabled: _ctx.disabled,
      name: _ctx.schema.inputName
    }, null, 8, _hoisted_1$2), [
      [vModelCheckbox, _ctx.value]
    ]),
    createElementVNode("span", {
      class: "label",
      "data-on": _ctx.schema.textOn || "On",
      "data-off": _ctx.schema.textOff || "Off",
      for: _ctx.getFieldID(_ctx.schema)
    }, null, 8, _hoisted_2$2),
    _cache[1] || (_cache[1] = createElementVNode("span", { class: "handle" }, null, -1))
  ]);
}
const fieldSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  mixins: [abstractField],
  computed: {
    selectOptions() {
      return this.schema.selectOptions || {};
    },
    options() {
      let values = this.schema.values;
      if (typeof values == "function") {
        return values.apply(this, [this.model, this.schema]);
      } else {
        return values;
      }
    },
    customLabel() {
      if (typeof this.schema.selectOptions !== "undefined" && typeof this.schema.selectOptions.customLabel !== "undefined" && typeof this.schema.selectOptions.customLabel === "function") {
        return this.schema.selectOptions.customLabel;
      } else {
        return void 0;
      }
    }
  },
  created() {
    if (!this.$root.$options.components["multiselect"]) {
      console.error(
        "'vue-multiselect' is missing. Please download from https://github.com/monterail/vue-multiselect and register the component globally!"
      );
    }
  },
  methods: {
    updateSelected(value) {
      this.value = value;
    },
    addTag(newTag, id) {
      let onNewTag = this.selectOptions.onNewTag;
      if (typeof onNewTag == "function") {
        onNewTag(newTag, id, this.options, this.value);
      }
    },
    onSearchChange(searchQuery, id) {
      let onSearch = this.selectOptions.onSearch;
      if (typeof onSearch == "function") {
        onSearch(searchQuery, id, this.options);
      }
    },
    onSelect() {
    },
    onRemove() {
    },
    onOpen() {
    },
    onClose() {
    }
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multiselect = resolveComponent("multiselect");
  return openBlock(), createBlock(_component_multiselect, {
    id: _ctx.selectOptions.id,
    options: _ctx.options,
    value: _ctx.value,
    multiple: _ctx.selectOptions.multiple,
    "track-by": _ctx.selectOptions.trackBy || null,
    label: _ctx.selectOptions.label || null,
    searchable: _ctx.selectOptions.searchable,
    "clear-on-select": _ctx.selectOptions.clearOnSelect,
    "hide-selected": _ctx.selectOptions.hideSelected,
    placeholder: _ctx.schema.placeholder,
    "allow-empty": _ctx.selectOptions.allowEmpty,
    "reset-after": _ctx.selectOptions.resetAfter,
    "close-on-select": _ctx.selectOptions.closeOnSelect,
    "custom-label": _ctx.customLabel,
    taggable: _ctx.selectOptions.taggable,
    "tag-placeholder": _ctx.selectOptions.tagPlaceholder,
    max: _ctx.schema.max || null,
    "options-limit": _ctx.selectOptions.optionsLimit,
    "group-values": _ctx.selectOptions.groupValues,
    "group-label": _ctx.selectOptions.groupLabel,
    "block-keys": _ctx.selectOptions.blockKeys,
    "internal-search": _ctx.selectOptions.internalSearch,
    "select-label": _ctx.selectOptions.selectLabel,
    "selected-label": _ctx.selectOptions.selectedLabel,
    "deselect-label": _ctx.selectOptions.deselectLabel,
    "show-labels": _ctx.selectOptions.showLabels,
    limit: _ctx.selectOptions.limit,
    "limit-text": _ctx.selectOptions.limitText,
    loading: _ctx.selectOptions.loading,
    disabled: _ctx.disabled,
    "max-height": _ctx.selectOptions.maxHeight,
    "show-pointer": _ctx.selectOptions.showPointer,
    "option-height": _ctx.selectOptions.optionHeight,
    onInput: _ctx.updateSelected,
    onSelect: _ctx.onSelect,
    onRemove: _ctx.onRemove,
    onSearchChange: _ctx.onSearchChange,
    onTag: _ctx.addTag,
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose
  }, {
    noResult: withCtx(() => [
      createElementVNode("span", null, toDisplayString(_ctx.selectOptions.noResult), 1)
    ]),
    maxElements: withCtx(() => [
      createElementVNode("span", null, toDisplayString(_ctx.selectOptions.maxElements), 1)
    ]),
    _: 1
  }, 8, ["id", "options", "value", "multiple", "track-by", "label", "searchable", "clear-on-select", "hide-selected", "placeholder", "allow-empty", "reset-after", "close-on-select", "custom-label", "taggable", "tag-placeholder", "max", "options-limit", "group-values", "group-label", "block-keys", "internal-search", "select-label", "selected-label", "deselect-label", "show-labels", "limit", "limit-text", "loading", "disabled", "max-height", "show-pointer", "option-height", "onInput", "onSelect", "onRemove", "onSearchChange", "onTag", "onOpen", "onClose"]);
}
const fieldVueMultiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const fullComponents = {
  fieldCheckbox,
  fieldChecklist,
  fieldInput,
  fieldLabel,
  fieldRadios,
  fieldSelect,
  fieldSubmit,
  fieldTextArea,
  fieldUpload,
  fieldCleave,
  fieldDateTimePicker,
  fieldGoogleAddress,
  fieldImage,
  fieldMasked,
  fieldNoUiSlider,
  fieldPikaday,
  fieldRangeSlider,
  fieldSelectEx,
  fieldSpectrum,
  fieldStaticMap,
  fieldSwitch,
  fieldVueMultiSelect
};
const coreComponents = {
  fieldCheckbox,
  fieldChecklist,
  fieldInput,
  fieldLabel,
  fieldRadios,
  fieldSelect,
  fieldSubmit,
  fieldTextArea,
  fieldUpload
};
const formMixin = {
  methods: {
    // Get style classes of field
    getFieldRowClasses(field) {
      const hasErrors = this.fieldErrors(field).length > 0;
      let baseClasses = {
        [get(this.options, "validationErrorClass", "error")]: hasErrors,
        [get(this.options, "validationSuccessClass", "valid")]: !hasErrors,
        disabled: this.fieldDisabled(field),
        readonly: this.fieldReadonly(field),
        featured: this.fieldFeatured(field),
        required: this.fieldRequired(field)
      };
      if (isArray(field.styleClasses)) {
        forEach(field.styleClasses, (c) => baseClasses[c] = true);
      } else if (isString(field.styleClasses)) {
        baseClasses[field.styleClasses] = true;
      }
      if (!isNil(field.type)) {
        baseClasses["field-" + field.type] = true;
      }
      return baseClasses;
    },
    fieldErrors(field) {
      let res = this.errors.filter((e) => e.field === field);
      return res.map((item) => item.error);
    },
    // Get disabled attr of field
    fieldDisabled(field) {
      if (isFunction(field.disabled))
        return field.disabled.call(this, this.model, field, this);
      if (isNil(field.disabled)) return false;
      return field.disabled;
    },
    // Get readonly prop of field
    fieldReadonly(field) {
      if (isFunction(field.readonly))
        return field.readonly.call(this, this.model, field, this);
      if (isNil(field.readonly)) return false;
      return field.readonly;
    },
    // Get featured prop of field
    fieldFeatured(field) {
      if (isFunction(field.featured))
        return field.featured.call(this, this.model, field, this);
      if (isNil(field.featured)) return false;
      return field.featured;
    },
    // Get required prop of field
    fieldRequired(field) {
      if (isFunction(field.required))
        return field.required.call(this, this.model, field, this);
      if (isNil(field.required)) return false;
      return field.required;
    }
  }
};
const _sfc_main$1 = defineComponent({
  name: "FormGroup",
  mixins: [formMixin],
  props: {
    vfg: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    field: {
      type: Object,
      required: true
    },
    errors: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["validated", "model-updated"],
  created() {
    this.options.formData.components.push(this);
    this.field.component = this;
  },
  methods: {
    // Should field type have a label
    isString(obj) {
      return isString(obj);
    },
    fieldTypeHasLabel(field) {
      if (isNil(field.label)) return false;
      let relevantType = "";
      if (field.type === "input") {
        relevantType = field.inputType;
      } else {
        relevantType = field.type;
      }
      switch (relevantType) {
        case "button":
        case "submit":
        case "reset":
          return false;
        default:
          return true;
      }
    },
    getFieldID(schema2) {
      const idPrefix = get(this.options, "fieldIdPrefix", "");
      return slugifyFormID(schema2, idPrefix);
    },
    // Get type of field 'field-xxx'. It'll be the name of HTML element
    getFieldType(fieldSchema) {
      var fieldComponent = "field-" + fieldSchema.type;
      if (camelCase(fieldComponent) in fieldComponents$1) return fieldComponent;
      return void 0;
    },
    // Get type of button, default to 'button'
    getButtonType(btn) {
      return get(btn, "type", "button");
    },
    // Child field executed validation
    onFieldValidated(res, errors, field) {
      this.$emit("validated", res, errors, field);
    },
    buttonVisibility(field) {
      return field.buttons && field.buttons.length > 0;
    },
    buttonClickHandler(btn, field, event) {
      return btn.onclick.call(this, this.model, field, event, this);
    },
    // Get current hint.
    fieldHint(field) {
      if (isFunction(field.hint))
        return field.hint.call(this, this.model, field, this);
      return field.hint;
    },
    fieldSuccess(field) {
      if (isFunction(field.success))
        return field.success.call(this, this.model, field, this);
      return field.success;
    },
    fieldErrors(field) {
      return this.errors.filter((e) => e.field === field).map((item) => item.error);
    },
    onModelUpdated(newVal, schema2) {
      this.$emit("model-updated", newVal, schema2);
    },
    validate(calledParent) {
      return this.$refs.child.validate(calledParent);
    },
    clearValidationErrors() {
      if (this.$refs.child) {
        return this.$refs.child.clearValidationErrors();
      }
    }
  }
});
const _hoisted_1$1 = ["for"];
const _hoisted_2$1 = {
  key: 0,
  class: "help"
};
const _hoisted_3$1 = { class: "helpText" };
const _hoisted_4 = { class: "field-wrap" };
const _hoisted_5 = {
  key: 0,
  class: "buttons"
};
const _hoisted_6 = ["type", "onClick", "textContent"];
const _hoisted_7 = {
  key: 1,
  class: "hint"
};
const _hoisted_8 = {
  key: 2,
  class: "success help-block"
};
const _hoisted_9 = {
  key: 3,
  class: "errors help-block"
};
const _hoisted_10 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.getFieldType(_ctx.field) ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["form-group", _ctx.getFieldRowClasses(_ctx.field)])
  }, [
    _ctx.fieldTypeHasLabel(_ctx.field) ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: _ctx.getFieldID(_ctx.field),
      class: normalizeClass(_ctx.field.labelClasses)
    }, [
      createElementVNode("span", null, [
        _ctx.options.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.$te(_ctx.field.label) ? _ctx.$t(_ctx.field.label) : _ctx.field.label), 1)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.field.label), 1)
        ], 64))
      ]),
      _ctx.field.help ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
        _cache[0] || (_cache[0] = createElementVNode("i", { class: "icon" }, null, -1)),
        createElementVNode("div", _hoisted_3$1, [
          _ctx.options.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.$te(_ctx.field.help) ? _ctx.$t(_ctx.field.help) : _ctx.field.help), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.field.help), 1)
          ], 64))
        ])
      ])) : createCommentVNode("", true)
    ], 10, _hoisted_1$1)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.getFieldType(_ctx.field)), {
        ref: "child",
        vfg: _ctx.vfg,
        disabled: _ctx.fieldDisabled(_ctx.field),
        model: _ctx.model,
        schema: _ctx.field,
        "form-options": _ctx.options,
        onModelUpdated: _ctx.onModelUpdated,
        onValidated: _ctx.onFieldValidated
      }, null, 40, ["vfg", "disabled", "model", "schema", "form-options", "onModelUpdated", "onValidated"])),
      _ctx.buttonVisibility(_ctx.field) ? (openBlock(), createElementBlock("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.buttons, (btn, index2) => {
          return openBlock(), createElementBlock("button", {
            key: index2,
            class: normalizeClass(btn.classes),
            type: _ctx.getButtonType(btn),
            onClick: ($event) => _ctx.buttonClickHandler(btn, _ctx.field, $event),
            textContent: toDisplayString(_ctx.options.i18n ? _ctx.$te(btn.label) ? _ctx.$t(btn.label) : btn.label : btn.label)
          }, null, 10, _hoisted_6);
        }), 128))
      ])) : createCommentVNode("", true)
    ]),
    _ctx.field.hint ? (openBlock(), createElementBlock("div", _hoisted_7, [
      _ctx.options.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.isString(_ctx.fieldHint(_ctx.field)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.$te(_ctx.fieldHint(_ctx.field)) ? _ctx.$t(_ctx.fieldHint(_ctx.field)) : _ctx.fieldHint(_ctx.field)), 1)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.$te(_ctx.fieldHint(_ctx.field).key) ? _ctx.$t(_ctx.fieldHint(_ctx.field).key, _ctx.fieldHint(_ctx.field).args) : _ctx.fieldHint(_ctx.field).key), 1)
        ], 64))
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(toDisplayString(_ctx.fieldHint(_ctx.field)), 1)
      ], 64))
    ])) : createCommentVNode("", true),
    _ctx.field.success ? (openBlock(), createElementBlock("div", _hoisted_8, [
      createElementVNode("span", null, [
        _ctx.options.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.isString(_ctx.fieldSuccess(_ctx.field)) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.$te(_ctx.fieldSuccess(_ctx.field)) ? _ctx.$t(_ctx.fieldSuccess(_ctx.field)) : _ctx.fieldSuccess(_ctx.field)), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.$te(_ctx.fieldSuccess(_ctx.field).key) ? _ctx.$t(_ctx.fieldSuccess(_ctx.field).key, _ctx.fieldSuccess(_ctx.field).args) : _ctx.fieldSuccess(_ctx.field).key), 1)
          ], 64))
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.fieldSuccess(_ctx.field)), 1)
        ], 64))
      ])
    ])) : createCommentVNode("", true),
    _ctx.fieldErrors(_ctx.field).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fieldErrors(_ctx.field), (error, index2) => {
        return openBlock(), createElementBlock("span", { key: index2 }, [
          _ctx.options.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.isString(error) ? error : _ctx.$te(error.key) ? _ctx.$t(error.key, error.args) : error.message), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.isString(error) ? error : error.message), 1)
          ], 64))
        ]);
      }), 128))
    ])) : createCommentVNode("", true)
  ], 2)) : (openBlock(), createElementBlock("div", _hoisted_10, "Invalid field type [" + toDisplayString(_ctx.field.type) + "]", 1));
}
const formGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "VueFormGenerator",
  components: { formGroup },
  mixins: [formMixin],
  props: {
    schema: {
      type: Object,
      default: () => {
        return {};
      }
    },
    model: {
      type: Object,
      default: () => {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {
          i18n: false,
          validateAfterLoad: false,
          validateAfterChanged: false,
          fieldIdPrefix: "",
          validateAsync: false,
          validationErrorClass: "error",
          validationSuccessClass: ""
        };
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    isNewModel: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "fieldset",
      validator: function(value) {
        return value.length > 0;
      }
    }
  },
  emits: ["validated", "model-updated"],
  data() {
    return {
      vfg: this,
      formOptions: this.options,
      errors: []
      // Validation errors
    };
  },
  computed: {
    fields() {
      let res = [];
      if (this.schema && this.schema.fields) {
        forEach(this.schema.fields, (field) => {
          if (!this.multiple || field.multi === true) res.push(field);
        });
      }
      return res;
    },
    groups() {
      let res = [];
      if (this.schema && this.schema.groups) {
        forEach(this.schema.groups.slice(0), (group) => {
          res.push(group);
        });
      }
      return res;
    }
  },
  watch: {
    // new model loaded
    model: function(newModel, oldModel) {
      if (oldModel === newModel)
        return;
      if (newModel != null) {
        this.$nextTick(() => {
          if (this.options.validateAfterLoad === true && this.isNewModel !== true) {
            this.validate();
          } else {
            this.clearValidationErrors();
          }
        });
      }
    }
  },
  beforeMount() {
    if (this.formOptions.i18n && !this.$i18n) this.formOptions.i18n = false;
    var fieldSet = {};
    if (this.schema.fields)
      this.schema.fields.forEach((field, i) => {
        fieldSet[field.model] = field;
      });
    this.groups.forEach((group) => {
      group.fields.forEach((field, i) => {
        fieldSet[field.model] = field;
      });
    });
    this.formOptions.formData = {
      record: this.model,
      fields: fieldSet,
      resources: this.formOptions.resources ? Object.assign(resources, this.formOptions.resources) : resources,
      components: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.model) {
        if (this.options.validateAfterLoad === true && this.isNewModel !== true) {
          this.validate();
        } else {
          this.clearValidationErrors();
        }
      }
    });
  },
  methods: {
    // Get visible prop of field
    fieldVisible(field) {
      if (isFunction(field.visible))
        return field.visible.call(this, this.model, field, this);
      if (isNil(field.visible)) return true;
      return field.visible;
    },
    // Child field executed validation
    onFieldValidated(res, errors, field) {
      this.errors = this.errors.filter((e) => e.field !== field.schema);
      if (!res && errors && errors.length > 0) {
        forEach(errors, (err) => {
          this.errors.push({
            field: field.schema,
            error: err
          });
        });
      }
      let isValid = this.errors.length === 0;
      this.$emit("validated", isValid, this.errors, this);
    },
    onModelUpdated(newVal, schema2) {
      this.$emit("model-updated", newVal, schema2);
    },
    // Validating the model properties
    validate(isAsync = null) {
      if (isAsync === null) {
        isAsync = get(this.options, "validateAsync", false);
      }
      this.clearValidationErrors();
      let fields = [];
      let results = [];
      forEach(this.formOptions.formData.components, (child) => {
        if (isFunction(child.validate)) {
          fields.push(child.$refs.child);
          results.push(child.validate(true));
        }
      });
      let handleErrors = (errors) => {
        let formErrors = [];
        forEach(errors, (err, i) => {
          if (isArray(err) && err.length > 0) {
            forEach(err, (error) => {
              formErrors.push({
                field: fields[i].schema,
                error
              });
            });
          }
        });
        this.errors = formErrors;
        let isValid = formErrors.length === 0;
        this.$emit("validated", isValid, formErrors, this);
        return isAsync ? formErrors : isValid;
      };
      if (!isAsync) {
        return handleErrors(results);
      }
      return Promise.all(results).then(handleErrors);
    },
    // Clear validation errors
    clearValidationErrors() {
      this.errors.splice(0);
      forEach(this.$children, (child) => {
        child.clearValidationErrors();
      });
    }
  }
});
const _hoisted_1 = {
  key: 0,
  class: "vue-form-generator"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_group = resolveComponent("form-group");
  return _ctx.schema != null ? (openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.schema.fields ? (openBlock(), createElementBlock("fieldset", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fields, (field) => {
        return openBlock(), createElementBlock(Fragment, null, [
          _ctx.fieldVisible(field) ? (openBlock(), createBlock(_component_form_group, {
            key: field,
            vfg: _ctx.vfg,
            field,
            errors: _ctx.errors,
            model: _ctx.model,
            options: _ctx.formOptions,
            onValidated: _ctx.onFieldValidated,
            onModelUpdated: _ctx.onModelUpdated
          }, null, 8, ["vfg", "field", "errors", "model", "options", "onValidated", "onModelUpdated"])) : createCommentVNode("", true)
        ], 64);
      }), 256))
    ])) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.groups, (group) => {
      return openBlock(), createElementBlock("fieldset", {
        key: group,
        class: normalizeClass(_ctx.getFieldRowClasses(group))
      }, [
        group.legend ? (openBlock(), createElementBlock("legend", _hoisted_3, [
          _ctx.formOptions.i18n ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.$te(group.legend) ? _ctx.$t(group.legend) : group.legend), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(group.legend), 1)
          ], 64))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(group.fields, (field) => {
          return openBlock(), createElementBlock(Fragment, null, [
            _ctx.fieldVisible(field) ? (openBlock(), createBlock(_component_form_group, {
              key: field,
              vfg: _ctx.vfg,
              field,
              errors: _ctx.errors,
              model: _ctx.model,
              options: _ctx.formOptions,
              onValidated: _ctx.onFieldValidated,
              onModelUpdated: _ctx.onModelUpdated
            }, null, 8, ["vfg", "field", "errors", "model", "options", "onValidated", "onModelUpdated"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ], 2);
    }), 128))
  ])) : createCommentVNode("", true);
}
const _component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const component = _component;
const validators = _validators;
const fieldComponents = fieldComponents$1;
let _app;
const registerComponent = (components) => {
  Object.keys(components).forEach((key) => {
    _app.component(key, components[key]);
    fieldComponents$1[key] = components[key];
  });
};
const index = {
  install(app, options) {
    _app = app;
    _app.component("VueFormGenerator", component);
    _validators.init(app);
    _app.config.globalProperties.VFG = {
      component: _component,
      validators: _validators
    };
    if (options) {
      if (options.components) registerComponent(options.components);
      if (options.validators) {
        for (let key in options.validators) {
          if ({}.hasOwnProperty.call(options.validators, key)) {
            _validators[key] = options.validators[key];
          }
        }
      }
    }
  }
};
export {
  abstractField,
  component,
  coreComponents,
  dateFieldHelper,
  index as default,
  fieldCheckbox,
  fieldChecklist,
  fieldCleave,
  fieldComponents,
  fieldDateTimePicker,
  fieldGoogleAddress,
  fieldImage,
  fieldInput,
  fieldLabel,
  fieldMasked,
  fieldNoUiSlider,
  fieldPikaday,
  fieldRadios,
  fieldRangeSlider,
  fieldSelect,
  fieldSelectEx,
  fieldSpectrum,
  fieldStaticMap,
  fieldSubmit,
  fieldSwitch,
  fieldTextArea,
  fieldUpload,
  fieldVueMultiSelect,
  fullComponents,
  registerComponent,
  schema,
  validators
};
//# sourceMappingURL=vfg-vue3.esm.js.map
