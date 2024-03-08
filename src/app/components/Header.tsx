"use client"
import { Button, IconButton, InputBase, Paper } from "@mui/material"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


const Header = () => {
  return (
    <div className="flex items-center justify-between container bg-slate-50/20 rounded-lg p-5 drop-shadow-2xl">
      <div className="text-2xl">
          Try-Chat
      </div>
      <div className="flex items-center">
        <Paper component="form" className="mr-2">
          <IconButton 
            type="submit" 
            href=""
          >
            <SearchTwoToneIcon />
          </IconButton>

          <InputBase 
            sx={{ml:1,flex:1}} 
            name="search" 
            placeholder="search..."
          />
        </Paper>
        <Button className="bg-green-600 hover:bg-green-500" variant="contained">Login</Button>
      </div>
      
    </div>
  )
}

export default Header