import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import Text from "../common/Text";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const courseSquares = [
    {
      text: t("curriculumPage.courseSquares.languages"),
      edges: "1.0.0.1",
    },
    {
      text: t("curriculumPage.courseSquares.islamic"),
      edges: "0.0.0.0",
    },
    {
      text: t("curriculumPage.courseSquares.modern"),
      edges: "0.1.1.0",
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="subtitle">
          {t("curriculumPage.courses")}
        </Text>
      </PageSectionColumn>

      {courseSquares.map((item, i) => (
        <PageSectionColumn md={3} key={i}>
          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["10vw", item.edges],
              desktop: ["3vw", item.edges],
            }}
            sx={{
              margin: 0,
              width: { xs: "60vw", md: "15vw" },
              height: { xs: "60vw", md: "15vw" },
            }}
          >
            <Text color={theme.palette.basic.light} variant="subtitle" bold>
              {item.text}
            </Text>
          </Square>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default CoursesSection;
