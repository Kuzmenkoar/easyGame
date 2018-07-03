import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import PeopleForm from './PeopleForm'
import ProtectedRoute from '../common/protectedRoute'
import PeopleList from './PeopleList'

const PeopleModule = () => (
  <div>
    <div>
      <Link to="/people/add">Add item</Link>
      <Link to="/people/list" className="ml20">Go to list</Link>
    </div>
    <ProtectedRoute exact path="/people/add" component={PeopleForm} />
    <ProtectedRoute exact path="/people/list" component={PeopleList} />
    <Redirect exact from='/people' to='/people/list'/>
  </div>
)

export default PeopleModule