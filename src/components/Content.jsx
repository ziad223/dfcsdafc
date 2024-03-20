
import Cards from "./Cards";
import Charts from "./Charts";
import Nav from "./Nav";
import UsersTable from "./UsersTable";

const Content = () => {
  return (
    <div className='content'>
    <Nav/>
    <hr />
    <Cards/>
    <Charts/>
    </div>
  )
}

export default Content
