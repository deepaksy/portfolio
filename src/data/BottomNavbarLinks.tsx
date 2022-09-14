import FeedbackIcon from '@mui/icons-material/Feedback';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
export interface bottomNavbarlinkProps{
    name:string,
    link:string,
    icon:JSX.Element
}
export const bottomNavbarLinks:bottomNavbarlinkProps[]=[
    {name:"About",link:"/about",icon:<PersonIcon/>},
    {name:"Projects",link:"/projects",icon:<AssignmentTurnedInIcon/>},
    {name:"Feedback",link:"/feedback",icon:<FeedbackIcon/>},
    {name:"Contact",link:"/contact",icon:<ConnectWithoutContactIcon/>}
]