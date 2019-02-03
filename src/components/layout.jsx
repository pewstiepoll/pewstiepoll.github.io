import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { name: 'description', content: 'Vadym Zelenin Personal blog' },
            {
              name: 'keywords',
              content:
                'vadym, zelenin, personal, blog, personal blog, vadym zelenin',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
            padding: '2rem 1rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridRowGap: '2rem',
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
