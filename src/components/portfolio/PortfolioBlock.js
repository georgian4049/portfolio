import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title, source_ui, source_api, yt_vid } = props;
  console.log("spurce", source_ui);
  console.log("spurce", title);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {yt_vid ? (
        <iframe 
        width="470px" 
        height="250px" 
        src={`https://www.youtube.com/embed/Ra9OVulZQms?start=1}`}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" allowfullscreen></iframe>
      
      ) : (
        <Box
          component={'img'}
          src={image}
          alt={'mockup'}
          style={{
            width: "470px",
            height: "250px",
            borderRadius: "10px",
          }}
        />
      )}
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'} bgcolor={!live ? "#D2D7D3" : ""}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box display="flex" gap="10px">
          {source_ui && (
            <Box
              p={1}
              border={'2px solid black'}
              borderRadius={'25px'}
              display={"flex"}
              gap="10px"
            >
              <IconLink link={source_ui} title={'Source Code (UI)'} icon={'fa fa-code'} />
            </Box>
          )}
          {source_api && (
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
              <IconLink link={source_api} title={'Source Code (API)'} icon={'fa fa-code'} />
            </Box>
          )}
        </Box>
        {source && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
