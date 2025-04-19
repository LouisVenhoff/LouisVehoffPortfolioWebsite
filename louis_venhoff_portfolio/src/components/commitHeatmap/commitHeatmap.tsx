import React from "react";
import "../../styles/components/commitHeatmap.css";
import CalendarHeatmap from "react-calendar-heatmap";
import { Card } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const CommitHeatmap: React.FC = () => {
  const tests = [
    { date: "2024-04-01", count: 3 },
    { date: "2024-04-02", count: 1 },
    { date: "2024-04-04", count: 4 },
    { date: "2024-04-07", count: 2 },
    { date: "2024-04-08", count: 3 },
    { date: "2024-04-11", count: 1 },
    { date: "2024-04-12", count: 2 },
    { date: "2024-04-14", count: 3 },
    { date: "2024-04-18", count: 1 },
    { date: "2024-04-20", count: 4 },
    { date: "2024-04-23", count: 2 },
    { date: "2024-05-01", count: 1 },
    { date: "2024-05-03", count: 2 },
    { date: "2024-05-05", count: 3 },
    { date: "2024-05-06", count: 1 },
    { date: "2024-05-09", count: 4 },
    { date: "2024-05-12", count: 2 },
    { date: "2024-05-17", count: 3 },
    { date: "2024-05-19", count: 1 },
    { date: "2024-05-22", count: 2 },
    { date: "2024-06-01", count: 3 },
    { date: "2024-06-03", count: 1 },
    { date: "2024-06-07", count: 4 },
    { date: "2024-06-08", count: 2 },
    { date: "2024-06-11", count: 1 },
    { date: "2024-06-15", count: 3 },
    { date: "2024-06-20", count: 2 },
    { date: "2024-06-25", count: 1 },
    { date: "2024-07-02", count: 2 },
    { date: "2024-07-04", count: 4 },
    { date: "2024-07-07", count: 1 },
    { date: "2024-07-10", count: 3 },
    { date: "2024-07-15", count: 2 },
    { date: "2024-07-21", count: 1 },
    { date: "2024-08-01", count: 4 },
    { date: "2024-08-05", count: 2 },
    { date: "2024-08-09", count: 3 },
    { date: "2024-08-12", count: 2 },
    { date: "2024-08-18", count: 1 },
    { date: "2024-08-24", count: 3 },
    { date: "2024-08-29", count: 2 },
    { date: "2024-09-01", count: 4 },
    { date: "2024-09-03", count: 1 },
    { date: "2024-09-07", count: 2 },
    { date: "2024-09-12", count: 3 },
    { date: "2024-09-17", count: 2 },
    { date: "2024-09-23", count: 1 },
    { date: "2024-10-01", count: 3 },
    { date: "2024-10-05", count: 2 },
    { date: "2024-10-10", count: 1 },
    { date: "2024-10-15", count: 4 },
    { date: "2024-10-20", count: 3 },
    { date: "2024-10-25", count: 2 },
    { date: "2024-11-01", count: 1 },
    { date: "2024-11-04", count: 2 },
    { date: "2024-11-08", count: 3 },
    { date: "2024-11-12", count: 1 },
    { date: "2024-11-19", count: 4 },
    { date: "2024-11-22", count: 2 },
    { date: "2024-12-01", count: 3 },
    { date: "2024-12-07", count: 1 },
    { date: "2024-12-11", count: 2 },
    { date: "2024-12-18", count: 3 },
    { date: "2024-12-25", count: 2 },
    { date: "2025-01-01", count: 1 },
    { date: "2025-01-04", count: 4 },
    { date: "2025-01-09", count: 3 },
    { date: "2025-01-12", count: 2 },
    { date: "2025-01-18", count: 1 },
    { date: "2025-01-21", count: 3 },
    { date: "2025-01-25", count: 2 },
    { date: "2025-02-01", count: 4 },
    { date: "2025-02-05", count: 1 },
    { date: "2025-02-10", count: 2 },
    { date: "2025-02-14", count: 3 },
    { date: "2025-02-20", count: 2 },
    { date: "2025-02-27", count: 1 },
    { date: "2025-03-01", count: 4 },
    { date: "2025-03-06", count: 2 },
    { date: "2025-03-10", count: 3 },
    { date: "2025-03-15", count: 1 },
    { date: "2025-03-20", count: 2 },
    { date: "2025-03-25", count: 3 },
    { date: "2025-03-30", count: 1 },
  ];

  const redirectToGithub = () => {
    window.open("https://github.com/LouisVenhoff");
  }

  return (
    <div className="commit-heatmap--container">
      <Card.Root color={"teal"} backgroundColor={"#242424"} borderColor={"#202020"} boxShadow={"sm"} boxShadowColor={"teal"} >
        <Card.Header fontSize="xl">
          <h2>Github activity: </h2>
        </Card.Header>
        <Card.Body>
          <CalendarHeatmap
          startDate={new Date("2024-04-01")}
          endDate={new Date("2025-04-01")}
          values={tests}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
          />
        </Card.Body>
        <Card.Footer>
          <Button onClick={redirectToGithub} colorScheme='teal' variant={"solid"} size='md' backgroundColor="teal">
            Zu Github
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default CommitHeatmap;
