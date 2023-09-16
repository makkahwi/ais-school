import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import PageSection from "../common/PageSection";
import Square from "../common/Square";
import Text from "../common/Text";
import {
  NewsAnimation,
  NewsArrowStyles,
  NewsGridStyles,
  PageFlipComponent,
} from "./styles";

const NewsSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const router = useRouter();
  const { t } = useTranslation(router);

  const arrowClickHandler = (arrow: string) => {
    if (arrow === "left") {
      setCurrentPhoto((prev) => {
        return prev === 0 ? landingPage.news.length - 1 : prev - 1;
      });
    } else {
      setCurrentPhoto((prev) => {
        return prev === landingPage.news.length - 1 ? 0 : prev + 1;
      });
    }
  };

  const PageFlip = () => (
    <PageFlipComponent>
      <IconButton
        onClick={() => {
          arrowClickHandler("left");
        }}
        sx={{
          ...NewsArrowStyles,
          left: "0.5rem",
        }}
      >
        <ArrowCircleLeftIcon
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </IconButton>

      <Avatar
        variant="square"
        sx={{
          width: "90%",
          height: "auto",
          borderRadius: { md: "0 5vw 5vw 5vw" },
          animation: `${NewsAnimation} 1.7s both ease`,
        }}
        src={landingPage.news[currentPhoto].src}
      />

      <IconButton
        onClick={() => {
          arrowClickHandler("right");
        }}
        sx={{
          ...NewsArrowStyles,
          right: "0.5rem",
        }}
      >
        <ArrowCircleRightIcon
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </IconButton>
    </PageFlipComponent>
  );

  useEffect(() => {
    const interval = setInterval(() => arrowClickHandler("right"), 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PageSection>
      <Stack justifyContent="center">
        <Box sx={NewsGridStyles}>
          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["4vw", "1.0.1.1"],
              desktop: ["3vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "5 / 10",
              gridColumn: "1 / 11",
            }}
          >
            <Text color={theme.palette.basic.light} variant="title">
              {t("landingPage.newsSection.news")}
            </Text>
          </Square>

          {landingPage.newsSquares.map((block, i) => (
            <React.Fragment key={i}>
              <Square
                bgcolor={block.bgcolor}
                radius={{
                  mobile: block.radiusMobile,
                  desktop: block.radiusDesktop,
                }}
                sx={{
                  gridRow: block.rows,
                  gridColumn: block.cols,
                }}
              />
            </React.Fragment>
          ))}

          <Avatar
            src="/images/Char-1-Color.png"
            variant="square"
            sx={{
              padding: 1,
              width: "auto",
              height: "100%",
              gridRow: "10 / 20",
              gridColumn: "1 / 14",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["5vw", "0.1.1.1"],
              desktop: ["5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "5 / 20",
              gridColumn: "14 / 38",
            }}
          >
            <PageFlip />
          </Square>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text variant="subtitle" color={theme.palette.blue.dark}>
            {t(landingPage.news[currentPhoto].title)}
          </Text>
        </Box>
      </Stack>
    </PageSection>
  );
};

export default NewsSection;
