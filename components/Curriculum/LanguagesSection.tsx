import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { LanguagesGrid, TitleStyles } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const LanguagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const squares = [
    {
      bgColor: theme.palette.brown.main,
      radius: {
        mobile: ["5.5vw", "1.1.0.1"],
        desktop: ["3vw", "1.1.0.1"],
      },
      sx: {
        gridRow: "1 / 5",
        gridColumn: "2 / 6",
      },
      fontSize: {
        xs: "2.5vw",
        md: "1vw",
      },
      textColor: theme.palette.orange.main,
      text: "Selamat Datang",
      img: "/images/Languages-M.png",
    },
    {
      bgColor: theme.palette.blue.dark,
      radius: {
        mobile: ["6vw", "1.0.1.1"],
        desktop: ["3vw", "1.0.1.1"],
      },
      sx: {
        gridRow: "5 / 10",
        gridColumn: "1 / 6",
      },
      fontSize: {
        xs: "3.75vw",
        md: "1.5vw",
      },
      textColor: theme.palette.basic.light,
      text: "Welcome",
      img: "/images/Languages-E.png",
    },
    {
      bgColor: theme.palette.brown.main,
      radius: {
        mobile: ["2vw", "1.0.1.1"],
        desktop: ["1.5vw", "1.0.1.1"],
      },
      sx: {
        gridRow: "10 / 12",
        gridColumn: "4 / 6",
      },
    },
    {
      bgColor: theme.palette.orange.main,
      radius: {
        mobile: ["7vw", "0.1.1.1"],
        desktop: ["4vw", "0.1.1.1"],
      },
      sx: {
        gridRow: "5 / 12",
        gridColumn: "6 / 13",
      },
      fontSize: {
        xs: "5vw",
        md: "2vw",
      },
      textColor: theme.palette.brown.main,
      text: "أهلاً وسهلاً",
      img: "/images/Languages-A.png",
    },
  ];

  const languages = [
    {
      title: t("curriculumPage.languagesContents.arabic"),
      content: t("curriculumPage.languagesContents.arabicContent"),
    },
    {
      title: t("curriculumPage.languagesContents.english"),
      content: t("curriculumPage.languagesContents.englishContent"),
    },
    {
      title: t("curriculumPage.languagesContents.malay"),
      content: t("curriculumPage.languagesContents.malayContent"),
    },
  ];

  return (
    <PageSection bg="">
      <PageSectionColumn md={6}>
        <Box sx={LanguagesGrid}>
          {squares?.map(
            ({ bgColor, radius, sx, fontSize, textColor, text, img }, i) => (
              <Square bgcolor={bgColor} radius={radius} sx={sx} key={i}>
                {text && (
                  <Typography
                    fontSize={fontSize}
                    fontWeight="bold"
                    color={textColor}
                    textAlign="center"
                  >
                    <img src={img} width="100%" />
                    {/* {text} */}
                  </Typography>
                )}
              </Square>
            )
          )}

          <Typography sx={TitleStyles}>
            {t("curriculumPage.languages")}
          </Typography>
        </Box>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        {languages.map((item, i) => (
          <Stack pb={5} key={i}>
            <Text variant="subtitle" color={theme.palette.blue.dark}>
              {item.title}
            </Text>

            <Text justify>{item.content}</Text>
          </Stack>
        ))}
      </PageSectionColumn>
    </PageSection>
  );
};

export default LanguagesSection;
