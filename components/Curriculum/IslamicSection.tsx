import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { IslamicStudiesGrid } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const IslamicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const squares = [
    {
      bgColor: theme.palette.blue.dark,
      radius: {
        mobile: ["12vw", "1.1.0.1"],
        desktop: ["5vw", "1.1.0.1"],
      },
      sx: {
        gridRow: "1 / 9",
        gridColumn: "1 / 9",
      },
      fontSize: {
        xs: "5vw",
        md: "2vw",
      },
      textColor: theme.palette.basic.light,
      text: "Quran Memorization & Recitation",
    },
    {
      bgColor: theme.palette.brown.main,
      radius: {
        mobile: ["3vw", "1.1.1.0"],
        desktop: ["1.5vw", "1.1.1.0"],
      },
      sx: {
        gridRow: "1 / 3",
        gridColumn: "9 / 11",
      },
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["9vw", "1.1.1.0"],
        desktop: ["4vw", "1.1.1.0"],
      },
      sx: {
        gridRow: "3 / 9",
        gridColumn: "9 / 15",
      },
      fontSize: {
        xs: "5vw",
        md: "2vw",
      },
      textColor: theme.palette.brown.main,
      text: "Islamic Fiqh",
    },
    {
      bgColor: theme.palette.basic.main,
      radius: {
        mobile: ["6vw", "0.1.1.1"],
        desktop: ["2vw", "0.1.1.1"],
      },
      sx: {
        gridRow: "9 / 13",
        gridColumn: "9 / 13",
      },
      fontSize: {
        xs: "2.5vw",
        md: "1vw",
      },
      textColor: theme.palette.brown.main,
      text: "Islamic Culture Education",
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.blue.dark} variant="title" bold>
          {t("curriculumPage.islamicStudies")}
        </Text>

        <Text justify doubleHeight>
          {t("curriculumPage.islamicStudiesContent")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Box sx={IslamicStudiesGrid}>
          {squares?.map(
            ({ bgColor, radius, sx, fontSize, textColor, text }, i) => (
              <Square bgcolor={bgColor} radius={radius} sx={sx} key={i}>
                {text && (
                  <Typography
                    fontSize={fontSize}
                    fontWeight="bold"
                    color={textColor}
                    textAlign="center"
                  >
                    {text}
                  </Typography>
                )}
              </Square>
            )
          )}
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default IslamicSection;
