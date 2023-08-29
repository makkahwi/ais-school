import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const RequirementsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const [trigger, setTrigger] = useState("0");

  const handleClick = (newTrigger: string) => {
    newTrigger === trigger ? setTrigger("0") : setTrigger(newTrigger);
  };

  return (
    <PageSection>
      {registrationPage.requirementsSection.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.orange.main}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              sx={{ width: "100%" }}
              subheader={
                <Text color={theme.palette.brown.main} variant="subtitle">
                  {t(item.title)}
                </Text>
              }
            >
              {item.lists.map((list, i) => (
                <React.Fragment key={i}>
                  <ListItemButton
                    sx={{ width: "100%" }}
                    onClick={() => handleClick(list.trigger)}
                  >
                    <Text>{t(list.title)}</Text>

                    {trigger === list.trigger ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse
                    in={trigger === list.trigger}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Stack spacing={2}>
                      {list.items.map((text, y) => (
                        <React.Fragment key={y}>
                          <Typography
                            fontSize={{
                              xs: "2vw",
                              md: "1.2vw",
                            }}
                            width="80%"
                            sx={{
                              pl: 4,
                              color: theme.palette.basic.light,
                            }}
                          >
                            {`# ${t(text)}`}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </Stack>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default RequirementsSection;
