import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, source_ui, source_api} = props;
   console.log("spurce", source_ui)
   console.log("spurce", title)

   return (
      <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      // style={{
      //    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', // Shadow effect for 3D look
      //    transform: 'scale(1.05)', // Slightly increase the size for a 3D effect
      //    background: 'linear-gradient(135deg, #ffffff, #e0e0e0)', // Subtle background gradient
      //    padding: '2rem', // Add padding inside the container
      //    borderRadius: '15px', // Slightly round the corners
      //    height: "500px",
      //    width: "500px"
      //  }}
      
    >
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        style={{
          width: "470px", // Reduced width for better containment
          height: "250px", // Reduced height for better containment
         //  border: "10px solid black", // Solid border around the image
          borderRadius: "10px" // Rounded corners for the image
        }}
      />
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