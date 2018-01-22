import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';

import {
  lightBlue600,
} from 'material-ui/styles/colors';




import "./index.scss"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet
            title="Panda Bridge"
            meta={[
              { name: "description", content: "Software development agency and consultancy based in London, UK" },
              { name: "keywords", content: "software consultance, software development, freelance, contracting" },
            ]}
          >
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          </Helmet>
          {this.props.children()}
        </div>
      </MuiThemeProvider>
    )
  }
}
