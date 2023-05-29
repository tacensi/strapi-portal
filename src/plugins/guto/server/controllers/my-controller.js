'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('guto')
      .service('myService')
      .getWelcomeMessage();
  },
});
