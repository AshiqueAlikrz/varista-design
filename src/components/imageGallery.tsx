import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
            <ImageListItemBar position="below" sx={{ color: "white", fontFamily: "sans-serif" }} title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
    title: "Bed",
    author: "Interior Design",
  },
  {
    img: "https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://www.spectruminteriors.co.in/wp-content/uploads/2021/01/DSC04329-scaled.jpg",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://www.spectruminteriors.co.in/wp-content/uploads/2021/01/DSC04329-scaled.jpg",
    title: "Hospital",
    author: "Ben Kolde",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "https://www.spectruminteriors.co.in/wp-content/uploads/2021/01/DSC04329-scaled.jpg",
    title: "Hospital",
    author: "Douglas Sheppard",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
