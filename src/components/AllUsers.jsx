
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getUsers } from '../Service/api'


const useStyles = makeStyles({
   table: {
      width: '90%',
      margin: '50px 0 0 50px'
   },
   thead: {
      '& > *': {
         fontSize: 20,
         background: '#000000',
         color: '#FFFFFF'
      }
   },
   row: {
      '& > *': {
         fontSize: 18
      }
   }
})

const AllUsers = () => {

   const [users, setUsers] = useState([])
   const classes = useStyles()

   useEffect(() => {
      getAllUsers()

   }, [])

   const deleteUserData = async (id) => {
      await deleteUser(id);
      getAllUsers();
   }

   const getAllUsers = async () => {
      const response = await getUsers()
      setUsers(response.data)

   }
   return (
      <Table className={classes.table}>
         <TableHead>
            <TableRow className={classes.thead}>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Username</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell>
               <TableCell></TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {users.map(user => (
               <TableRow className={classes.row}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                     <Button color="default" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                     <Button color="primary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>


   )
}

export default AllUsers