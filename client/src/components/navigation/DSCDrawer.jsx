import React, {Component} from 'react';
import {IconButton, Drawer, List, ListItem, Divider, ListItemIcon, ListItemText} from "@material-ui/core";
import ROUTES, {RouteType} from "../../routes";
import {Menu} from "@material-ui/icons";
import {socials} from "./Footer";
import {Link} from "react-router-dom";
import DarkModeToggler from "../DarkModeToggler";

const linkRoutes = ROUTES.filter(route => route.type === RouteType.LINK && route.icon !== null)
const pageRoutes = ROUTES.filter(route => route.type === RouteType.PAGE && route.icon !== null)

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
      style={{backgroundColor: "var(--white)",color:"var(--black)", height: "100%"}}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}

    >
      <List>
        {pageRoutes.map((route, index) => (
          <Link to={route.path} key={index} style={{textDecoration: 'inherit'}}>
            <ListItem button>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.name} style={{color: "var(--black)", fontSize: 24}}/>
            </ListItem>
          </Link>
        ))}
        {linkRoutes.map((route, index) => (
          <a href={route.path} key={index} target='blank' style={{textDecoration: 'inherit'}}>
            <ListItem button>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.name} style={{color: "var(--black)"}}/>
            </ListItem>
          </a>
        ))}
        <ListItem>
        <DarkModeToggler isDarkMode={this.props.isDarkMode} handleThemeSwitch={this.props.handleThemeSwitch}
                           color='var(--black)'/>
        </ListItem>
      </List>
      <Divider style={{backgroundColor: "var(--black)"}}/>
      <List style={{backgroundColor: "var(--white)"}} >
        {socials.map((social, index) => (
          <a href={social.link} target="blank" key={index} style={{textDecoration: 'inherit'}}>
            <ListItem button>
              <ListItemIcon style={{color: 'var(--black)'}}>{social.icon}</ListItemIcon>
              <ListItemText primary={social.name} style={{color: "var(--black)"}}/>
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