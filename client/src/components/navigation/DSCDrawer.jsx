import React, {Component} from 'react';
import {IconButton, Drawer, List, ListItem, Divider, ListItemIcon, ListItemText} from "@material-ui/core";
import ROUTES, {RouteType} from "../../routes";
import {Menu} from "@material-ui/icons";
import {socials} from "./Footer";
import {Link} from "react-router-dom";

const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK)
const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE)

class DSCDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  list = () => (
    <div
      style={{backgroundColor: "#242424", height: "100%"}}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      <List>
        {pageRoutes.map((route, index) => (
          <Link to={route.path} key={index}>
            <ListItem button key={index}>
              <ListItemText primary={route.name} style={{color: "white"}}/>
            </ListItem>
          </Link>
        ))}
        {linkRoutes.map((route, index) => (
          <a href={route.path} key={index} target='blank'>
            <ListItem button key={index}>
              <ListItemText primary={route.name} style={{color: "white"}}/>
            </ListItem>
          </a>
        ))}

      </List>
      <Divider style={{backgroundColor: "white"}}/>
      <List>
        {socials.map((social, index) => (
          <a href={social.link} target="blank" key={index}>
            <ListItem button>
              <ListItemIcon>{social.icon}</ListItemIcon>
              <ListItemText primary={social.name} style={{color: "white"}}/>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({open});
  }

  render() {
    return (
      <React.Fragment>
        <IconButton color="inherit" aria-label="Open drawer" edge="start" onClick={this.toggleDrawer(true)}>
          <Menu/>
        </IconButton>
        <Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer(false)}>
          {this.list()}
        </Drawer>
      </React.Fragment>
    );
  }
}

export default DSCDrawer;