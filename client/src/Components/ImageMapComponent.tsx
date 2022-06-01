import React from "react";
import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "./AreaType";
import portfolioImg from "../assets/portfolio.png";
import { Box, Typography, Modal } from "@mui/material";

export interface IImageMapComponentProps {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 25,
  p: 5,
};

const mapArea: any[] = [
  {
    width: "7.494949494949496%",
    height: "12.966183574879228%",
    left: "12.878787878787879%",
    top: "11.787439613526569%",
  },
  {
    width: "7.449494949494949%",
    height: "11.594202898550725%",
    left: "40.14954229797979%",
    top: "8.212560386473431%",
  },
  {
    width: "7.7020202020202015%",
    height: "13.043478260869565%",
    left: "72.22024936868688%",
    top: "6.038647342995169%",
  },
  {
    width: "7.7020202020202015%",
    height: "13.768115942028986%",
    left: "18.432370580808087%",
    top: "78.50241545893721%",
  },
  {
    width: "8.080808080808081%",
    height: "13.526570048309178%",
    left: "77.77580492424242%",
    top: "72.70531400966183%",
  },
];

type Project = {
  name: string;
  image: string;
  description: string;
  github: string;
  site: string;
};

let projects: Project[];

projects = [
  {
    name: "Sole Intentions",
    image: "sole-intentions.png",
    description: "SQL, Handlebars, etc",
    github: "https://github.com/marissann11/sole-intentions-TMT",
    site: "https://soleintentions.herokuapp.com/",
  },
  {
    name: "Sole Intentions v2",
    image: "sole-intentions2.png",
    description: "Mongoose, React.js, etc",
    github: "https://github.com/marissann11/sole-REACTions",
    site: "https://sole-intentions.herokuapp.com/",
  },

  {
    name: "Weather Dashboard",
    image: "weather.png",
    description: "technologies, etc",
    github: "https://github.com/marissann11/weather-dashboard-week6",
    site: "https://marissann11.github.io/weather-dashboard-week6/",
  },
  {
    name: "Work Day Scheduler",
    image: "workday.png",
    description: "technologies, etc",
    github: "https://github.com/marissann11/work-day-scheduler-week5",
    site: "https://marissann11.github.io/work-day-scheduler-week5/",
  },
  {
    name: "Code Quiz",
    image: "quiz.png",
    description: "technologies, etc",
    github: "https://github.com/marissann11/code-quiz-week4-challenge",
    site: "https://marissann11.github.io/code-quiz-week4-challenge/",
  },
];

const ImageMapComponent: React.FunctionComponent<IImageMapComponentProps> = (
  props
) => {
  const [currentProject, setCurrentProject] = React.useState(projects[0]);

  const onMapClick = (area: AreaType, index: number) => {
    for (let i = 0; i < projects.length; i++) {
      if (i === index) {
        setCurrentProject(projects[i]);
      }
    }
    handleOpen();
  };

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={portfolioImg}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [portfolioImg]
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="port">{ImageMapComponent}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentProject.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentProject.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentProject.github}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentProject.site}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageMapComponent;
