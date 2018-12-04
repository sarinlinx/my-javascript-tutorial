
// feedback form sent to google sheets
(function(form, $) {
  form.init = function() {
    // load our events
   	form.ui.events();
		form.loadComments();
  }

  // get all the datas and output into readable text
  form.fetchData = function(el) {
    var selector = 'gform';
    if(el) selector = el;

    var elements = document.getElementById(selector).elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      } else if(elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
      data[k] = elements[k].value;
      if(elements[k].type === "checkbox") {
        data[k] = elements[k].checked;
      // special case for Edge's html collection
      } else if(elements[k].length) {
        for(var i = 0; i < elements[k].length; i++) {
          if(elements[k].item(i).checked) {
            data[k] = elements[k].item(i).value;
          }
        }
      }
    });
    return data;
  }

  // ajax request to send form data
  form.handleSubmit = function(event) {
   	event.preventDefault();

    var data = form.fetchData();

    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    if ($('#cf-vote').val() == "YES") {
      xhr.onreadystatechange = function() {
        $('.js-cf-loadmsg').hide();
        $('.js-cf-tymsg').show();
      };
    } else { // if visitor clicked NO button show follow up message
      xhr.onreadystatechange = function() {
        $('.js-cf-loadmsg').hide();
        $('.js-cf-tymsg').show();
        $('.js-cf-nomsg').fadeIn(500);
      };
    }
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }

  // load all the things
  form.loadComments = function() {
    // bind to the submit event of our form
    var $gform = $('#gform');
    $gform.on('submit', form.handleSubmit);
  }

  form.ui = form.ui || {};

  form.ui.events = function() {
    var pageURL = $(location).attr("href");
    var $btn = $('.js-cf-btn');
    var $submit = $('.js-cf-submit');

    $btn.on('click', function(e) {
      var answer = $(this).data('response');
      $('.js-cf-btns').hide();
      $("#cf-article").val(pageURL);
      $('#cf-vote').val(answer);

      if($(this).data('response') == 'NO') {
        e.preventDefault();
        $(".js-cf-comments").show(200);
        $('#cf-textbox').prop('required', true);
        return;
      }

      $('.js-cf-loadmsg').show();
    });

    $('#gform').on('submit', function(e) {

      //Check if hidden field contains data, if so, change value of
      //#cf-check to 'automatedSpam' so Google script catches it
      var autoSpamCheck = document.getElementById("cf-check").value;

      if (autoSpamCheck.trim() != '') {
        $('#cf-check').val('automatedSpam');
      }
      else if(!$('#cf-textbox').val()) {
        e.preventDefault();
        return;
      }
      $('.js-cf-comments').hide();
      $('.js-cf-loadmsg').show();
    });

    $('.js-cf-help-link').on('click', function() {
      var value = $(this).data('type');
      var pageURL = $(location).attr("href");
      $("#cf-link-article").val(pageURL);
      $('#cf-link').val(value)

      $(this).closest('#help_form').submit();
    });

    $('#help_form').on('submit', function(event) {
      event.preventDefault();
      var data = form.fetchData('help_form');
      var url = event.target.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }).join('&')
      xhr.send(encoded);
    });
  }

})(window.form = window.form || {}, jQuery);

$(document).ready(function() {
  // if the page is not an article, kill the script
  if(!$('article').length) return;
  form.init();
});
