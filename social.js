var _gaq = [
  ['_setAccount', 'UA-298210-6'],
  ['_trackPageview'],
  ['_trackPageLoadTime']
];

(function(window, document) {
  window.___gcfg = {lang: 'ru'};

  var apis = [
    'https://apis.google.com/js/plusone.js',                                            // Google +1 Button
    '//userapi.com/js/api/openapi.js?52',                                               // Vkontakte API
    '//platform.twitter.com/widgets.js',                                                // Twitter Widgets
    '//connect.facebook.net/ru_RU/all.js#xfbml=1',                                      // Facebook SDK
    ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js' // Google Analytics
  ],

  names = [
    '',
    '',
    'twitter-wjs',
    'facebook-jssdk',
    ''
  ],

  script = 'script',
  iterator = apis.length,

  fragment = document.createDocumentFragment(),
  element  = document.createElement(script),

  vklike = 'vk-like',

  body, clone;

  while (iterator--) {
    clone = element.cloneNode(false);
    clone.async = clone.src = apis[iterator];

    if (names[iterator] != '') {
      clone.id = names[iterator];
    }

    fragment.appendChild(clone);
  }

  body = document.getElementsByTagName(script)[0];
  body.parentNode.insertBefore(fragment, body);

  window.vkAsyncInit = function() {
    VK.init({apiId: 2422693, onlyWidgets: true});

    var elements = document.querySelectorAll('.' + vklike),

    length = elements.length,

    i, vkontakte, element;

    for (i=0; i < length; i++) {
      element   = elements[i];
      vkontakte = vklike + '-' + i;

      element.id = vkontakte;

      VK.Widgets.Like(vkontakte, {
        pageUrl: element.getAttribute('data-href'),
        type:    'mini',
        height:  20
      });
    }
  };
})(window, document);