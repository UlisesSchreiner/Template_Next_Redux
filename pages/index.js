import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import MainContainer from "../components/MainContainer"
import { fetchInformation } from '../redux/actions/mainDataActions';

export default () => {
  const state = useSelector((state) => state);
  console.log(state)
  const dispatch = useDispatch()
  useEffect(() => {

  }, [])

  return (
    <MainContainer>
      <Link href="/about">
        <a>About</a>
      </Link>
      <button onClick={() => dispatch(fetchInformation({ status: 'ok' }))}>Dispatch</button>
      <div>Home</div>
      <div>{state.mainDataReducer.object.data ? state.mainDataReducer.object.data.status : 'unknown'}</div>
    </MainContainer>
  )
}
