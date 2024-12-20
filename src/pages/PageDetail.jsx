import {useEffect} from 'react'
import { useParams } from 'react-router-dom'

const PageDetail = () => {
    const {id} = useParams()

    useEffect(()=>{

    },[])
  return (
    <div>PageDetail del character ID {id}</div>
  )
}

export default PageDetail