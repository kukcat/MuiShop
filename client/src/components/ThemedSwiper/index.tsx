import { styled } from "@mui/material";
import {Swiper} from "swiper/react";

export const ThemedSwiper = styled(Swiper)(({theme})=> ({
  '.swiper-button-prev::after': {
    color: theme.palette.primary.main
  },
  '.swiper-button-next::after': {
    color: theme.palette.primary.main
  },
  "swiper-pagination-bullet-active": {
    "background": theme.palette.primary.main
  }
}))