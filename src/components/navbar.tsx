"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import VaristaLogo from "../assets/alnoornew.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Services", "Media"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Image
          src={VaristaLogo}
          alt="moosa-al-noor-logo"
          style={{
            maxHeight: "100px", // Increased height
            width: "50px", // Increased width
            filter: "brightness(0) invert(1)",
          }}
          width={250} // Updated width
          height={250} // Updated height
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ fontFamily: "Poppins !important" }}>
            <ListItemButton href={`/${item.toLowerCase()}`} sx={{ textAlign: "left" }}>
              <ListItemText primary={item} sx={{ fontFamily: "Poppins !important" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0,0.9) 0%, rgba(0, 0, 0, 0) 100%)", // Gradient from top to bottom
          boxShadow: "none", // Remove shadow8
        }}
      >
        {" "}
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          </Typography> */}
          <div className="flex justify-end md:justify-start flex-grow">
            <Image src={VaristaLogo} alt="" className="h-[70px] w-[120px] md:h-[100px] md:w-[170px]" />
          </div>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // Hide on extra small screens, show as flex on small and larger screens
              gap: 3, // Gap between flex items
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} href={`/${item.toLowerCase()}`} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
