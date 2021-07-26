import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();

  console.log('list 26 ', props.primary);
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Cookie Test Results
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        Cookie Name:&nbsp;
        <ListItemText primary={props.primary.name} />
      </ListItem>

      <ListItem button>
        Domain:&nbsp;
        <ListItemText primary={props.primary.domain} />
      </ListItem>
      <ListItem button>
        httpOnly:&nbsp;
        <ListItemText primary={props.primary.httpOnly ? 'true' : 'false'} />
      </ListItem>
      <ListItem button>
        Secure:&nbsp;
        <ListItemText primary={props.primary.secure ? 'true' : 'false'} />
      </ListItem>
      <ListItem button>
        Same Party:&nbsp;
        <ListItemText primary={props.primary.sameParty ? 'true' : 'false'} />
      </ListItem>
      <ListItem button>
        Source Port:&nbsp;
        <ListItemText primary={props.primary.sourcePort} />
      </ListItem>
    </List>
  );
}