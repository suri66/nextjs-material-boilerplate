import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Link from 'next/link';

const firstItems = [
  {
    title: 'Inbox',
    icon: <InboxIcon />,
    route: '/inbox',
  },
  {
    title: 'Starred',
    icon: <StarIcon />,
    route: '/starred',
  },
  {
    title: 'Send email',
    icon: <MailIcon />,
    route: '/sendEmail',
  },
];
const secondItems = [
  {
    title: 'All email',
    icon: <AllInboxIcon />,
    route: '/all',
  },
  {
    title: 'Trash',
    icon: <DeleteIcon />,
    route: '/trash',
  },
  {
    title: 'Spam',
    icon: <ReportGmailerrorredIcon />,
    route: '/spam',
  },
];
function NavItems({ open }) {
  return (
    <>
      <List>
        {firstItems.map((item) => (
          <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
            <Link href={item.route}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondItems.map((item) => (
          <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
            <Link href={item.route}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
NavItems.propTypes = {
  open: PropTypes.bool.isRequired,
};
export default NavItems;
