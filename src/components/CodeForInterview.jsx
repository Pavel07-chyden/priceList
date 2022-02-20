import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

import YouTube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';

const useStyle = makeStyles({
   image: {
      width: '50%',
      height: '50%'
   },
   comonent: {
      margin: 50
   }
})
const CodeForInterview = () => {
   const classes = useStyle()
   return (
      <Box>
         <Typography variant="h4" style={{ marginBottom: 50 }}>Code for Interview</Typography>
         <Box style={{ display: 'flex' }}>
            <img className={classes.image} src={YouTube} />
            <img className={classes.image} src={InstaTele} />
         </Box>
      </Box>

   )
}

export default CodeForInterview