import React from 'react'
import {Link} from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'
import PageHeader from '../../components/PageHeader'


function TeacherForm(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrível que você quer dar aulas" />
        </div>
    )
}
export default TeacherForm;