import $ from 'jquery';
import './utils/jquery.maskedinput.min.js';

/* маска для даты */

$(function() {
  console.log('here');
  $.mask.definitions['D']='[0-3]';
  $.mask.definitions['M']='[0-1]';
  $.mask.definitions['Y']='[1-2]';
  $.mask.definitions['y']='[0,9]';
  $('.js-input_masked-date').mask("D9.M9.Yy99", { placeholder: "ДД.MM.ГГГГ" });
});