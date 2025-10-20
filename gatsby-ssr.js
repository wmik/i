/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="simple-analytics"
      data-collect-dnt="true"
      async
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />,
    <noscript key="simple-analytics-noscript">
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
        alt=""
        referrerpolicy="no-referrer-when-downgrade"
      />
    </noscript>,
  ]);
};
